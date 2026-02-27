import React from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { 
  trackLandingFlowStep, 
  trackLandingFlowConversion, 
  trackPageTransition,
  trackFunnelProgress,
  trackEvent
} from './useAnalytics';

interface FlowStep {
  path: string;
  name: string;
  stepNumber: number;
}

const FLOW_STEPS: FlowStep[] = [
  { path: '/', name: 'home', stepNumber: 1 },
  { path: '/demo', name: 'demo', stepNumber: 2 },
  { path: '/pricing', name: 'pricing', stepNumber: 3 },
  { path: '/thank-you', name: 'conversion', stepNumber: 4 },
];

export const useLandingFlowAnalytics = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [previousPath, setPreviousPath] = React.useState<string | null>(null);
  const [sessionStartTime] = React.useState<number>(Date.now());
  const [pageStartTime, setPageStartTime] = React.useState<number>(Date.now());

  // Track page views and flow progression
  React.useEffect(() => {
    const currentStep = FLOW_STEPS.find(step => step.path === location.pathname);
    const previousStep = previousPath ? FLOW_STEPS.find(step => step.path === previousPath) : null;

    // Track basic page view
    trackEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
      navigation_type: navigationType,
      session_duration: Date.now() - sessionStartTime,
    });

    // Track landing flow step
    if (currentStep) {
      trackLandingFlowStep(currentStep.name, {
        step_number: currentStep.stepNumber,
        path: location.pathname,
        navigation_type: navigationType,
      });

      // Track funnel progress
      trackFunnelProgress(currentStep.name, currentStep.stepNumber, {
        total_steps: FLOW_STEPS.length,
        progress_percentage: (currentStep.stepNumber / FLOW_STEPS.length) * 100,
      });
    }

    // Track conversions between steps
    if (previousStep && currentStep && previousStep.stepNumber < currentStep.stepNumber) {
      trackLandingFlowConversion(previousStep.name, currentStep.name, {
        from_step_number: previousStep.stepNumber,
        to_step_number: currentStep.stepNumber,
        time_on_previous_page: Date.now() - pageStartTime,
      });
    }

    // Track page transitions
    if (previousPath && previousPath !== location.pathname) {
      trackPageTransition(previousPath, location.pathname, {
        time_on_previous_page: Date.now() - pageStartTime,
        navigation_type: navigationType,
      });
    }

    // Update state for next transition
    setPreviousPath(location.pathname);
    setPageStartTime(Date.now());
  }, [location.pathname, navigationType, previousPath, sessionStartTime, pageStartTime]);

  // Track scroll depth with performance optimizations
  React.useEffect(() => {
    let maxScrollDepth = 0;
    let scrollTimeout: NodeJS.Timeout;
    let rafId: number;
    let isScrolling = false;

    // Cache layout properties to avoid repeated reads
    let cachedWindowHeight = window.innerHeight;
    let cachedDocumentHeight = document.documentElement.scrollHeight;

    // Update cached values on resize
    const updateCachedValues = () => {
      cachedWindowHeight = window.innerHeight;
      cachedDocumentHeight = document.documentElement.scrollHeight;
    };

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        rafId = requestAnimationFrame(() => {
          // Read layout properties only once per frame
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollDepth = Math.round(((scrollTop + cachedWindowHeight) / cachedDocumentHeight) * 100);

          if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;

            // Debounce scroll tracking
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              trackEvent('scroll_depth', {
                page_path: location.pathname,
                scroll_depth: maxScrollDepth,
                max_scroll_depth: maxScrollDepth,
              });
            }, 1000);
          }

          isScrolling = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCachedValues, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCachedValues);
      clearTimeout(scrollTimeout);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Track final scroll depth on page leave
      if (maxScrollDepth > 0) {
        trackEvent('page_exit', {
          page_path: location.pathname,
          final_scroll_depth: maxScrollDepth,
          time_on_page: Date.now() - pageStartTime,
        });
      }
    };
  }, [location.pathname, pageStartTime]);

  // Utility functions for manual tracking
  const trackCTAClick = (ctaLocation: string, ctaText: string) => {
    const currentStep = FLOW_STEPS.find(step => step.path === location.pathname);
    
    trackEvent('cta_click', {
      cta_location: ctaLocation,
      cta_text: ctaText,
      page_path: location.pathname,
      current_step: currentStep?.name,
      step_number: currentStep?.stepNumber,
      time_on_page: Date.now() - pageStartTime,
    });
  };

  const trackSectionView = (sectionName: string) => {
    const currentStep = FLOW_STEPS.find(step => step.path === location.pathname);
    
    trackEvent('section_view', {
      section_name: sectionName,
      page_path: location.pathname,
      current_step: currentStep?.name,
      step_number: currentStep?.stepNumber,
    });
  };

  const trackUserInteraction = (interactionType: string, element: string, value?: string | number) => {
    const currentStep = FLOW_STEPS.find(step => step.path === location.pathname);
    
    trackEvent('user_interaction', {
      interaction_type: interactionType,
      element,
      value,
      page_path: location.pathname,
      current_step: currentStep?.name,
      step_number: currentStep?.stepNumber,
      time_on_page: Date.now() - pageStartTime,
    });
  };

  const getCurrentStep = () => {
    return FLOW_STEPS.find(step => step.path === location.pathname);
  };

  const getFlowProgress = () => {
    const currentStep = getCurrentStep();
    if (!currentStep) return { stepNumber: 0, totalSteps: FLOW_STEPS.length, percentage: 0 };
    
    return {
      stepNumber: currentStep.stepNumber,
      totalSteps: FLOW_STEPS.length,
      percentage: (currentStep.stepNumber / FLOW_STEPS.length) * 100,
    };
  };

  return {
    trackCTAClick,
    trackSectionView,
    trackUserInteraction,
    getCurrentStep,
    getFlowProgress,
    sessionStartTime,
    pageStartTime,
  };
};

export default useLandingFlowAnalytics;