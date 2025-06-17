# 📊 Zora AI Stock Metrics Dashboard

**Zora AI Stock Metrics** is a decentralized analytics dashboard built on the **Base blockchain**, leveraging **Zora’s Coins SDK** to provide real-time cryptocurrency insights. Designed for traders and investors, it visualizes token metrics like market cap, 24-hour volume, and unique holders through an intuitive, AI-enhanced interface.

Powered by **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Recharts**, the dashboard offers a responsive, animated user experience with robust error handling. By integrating **AI-driven sentiment analysis**, it delivers predictive insights, positioning it as a next-generation tool for DeFi.

> 🛠️ Developed for the **WaveHack/Buildathon**, showcasing the synergy of **blockchain + AI** on **Base**.

---

## 📚 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Notes for Improvement](#notes-for-improvement)

---

## ✨ Features

- **Real-Time Token Data**: Fetches metrics (market cap, volume, holders) via Zora’s `getCoinsTopVolume24h` API.
- **Interactive Dashboard**: Renders token data using reusable `CoinCard` and `Chart` components with Tailwind layouts.
- **AI Sentiment Analysis**: Uses `useSentimentAnalysis.ts` to predict market mood based on social signals.
- **Dynamic Visualizations**: Charts with **Recharts**, animated with **Framer Motion**.
- **Robust UI/UX**: Error/loading states in `Dashboard.tsx`, `Chart.tsx` ensure seamless experience.
- **Portfolio Management**: Manage assets via `PortfolioManager.tsx`, get alerts via `AlertsPanel.tsx`.
- **Blockchain Integration**: Uses `viem` to format ETH values with precision.
- **Mobile-First Design**: Fully responsive with Tailwind's utility classes.
- **Test Coverage**: Unit tests using `Jest` and mocks in `App.test.tsx`.
- **Scalable Design**: Modular structure supports easy AI/feature expansion.

---

## 🧰 Technologies

| Category        | Tools/Frameworks |
|----------------|------------------|
| **Frontend**   | React 18.3.1, TypeScript 4.9.5, CRA 5.0.1 |
| **Blockchain** | Zora Coins SDK 0.2.1, Base Chain, Viem 2.31.2 |
| **Styling**    | Tailwind CSS 3.4.14 |
| **Animation**  | Framer Motion 11.11.9 |
| **Charts**     | Recharts 2.12.7 |
| **Testing**    | Jest, @testing-library/react 13.4.0, jest-dom 6.5.0 |
| **Build**      | ESLint, PostCSS, Autoprefixer |

---

## 🛠 Installation

### 🔧 Prerequisites

- Node.js (v16+)
- npm (v8+)
- A [Zora API Key](https://zora.co/developers)
- Base Blockchain RPC (e.g., `https://rpc.base.org`)

### 🚀 Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/zora-ai-stock-metrics.git
   cd zora-ai-stock-metrics
