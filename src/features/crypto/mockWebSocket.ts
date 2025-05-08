import { store } from '../../store';
import { updateAssetPrice, updateAssetPriceChanges, updateAssetVolume } from './cryptoSlice';

// Helper function to generate a random price change percentage
const getRandomPriceChange = (min = -3, max = 3) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

// Helper to generate a random price change based on current price
const getRandomPriceFluctuation = (currentPrice: number) => {
  // Small fluctuation, typically around 0.1% - 1% of the current price
  const fluctuationRate = Math.random() * 0.01 + 0.001;
  const direction = Math.random() > 0.5 ? 1 : -1;
  return currentPrice * fluctuationRate * direction;
};

// Helper to generate a random volume change
const getRandomVolumeChange = (currentVolume: number) => {
  // Fluctuate by up to 2% of current volume
  const changeRate = (Math.random() * 0.04) - 0.02; // -2% to +2%
  return currentVolume * (1 + changeRate);
};

// Mock WebSocket class
export class MockCryptoWebSocket {
  private intervalId: number | null = null;
  private updateInterval: number;

  constructor(updateInterval = 2000) {
    this.updateInterval = updateInterval;
  }

  // Start the WebSocket simulation
  connect(): void {
    if (this.intervalId !== null) {
      return; // Already connected
    }

    this.intervalId = setInterval(() => {
      this.simulateDataUpdates();
    }, this.updateInterval) as unknown as number;

    console.log('WebSocket connection established');
  }

  // Stop the WebSocket simulation
  disconnect(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('WebSocket connection closed');
    }
  }

  // Simulate real-time data updates
  private simulateDataUpdates(): void {
    const state = store.getState();
    const assets = state.crypto.assets;

    // Choose a random subset of assets to update (1-3 assets)
    const numAssetsToUpdate = Math.floor(Math.random() * 3) + 1;
    const assetIndices = new Set<number>();
    
    while (assetIndices.size < numAssetsToUpdate) {
      assetIndices.add(Math.floor(Math.random() * assets.length));
    }

    // Update the chosen assets
    assetIndices.forEach(index => {
      const asset = assets[index];
      
      // 1. Update price
      const newPrice = asset.currentPrice + getRandomPriceFluctuation(asset.currentPrice);
      store.dispatch(updateAssetPrice({
        id: asset.id,
        price: parseFloat(newPrice.toFixed(newPrice < 1 ? 4 : 2)),
      }));

      // 2. Update price changes (randomly select which ones to update)
      const updatedChanges: {
        priceChange1h?: number;
        priceChange24h?: number;
        priceChange7d?: number;
      } = {};

      if (Math.random() > 0.7) {
        updatedChanges.priceChange1h = getRandomPriceChange(-1, 1);
      }
      
      if (Math.random() > 0.7) {
        updatedChanges.priceChange24h = getRandomPriceChange(-3, 3);
      }
      
      if (Math.random() > 0.8) {
        updatedChanges.priceChange7d = getRandomPriceChange(-5, 5);
      }

      if (Object.keys(updatedChanges).length > 0) {
        store.dispatch(updateAssetPriceChanges({
          id: asset.id,
          changes: updatedChanges,
        }));
      }

      // 3. Update 24h volume (less frequently)
      if (Math.random() > 0.7) {
        const newVolume = getRandomVolumeChange(asset.volume24h);
        store.dispatch(updateAssetVolume({
          id: asset.id,
          volume24h: newVolume,
        }));
      }
    });

    // Save updated state to localStorage
    try {
      const updatedState = store.getState().crypto;
      localStorage.setItem('cryptoState', JSON.stringify(updatedState));
    } catch (err) {
      console.error('Error saving state to localStorage:', err);
    }
  }
}

// Create and export a singleton instance
export const mockWebSocket = new MockCryptoWebSocket();