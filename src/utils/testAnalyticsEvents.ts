// src/utils/testAnalyticsEvents.ts

import { trackEvent } from '../hooks/useAnalytics';

/**
 * Development utility to test analytics events
 * This helps verify the funnel is working correctly
 */

export const sendTestEvents = () => {
  if (import.meta.env.PROD) {
    console.warn('Test events should not be sent in production');
    return;
  }

  console.group('🧪 Sending Test Analytics Events');

  // Test CTA click event
  trackEvent('cta_click', {
    cta_location: 'hero_button',
    cta_text: 'Get PromptReady free',
    cta_variant: 'control',
    placement: 'hero_button',
    timestamp: Date.now(),
  });
  console.log('✅ Sent test CTA click event');

  // Test conversion event (simulated)
  setTimeout(() => {
    trackEvent('conversion', {
      conversion_type: 'chrome_store_install_intent',
      conversion_value: 1,
      source_component: 'Hero',
      timestamp: Date.now(),
    });
    console.log('✅ Sent test conversion event');
  }, 1000);

  // Test section view events
  setTimeout(() => {
    trackEvent('section_view', {
      section_name: 'hero',
      section_id: 'hero-section',
      time_to_view: 500,
      timestamp: Date.now(),
    });
    console.log('✅ Sent test section view event');
  }, 2000);

  // Test scroll milestone
  setTimeout(() => {
    trackEvent('scroll_milestone', {
      scroll_percentage: 50,
      page_path: '/',
      time_on_page: 5000,
      timestamp: Date.now(),
    });
    console.log('✅ Sent test scroll milestone event');
  }, 3000);

  console.log('🎯 Test events sent! Check your PostHog dashboard in a few minutes.');
  console.groupEnd();
};

// Add to window for manual testing
if (import.meta.env.DEV) {
  (window as unknown as Record<string, unknown>).sendTestEvents = sendTestEvents;
  console.log('🧪 Test function available: window.sendTestEvents()');
}
