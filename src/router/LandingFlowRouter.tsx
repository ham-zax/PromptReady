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
      <LandingNavigation onPrimaryAction={onPrimaryAction} />
      <AnimatedRoutes onPrimaryAction={onPrimaryAction} />
      <FlowProgressIndicator />
    </Router>
  );
};

export default LandingFlowRouter;
