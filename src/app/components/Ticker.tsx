'use client';

// Constant for KalshiBags prefix
const KB_PREFIX = 'KB';

// Helper function to generate token name from event (same as tokens page)
function generateTokenName(event: string): string {
  const eventText = event.split(' > ')[0].trim();
  
  if (eventText.includes('recession')) {
    const yearMatch = eventText.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0].slice(-2) : '';
    return `${KB_PREFIX}RECESSION${year}`;
  }
  if (eventText.includes('Bitcoin') || eventText.includes('bitcoin')) {
    const priceMatch = eventText.match(/\$?(\d+)K?/i);
    const price = priceMatch ? priceMatch[1] : '';
    return `${KB_PREFIX}BTC${price}K`;
  }
  if (eventText.includes('Ethereum') || eventText.includes('ethereum')) {
    return `${KB_PREFIX}ETHUPGRADE`;
  }
  if (eventText.includes('SpaceX') || eventText.includes('spacex')) {
    return `${KB_PREFIX}SPACEX`;
  }
  if (eventText.includes('Lunar') || eventText.includes('lunar')) {
    return `${KB_PREFIX}LUNAR`;
  }
  if (eventText.includes('Electric vehicle') || eventText.includes('electric vehicle')) {
    return `${KB_PREFIX}EVADOPT`;
  }
  if (eventText.includes('AI art') || eventText.includes('ai art')) {
    return `${KB_PREFIX}AIART`;
  }
  if (eventText.includes('Olympics') || eventText.includes('olympics')) {
    return `${KB_PREFIX}OLYMPICS`;
  }
  if (eventText.includes('Climate') || eventText.includes('climate')) {
    return `${KB_PREFIX}CLIMATE`;
  }
  if (eventText.includes('Entertainment') || eventText.includes('entertainment')) {
    return `${KB_PREFIX}ENTERTAIN`;
  }
  if (eventText.includes('Aviation') || eventText.includes('aviation')) {
    return `${KB_PREFIX}AVIATION`;
  }
  if (eventText.includes('Streaming') || eventText.includes('streaming')) {
    return `${KB_PREFIX}STREAMING`;
  }
  if (eventText.includes('NFT') || eventText.includes('nft')) {
    return `${KB_PREFIX}NFTREBOUND`;
  }
  if (eventText.includes('Meme coin') || eventText.includes('meme coin')) {
    return `${KB_PREFIX}MEMESURGE`;
  }
  if (eventText.includes('Gold') || eventText.includes('gold')) {
    return `${KB_PREFIX}GOLDSURGE`;
  }
  
  return `${KB_PREFIX}TOKEN`;
}

interface Token {
  name: string;
  change: number;
}

const tokens: Token[] = [
  { name: generateTokenName('US recession in 2025 > 70%'), change: 167.88 },
  { name: generateTokenName('Bitcoin reaches $150K > 75%'), change: 85.93 },
  { name: generateTokenName('Ethereum upgrade success > 80%'), change: 250.81 },
  { name: generateTokenName('Meme coin surge > 65%'), change: 22.32 },
  { name: generateTokenName('NFT market rebound > 68%'), change: 45.67 },
  { name: generateTokenName('SpaceX mission success > 72%'), change: 78.90 },
  { name: generateTokenName('Gold price surge > 73%'), change: -12.34 },
  { name: generateTokenName('Lunar landing > 76%'), change: 123.45 },
  { name: generateTokenName('Electric vehicle adoption > 69%'), change: 56.78 },
  { name: generateTokenName('AI art trend > 71%'), change: 34.56 },
  { name: generateTokenName('Olympics viewership > 74%'), change: 89.12 },
  { name: generateTokenName('Climate change awareness > 70%'), change: -5.67 },
  { name: generateTokenName('Entertainment industry growth > 75%'), change: 67.89 },
  { name: generateTokenName('Aviation recovery > 77%'), change: 91.23 },
  { name: generateTokenName('Streaming service growth > 72%'), change: -8.90 },
];

export default function Ticker() {
  // Duplicate tokens for seamless loop
  const duplicatedTokens = [...tokens, ...tokens];

  return (
    <div className="w-full bg-black py-3 overflow-hidden border-b border-gray-800">
      <div 
        className="flex" 
        style={{ 
          animation: 'scroll 60s linear infinite',
          width: 'max-content'
        }}
      >
        {duplicatedTokens.map((token, index) => (
          <div
            key={index}
            className="flex items-center gap-2 whitespace-nowrap px-8"
          >
            <span className="text-white font-semibold text-sm">{token.name}</span>
            <span
              className={`text-sm font-semibold ${
                token.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {token.change >= 0 ? '+' : ''}
              {token.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

