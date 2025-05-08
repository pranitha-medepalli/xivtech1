import React from 'react';
import { useAppSelector } from '../hooks/redux';
import { selectLastUpdated, selectTotalMarketCap, selectTotalVolume24h } from '../features/crypto/cryptoSelectors';
import { formatCurrency } from '../utils/formatters';
import { Layers } from 'lucide-react';

const Header: React.FC = () => {
  const totalMarketCap = useAppSelector(selectTotalMarketCap);
  const totalVolume24h = useAppSelector(selectTotalVolume24h);
  const lastUpdated = useAppSelector(selectLastUpdated);
  
  // Format the last updated time
  const formattedTime = new Date(lastUpdated).toLocaleTimeString();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Layers className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">CryptoTracker</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row text-sm text-gray-600">
            <div className="mr-6 mb-2 sm:mb-0">
              <span className="font-medium">Market Cap:</span> {formatCurrency(totalMarketCap)}
            </div>
            <div className="mr-6 mb-2 sm:mb-0">
              <span className="font-medium">24h Vol:</span> {formatCurrency(totalVolume24h)}
            </div>
            <div className="text-gray-500">
              <span className="font-medium">Last Updated:</span> {formattedTime}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;