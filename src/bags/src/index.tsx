import dotenv from "dotenv";
dotenv.config({ quiet: true });

import {
    BagsSDK,
    BAGS_FEE_SHARE_V2_MAX_CLAIMERS_NON_LUT,
    waitForSlotsToPass,
    signAndSendTransaction,
    createTipTransaction,
    sendBundleAndConfirm,
} from "@bagsfm/bags-sdk";
import type { SupportedSocialProvider } from "@bagsfm/bags-sdk";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, Connection, VersionedTransaction } from "@solana/web3.js";
import bs58 from "bs58";

// Initialize SDK
const BAGS_API_KEY = process.env.BAGS_API_KEY;
const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!BAGS_API_KEY || !SOLANA_RPC_URL || !PRIVATE_KEY) {
    throw new Error("BAGS_API_KEY, SOLANA_RPC_URL, and PRIVATE_KEY are required");
}

const connection = new Connection(SOLANA_RPC_URL);
const sdk = new BagsSDK(BAGS_API_KEY, connection, "processed");

const FALLBACK_JITO_TIP_LAMPORTS = 0.015 * LAMPORTS_PER_SOL;

/**
 * Create a tip transaction, sign bundle transactions, and send via Jito
 * @param unsignedTransactions - Array of unsigned VersionedTransaction instances
 * @param keypair - The keypair to sign all transactions
 * @returns The confirmed bundle ID
 */
async function sendBundleWithTip(
    unsignedTransactions: VersionedTransaction[],
    keypair: Keypair
): Promise<string> {
    const commitment = sdk.state.getCommitment();

    // Get blockhash from the first bundle transaction
    const bundleBlockhash = unsignedTransactions[0]?.message.recentBlockhash;

    if (!bundleBlockhash) {
        throw new Error("Bundle transactions must have a blockhash");
    }

    let jitoTip = FALLBACK_JITO_TIP_LAMPORTS;

    // Get recommended Jito tip
    const recommendedJitoTip = await sdk.solana.getJitoRecentFees().catch((err) => {
        console.log("⚠️ Failed to get Jito recent fees, using fallback:", err.message);
        return null;
    });
    
    // Calculate tip amount (use 95th percentile or fallback to default)
    if (recommendedJitoTip?.landed_tips_95th_percentile) {
        jitoTip = Math.floor(recommendedJitoTip.landed_tips_95th_percentile * LAMPORTS_PER_SOL);
    }
    console.log(`💰 Jito tip: ${jitoTip / LAMPORTS_PER_SOL} SOL`);

    // Create tip transaction
    const tipTransaction = await createTipTransaction(connection, commitment, keypair.publicKey, jitoTip, {
        blockhash: bundleBlockhash,
    });

    // Sign all transactions (tip first, then the rest)
    const signedTransactions = [tipTransaction, ...unsignedTransactions].map((tx) => {
        tx.sign([keypair]);
        return tx;
    });

    console.log(`📦 Sending bundle via Jito...`);

    // Send bundle and wait for confirmation
    const bundleId = await sendBundleAndConfirm(signedTransactions, sdk);

    console.log(`✅ Bundle confirmed! Bundle ID: ${bundleId}`);
    return bundleId;
}

