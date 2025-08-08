import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

if (import.meta.env.DEV) console.log('[Startup] main.tsx: Before ReactDOM render');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

if (import.meta.env.DEV) console.log('[Startup] main.tsx: After ReactDOM render');
