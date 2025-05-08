import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { formatPercentage, getPercentageColorClass } from '../utils/formatters';

interface PriceChangeProps {
  value: number;
  showIcon?: boolean;
  className?: string;
}

const PriceChange: React.FC<PriceChangeProps> = ({ 
  value, 
  showIcon = true,
  className = '' 
}) => {
  const colorClass = getPercentageColorClass(value);
  const combinedClassName = `${colorClass} font-medium ${className} transition-colors duration-300`;

  return (
    <div className={`flex items-center ${combinedClassName}`}>
      {showIcon && value !== 0 && (
        <span className="mr-1">
          {value > 0 ? (
            <ArrowUp className="w-3 h-3" />
          ) : (
            <ArrowDown className="w-3 h-3" />
          )}
        </span>
      )}
      <span>{formatPercentage(value)}</span>
    </div>
  );
};

export default PriceChange;