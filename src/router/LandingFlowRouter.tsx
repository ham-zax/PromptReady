import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Import page components
import HomePage from '../pages/HomePage';

const DemoPage = React.lazy(() => import('../pages/DemoPage'));
const PricingPage = React.lazy(() => import('../pages/PricingPage'));
const ThankYou = React.lazy(() => import('../pages/ThankYou'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

// Import navigation
import LandingNavigation from '../components/navigation/LandingNavigation';
import FlowProgressIndicator from '../components/navigation/FlowProgressIndicator';

// Analytics tracking
import { trackEvent } from '../hooks/useAnalytics';

interface LandingFlowRouterProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  React.useLayoutEffect(() => {
    const win = window as Window & {
      __appLenis?: {
        scrollTo: (
          target: number | string | Element,
          options?: { immediate?: boolean; force?: boolean },
        ) => void;
      };
    };
    let rafId = 0;
    let followUpRafId = 0;

    const scrollWithLenisOrNative = (target: number | Element) => {
      if (win.__appLenis?.scrollTo) {
        win.__appLenis.scrollTo(target, { immediate: true, force: true });
        return;
      }

      if (typeof target === 'number') {
        window.scrollTo({ top: target, left: 0, behavior: 'auto' });
        return;
      }

      target.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
    };

    if (location.hash) {
      const anchorId = location.hash.replace('#', '');

      // Wait for the new route section to render before scrolling to hash targets.
      rafId = requestAnimationFrame(() => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
          scrollWithLenisOrNative(anchor);
          return;
        }
        scrollWithLenisOrNative(0);
        followUpRafId = requestAnimationFrame(() => {
          const retryAnchor = document.getElementById(anchorId);
          if (retryAnchor) {
            scrollWithLenisOrNative(retryAnchor);
          }
        });
      });

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        if (followUpRafId) cancelAnimationFrame(followUpRafId);
      };
    }

    scrollWithLenisOrNative(0);
    rafId = requestAnimationFrame(() => scrollWithLenisOrNative(0));

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

// Animated route wrapper component
const AnimatedRoutes: React.FC<{ onPrimaryAction: (sourceComponent: string) => void }> = ({
  onPrimaryAction,
}) => {
  const location = useLocation();

  // Track page views
  React.useEffect(() => {
    trackEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <React.Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onPrimaryAction={onPrimaryAction} />} />
          <Route path="/demo" element={<DemoPage onPrimaryAction={onPrimaryAction} />} />
          <Route path="/pricing" element={<PricingPage onPrimaryAction={onPrimaryAction} />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/404" element={<NotFoundPage />} />
          {/* Redirect any unknown routes to 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </React.Suspense>
    </AnimatePresence>
  );
};

const LandingFlowRouter: React.FC<LandingFlowRouterProps> = ({ onPrimaryAction }) => {
  return (
    <Router>
      <ScrollToTop />
      <LandingNavigation onPrimaryAction={onPrimaryAction} />
      <AnimatedRoutes onPrimaryAction={onPrimaryAction} />
      <FlowProgressIndicator />
    </Router>
  );
};

export default LandingFlowRouter;
