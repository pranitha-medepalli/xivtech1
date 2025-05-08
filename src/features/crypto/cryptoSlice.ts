import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset, CryptoState } from '../../types/crypto.types';
import { mockCryptoData } from './mockData';

// Helper function to load state from localStorage
const loadState = (): CryptoState | undefined => {
  try {
    const serializedState = localStorage.getItem('cryptoState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

// Initial state with localStorage fallback
const initialState: CryptoState = loadState() || {
  assets: mockCryptoData,
  status: 'succeeded',
  error: null,
  lastUpdated: Date.now(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssetPrice(state, action: PayloadAction<{ id: string; price: number }>) {
      const { id, price } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.currentPrice = price;
        state.lastUpdated = Date.now();
      }
    },
    updateAssetPriceChanges(
      state,
      action: PayloadAction<{
        id: string;
        changes: {
          priceChange1h?: number;
          priceChange24h?: number;
          priceChange7d?: number;
        };
      }>
    ) {
      const { id, changes } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        if (changes.priceChange1h !== undefined) {
          asset.priceChange1h = changes.priceChange1h;
        }
        if (changes.priceChange24h !== undefined) {
          asset.priceChange24h = changes.priceChange24h;
        }
        if (changes.priceChange7d !== undefined) {
          asset.priceChange7d = changes.priceChange7d;
        }
        state.lastUpdated = Date.now();
      }
    },
    updateAssetVolume(state, action: PayloadAction<{ id: string; volume24h: number }>) {
      const { id, volume24h } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.volume24h = volume24h;
        state.lastUpdated = Date.now();
      }
    },
    updateAllAssets(state, action: PayloadAction<CryptoAsset[]>) {
      state.assets = action.payload;
      state.lastUpdated = Date.now();
    },
    updateAssetSparkline(state, action: PayloadAction<{ id: string; sparkline: number[] }>) {
      const { id, sparkline } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.sparkline = sparkline;
      }
    },
  },
});

// Export actions and reducer
export const {
  updateAssetPrice,
  updateAssetPriceChanges,
  updateAssetVolume,
  updateAllAssets,
  updateAssetSparkline,
} = cryptoSlice.actions;
export default cryptoSlice.reducer;