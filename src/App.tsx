import React from 'react';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';
import LandingFlowRouter from './router/LandingFlowRouter';
import { env, seo } from './config';

// Import test utility in development
if (env.DEV) {
  import('./utils/testLandingFlow');
}

function App() {
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: env.WAITLIST_URL,
      source_component: sourceComponent,
    });
    window.open(env.WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content={seo.ogType} />
        <meta property="og:url" content={seo.ogUrl} />
        <link rel="canonical" href={seo.canonicalUrl} />
      </Helmet>
      <Analytics />

      {/* Landing Flow Router handles all routing and page transitions */}
      <LandingFlowRouter onPrimaryAction={handlePrimaryAction} />
    </>
  );
}

export default App;
