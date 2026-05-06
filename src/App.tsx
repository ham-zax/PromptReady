import React from 'react';
import Lenis from 'lenis';
import { trackEvent } from './hooks/useAnalytics';
import { Toaster } from '@/components/ui/sonner';
import { SketchyIconProvider } from '@/components/ui/Icons';
import LandingFlowRouter from './router/LandingFlowRouter';
import { env } from './config';

// Import test utilities in development
if (env.DEV) {
  import('./utils/testLandingFlow');
  import('./utils/testFeatureFlags');
  import('./utils/testAnalyticsEvents');
  // canonicalUrl is already statically imported above, no need for dynamic import
}

function App() {
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
    const destinationUrl = env.CHROME_STORE_URL;

    trackEvent('primary_cta_click', {
      destination_url: destinationUrl || 'missing_chrome_store_url',
      source_component: sourceComponent,
    });

    if (!destinationUrl) {
      console.warn('VITE_CHROME_STORE_URL is required before publishing release CTAs.');
      return;
    }

    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-bg text-brand-ink relative min-h-screen overflow-x-clip font-sans">
      <SketchyIconProvider />
      <div className="relative z-10">
        {/* Landing Flow Router handles all routing and page transitions */}
        <LandingFlowRouter onPrimaryAction={handlePrimaryAction} />

        {/* Toast notifications */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;
