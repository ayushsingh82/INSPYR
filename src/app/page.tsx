import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Ticker */}
      <Ticker />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center bg-white mt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full">
              <p className="text-sm text-gray-600">
                When confidence crosses a threshold, a token is born.
                <span className="text-[#000000] bg-[#20D55A] rounded-full px-2 py-1 transition-colors"> Learn more {'->'}</span>
              </p>
            </div>
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Confidence-Triggered
              <span className="bg-[#20D55A] border border-gray-300 rounded-full px-2 py-1 transition-colors"> Token Launch </span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              Signal-based minting via Bags API
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-base text-gray-700 leading-relaxed">
              Monitor Kalshi probabilities in real-time. When confidence crosses a threshold, tokens are automatically minted via Bags API.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Example:</h3>
              <p className="text-sm text-gray-700">
                When &quot;US recession in 2025&quot; probability exceeds <span className="font-bold text-[#20D55A]">70%</span>, 
                <span className="font-bold"> $RECESSION25 </span> token is auto-minted via Bags.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg transition-colors hover:bg-gray-800">
              View Active Tokens
            </button>
            <button className="px-6 py-3 border border-gray-300 bg-[#20D55A] text-gray-900 font-semibold rounded-lg transition-colors hover:bg-green-400">
              Monitor Markets
            </button>
          </div>

          {/* Features Section */}
          <div className="space-y-8 max-w-4xl mx-auto mt-24">
            <div className="text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Why this approach?
              </h3>
            </div>

            {/* Three Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Signal-Based Minting</h4>
                <p className="text-sm text-gray-600">
                  Tokens are created only when real-world events reach significant confidence thresholds, ensuring meaningful launches.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Prevents Spam Tokens</h4>
                <p className="text-sm text-gray-600">
                  Automatic filtering through probability thresholds means only tokens with genuine market signals are created.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Data-Driven Launches</h4>
                <p className="text-sm text-gray-600">
                  Every token launch is backed by real market data from Kalshi, creating transparent and verifiable token creation.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-[#20D55A] py-16 px-6 -mx-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  How It Works
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h4 className="text-xl font-semibold">Monitor Kalshi</h4>
                  <p className="text-sm leading-relaxed">
                    Continuously track probability markets on Kalshi for various events and predictions.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="text-xl font-semibold">Threshold Detection</h4>
                  <p className="text-sm leading-relaxed">
                    When confidence crosses a predefined threshold (e.g., 70%), the system triggers token creation.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h4 className="text-xl font-semibold">Auto-Mint via Bags</h4>
                  <p className="text-sm leading-relaxed">
                    Tokens are automatically minted using the Bags API, creating a seamless launch process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-black p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="text-center space-y-6">
                  <h4 className="text-xl font-bold text-white">
                    Ready to launch tokens based on real-world signals?
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Connect your wallet and start monitoring probability markets. When confidence thresholds are crossed, tokens launch automatically via Bags API.
                  </p>
                  <button className="bg-[#20D55A] text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
