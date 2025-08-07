// src/hooks/useAnalytics.ts
import { useEffect } from 'react';

const trackEvent = (eventName: string, payload: Record<string, any>) => {
  console.log(`[Analytics] Event: ${eventName}`, payload);
};

const useAnalytics = () => {
  useEffect(() => {
    const startTime = Date.now();
    console.log('📊 PAGE_LOAD: User landed on page', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });

    // Track scroll behavior to see if users reach signup
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 75) {
        console.log('📈 SCROLL: User reached 75% of page');
      }
    };

    // Track time spent on page
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime;
      const signupElement = document.getElementById('signup');
      console.log('⏱️ EXIT: User leaving page', {
        timeOnPage: `${timeOnPage}ms`,
        scrollPosition: window.scrollY,
        reachedSignup: signupElement ? signupElement.getBoundingClientRect().top < window.innerHeight : false
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return trackEvent;
};

export { trackEvent };
export default useAnalytics;