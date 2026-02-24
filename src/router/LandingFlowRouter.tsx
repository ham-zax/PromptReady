import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Import page components
import HomePage from '../pages/HomePage';
import DemoPage from '../pages/DemoPage';
import PricingPage from '../pages/PricingPage';
import ThankYou from '../pages/ThankYou';
import NotFoundPage from '../pages/NotFoundPage';

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

    const scrollWithLenisOrNative = (target: number | Element) => {
      if (win.__appLenis?.scrollTo) {
        win.__appLenis.scrollTo(target, { immediate: true, force: true });
      }
      if (typeof target === 'number') {
        document.documentElement.scrollTop = target;
        document.body.scrollTop = target;
        window.scrollTo(0, target);
        window.scrollTo({ top: target, left: 0, behavior: 'auto' });
        return;
      }
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    let followUpTimeout: number | undefined;

    if (location.hash) {
      const anchorId = location.hash.replace('#', '');

      // Wait for the new route section to render before scrolling to hash targets.
      requestAnimationFrame(() => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
          scrollWithLenisOrNative(anchor);
          followUpTimeout = window.setTimeout(() => scrollWithLenisOrNative(anchor), 60);
          return;
        }
        scrollWithLenisOrNative(0);
        followUpTimeout = window.setTimeout(() => scrollWithLenisOrNative(0), 60);
      });
      return () => {
        if (followUpTimeout) window.clearTimeout(followUpTimeout);
      };
    }

    scrollWithLenisOrNative(0);
    requestAnimationFrame(() => scrollWithLenisOrNative(0));
    followUpTimeout = window.setTimeout(() => scrollWithLenisOrNative(0), 60);

    return () => {
      if (followUpTimeout) window.clearTimeout(followUpTimeout);
    };
  }, [location.pathname, location.hash]);

  return null;
};

// Animated route wrapper component
const AnimatedRoutes: React.FC<{ onPrimaryAction: (sourceComponent: string) => void }> = ({ onPrimaryAction }) => {
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
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<HomePage onPrimaryAction={onPrimaryAction} />} 
        />
        <Route 
          path="/demo" 
          element={<DemoPage onPrimaryAction={onPrimaryAction} />} 
        />
        <Route 
          path="/pricing" 
          element={<PricingPage onPrimaryAction={onPrimaryAction} />} 
        />
        <Route 
          path="/thank-you" 
          element={<ThankYou />} 
        />
        <Route 
          path="/404" 
          element={<NotFoundPage />} 
        />
        {/* Redirect any unknown routes to 404 */}
        <Route 
          path="*" 
          element={<Navigate to="/404" replace />} 
        />
      </Routes>
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
