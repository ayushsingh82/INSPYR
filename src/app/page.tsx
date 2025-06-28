import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navbar */}
      <header className="w-full py-4 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Inspyr</h1>
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
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The first Web3 inspiration platform that pays you
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
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Listen & uplift for free
            </button>
            <button className="px-8 py-3 border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-colors">
              Watch demo
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unlimited inspiration + Earn $INSP tokens
              </h3>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Powered by Web3 • No monthly fees
              </h3>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
