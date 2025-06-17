export const mockLSTM = (data: any[]) => {
  return data.map((item) => ({ ...item, predictedPrice: Math.random() * 0.5 }));
};