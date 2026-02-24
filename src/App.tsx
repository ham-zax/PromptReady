import React from 'react';
import Lenis from 'lenis';
import { Helmet } from '@slorber/react-helmet-async';
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
    const win = window as Window & { __appLenis?: Lenis };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });
    win.__appLenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      delete win.__appLenis;
      cancelAnimationFrame(rafId);
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
    <div className="relative min-h-screen overflow-x-clip bg-brand-bg font-sans text-brand-ink">
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
