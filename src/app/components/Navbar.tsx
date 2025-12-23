import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold" style={{ color: '#000000', backgroundColor: '#20D55A', borderRadius: '10px', padding: '3px' }}>INSPYR</h1>
          </Link>
        </div>
        
        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/tokens" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tokens</Link>
        </nav>
        
        {/* Right - Sign Up Button */}
        <div className="flex items-center">
          <button className="px-4 py-2 bg-[#20D55A] text-white text-sm font-semibold rounded-lg transition-colors">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}

