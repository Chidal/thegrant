import { useEffect, useState } from 'react';
import { getCoinsTopVolume24h } from '@zoralabs/coins-sdk';
import { Zora20Token } from '../types';

export const useCoinData = () => {
  const [coins, setCoins] = useState<Zora20Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        console.log('Fetching coins...');
        const response = await getCoinsTopVolume24h({ count: 10 });
        console.log('Coins response:', response);
        const tokens = response.data?.exploreList?.edges?.map((edge: any) => edge.node) || [];
        setCoins(tokens);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch coins');
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  return { coins, loading, error };
};