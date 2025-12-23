import Navbar from '../../components/Navbar';
import Ticker from '../../components/Ticker';
import Link from 'next/link';

interface Holder {
  rank: number;
  address: string;
  name?: string;
  percentage: number;
  balance: string;
  avatar?: string;
}

const holders: Holder[] = [
  {
    rank: 1,
    address: 'HLnp...TLcC',
    name: 'Meteora Pool Authority',
    percentage: 44.12,
    balance: '441M',
    avatar: '👤',
  },
  {
    rank: 2,
    address: 'FAvg...KnsA',
    percentage: 3.02,
    balance: '30M',
    avatar: '👤',
  },
  {
    rank: 3,
    address: 'BtEc...zUJ3',
    percentage: 2.42,
    balance: '24M',
    avatar: '👤',
  },
  {
    rank: 4,
    address: 'Bbdg...inVh',
    percentage: 2.40,
    balance: '24M',
    avatar: '👤',
  },
  {
    rank: 5,
    address: '62Ey...tNfR',
    percentage: 1.85,
    balance: '18M',
    avatar: '👤',
  },
];

export default async function TokenDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  await params; // Await params for Next.js 15 compatibility
  // In a real app, fetch token data based on slug/address
  const tokenData = {
    icon: '🐱',
    name: 'NYAN',
    symbol: '$NYAN',
    status: 'Claimed',
    description: 'Nyan Cat',
    tagline: 'nyaaaan ^_^',
    marketCap: '$9.19K',
    volume24h: '$9.70K',
    price: '$0.0000092',
  };

  const exchanges = [
    { name: 'BAGS', logo: '👜' },
    { name: 'Axiom', logo: '⚡' },
    { name: 'Jupiter', logo: '🪐' },
    { name: 'Photon', logo: '✨' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Ticker */}
      <Ticker />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Token Header */}
          <div className="mb-8">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#20D55A] to-green-600 flex items-center justify-center text-white text-4xl">
                {tokenData.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{tokenData.symbol}</h1>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-gray-700">{tokenData.description}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Stats, Holders, and Buy Section */}
          <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
            {/* Stats Section */}
            <div className="p-6 border-b border-white/10 bg-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/50 p-4 rounded-lg border border-white/10 hover:border-white">
                  <div className="text-xs text-gray-400 mb-1 font-semibold uppercase">MCAP</div>
                  <div className="text-xl font-bold text-white">{tokenData.marketCap}</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 font-semibold uppercase">24H VOL</div>
                  <div className="text-xl font-bold text-white">{tokenData.volume24h}</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 font-semibold uppercase">PRICE</div>
                  <div className="text-xl font-bold text-white">{tokenData.price}</div>
                </div>
              </div>
            </div>

            {/* Top 100 Holders Section */}
            <div className="border-b border-white/10">
              <div className="p-6 border-b border-white/10 bg-gray-900">
                <h2 className="text-xl font-bold text-white">Top 100 Holders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider border-r border-white/10">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider border-r border-white/10">
                        Address
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Holdings
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-black divide-y divide-white/10">
                    {holders.map((holder) => (
                      <tr key={holder.rank} className="hover:bg-gray-900/50 transition-colors border-b border-white/10">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium border-r border-white/10">
                          {holder.rank}
                        </td>
                        <td className="px-6 py-4 border-r border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xs">
                              {holder.avatar}
                            </div>
                            <div>
                              {holder.name && (
                                <div className="text-sm font-semibold text-white">{holder.name}</div>
                              )}
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-300 font-mono">{holder.address}</span>
                                <button className="text-gray-400 hover:text-gray-200 transition-colors">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="text-sm text-white font-semibold">{holder.percentage}%</span>
                            <span className="text-xs text-gray-400">{holder.balance} tokens</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Buy Options Section */}
            <div className="p-6 bg-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exchanges.map((exchange) => (
                  <Link
                    key={exchange.name}
                    href="#"
                    className="block bg-black/50 p-4 rounded-lg border border-white/10 hover:border-white hover:bg-black transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-base border border-white/10">
                        {exchange.logo}
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">{exchange.name}</div>
                        <div className="text-sm text-gray-400">Buy on {exchange.name}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

