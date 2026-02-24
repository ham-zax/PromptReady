import React from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Helmet } from 'react-helmet-async';
import { trackEvent } from './hooks/useAnalytics';
import { usePostHog } from './hooks/usePostHog';
import { Toaster } from '@/components/ui/sonner';
import LandingFlowRouter from './router/LandingFlowRouter';
import { env, seo } from './config';
import { getCurrentCanonicalUrl } from './utils/canonicalUrl';

// Import test utilities in development
if (env.DEV) {
  import('./utils/testLandingFlow');
  import('./utils/testFeatureFlags');
  import('./utils/testAnalyticsEvents');
  // canonicalUrl is already statically imported above, no need for dynamic import
}

function App() {
  // Initialize PostHog analytics
  usePostHog();

  // Initialize Lenis smooth scrolling once at app mount
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 0, // Disable smooth scrolling on touch devices for better performance
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
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
    <div className="relative min-h-screen overflow-x-clip bg-[#030712] font-sans text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(120,119,198,0.15),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(99,102,241,0.15),transparent_30%),radial-gradient(circle_at_52%_88%,rgba(168,85,247,0.1),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta property="og:title" content={seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content={seo.ogType} />
          <meta property="og:url" content={seo.ogUrl} />
          <link rel="canonical" href={getCurrentCanonicalUrl()} />
          {/* Conditional robots meta tag based on environment */}
          <meta
            name="robots"
            content={
              import.meta.env.VITE_VERCEL_GIT_COMMIT_REF === 'main' ||
              import.meta.env.PROD ||
              window.location.hostname === 'promptready.app'
                ? 'index,follow'
                : 'noindex,nofollow'
            }
          />
        </Helmet>

        {/* Landing Flow Router handles all routing and page transitions */}
        <LandingFlowRouter onPrimaryAction={handlePrimaryAction} />

        {/* Toast notifications */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;
