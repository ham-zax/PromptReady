import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from '@slorber/react-helmet-async';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import App from './App.tsx';
import './index.css';

if (import.meta.env.DEV) console.log('[Startup] main.tsx: Before ReactDOM render');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </PostHogProvider>
  </StrictMode>,
);

if (import.meta.env.DEV) console.log('[Startup] main.tsx: After ReactDOM render');
