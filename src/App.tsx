import './styles/App.scss';
import { useEffect } from 'react';
import { Home } from '@/pages';

export function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}
