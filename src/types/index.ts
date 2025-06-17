export interface Zora20Token {
  address: string;
  name: string;
  symbol: string;
  marketCap?: string;
  volume24h?: string;
  uniqueHolders?: number;
  mediaContent?: {
    previewImage?: string;
  };
}