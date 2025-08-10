// src/hooks/useFeatureFlags.ts

import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { trackEvent } from './useAnalytics';

// Define feature flag keys as constants for type safety
export const FEATURE_FLAGS = {
  // Hero section variants
  HERO_CTA_VARIANT: 'hero-cta-variant',
  HERO_HEADLINE_VARIANT: 'hero-headline-variant',
  
  // Pricing variants
  PRICING_DISPLAY_VARIANT: 'pricing-display-variant',
  PRICING_CTA_VARIANT: 'pricing-cta-variant',
  
  // Demo variants
  DEMO_PLACEMENT_VARIANT: 'demo-placement-variant',
  DEMO_AUTOPLAY_VARIANT: 'demo-autoplay-variant',
  
  // General UI variants
  NAVIGATION_STYLE_VARIANT: 'navigation-style-variant',
  FOOTER_CTA_VARIANT: 'footer-cta-variant',
} as const;

// Define possible values for each feature flag
export const FEATURE_FLAG_VALUES = {
  [FEATURE_FLAGS.HERO_CTA_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // "Join the Waitlist"
    VARIANT_B: 'variant-b', // "Get Early Access"
    VARIANT_C: 'variant-c', // "Start Free Trial"
  },
  [FEATURE_FLAGS.HERO_HEADLINE_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Original headline
    VARIANT_B: 'variant-b', // Benefit-focused headline
    VARIANT_C: 'variant-c', // Problem-focused headline
  },
  [FEATURE_FLAGS.PRICING_DISPLAY_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Standard pricing table
    VARIANT_B: 'variant-b', // Comparison table
    VARIANT_C: 'variant-c', // Simple pricing cards
  },
  [FEATURE_FLAGS.PRICING_CTA_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // "Choose Plan"
    VARIANT_B: 'variant-b', // "Get Started"
    VARIANT_C: 'variant-c', // "Start Now"
  },
  [FEATURE_FLAGS.DEMO_PLACEMENT_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Above fold
    VARIANT_B: 'variant-b', // Below hero
    VARIANT_C: 'variant-c', // Separate page
  },
  [FEATURE_FLAGS.DEMO_AUTOPLAY_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Autoplay enabled
    VARIANT_B: 'variant-b', // Click to play
  },
  [FEATURE_FLAGS.NAVIGATION_STYLE_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Minimal nav
    VARIANT_B: 'variant-b', // Full nav with CTA
  },
  [FEATURE_FLAGS.FOOTER_CTA_VARIANT]: {
    CONTROL: 'control',
    VARIANT_A: 'variant-a', // Newsletter signup
    VARIANT_B: 'variant-b', // Waitlist CTA
    VARIANT_C: 'variant-c', // Contact form
  },
} as const;

// Type definitions
export type FeatureFlagKey = keyof typeof FEATURE_FLAGS;
export type FeatureFlagValue<T extends FeatureFlagKey> = string;

interface UseFeatureFlagOptions {
  trackExposure?: boolean; // Whether to track when user is exposed to this flag
  fallback?: string; // Fallback value if flag is not available
}

/**
 * Hook to get a specific feature flag value
 */
export const useFeatureFlag = (
  flagKey: string,
  options: UseFeatureFlagOptions = {}
): string | null => {
  const posthog = usePostHog();
  const [flagValue, setFlagValue] = useState<string | null>(null);
  const [hasTrackedExposure, setHasTrackedExposure] = useState(false);
  
  const { trackExposure = true, fallback = 'control' } = options;

  useEffect(() => {
    if (!posthog) return;

    // Get the flag value
    const value = posthog.getFeatureFlag(flagKey) as string | null;
    const finalValue = value || fallback;
    
    setFlagValue(finalValue);

    // Track exposure to this feature flag (for analytics)
    if (trackExposure && !hasTrackedExposure && finalValue) {
      trackEvent('feature_flag_exposure', {
        flag_key: flagKey,
        flag_value: finalValue,
        timestamp: Date.now(),
      });
      setHasTrackedExposure(true);
    }
  }, [posthog, flagKey, trackExposure, hasTrackedExposure, fallback]);

  return flagValue;
};

/**
 * Hook to get multiple feature flags at once
 */
export const useFeatureFlags = (
  flagKeys: string[],
  options: UseFeatureFlagOptions = {}
): Record<string, string | null> => {
  const posthog = usePostHog();
  const [flags, setFlags] = useState<Record<string, string | null>>({});
  const [hasTrackedExposure, setHasTrackedExposure] = useState<Record<string, boolean>>({});
  
  const { trackExposure = true, fallback = 'control' } = options;

  useEffect(() => {
    if (!posthog) return;

    const flagValues: Record<string, string | null> = {};
    const exposureEvents: Array<{ flag_key: string; flag_value: string }> = [];

    flagKeys.forEach(flagKey => {
      const value = posthog.getFeatureFlag(flagKey) as string | null;
      const finalValue = value || fallback;
      flagValues[flagKey] = finalValue;

      // Track exposure if not already tracked
      if (trackExposure && !hasTrackedExposure[flagKey] && finalValue) {
        exposureEvents.push({
          flag_key: flagKey,
          flag_value: finalValue,
        });
      }
    });

    setFlags(flagValues);

    // Batch track all exposures
    if (exposureEvents.length > 0) {
      exposureEvents.forEach(({ flag_key, flag_value }) => {
        trackEvent('feature_flag_exposure', {
          flag_key,
          flag_value,
          timestamp: Date.now(),
        });
      });

      // Mark all as tracked
      const newTrackedState = { ...hasTrackedExposure };
      exposureEvents.forEach(({ flag_key }) => {
        newTrackedState[flag_key] = true;
      });
      setHasTrackedExposure(newTrackedState);
    }
  }, [posthog, flagKeys, trackExposure, hasTrackedExposure, fallback]);

  return flags;
};

/**
 * Hook to check if a feature flag is enabled (boolean flags)
 */
export const useFeatureFlagEnabled = (
  flagKey: string,
  options: UseFeatureFlagOptions = {}
): boolean => {
  const flagValue = useFeatureFlag(flagKey, options);
  return flagValue === 'true';
};

/**
 * Utility function to track feature flag interactions
 */
export const trackFeatureFlagInteraction = (
  flagKey: string,
  flagValue: string | null,
  interactionType: string,
  additionalData: Record<string, any> = {}
) => {
  trackEvent('feature_flag_interaction', {
    flag_key: flagKey,
    flag_value: flagValue || 'control',
    interaction_type: interactionType,
    timestamp: Date.now(),
    ...additionalData,
  });
};

export default useFeatureFlag;