async function getOrCreateFeeShareConfig(
    tokenMint: PublicKey,
    creatorWallet: PublicKey,
    keypair: Keypair,
    feeClaimers: Array<{ user: PublicKey; userBps: number }>,
    partner?: PublicKey, // Optional: Partner wallet address
    partnerConfig?: PublicKey // Optional: Partner config PDA (see Create Partner Key guide)
): Promise<PublicKey> {
    const commitment = sdk.state.getCommitment();

    // Check if lookup tables are needed (when there are more than MAX_CLAIMERS_NON_LUT claimers)
    let additionalLookupTables: PublicKey[] | undefined;
    
    if (feeClaimers.length > BAGS_FEE_SHARE_V2_MAX_CLAIMERS_NON_LUT) {
        console.log(`📋 Creating lookup tables for ${feeClaimers.length} fee claimers (exceeds ${BAGS_FEE_SHARE_V2_MAX_CLAIMERS_NON_LUT} limit)...`);
        
        // Get LUT creation transactions
        const lutResult = await sdk.config.getConfigCreationLookupTableTransactions({
            payer: creatorWallet,
            baseMint: tokenMint,
            feeClaimers: feeClaimers,
        });

        if (!lutResult) {
            throw new Error("Failed to create lookup table transactions");
        }

        // Execute the LUT creation transaction first
        console.log("🔧 Executing lookup table creation transaction...");
        await signAndSendTransaction(connection, commitment, lutResult.creationTransaction, keypair);

        // Wait for one slot to pass (required before extending LUT)
        console.log("⏳ Waiting for one slot to pass...");
        await waitForSlotsToPass(connection, commitment, 1);

        // Execute all extend transactions
        console.log(`🔧 Executing ${lutResult.extendTransactions.length} lookup table extend transaction(s)...`);
        for (const extendTx of lutResult.extendTransactions) {
            await signAndSendTransaction(connection, commitment, extendTx, keypair);
        }

        additionalLookupTables = lutResult.lutAddresses;
        console.log("✅ Lookup tables created successfully!");
    }

    try {
        // Try to create the config (with LUTs if needed)
        const configResult = await sdk.config.createBagsFeeShareConfig({
            payer: creatorWallet,
            baseMint: tokenMint,
            feeClaimers: feeClaimers,
            partner: partner,
            partnerConfig: partnerConfig,
            additionalLookupTables: additionalLookupTables,
        });

        console.log("🔧 Creating fee share config...");

        // Send bundle txs
        if (configResult.bundles && configResult.bundles.length > 0) {
            console.log(`📦 Sending ${configResult.bundles.length} bundle(s) via Jito...`);
            for (const bundle of configResult.bundles) {
                // Send the bundle with tip transaction and wait for confirmation
                await sendBundleWithTip(bundle, keypair);
            }
        }

        // Sign and send all returned transactions
        for (const tx of configResult.transactions || []) {
            await signAndSendTransaction(connection, commitment, tx, keypair);
        }

        console.log("✅ Fee share config created successfully!");
        return configResult.meteoraConfigKey;
    } catch (error: any) {
        console.error("🚨 Failed getting or creating fee share config:", error);
        throw error;
    }
}

