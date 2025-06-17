import { motion } from 'framer-motion';
import { CoinCard } from './CoinCard';
import { Chart } from './Chart';
import { AlertsPanel } from './AlertsPanel';
import { BuzzScore } from './BuzzScore';
import { PortfolioManager } from './PortfolioManager';
import { useCoinData } from '../hooks/useCoinData';

export const Dashboard = () => {
  const { coins, loading, error } = useCoinData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {loading && <p className="text-center text-xl">Loading coins...</p>}
      {error && <p className="text-center text-xl text-red-500">{error}</p>}
      {coins.length === 0 && !loading && !error && (
        <p className="text-center text-xl">No coins found</p>
      )}
      {coins.map((coin) => (
        <CoinCard key={coin.address} coin={coin} />
      ))}
      <Chart />
      <AlertsPanel />
      <BuzzScore />
      <PortfolioManager />
    </motion.div>
  );
};