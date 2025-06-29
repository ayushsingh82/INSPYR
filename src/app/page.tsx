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
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center bg-white mt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-gray-300 rounded-full">
              <p className="text-sm text-gray-600">
                Building the future of inspiration.
                <span className="text-[#000000] bg-[#20D55A] rounded-full px-2 py-1 transition-colors"> Learn more {'->'}</span>
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

          {/* What is Inspyr Studio Section */}
          <div className="space-y-8 max-w-4xl mx-auto mt-24">
            <div className="text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                What is   <span className="text-[#20D55A]">Inspyr</span> Studio?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto  shadow-lg shadow-gray-200 rounded-lg p-4">
                A creator circle. A vibe engine. A cheat code for launching on Inspyr.
                <br />
                We're building the platform behind the most uplifting Web3 experiences — and helping creators inspire the world too.
              </p>
            </div>

            {/* Three Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Creator Circle</h4>
                <p className="text-sm text-gray-600">
                  A community of mindful creators crafting the next wave of emotional and inspirational digital content.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Vibe Engine</h4>
                <p className="text-sm text-gray-600">
                  Motivation meets technology. Learn how to design audio, quotes, and moments that move people — and reward you.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-[#20D55A]">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Launch Cheat Code</h4>
                <p className="text-sm text-gray-600">
                  Early access to tools, rewards, and drops from the minds behind Web3's most feel-good launches.
                </p>
              </div>
            </div>
          </div>

          {/* New Section with Green Background */}
          <div className="bg-[#20D55A] py-16 px-6 mx-6">
            <div className="max-w-full mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side Content */}
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Inspiration meets Web3. Audio meets emotion.
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Inspyr Studio is founded by builders who believe attention is currency — and creativity is capital.
                  </p>
                  <p className="text-sm leading-relaxed">
                    We've seen creators grind for exposure, only to get pennies. That's broken.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Inspyr Studio flips the script: it's a launchpad for emotional value, audio collectibles, and micro-moments that make people feel something — and reward creators in real time.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Whether you're an artist, founder, or dreamer, Inspyr is the home for those who want to build vibes, not just products.
                  </p>
                </div>

                {/* Right Side Boxed Content */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    The future of fundraising isn't about pitching VCs.
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    It's about rallying a community that believes in your vision and wants to be part of the story.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    At Inspyr, we don't chase capital — we create gravity.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    When people feel aligned, they don't just fund you — they amplify you.
                  </p>
                  
                  {/* New Box */}
                  <div className="bg-gray-50 p-1 rounded-lg border border-gray-200">
                    <h5 className="text-lg font-semibold text-gray-900">CA - upcoming</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Creators Section */}
          <div className="bg-[#18181C] py-16 px-6 -mx-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Best Creators
                </h3>
                <p className="text-sm text-gray-300">
                  Show profile for best creators
                </p>
              </div>
              
              {/* Creator Profiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Creator Profile Card 1 */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#20D55A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Pasternak</h4>
                      <a href="https://x.com/pasternak" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@pasternak</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Web3 builder and innovator pushing the boundaries of decentralized technology.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#20D55A] text-sm font-semibold">$INSP: 5,234</span>
                    <button className="text-white bg-[#20D55A] px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 2 */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#20D55A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">E</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Edchucation</h4>
                      <a href="https://x.com/edchucation" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@edchucation</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Educational content creator making complex topics accessible and engaging.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#20D55A] text-sm font-semibold">$INSP: 3,567</span>
                    <button className="text-white bg-[#20D55A] px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 3 */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#20D55A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Mxmnci</h4>
                      <a href="https://x.com/mxmnci" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@mxmnci</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Creative technologist exploring the intersection of art, code, and human experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#20D55A] text-sm font-semibold">$INSP: 4,890</span>
                    <button className="text-white bg-[#20D55A] px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 4 */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#20D55A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Aeyakovenko</h4>
                      <a href="https://x.com/aeyakovenko" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@aeyakovenko</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Blockchain visionary and entrepreneur building the future of decentralized systems.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#20D55A] text-sm font-semibold">$INSP: 7,234</span>
                    <button className="text-white bg-[#20D55A] px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Content Creators Section */}
          <div className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Top Content Creators
                </h3>
                <p className="text-sm text-gray-600">
                  People love to pay
                </p>
              </div>
              
              {/* Creator Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* DeFi Degens */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🧠</span>
                    <h4 className="text-lg font-bold text-gray-900">DeFi Degens</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    The minds behind the protocols that move billions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/vivek_degen" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@vivek_degen</a>
                      <span className="text-xs text-gray-500">Drops alpha on DeFi yield strategies</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/realYielder" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@realYielder</a>
                      <span className="text-xs text-gray-500">Breaking down complex lending protocols</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/LPwhale" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@LPwhale</a>
                      <span className="text-xs text-gray-500">Charts, yield farms, and new liquidity pools</span>
                    </div>
                  </div>
                </div>

                {/* Meme Masters */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🐸</span>
                    <h4 className="text-lg font-bold text-gray-900">Meme Masters</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Memes that move markets.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/shitcoin_sage" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@shitcoin_sage</a>
                      <span className="text-xs text-gray-500">Meme coin trader with laser-sharp instincts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/basedmfer" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@basedmfer</a>
                      <span className="text-xs text-gray-500">The meme whisperer. Behind $BASED and $LOOT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/SolanaMemeLord" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@SolanaMemeLord</a>
                      <span className="text-xs text-gray-500">Solana-native memetic genius</span>
                    </div>
                  </div>
                </div>

                {/* NFT Storytellers */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🎨</span>
                    <h4 className="text-lg font-bold text-gray-900">NFT Storytellers</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    From PFPs to digital sagas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/jpegthinker" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@jpegthinker</a>
                      <span className="text-xs text-gray-500">Threads on the cultural side of NFTs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/MetaMuseNFT" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@MetaMuseNFT</a>
                      <span className="text-xs text-gray-500">NFT collector and curator with weekly recaps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/0xArtVibes" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@0xArtVibes</a>
                      <span className="text-xs text-gray-500">Digital artist experimenting with generative AI + NFTs</span>
                    </div>
                  </div>
                </div>

                {/* Web3 x AI */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🤖</span>
                    <h4 className="text-lg font-bold text-gray-900">Web3 x AI</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Where intelligence meets the chain.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/promptprotocol" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@promptprotocol</a>
                      <span className="text-xs text-gray-500">Building the LLM layer on-chain</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/zkai_labs" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@zkai_labs</a>
                      <span className="text-xs text-gray-500">Merging ZK with AI agents</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/chainagentx" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@chainagentx</a>
                      <span className="text-xs text-gray-500">Explains autonomous agents and intent protocols</span>
                    </div>
                  </div>
                </div>

                {/* L2 Believers */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🧱</span>
                    <h4 className="text-lg font-bold text-gray-900">L2 Believers</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Scaling the future of blockchain.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/rollup_ranger" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@rollup_ranger</a>
                      <span className="text-xs text-gray-500">Comparing Optimistic vs ZK rollups weekly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/basevibes" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@basevibes</a>
                      <span className="text-xs text-gray-500">Threads on Base ecosystem growth</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="https://x.com/altlayeralpha" target="_blank" rel="noopener noreferrer" className="text-sm text-[#20D55A] hover:underline">@altlayeralpha</a>
                      <span className="text-xs text-gray-500">Following the rise of AltLayer, Eclipse, and more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
