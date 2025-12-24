'use client';

import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import { useRouter } from 'next/navigation';

// Constant for KalshiBags prefix
const KB_PREFIX = 'KB';

// Helper function to generate token name from event
function generateTokenName(event: string): string {
  // Remove threshold part (e.g., " > 70%")
  const eventText = event.split(' > ')[0].trim();
  
  // Extract key words and create abbreviation
  const words = eventText.toLowerCase().split(' ');
  let abbreviation = '';
  
  // Special cases for common patterns
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
  
  // Default: take first letters of key words
  const keyWords = words.filter(w => w.length > 3 || /^\d/.test(w));
  if (keyWords.length > 0) {
    abbreviation = keyWords.map(w => w.charAt(0).toUpperCase() + w.slice(1, 3)).join('').toUpperCase();
  } else {
    abbreviation = words.slice(0, 3).map(w => w.charAt(0).toUpperCase()).join('');
  }
  
  return `${KB_PREFIX}${abbreviation}`;
}

interface Token {
  id: number;
  icon: string;
  name: string;
  status: string;
  description: string;
  change: number;
  marketCap: string;
  creator: {
    name: string;
    avatar: string;
    twitter: string;
    twitterFollowers: string;
  };
  volume24h: string;
  price: string;
  holders: number;
  mintEvent: string;
}

const tokens: Token[] = [
  {
    id: 1,
    icon: '📉',
    name: generateTokenName('US recession in 2025 > 70%'),
    status: 'Claimed',
    description: 'US recession in 2025',
    change: 167.88,
    marketCap: '$38,903.06',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$9.89K',
    },
    volume24h: '$9.65K',
    price: '$0.0000099',
    holders: 170,
    mintEvent: 'US recession in 2025 > 70%',
  },
  {
    id: 2,
    icon: '🚀',
    name: generateTokenName('Bitcoin reaches $150K > 75%'),
    status: 'Claimed',
    description: 'Bitcoin reaches $150K',
    change: 85.93,
    marketCap: '$125,420.50',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$15.2K',
    },
    volume24h: '$22.3K',
    price: '$0.000045',
    holders: 342,
    mintEvent: 'Bitcoin reaches $150K > 75%',
  },
  {
    id: 3,
    icon: '💰',
    name: generateTokenName('Ethereum upgrade success > 80%'),
    status: 'Claimed',
    description: 'Ethereum upgrade success',
    change: 250.81,
    marketCap: '$89,234.12',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$12.5K',
    },
    volume24h: '$18.7K',
    price: '$0.000023',
    holders: 256,
    mintEvent: 'Ethereum upgrade success > 80%',
  },
  {
    id: 4,
    icon: '🎯',
    name: generateTokenName('Meme coin surge > 65%'),
    status: 'Claimed',
    description: 'Meme coin surge',
    change: 22.32,
    marketCap: '$234,567.89',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$45.8K',
    },
    volume24h: '$56.2K',
    price: '$0.000012',
    holders: 892,
    mintEvent: 'Meme coin surge > 65%',
  },
  {
    id: 5,
    icon: '🔥',
    name: generateTokenName('NFT market rebound > 68%'),
    status: 'Claimed',
    description: 'NFT market rebound',
    change: 45.67,
    marketCap: '$67,890.12',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$8.3K',
    },
    volume24h: '$12.4K',
    price: '$0.000034',
    holders: 234,
    mintEvent: 'NFT market rebound > 68%',
  },
  {
    id: 6,
    icon: '⭐',
    name: generateTokenName('SpaceX mission success > 72%'),
    status: 'Claimed',
    description: 'SpaceX mission success',
    change: 78.90,
    marketCap: '$156,789.45',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$22.1K',
    },
    volume24h: '$34.5K',
    price: '$0.000078',
    holders: 567,
    mintEvent: 'SpaceX mission success > 72%',
  },
  {
    id: 7,
    icon: '💎',
    name: generateTokenName('Gold price surge > 73%'),
    status: 'Claimed',
    description: 'Gold price surge',
    change: -12.34,
    marketCap: '$98,765.43',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$18.7K',
    },
    volume24h: '$21.3K',
    price: '$0.000056',
    holders: 412,
    mintEvent: 'Gold price surge > 73%',
  },
  {
    id: 8,
    icon: '🌙',
    name: generateTokenName('Lunar landing > 76%'),
    status: 'Claimed',
    description: 'Lunar landing',
    change: 123.45,
    marketCap: '$234,567.89',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$31.2K',
    },
    volume24h: '$45.6K',
    price: '$0.000091',
    holders: 678,
    mintEvent: 'Lunar landing > 76%',
  },
  {
    id: 9,
    icon: '⚡',
    name: generateTokenName('Electric vehicle adoption > 69%'),
    status: 'Claimed',
    description: 'Electric vehicle adoption',
    change: 56.78,
    marketCap: '$87,654.32',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$14.5K',
    },
    volume24h: '$19.8K',
    price: '$0.000045',
    holders: 345,
    mintEvent: 'Electric vehicle adoption > 69%',
  },
  {
    id: 10,
    icon: '🎨',
    name: generateTokenName('AI art trend > 71%'),
    status: 'Claimed',
    description: 'AI art trend',
    change: 34.56,
    marketCap: '$145,678.90',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$27.8K',
    },
    volume24h: '$38.2K',
    price: '$0.000067',
    holders: 523,
    mintEvent: 'AI art trend > 71%',
  },
  {
    id: 11,
    icon: '🏆',
    name: generateTokenName('Olympics viewership > 74%'),
    status: 'Claimed',
    description: 'Olympics viewership',
    change: 89.12,
    marketCap: '$198,765.43',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$36.4K',
    },
    volume24h: '$52.7K',
    price: '$0.000112',
    holders: 789,
    mintEvent: 'Olympics viewership > 74%',
  },
  {
    id: 12,
    icon: '🌊',
    name: generateTokenName('Climate change awareness > 70%'),
    status: 'Claimed',
    description: 'Climate change awareness',
    change: -5.67,
    marketCap: '$76,543.21',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$11.9K',
    },
    volume24h: '$15.6K',
    price: '$0.000038',
    holders: 289,
    mintEvent: 'Climate change awareness > 70%',
  },
  {
    id: 13,
    icon: '🎪',
    name: generateTokenName('Entertainment industry growth > 75%'),
    status: 'Claimed',
    description: 'Entertainment industry growth',
    change: 67.89,
    marketCap: '$112,345.67',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$19.3K',
    },
    volume24h: '$28.4K',
    price: '$0.000089',
    holders: 456,
    mintEvent: 'Entertainment industry growth > 75%',
  },
  {
    id: 14,
    icon: '🚁',
    name: generateTokenName('Aviation recovery > 77%'),
    status: 'Claimed',
    description: 'Aviation recovery',
    change: 91.23,
    marketCap: '$165,432.10',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$24.6K',
    },
    volume24h: '$41.9K',
    price: '$0.000134',
    holders: 612,
    mintEvent: 'Aviation recovery > 77%',
  },
  {
    id: 15,
    icon: '🎭',
    name: generateTokenName('Streaming service growth > 72%'),
    status: 'Claimed',
    description: 'Streaming service growth',
    change: -8.90,
    marketCap: '$89,012.34',
    creator: {
      name: 'KalshiBags',
      avatar: '👤',
      twitter: '@kalshibags',
      twitterFollowers: '$16.8K',
    },
    volume24h: '$22.1K',
    price: '$0.000051',
    holders: 378,
    mintEvent: 'Streaming service growth > 72%',
  },
];

