// src/components/analytics/SectionTracker.tsx

import React, { useEffect, useRef } from 'react';
import { useEnhancedAnalytics } from '../../hooks/useEnhancedAnalytics';

interface SectionTrackerProps {
  sectionName: string;
  sectionId?: string;
  threshold?: number; // Percentage of section that must be visible (0-1)
  trackOnce?: boolean; // Whether to track only the first view
  children: React.ReactNode;
}

/**
 * Component that tracks when a section comes into view using Intersection Observer
 */
const SectionTracker: React.FC<SectionTrackerProps> = ({
  sectionName,
  sectionId,
  threshold = 0.5,
  trackOnce = true,
  children,
}) => {
  const { trackSectionView } = useEnhancedAnalytics();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef<boolean>(false);
  const viewStartTime = useRef<number | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is coming into view
            if (!viewStartTime.current) {
              viewStartTime.current = Date.now();
            }

            // Track section view if not already tracked (or if trackOnce is false)
            if (!hasTracked.current || !trackOnce) {
              trackSectionView(sectionName, sectionId, viewStartTime.current);
              hasTracked.current = true;
            }
          } else {
            // Section is leaving view
            if (viewStartTime.current) {
              const timeInView = Date.now() - viewStartTime.current;
              
              // Track time spent in section if it was viewed for more than 1 second
              if (timeInView > 1000) {
                trackSectionView(`${sectionName}_time_spent`, sectionId, timeInView);
              }
              
              viewStartTime.current = null;
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px', // Trigger when section is 10% from bottom of viewport
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, sectionId, threshold, trackOnce, trackSectionView]); // FIXED: Added trackSectionView to dependencies

  return (
    <div 
      ref={sectionRef} 
      data-section={sectionName}
      id={sectionId}
    >
      {children}
    </div>
  );
};

export default SectionTracker;
