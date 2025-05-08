import React from 'react';

const CryptoTableHeader: React.FC = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="text-xs text-left text-gray-500 border-b">
        <th className="py-3 pl-4 pr-2 font-medium w-10">#</th>
        <th className="py-3 px-2 font-medium text-left">Name</th>
        <th className="py-3 px-2 font-medium text-right">Price</th>
        <th className="py-3 px-2 font-medium text-right hidden sm:table-cell">1h %</th>
        <th className="py-3 px-2 font-medium text-right">24h %</th>
        <th className="py-3 px-2 font-medium text-right hidden md:table-cell">7d %</th>
        <th className="py-3 px-2 font-medium text-right hidden lg:table-cell">Market Cap</th>
        <th className="py-3 px-2 font-medium text-right hidden lg:table-cell">Volume (24h)</th>
        <th className="py-3 px-2 font-medium text-right hidden xl:table-cell">Circulating Supply</th>
        <th className="py-3 px-2 font-medium text-center hidden lg:table-cell">Last 7d</th>
      </tr>
    </thead>
  );
};

export default CryptoTableHeader;