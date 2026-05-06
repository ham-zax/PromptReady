// src/hooks/useAnalytics.ts

import type { AnalyticsPayload } from '../types';

/**
 * Local analytics facade.
 *
 * Production site metrics are handled by Cloudflare at the domain layer. Keep
 * this function as a no-op in production so component event calls do not ship a
 * third-party analytics SDK.
 *
 * A simple utility function to log analytics events in development.
 * @param eventName - The name of the event to track.
 * @param payload - A data object associated with the event.
 */
export const trackEvent = (eventName: string, payload: AnalyticsPayload = {}) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, payload);
  }
};

// Convenience helpers for common events
export const trackHeroCtaClick = (extra: AnalyticsPayload = {}) =>
  trackEvent('hero_cta_click', extra);
export const trackDemoPlay = (extra: AnalyticsPayload = {}) => trackEvent('demo_play', extra);


export const trackUserEngagement = (
  action: string,
  element: string,
  extra: AnalyticsPayload = {},
) => trackEvent('user_engagement', { action, element, ...extra });
