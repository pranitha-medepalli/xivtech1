import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CryptoTable from './components/CryptoTable';
import Header from './components/Header';
import { mockWebSocket } from './features/crypto/mockWebSocket';

const CryptoApp: React.FC = () => {
  useEffect(() => {
    // Connect to the mock WebSocket when the component mounts
    mockWebSocket.connect();
    
    // Disconnect when the component unmounts
    return () => {
      mockWebSocket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Cryptocurrency Prices</h2>
          <p className="text-gray-600">
            Real-time prices updated every few seconds
          </p>
        </div>
        <CryptoTable />
      </main>
      <footer className="bg-white mt-12 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 CryptoTracker. All data is simulated and for demonstration purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <CryptoApp />
    </Provider>
  );
}

export default App;