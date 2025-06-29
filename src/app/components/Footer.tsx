import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Copyright © 2025 INS. All rights reserved.
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Discord"
          >
            <span className="text-lg">🎮</span>
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="X (Twitter)"
          >
            <span className="text-lg">𝕏</span>
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Telegram"
          >
            <span className="text-lg">📬</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
