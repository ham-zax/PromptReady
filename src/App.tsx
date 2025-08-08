import React from 'react';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';
import LandingFlowRouter from './router/LandingFlowRouter';

// Import test utility in development
if (import.meta.env.DEV) {
  import('./utils/testLandingFlow');
}

const WAITLIST_URL = 'https://waitlister.me/p/promptready';

function App() {
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      source_component: sourceComponent,
    });
    window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>PromptReady - Copy clean, AI-ready text. Instantly.</title>
        <meta
          name="description"
          content="One-click extension that turns any page into structured, distraction-free text for ChatGPT, Claude, or your LLM workflow — with private, on-device parsing."
        />
        <meta property="og:title" content="PromptReady - Copy clean, AI-ready text. Instantly." />
        <meta
          property="og:description"
          content="One-click extension that turns any page into structured, distraction-free text for ChatGPT, Claude, or your LLM workflow — with private, on-device parsing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promptready.vercel.app/" />
        <link rel="canonical" href="https://promptready.vercel.app/" />
      </Helmet>
      <Analytics />

      {/* Landing Flow Router handles all routing and page transitions */}
      <LandingFlowRouter onPrimaryAction={handlePrimaryAction} />
    </>
  );
}

export default App;