export default function TokensPage() {
  const router = useRouter();

  const handleTokenClick = (tokenName: string) => {
    router.push(`/token/${tokenName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Ticker */}
      <Ticker />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tokens</h1>
            <p className="text-gray-600">All tokens minted via confidence-triggered launches</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-black border border-white/10 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-900 border-b border-white/10">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    #
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    Token
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    24h Change
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    Market Cap
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    24h Volume
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    Price
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-white/10">
                    Holders
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Mint Event
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-white/10">
                {tokens.map((token) => (
                  <tr 
                    key={token.id} 
                    className="hover:bg-gray-900/50 transition-colors border-b border-white/10 cursor-pointer"
                    onClick={() => handleTokenClick(token.name)}
                  >
                    <td className="px-6 py-5 whitespace-nowrap text-base text-white font-medium border-r border-white/10">
                      {token.id}
                    </td>
                    <td className="px-6 py-5 border-r border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#20D55A] to-green-600 flex items-center justify-center text-white text-xl font-bold">
                          {token.icon}
                        </div>
                        <div>
                          <div className="text-base font-bold text-white">{token.name}</div>
                          <div className="text-sm text-gray-400">{token.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap border-r border-white/10">
                      <span
                        className={`text-base font-bold ${
                          token.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {token.change >= 0 ? '+' : ''}
                        {token.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-white font-semibold border-r border-white/10">
                      {token.marketCap}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-white font-medium border-r border-white/10">
                      {token.volume24h}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-white font-mono font-medium border-r border-white/10">
                      {token.price}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-white font-medium border-r border-white/10">
                      {token.holders}
                    </td>
                    <td className="px-6 py-5 bg-black">
                      <span className="text-base text-white font-semibold">
                        {token.mintEvent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

