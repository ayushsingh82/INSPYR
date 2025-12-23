import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Link from 'next/link';

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
];

export default function TokensPage() {
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
              <thead className="bg-black border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Token
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    24h Change
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Market Cap
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Creator
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    24h Volume
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Holders
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    Mint Event
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-white/10">
                {tokens.map((token) => (
                  <Link key={token.id} href={`/token/${token.name.toLowerCase()}`}>
                    <tr className="hover:bg-gray-900/50 transition-colors border-b border-white/10 cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#20D55A] to-green-600 flex items-center justify-center text-white text-lg font-bold">
                            {token.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{token.name}</div>
                            <div className="text-xs text-gray-400">{token.description}</div>
                          </div>
                        </div>
                      </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-bold ${
                          token.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {token.change >= 0 ? '+' : ''}
                        {token.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-semibold">
                      {token.marketCap}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xs font-bold">
                          {token.creator.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{token.creator.name}</div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <svg
                              className="w-3 h-3 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                            </svg>
                            <span className="text-xs text-gray-400">{token.creator.twitterFollowers}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                      {token.volume24h}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-mono font-medium">
                      {token.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                      {token.holders}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-300 bg-gray-800/50 px-3 py-1.5 rounded-md font-medium border border-white/10">
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

