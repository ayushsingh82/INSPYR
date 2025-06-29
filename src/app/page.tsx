import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navbar */}
      <header className="w-full py-4 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#000000', backgroundColor: '#20D55A', borderRadius: '10px', padding: '3px' }}>INSPYR</h1>
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
              Stop mindlessly scrolling for motivation. INS rewards you with $INSP tokens for every inspirational play, quote, or tip. Discover AI-powered uplifting audio, share positivity, and earn crypto while you grow your mindset.
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

          {/* What is INS Studio Section */}
          <div className="space-y-8 max-w-4xl mx-auto mt-24">
            <div className="text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                What is   <span className="text-[#20D55A]">INSPYR</span> Studio?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto  shadow-lg shadow-gray-200 rounded-lg p-4">
                A creator circle. A vibe engine. A cheat code for launching on INS.
                <br />
                We&apos;re building the platform behind the most uplifting Web3 experiences — and helping creators inspire the world too.
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
                  Early access to tools, rewards, and drops from the minds behind Web3&apos;s most feel-good launches.
                </p>
              </div>
            </div>
          </div>

          {/* New Section with Green Background */}
          <div className="bg-[#20D55A] py-16 px-6 -mx-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side Content */}
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Inspiration meets Web3. Audio meets emotion.
                  </h3>
                  <p className="text-sm leading-relaxed">
                    INS Studio is founded by builders who believe attention is currency — and creativity is capital.
                  </p>
                  <p className="text-sm leading-relaxed">
                    We&apos;ve seen creators grind for exposure, only to get pennies. That&apos;s broken.
                  </p>
                  <p className="text-sm leading-relaxed">
                    INSPYR Studio flips the script: it&apos;s a launchpad for emotional value, audio collectibles, and micro-moments that make people feel something — and reward creators in real time.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Whether you&apos;re an artist, founder, or dreamer, INSPYR is the home for those who want to build vibes, not just products.
                  </p>
                </div>

                {/* Right Side Boxed Content */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    The future of fundraising isn&apos;t about pitching VCs.
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    It&apos;s about rallying a community that believes in your vision and wants to be part of the story.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    At INSPYR, we don&apos;t chase capital — we create gravity.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    When people feel aligned, they don&apos;t just fund you — they amplify you.
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
          <div className="bg-[#18181C] py-16 px-6 -mx-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Best Creators
                </h3>
                <p className="text-sm text-gray-300">
                  Top performers inspiring the community
                </p>
              </div>
              
              {/* Creator Profiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Creator Profile Card 1 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#20D55A] transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#20D55A] to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#20D55A]/20">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-[#20D55A] transition-colors">Pasternak</h4>
                      <a href="https://x.com/pasternak" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@pasternak</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Web3 builder and innovator pushing the boundaries of decentralized technology.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#20D55A] text-lg font-bold">$INSP</span>
                      <span className="text-white font-semibold">5,234</span>
                    </div>
                    <button className="bg-[#20D55A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 2 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#20D55A] transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#20D55A] to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#20D55A]/20">
                      <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-[#20D55A] transition-colors">Edchucation</h4>
                      <a href="https://x.com/edchucation" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@edchucation</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Educational content creator making complex topics accessible and engaging.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#20D55A] text-lg font-bold">$INSP</span>
                      <span className="text-white font-semibold">3,567</span>
                    </div>
                    <button className="bg-[#20D55A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 3 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#20D55A] transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#20D55A] to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#20D55A]/20">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-[#20D55A] transition-colors">Mxmnci</h4>
                      <a href="https://x.com/mxmnci" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@mxmnci</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Creative technologist exploring the intersection of art, code, and human experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#20D55A] text-lg font-bold">$INSP</span>
                      <span className="text-white font-semibold">4,890</span>
                    </div>
                    <button className="bg-[#20D55A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Creator Profile Card 4 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#20D55A] transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#20D55A] to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#20D55A]/20">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-[#20D55A] transition-colors">Aeyakovenko</h4>
                      <a href="https://x.com/aeyakovenko" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#20D55A] transition-colors">@aeyakovenko</a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Blockchain visionary and entrepreneur building the future of decentralized systems.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#20D55A] text-lg font-bold">$INSP</span>
                      <span className="text-white font-semibold">7,234</span>
                    </div>
                    <button className="bg-[#20D55A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
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
               
              </div>
              
              {/* Simple Green Box */}
              <div className="bg-[#20D55A] p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="text-center space-y-6">
                  <h4 className="text-xl font-bold text-black">
                    Ready to Inspire & Earn  $INSP Tokens?
                  </h4>
                  <p className="text-sm text-black leading-relaxed">
                    Listen. Get Inspired. Earn. Complete inspiration journeys and claim your share of 10M $INSP — where every spark of motivation rewards you.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Start Inspiring & Earning
                  </button>
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
