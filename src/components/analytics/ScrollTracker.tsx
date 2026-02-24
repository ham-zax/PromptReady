// src/components/analytics/ScrollTracker.tsx

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEnhancedAnalytics } from '../../hooks/useEnhancedAnalytics';

interface ScrollTrackerProps {
  children: React.ReactNode;
  milestones?: number[]; // Scroll percentages to track (default: [25, 50, 75, 90])
}

/**
 * Component that tracks scroll depth milestones and section views
 */
const ScrollTracker: React.FC<ScrollTrackerProps> = ({
  children,
  milestones = [25, 50, 75, 90],
}) => {
  const location = useLocation();
  const { trackScrollMilestone } = useEnhancedAnalytics();

  const trackedMilestones = useRef<Set<number>>(new Set());
  const pageStartTime = useRef<number>(Date.now());

  // Reset tracking when page changes
  useEffect(() => {
    trackedMilestones.current.clear();
    pageStartTime.current = Date.now();
  }, [location.pathname]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let throttleTimeout: NodeJS.Timeout | null = null;
    let lastKnownScrollTop = 0;
    let lastKnownWindowHeight = 0;
    let lastKnownDocumentHeight = 0;

    const calculateMilestones = () => {
      // Calculate scroll percentage using cached layout values
      if (lastKnownDocumentHeight === 0) return;

      const scrollPercentage = Math.round(
        ((lastKnownScrollTop + lastKnownWindowHeight) / lastKnownDocumentHeight) * 100,
      );

      // Track milestone achievements
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);

          // Debounce milestone tracking calls
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            trackScrollMilestone(milestone, location.pathname, {
              time_on_page: Date.now() - pageStartTime.current,
              scroll_speed: 'normal',
            });
          }, 500);
        }
      });
      throttleTimeout = null;
    };

    const handleScroll = () => {
      // Avoid querying layout properties in the scroll event directly to prevent forced reflows.
      // Instead, cache them and defer the math using setTimeout
      if (throttleTimeout) return;

      // Cache these right before we throttle, but reading them all at once is better than
      // interleaved reads/writes.
      lastKnownScrollTop = window.scrollY || document.documentElement.scrollTop;
      lastKnownWindowHeight = window.innerHeight;
      lastKnownDocumentHeight = document.documentElement.scrollHeight;

      throttleTimeout = setTimeout(calculateMilestones, 150);
    };

    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [location.pathname, milestones, trackScrollMilestone]);

  return <>{children}</>;
};

export default ScrollTracker;
