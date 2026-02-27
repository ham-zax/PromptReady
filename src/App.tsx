import React, { useRef, useState } from 'react';
import Lenis from 'lenis';
import { trackEvent } from './hooks/useAnalytics';
import { usePostHog } from './hooks/usePostHog';
import { Toaster } from '@/components/ui/sonner';
import { SketchyIconProvider } from '@/components/ui/Icons';
import LandingFlowRouter from './router/LandingFlowRouter';
import WaitlistModal from './components/WaitlistModal';
import { env } from './config';
import { homeSectionLoaders } from './lazyLoaders/homeSections';

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

  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const didPreloadRef = useRef(false);

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

  // Preload lazy route modules globally so text-heavy sections are ready before user scrolls/navigates.
  React.useEffect(() => {
    if (didPreloadRef.current) return;
    didPreloadRef.current = true;

    let isCancelled = false;
    const staggerTimerIds: number[] = [];
    let fallbackTimer: number | undefined;
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const navigatorWithConnection = navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    };
    const connection = navigatorWithConnection.connection;
    const shouldPreload =
      !connection?.saveData && !['slow-2g', '2g'].includes(connection?.effectiveType ?? '');

    if (!shouldPreload) {
      return () => {
        isCancelled = true;
      };
    }

    const preloadLazyRouteModules = () => {
      if (isCancelled) return;

      homeSectionLoaders.forEach((loader, index) => {
        const timerId = window.setTimeout(() => {
          if (isCancelled) return;
          loader().catch((error) => {
            if (env.DEV) {
              console.warn('[Preload] Failed to fetch lazy module chunk', error);
            }
          });
        }, index * 120);

        staggerTimerIds.push(timerId);
      });
    };

    let idleHandle: number | undefined;
    if (typeof win.requestIdleCallback === 'function') {
      idleHandle = win.requestIdleCallback(() => preloadLazyRouteModules(), { timeout: 1800 });
    } else {
      fallbackTimer = window.setTimeout(preloadLazyRouteModules, 500);
    }

    return () => {
      isCancelled = true;
      staggerTimerIds.forEach((timerId) => window.clearTimeout(timerId));
      if (typeof fallbackTimer === 'number') window.clearTimeout(fallbackTimer);
      if (typeof idleHandle === 'number' && typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleHandle);
      }
    };
  }, []);

  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: env.WAITLIST_URL,
      source_component: sourceComponent,
    });
    setIsWaitlistModalOpen(true);
  };

  return (
    <div className="bg-brand-bg text-brand-ink relative min-h-screen overflow-x-clip font-sans">
      <SketchyIconProvider />
      <div className="relative z-10">
        {/* Landing Flow Router handles all routing and page transitions */}
        <LandingFlowRouter onPrimaryAction={handlePrimaryAction} />

        {/* Waitlist Modal overlay */}
        <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />

        {/* Toast notifications */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;
