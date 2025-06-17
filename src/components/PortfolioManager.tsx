import { motion } from 'framer-motion';
import { useState } from 'react';

export const PortfolioManager = () => {
  const [threshold, setThreshold] = useState(70);

  const handleSetThreshold = () => {
    alert(`Portfolio alert set: Sell 25% when RSI > ${threshold}`);
  };

  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Portfolio Manager</h2>
      <div className="flex flex-col gap-2">
        <label>RSI Threshold</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="p-2 bg-gray-700 rounded text-white"
        />
        <button
          onClick={handleSetThreshold}
          className="bg-zora-secondary text-white p-2 rounded hover:bg-zora-accent"
        >
          Set Alert
        </button>
      </div>
    </motion.div>
  );
};