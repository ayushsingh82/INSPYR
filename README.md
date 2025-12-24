# KalshiBags

**Confidence-Triggered Token Launch Platform**

KalshiBags is an innovative platform that automatically mints cryptocurrency tokens when real-world event probabilities cross predefined confidence thresholds. By integrating with Kalshi prediction markets and the Bags API, KalshiBags creates a data-driven approach to token creation that prevents spam and ensures meaningful launches.

## 🎯 Project Idea

### The Problem

Traditional token launches often suffer from:
- **Spam tokens**: Low-quality tokens created without meaningful signals
- **Lack of transparency**: No verifiable data backing token creation
- **Manual processes**: Time-consuming and inefficient token launch workflows

### The Solution

KalshiBags solves these problems by creating an automated, signal-based token minting system:

> **"When confidence crosses a threshold, a token is born."**

The platform continuously monitors Kalshi probability markets for various events and predictions. When the confidence (probability) for a specific event crosses a predefined threshold (e.g., 70%), tokens are automatically minted via the Bags API.

### Example

When the probability of **"US recession in 2025"** exceeds **70%** on Kalshi, the **$RECESSION25** token is automatically minted via Bags, creating a transparent and verifiable token launch backed by real market data.

## ✨ Key Features

### 1. Signal-Based Minting
Tokens are created only when real-world events reach significant confidence thresholds, ensuring meaningful launches with genuine market signals.

### 2. Spam Prevention
Automatic filtering through probability thresholds means only tokens with genuine market signals are created, preventing low-quality token spam.

### 3. Data-Driven Launches
Every token launch is backed by real market data from Kalshi, creating transparent and verifiable token creation that users can trust.

### 4. Real-Time Monitoring
Continuous tracking of probability markets ensures immediate token creation when thresholds are crossed.

## 🔄 How It Works

1. **Monitor Kalshi**
   - Continuously track probability markets on Kalshi for various events and predictions

2. **Threshold Detection**
   - When confidence crosses a predefined threshold (e.g., 70%), the system triggers token creation

3. **Auto-Mint via Bags**
   - Tokens are automatically minted using the Bags API, creating a seamless launch process

4. **Token Trading**
   - Users can view active tokens, track their performance, and purchase tokens directly from the platform (coming soon)

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 19
- **Deployment**: Vercel (configured)

## 📁 Project Structure

```
KalshiBags/
├── src/
│   ├── kalshi/                  # Kalshi API integration
│   ├── bags/                    # Bags API integration
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx      # Navigation bar
│       │   ├── Ticker.tsx       # Real-time token price ticker
│       │   └── Footer.tsx      # Footer component
│       ├── page.tsx             # Home page with hero and features
│       ├── tokens/
│       │   └── page.tsx        # Tokens listing page
│       └── token/
│           └── [slug]/
│               └── page.tsx    # Individual token detail page
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KalshiBags
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Features in Development

- Direct token purchases from the platform
- Real-time Kalshi API integration
- Automated Bags API token minting
- Wallet connection functionality
- Advanced token analytics and charts

## 🎨 Design Philosophy

KalshiBags features a clean, modern UI with:
- **Brand Color**: `#20D55A` (vibrant green) representing growth and confidence
- **Dark/Light Theme**: Black and white color scheme for clarity
- **Real-time Updates**: Live ticker showing token price changes
- **Data Transparency**: Clear display of mint events and market data

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or collaboration inquiries, please contact the project maintainers.

---

**Built with ❤️ using Next.js and TypeScript**
