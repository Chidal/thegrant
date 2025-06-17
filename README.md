# 📊 Zora AI Stock Metrics Dashboard

**Zora AI Stock Metrics** is a decentralized analytics dashboard built on the **Base blockchain**, leveraging **Zora’s Coins SDK** to provide real-time cryptocurrency insights. Designed for traders and investors, it visualizes token metrics like market cap, 24-hour volume, and unique holders through an intuitive, AI-enhanced interface.

Powered by **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Recharts**, the dashboard offers a responsive, animated user experience with robust error handling. By integrating **AI-driven sentiment analysis**, it delivers predictive insights, positioning it as a next-generation tool for DeFi.

> 🛠️ Showcasing the synergy of **blockchain + AI** on **Base**.

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
   git clone https://github.com/Chidal/zora-ai-stock-metrics
   cd zora-ai-stock-metrics
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file and add:

```env
   REACT_APP_ZORA_API_KEY=your-zora-api-key
   REACT_APP_RPC_URL=https://rpc.base.org
```

4. **Start Development Server**

   ```bash
   npm start
   ```

   App runs at: [http://localhost:3000](http://localhost:3000)

5. **Run Tests**

   ```bash
   npm test
   ```

6. **Build for Production**

   ```bash
   npm run build
   npx serve -s build
   ```

---

## 🖥️ Usage

* **Access Dashboard**: Navigate to [localhost:3000](http://localhost:3000).
* **Explore Metrics**:

  * `CoinCard.tsx`: View token name, symbol, volume, and market cap.
  * `Chart.tsx`: Interactive market visualizations.
* **Portfolio**:

  * Track assets with `PortfolioManager.tsx`.
  * Receive alerts via `AlertsPanel.tsx`.
* **Sentiment Analysis**:

  * `BuzzScore.tsx` shows real-time AI sentiment.
* **Debugging**:

  * Use console logs for ZORA API responses.
  * Test with mock data in `useCoinData.ts`.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repo
2. Create a new branch
   `git checkout -b feature/your-feature`
3. Make changes and commit
   `git commit -m "Add new feature"`
4. Push and open a pull request
   `git push origin feature/your-feature`

> Please follow code style and run `npm run lint` before PR submission.

---

## 📜 License

Licensed under the [MIT License](./LICENSE).

---

## 🙏 Acknowledgements

* **Zora**: For the Coins SDK and developer tooling
* **Wavehack/Buildathon**: For inspiring decentralized innovation
* **Base Blockchain**: For fast, low-cost execution layer
* **Tailwind & Framer Motion**: For modern UI/UX
* **Recharts**: For flexible charting

---

## 📈 Notes for Improvement

### 🔮 Future Enhancements

* Add AI-based **price prediction models** in `Chart.tsx`.
* Enable **real-time WebSocket** data streaming from Zora APIs.
* Expand portfolio with **staking and yield tracking**.

### ⚠️ Known Issues

* Ensure `REACT_APP_ZORA_API_KEY` is set correctly.
* Use `useCoinData.ts` with mocks for offline testing and dev.
