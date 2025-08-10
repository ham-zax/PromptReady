// src/hooks/useAnalytics.ts

import { track as vercelTrack } from '@vercel/analytics';
import posthog from 'posthog-js';
import type { AnalyticsPayload } from '../types';
import { env } from '../config';

/**
 * PostHog event capture with proper error handling
 */
const posthogCapture = (eventName: string, payload: AnalyticsPayload) => {
  try {
    // Only capture if analytics are enabled and PostHog is initialized
    if (env.ANALYTICS_ENABLED && env.POSTHOG_KEY) {
      // Check if PostHog is available and initialized
      if (typeof posthog !== 'undefined' && posthog.capture) {
        posthog.capture(eventName, payload);
        if (env.DEV) {
          console.log('[PostHog] Event captured:', eventName, payload);
        }
      } else if (env.DEV) {
        console.warn('[PostHog] PostHog not ready, event not captured:', eventName);
      }
    } else if (env.DEV) {
      console.warn('[PostHog] Analytics disabled or key missing:', {
        enabled: env.ANALYTICS_ENABLED,
        hasKey: !!env.POSTHOG_KEY
      });
    }
  } catch (error) {
    if (env.DEV) {
      console.warn('[PostHog] Failed to capture event:', eventName, error);
    }
  }
};

/**
 * Clean payload for Vercel Analytics (remove undefined values)
 */
const cleanPayloadForVercel = (payload: AnalyticsPayload) => {
  const cleaned: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== null) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        cleaned[key] = value;
      } else if (typeof value === 'object') {
        cleaned[key] = JSON.stringify(value);
      }
    }
  }
  return cleaned;
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
      console.log(`[Analytics] Event: ${eventName}`, payload);
    }

    // Send to Vercel Analytics with cleaned payload
    const cleanedPayload = cleanPayloadForVercel(payload);
    vercelTrack(eventName, cleanedPayload);

    // Send to PostHog with original payload
    posthogCapture(eventName, payload);
  } catch {
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

// Landing Flow Analytics
export const trackLandingFlowStep = (step: string, extra: AnalyticsPayload = {}) =>
  trackEvent('landing_flow_step', { step, ...extra });

export const trackLandingFlowConversion = (
  fromStep: string,
  toStep: string,
  extra: AnalyticsPayload = {}
) =>
  trackEvent('landing_flow_conversion', { from_step: fromStep, to_step: toStep, ...extra });

export const trackPageTransition = (
  fromPage: string,
  toPage: string,
  extra: AnalyticsPayload = {}
) =>
  trackEvent('page_transition', { from_page: fromPage, to_page: toPage, ...extra });

export const trackNavigationClick = (
  destination: string,
  source: string,
  extra: AnalyticsPayload = {}
) =>
  trackEvent('navigation_click', { destination, source, ...extra });

export const trackFunnelProgress = (
  funnelStep: string,
  stepNumber: number,
  extra: AnalyticsPayload = {}
) =>
  trackEvent('funnel_progress', { funnel_step: funnelStep, step_number: stepNumber, ...extra });

export const trackUserEngagement = (
  action: string,
  element: string,
  extra: AnalyticsPayload = {}
) =>
  trackEvent('user_engagement', { action, element, ...extra });
