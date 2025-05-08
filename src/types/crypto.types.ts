export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  logo: string;
  currentPrice: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  sparkline: number[];
}

export interface CryptoState {
  assets: CryptoAsset[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  lastUpdated: number;
}