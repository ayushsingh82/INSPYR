'use client';

interface Token {
  name: string;
  change: number;
}

const tokens: Token[] = [
  { name: 'DOMINO', change: 85.93 },
  { name: 'RETARD', change: 250.81 },
  { name: 'ARCR', change: -15.10 },
  { name: 'AZY', change: -22.47 },
  { name: 'PEPE', change: 22.32 },
  { name: 'ELLIE', change: -4.73 },
  { name: 'NYAN', change: 30.65 },
  { name: 'LAMBO', change: 13.27 },
  { name: 'CONCENTRIC', change: -9.43 },
  { name: 'MEMEPUTER', change: -14.65 },
  { name: 'ORY', change: -21.61 },
  { name: 'LORIA', change: -17.69 },
  { name: 'TREMOR', change: 77.23 },
  { name: 'BWH', change: -28.82 },
  { name: 'HODL', change: 24.79 },
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
            <span className="text-gray-500 text-xs">Trending token</span>
          </div>
        ))}
      </div>
    </div>
  );
}

