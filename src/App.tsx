import React from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Helmet } from 'react-helmet-async';
import { trackEvent } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import LandingFlowRouter from './router/LandingFlowRouter';
import { env, seo } from './config';

// Import test utility in development
if (env.DEV) {
  import('./utils/testLandingFlow');
}

function App() {
  // Initialize Lenis smooth scrolling once at app mount
  React.useEffect(() => {
    const lenis = new Lenis();

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: env.WAITLIST_URL,
      source_component: sourceComponent,
    });
    window.open(env.WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f3f3] via-white to-purple-50/30 relative">
      {/* Dot pattern overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      {/* Bleeding gradient overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-purple-100/40" />
      
      <div className="relative z-10">
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
        
        {/* Toast notifications */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;