async function launchToken(launchParams: {
    imageUrl: string;
    name: string;
    symbol: string;
    description: string;
    twitterUrl?: string;
    websiteUrl?: string;
    telegramUrl?: string;
    initialBuyAmountLamports: number;
    // Optional: Share fees with fee claimers
    // Each entry should have provider, username, and the percentage (bps) they receive
    feeClaimers?: Array<{
        provider: SupportedSocialProvider;
        username: string;
        bps: number; // Basis points (10000 = 100%)
    }>;
    // Optional: Partner configuration for fee sharing
    // See the Create Partner Key guide for details: /how-to-guides/create-partner-key
    partner?: PublicKey; // Partner wallet address
    partnerConfig?: PublicKey; // Partner config PDA (can be derived using deriveBagsFeeShareV2PartnerConfigPda)
}) {
    try {
        if (!PRIVATE_KEY) {
            throw new Error("PRIVATE_KEY is not set");
        }

        const keypair = Keypair.fromSecretKey(bs58.decode(PRIVATE_KEY));
        const commitment = sdk.state.getCommitment();

        console.log(`🚀 Creating token $${launchParams.symbol} with wallet ${keypair.publicKey.toBase58()}`);

        // Step 1: Create metadata
        console.log("📝 Step 1: Creating token info and metadata...");
        const tokenInfoResponse = await sdk.tokenLaunch.createTokenInfoAndMetadata({
            imageUrl: launchParams.imageUrl,
            name: launchParams.name,
            description: launchParams.description,
            symbol: launchParams.symbol?.toUpperCase()?.replace("$", ""),
            twitter: launchParams.twitterUrl,
            website: launchParams.websiteUrl,
            telegram: launchParams.telegramUrl,
        });

        console.log("✨ Successfully created token info and metadata!");
        console.log("🪙 Token mint:", tokenInfoResponse.tokenMint);

        // Step 2: Get or create fee share config
        console.log("⚙️  Step 2: Getting or creating fee share config...");

        const tokenMint = new PublicKey(tokenInfoResponse.tokenMint);
        
        // Build fee claimers array
        // IMPORTANT: Creator must always be included explicitly with their BPS set
        let feeClaimers: Array<{ user: PublicKey; userBps: number }> = [];
        
        if (launchParams.feeClaimers && launchParams.feeClaimers.length > 0) {
            // Calculate creator's share (remaining after all fee claimers)
            const feeClaimersBps = launchParams.feeClaimers.reduce((sum, fc) => sum + fc.bps, 0);
            const creatorBps = 10000 - feeClaimersBps;
            
            if (creatorBps < 0) {
                throw new Error("Total fee claimer BPS cannot exceed 10000 (100%)");
            }
            
            // Add creator first with explicit BPS (required - creator must always be explicit)
            if (creatorBps > 0) {
                feeClaimers.push({ user: keypair.publicKey, userBps: creatorBps });
                console.log(`💰 Creator will receive ${creatorBps / 100}% of fees (explicitly set)`);
            }
            
            // Add fee claimers
            for (const feeClaimer of launchParams.feeClaimers) {
                console.log(
                    `🔍 Looking up fee claimer wallet for ${feeClaimer.provider}:${feeClaimer.username}`
                );
                const feeClaimerResult = await sdk.state.getLaunchWalletV2(
                    feeClaimer.username,
                    feeClaimer.provider
                );
                feeClaimers.push({
                    user: feeClaimerResult.wallet,
                    userBps: feeClaimer.bps,
                });
                console.log(
                    `✨ Found fee claimer wallet: ${feeClaimerResult.wallet.toString()} (${feeClaimer.bps / 100}%)`
                );
            }
        } else {
            // No fee claimers - creator gets all fees (must be set explicitly to max BPS)
            console.log("💰 All fees will go to creator wallet (explicitly set to 10000 bps)");
            feeClaimers = [{ user: keypair.publicKey, userBps: 10000 }];
        }

        const configKey = await getOrCreateFeeShareConfig(
            tokenMint,
            keypair.publicKey,
            keypair,
            feeClaimers,
            launchParams.partner,
            launchParams.partnerConfig
        );

        console.log("🔑 Config Key:", configKey.toString());

        // Step 3: Get token creation transaction
        console.log("🎯 Step 3: Creating token launch transaction...");
        const tokenLaunchTransaction = await sdk.tokenLaunch.createLaunchTransaction({
            metadataUrl: tokenInfoResponse.tokenMetadata,
            tokenMint: tokenMint,
            launchWallet: keypair.publicKey,
            initialBuyLamports: launchParams.initialBuyAmountLamports,
            configKey: configKey,
        });

        // Step 4 & 5: Sign and broadcast transaction
        console.log("📡 Step 4 & 5: Signing and broadcasting transaction...");
        const signature = await signAndSendTransaction(connection, commitment, tokenLaunchTransaction, keypair);

        console.log("🎉 Token launched successfully!");
        console.log("🪙 Token Mint:", tokenInfoResponse.tokenMint);
        console.log("🔑 Launch Signature:", signature);
        console.log("📄 Metadata URI:", tokenInfoResponse.tokenMetadata);
        console.log(`🌐 View your token at: https://bags.fm/${tokenInfoResponse.tokenMint}`);
    } catch (error) {
        console.error("🚨 Token launch failed:", error);
        throw error;
    }
}

// Example: Launch token with shared fees among multiple users
// (40% creator, 30% fee claimer 1, 30% fee claimer 2)
launchToken({
    imageUrl: "https://img.freepik.com/premium-vector/white-abstract-vactor-background-design_665257-153.jpg",
    name: "Multi-Share Token",
    symbol: "MST",
    description: "This token shares fees with multiple fee claimers",
    twitterUrl: "https://x.com/multisharetoken",
    websiteUrl: "https://multisharetoken.com",
    initialBuyAmountLamports: 0.01 * LAMPORTS_PER_SOL,
    feeClaimers: [
        {
            provider: "twitter",
            username: "feeclaimer1",
            bps: 3000, // 30% to first fee claimer
        },
        {
            provider: "twitter",
            username: "feeclaimer2",
            bps: 3000, // 30% to second fee claimer
        },
        // Creator automatically gets remaining 40%
    ],
});

// Example: Launch token without sharing fees (all fees go to creator)
// launchToken({
//     imageUrl: "https://img.freepik.com/premium-vector/white-abstract-vactor-background-design_665257-153.jpg",
//     name: "My Token",
//     symbol: "MTK",
//     description: "This is my token description",
//     twitterUrl: "https://x.com/mytoken",
//     websiteUrl: "https://mytoken.com",
//     initialBuyAmountLamports: 0.01 * LAMPORTS_PER_SOL, // 0.01 SOL
// });