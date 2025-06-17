import { motion } from 'framer-motion';
import { useSentimentAnalysis } from '../hooks/useSentimentAnalysis';

export const BuzzScore = () => {
  const { sentimentData, loading, error } = useSentimentAnalysis();

  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Buzz Score</h2>
      {loading && <p>Loading sentiment...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {sentimentData.map((data, index) => (
        <div key={index}>
          <p>{data.coinName}: Buzz Score {data.buzzScore}</p>
          <p>Sentiment: {data.sentiment}</p>
        </div>
      ))}
    </motion.div>
  );
};