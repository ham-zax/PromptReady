// src/hooks/usePostHog.ts

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { env } from '../config';

/**
 * Hook to initialize PostHog analytics
 * Only initializes if analytics are enabled and PostHog key is provided
 */
export const usePostHog = () => {
  useEffect(() => {
    // Only initialize in production or when explicitly enabled
    if (!env.ANALYTICS_ENABLED || !env.POSTHOG_KEY) {
      if (env.DEV) {
        console.log('[PostHog] Analytics disabled or key missing');
      }
      return;
    }

    // Initialize PostHog
    try {
      posthog.init(env.POSTHOG_KEY, {
        api_host: env.POSTHOG_HOST,
        person_profiles: 'identified_only', // Only create profiles for identified users
        capture_pageview: true, // Automatically capture pageviews
        capture_pageleave: true, // Capture when users leave pages
        loaded: (posthog) => {
          if (env.DEV) {
            console.log('[PostHog] Successfully initialized');
            // Enable debug mode in development
            posthog.debug();
          }
        },
        // Privacy settings
        respect_dnt: true, // Respect Do Not Track
        opt_out_capturing_by_default: false,
        // Performance settings
        disable_session_recording: true, // Disable session recording for privacy
        disable_surveys: true, // Disable surveys
        autocapture: false, // Disable automatic event capture for better performance
      });

      if (env.DEV) {
        console.log('[PostHog] Initialization attempted with key:', env.POSTHOG_KEY.substring(0, 10) + '...');
      }
    } catch (error) {
      console.error('[PostHog] Failed to initialize:', error);
    }

    // Cleanup function
    return () => {
      try {
        posthog.reset();
      } catch (error) {
        console.error('[PostHog] Failed to cleanup:', error);
      }
    };
  }, []);

  return posthog;
};
