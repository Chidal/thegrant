import { motion } from 'framer-motion';
import { Zora20Token } from '../types';
import { formatEther } from 'viem';

interface CoinCardProps {
  coin: Zora20Token;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h2 className="text-xl font-semibold">{coin.name} ({coin.symbol})</h2>
      <p>Market Cap: ${coin.marketCap ? formatEther(BigInt(coin.marketCap)) : 'N/A'}</p>
      <p>24h Volume: ${coin.volume24h ? formatEther(BigInt(coin.volume24h)) : 'N/A'}</p>
      <p>Unique Holders: {coin.uniqueHolders || 'N/A'}</p>
      <img
        src={coin.mediaContent?.previewImage || 'https://via.placeholder.com/150'}
        alt={coin.name}
        className="w-full h-32 object-cover rounded mt-2"
      />
    </motion.div>
  );
};