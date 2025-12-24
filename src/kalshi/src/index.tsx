import { Configuration, PortfolioApi } from 'kalshi-typescript';

/**
 * Kalshi API Configuration
 * 
 * Example configurations (choose one):
 * 
 * Option 1: Using file path
 * const config = new Configuration({
 *     apiKey: 'your-api-key-id',
 *     privateKeyPath: 'path/to/your/private-key.pem',
 *     basePath: 'https://api.elections.kalshi.com/trade-api/v2'
 * });
 * 
 * Option 2: Using PEM string
 * const config = new Configuration({
 *     apiKey: 'your-api-key-id',
 *     privateKeyPem: '-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----',
 *     basePath: 'https://api.elections.kalshi.com/trade-api/v2'
 * });
 */

// Configure the SDK - Replace with your actual credentials
export function createKalshiConfig(apiKey: string, privateKeyPath?: string, privateKeyPem?: string) {
    return new Configuration({
        apiKey,
        ...(privateKeyPath && { privateKeyPath }),
        ...(privateKeyPem && { privateKeyPem }),
        basePath: 'https://api.elections.kalshi.com/trade-api/v2'
    });
}

// Create API instance helper
export function createPortfolioApi(config: Configuration) {
    return new PortfolioApi(config);
}

// Example usage function
export async function getBalance(apiKey: string, privateKeyPath?: string, privateKeyPem?: string) {
    const config = createKalshiConfig(apiKey, privateKeyPath, privateKeyPem);
    const portfolioApi = createPortfolioApi(config);
    const balance = await portfolioApi.getBalance();
    return balance.data.balance ? balance.data.balance / 100 : 0;
}
