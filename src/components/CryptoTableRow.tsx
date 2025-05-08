import React, { useEffect, useRef, useState } from 'react';
import { formatCurrency, formatNumber } from '../utils/formatters';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';
import { CryptoAsset } from '../types/crypto.types';

interface CryptoTableRowProps {
  asset: CryptoAsset;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset }) => {
  const [highlight, setHighlight] = useState(false);
  const prevPriceRef = useRef(asset.currentPrice);

  useEffect(() => {
    // Only highlight if the price has actually changed
    if (prevPriceRef.current !== asset.currentPrice) {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 2000);
      prevPriceRef.current = asset.currentPrice;
      
      return () => clearTimeout(timer);
    }
  }, [asset.currentPrice]);

  // Determine background color for highlighting
  const bgColor = highlight 
    ? asset.currentPrice > prevPriceRef.current
      ? 'bg-green-50'
      : 'bg-red-50'
    : 'bg-white hover:bg-gray-50';

  return (
    <tr className={`border-b text-sm transition-colors duration-500 ${bgColor}`}>
      <td className="py-4 pl-4 pr-2">{asset.rank}</td>
      
      <td className="py-4 px-2">
        <div className="flex items-center">
          <img 
            src={asset.logo} 
            alt={asset.name} 
            className="w-6 h-6 mr-3"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
            }}
          />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-gray-500 text-xs">{asset.symbol}</div>
          </div>
        </div>
      </td>
      
      <td className="py-4 px-2 text-right font-medium">
        {formatCurrency(asset.currentPrice)}
      </td>
      
      <td className="py-4 px-2 text-right hidden sm:table-cell">
        <PriceChange value={asset.priceChange1h} />
      </td>
      
      <td className="py-4 px-2 text-right">
        <PriceChange value={asset.priceChange24h} />
      </td>
      
      <td className="py-4 px-2 text-right hidden md:table-cell">
        <PriceChange value={asset.priceChange7d} />
      </td>
      
      <td className="py-4 px-2 text-right font-medium hidden lg:table-cell">
        {formatCurrency(asset.marketCap)}
      </td>
      
      <td className="py-4 px-2 text-right hidden lg:table-cell">
        {formatCurrency(asset.volume24h)}
      </td>
      
      <td className="py-4 px-2 text-right hidden xl:table-cell">
        <div>{formatNumber(asset.circulatingSupply)} {asset.symbol}</div>
        {asset.maxSupply && (
          <div className="text-xs text-gray-500">
            Max: {formatNumber(asset.maxSupply)}
          </div>
        )}
      </td>
      
      <td className="py-4 px-2 hidden lg:table-cell">
        <MiniChart 
          data={asset.sparkline} 
          priceChange={asset.priceChange7d}
        />
      </td>
    </tr>
  );
};

export default CryptoTableRow;