import React from 'react';
import { useAppSelector } from '../hooks/redux';
import { selectAllAssets } from '../features/crypto/cryptoSelectors';
import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableRow from './CryptoTableRow';

const CryptoTable: React.FC = () => {
  const assets = useAppSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <CryptoTableHeader />
        <tbody>
          {assets.map((asset) => (
            <CryptoTableRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;