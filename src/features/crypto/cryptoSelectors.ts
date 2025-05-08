import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Basic selectors
export const selectAllAssets = (state: RootState) => state.crypto.assets;
export const selectAssetById = (state: RootState, id: string) => 
  state.crypto.assets.find(asset => asset.id === id);
export const selectCryptoStatus = (state: RootState) => state.crypto.status;
export const selectLastUpdated = (state: RootState) => state.crypto.lastUpdated;

// Memoized selectors
export const selectTopGainers24h = createSelector(
  [selectAllAssets],
  (assets) => {
    return [...assets].sort((a, b) => b.priceChange24h - a.priceChange24h);
  }
);

export const selectTopLosers24h = createSelector(
  [selectAllAssets],
  (assets) => {
    return [...assets].sort((a, b) => a.priceChange24h - b.priceChange24h);
  }
);

export const selectTotalMarketCap = createSelector(
  [selectAllAssets],
  (assets) => {
    return assets.reduce((total, asset) => total + asset.marketCap, 0);
  }
);

export const selectTotalVolume24h = createSelector(
  [selectAllAssets],
  (assets) => {
    return assets.reduce((total, asset) => total + asset.volume24h, 0);
  }
);