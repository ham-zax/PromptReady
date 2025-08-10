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
  milestones = [25, 50, 75, 90] 
}) => {
  const location = useLocation();
  const { trackScrollMilestone, trackSectionView } = useEnhancedAnalytics();
  
  const trackedMilestones = useRef<Set<number>>(new Set());
  const trackedSections = useRef<Set<string>>(new Set());
  const pageStartTime = useRef<number>(Date.now());
  
  // Reset tracking when page changes
  useEffect(() => {
    trackedMilestones.current.clear();
    trackedSections.current.clear();
    pageStartTime.current = Date.now();
  }, [location.pathname]);

  useEffect(() => {
    let rafId: number;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Throttle scroll events using requestAnimationFrame
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Calculate scroll percentage
        const scrollPercentage = Math.round(
          ((scrollTop + windowHeight) / documentHeight) * 100
        );

        // Track milestone achievements
        milestones.forEach(milestone => {
          if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
            trackedMilestones.current.add(milestone);
            
            // Debounce milestone tracking
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              trackScrollMilestone(milestone, location.pathname, {
                time_on_page: Date.now() - pageStartTime.current,
                scroll_speed: 'normal', // Could be calculated based on scroll velocity
              });
            }, 500);
          }
        });

        // Track section views using Intersection Observer would be better,
        // but this provides a fallback for scroll-based section tracking
        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const sectionName = section.getAttribute('data-section');
          
          if (
            sectionName &&
            rect.top < windowHeight * 0.5 && // Section is at least 50% visible
            rect.bottom > windowHeight * 0.5 &&
            !trackedSections.current.has(sectionName)
          ) {
            trackedSections.current.add(sectionName);
            trackSectionView(
              sectionName,
              section.id,
              Date.now() - pageStartTime.current
            );
          }
        });

        rafId = 0;
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [location.pathname, milestones, trackScrollMilestone, trackSectionView]); // FIXED: Added missing dependencies

  return <>{children}</>;
};

export default ScrollTracker;

