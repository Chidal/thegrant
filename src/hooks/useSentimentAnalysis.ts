import { useEffect, useState } from 'react';
import { getCoinComments } from '@zoralabs/coins-sdk';
import { Address } from 'viem';

interface SentimentData {
  coinName: string;
  buzzScore: number;
  sentiment: string;
}

export const useSentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState<SentimentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const response = await getCoinComments({
          address: '0x445e9c0a296068dc4257767b5ed354b77cf513de' as Address,
          count: 20,
        });
        const comments = response.data?.zora20Token?.zoraComments?.edges || [];
        
        const mockSentiment: SentimentData[] = comments.map((edge: any, index: number) => ({
          coinName: `Coin ${index + 1}`,
          buzzScore: Math.random() * 100,
          sentiment: edge.node?.comment.includes('great') ? 'Positive' : 'Neutral',
        }));
        
        setSentimentData(mockSentiment);
        setLoading(false);
      } catch (err) {
        console.error('Sentiment error:', err);
        setError('Failed to fetch comments');
        setLoading(false);
      }
    };
    fetchSentiment();
  }, []);

  return { sentimentData, loading, error };
};