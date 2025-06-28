import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navbar */}
      <header className="w-full py-4 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#000000', backgroundColor: '#20D55A', borderRadius: '10px', padding: '3px' }}>Inspyr</h1>
          </div>
          
          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Mission</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Roadmap</a>
          </nav>
          
          {/* Right - Sign Up Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 bg-[#20D55A] text-white text-sm font-semibold rounded-lg transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full">
              <p className="text-sm text-gray-600">
                Building the future of inspiration.
                <span className="text-[#000000] bg-[#20D55A] rounded-full px-2 py-1 transition-colors"> Learn more -></span>
              </p>
            </div>
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              The first
              <span className="bg-[#20D55A] border border-gray-300 rounded-full px-2 py-1 transition-colors "> Web3 </span> inspiration platform that 
              <span className="text-[#20D55A] transition-colors"> pays you</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              Stop mindlessly scrolling for motivation. Inspyr rewards you with $INSP tokens for every inspirational play, quote, or tip. Discover AI-powered uplifting audio, share positivity, and earn crypto while you grow your mindset.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-3 py-1 bg-black  text-white font-semibold rounded-lg transition-colors">
             Create content for free 
            </button>
            <button className="px-3 py-1 border border-gray-300 bg-[#20D55A] text-gray-900 font-semibold rounded-lg transition-colors">
            Earn $INSP tokens
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
