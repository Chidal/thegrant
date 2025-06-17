import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const mockAlerts = [
      '$FASHION coin volume spiked 150% in 5 mins',
      '$ART coin RSI > 70, consider selling 25%',
    ];
    setAlerts(mockAlerts);
  }, []);

  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Trade Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} className="text-zora-accent">{alert}</li>
        ))}
      </ul>
    </motion.div>
  );
};