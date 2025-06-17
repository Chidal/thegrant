import { useEffect } from 'react';
import { setApiKey } from '@zoralabs/coins-sdk';
import { Dashboard } from './components/Dashboard';

const ZORA_API_KEY = process.env.REACT_APP_ZORA_API_KEY;

function App() {
  useEffect(() => {
    console.log('ZORA_API_KEY:', ZORA_API_KEY);
    if (ZORA_API_KEY) {
      setApiKey(ZORA_API_KEY);
    } else {
      console.warn('Zora API key is missing');
    }
  }, []);

  return (
    <div className="min-h-screen bg-zora-primary text-white">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Zora AI Stock Metrics</h1>
      </header>
      <main className="container mx-auto p-4">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;