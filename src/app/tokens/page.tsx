'use client';

import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import { useRouter } from 'next/navigation';

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
    icon: '🐱',
    name: 'NYAN',
    status: 'Claimed',
    description: 'Nyan Cat',
    change: 167.88,
    marketCap: '$38,903.06',
    creator: {
      name: 'PRguitarman',
      avatar: '👤',
      twitter: '@prguitarman',
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
    name: 'DOMINO',
    status: 'Claimed',
    description: 'Domino Effect',
    change: 85.93,
    marketCap: '$125,420.50',
    creator: {
      name: 'CryptoTrader',
      avatar: '👤',
      twitter: '@cryptotrader',
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
    name: 'RETARD',
    status: 'Claimed',
    description: 'Retard Strength',
    change: 250.81,
    marketCap: '$89,234.12',
    creator: {
      name: 'DeFiMaster',
      avatar: '👤',
      twitter: '@defimaster',
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
    name: 'PEPE',
    status: 'Claimed',
    description: 'Pepe the Frog',
    change: 22.32,
    marketCap: '$234,567.89',
    creator: {
      name: 'Memelord',
      avatar: '👤',
      twitter: '@memelord',
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
    name: 'FLAME',
    status: 'Claimed',
    description: 'Flame Token',
    change: 45.67,
    marketCap: '$67,890.12',
    creator: {
      name: 'FireMaster',
      avatar: '👤',
      twitter: '@firemaster',
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
    name: 'STAR',
    status: 'Claimed',
    description: 'Star Power',
    change: 78.90,
    marketCap: '$156,789.45',
    creator: {
      name: 'StarGazer',
      avatar: '👤',
      twitter: '@stargazer',
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
    name: 'DIAMOND',
    status: 'Claimed',
    description: 'Diamond Hands',
    change: -12.34,
    marketCap: '$98,765.43',
    creator: {
      name: 'DiamondHands',
      avatar: '👤',
      twitter: '@diamondhands',
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
    name: 'MOON',
    status: 'Claimed',
    description: 'To The Moon',
    change: 123.45,
    marketCap: '$234,567.89',
    creator: {
      name: 'MoonBoy',
      avatar: '👤',
      twitter: '@moonboy',
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
    name: 'BOLT',
    status: 'Claimed',
    description: 'Lightning Bolt',
    change: 56.78,
    marketCap: '$87,654.32',
    creator: {
      name: 'Thunder',
      avatar: '👤',
      twitter: '@thunder',
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
    name: 'ART',
    status: 'Claimed',
    description: 'Digital Art',
    change: 34.56,
    marketCap: '$145,678.90',
    creator: {
      name: 'Artist',
      avatar: '👤',
      twitter: '@artist',
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
    name: 'TROPHY',
    status: 'Claimed',
    description: 'Champions Trophy',
    change: 89.12,
    marketCap: '$198,765.43',
    creator: {
      name: 'Champion',
      avatar: '👤',
      twitter: '@champion',
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
    name: 'WAVE',
    status: 'Claimed',
    description: 'Ocean Wave',
    change: -5.67,
    marketCap: '$76,543.21',
    creator: {
      name: 'Surfer',
      avatar: '👤',
      twitter: '@surfer',
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
    name: 'CIRCUS',
    status: 'Claimed',
    description: 'Circus Fun',
    change: 67.89,
    marketCap: '$112,345.67',
    creator: {
      name: 'Jester',
      avatar: '👤',
      twitter: '@jester',
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
    name: 'HELI',
    status: 'Claimed',
    description: 'Helicopter',
    change: 91.23,
    marketCap: '$165,432.10',
    creator: {
      name: 'Pilot',
      avatar: '👤',
      twitter: '@pilot',
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
    name: 'DRAMA',
    status: 'Claimed',
    description: 'Drama Token',
    change: -8.90,
    marketCap: '$89,012.34',
    creator: {
      name: 'Actor',
      avatar: '👤',
      twitter: '@actor',
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

