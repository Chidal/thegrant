import { useEffect, useState } from 'react';

interface PricePrediction {
  coinName: string;
  predictedPrice: number;
}

export const usePricePrediction = () => {
  const [predictions, setPredictions] = useState<PricePrediction[]>([]);

  useEffect(() => {
    const mockPredictions: PricePrediction[] = [
      { coinName: 'FASHION', predictedPrice: 0.15 },
      { coinName: 'ART', predictedPrice: 0.22 },
    ];
    setPredictions(mockPredictions);
  }, []);

  return { predictions };
};