// src/hooks/useAnalytics.ts

import { track as vercelTrack } from '@vercel/analytics';

type AnalyticsValue = string | number | boolean;
type AnalyticsPayload = Record<string, AnalyticsValue>;

/**
 * Minimal PostHog shim — sends events to PostHog if available on window.
 */
const posthogCapture = (eventName: string, payload: AnalyticsPayload) => {
  try {
    const w = window as unknown as {
      posthog?: { capture?: (name: string, props?: AnalyticsPayload) => void };
    };
    if (w?.posthog?.capture) {
      w.posthog.capture(eventName, payload);
    }
  } catch (e) {
    // no-op
  }
};

/**
 * A simple utility function to log analytics events.
 * Expandable to any service (PostHog, Umami, Vercel, etc.).
 * @param eventName - The name of the event to track.
 * @param payload - A data object associated with the event.
 */
export const trackEvent = (eventName: string, payload: AnalyticsPayload = {}) => {
  try {
    if (import.meta && import.meta.env && import.meta.env.DEV) {
      // Dev-only log to avoid noise in production
      // eslint-disable-next-line no-console
      console.log(`[Analytics] Event: ${eventName}`, payload);
    }
    vercelTrack(eventName, payload);
    posthogCapture(eventName, payload);
  } catch (e) {
    // swallow analytics errors
  }
};

// Convenience helpers for common events
export const trackHeroCtaClick = (extra: AnalyticsPayload = {}) =>
  trackEvent('hero_cta_click', extra);
export const trackDemoPlay = (extra: AnalyticsPayload = {}) => trackEvent('demo_play', extra);
export const trackWaitlistSubmit = (extra: AnalyticsPayload = {}) =>
  trackEvent('waitlist_submit', extra);
export const trackLiveCleanUsed = (extra: AnalyticsPayload = {}) =>
  trackEvent('live_clean_used', extra);
