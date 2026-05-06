// src/hooks/useFeatureFlags.ts

import { useMemo } from 'react';
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
    VARIANT_A: 'variant-a', // "Get PromptReady free"
    VARIANT_B: 'variant-b', // "Get PromptReady free"
    VARIANT_C: 'variant-c', // "Get PromptReady free"
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
    VARIANT_B: 'variant-b', // Install CTA
    VARIANT_C: 'variant-c', // Contact form
  },
} as const;

interface UseFeatureFlagOptions {
  trackExposure?: boolean; // Whether to track when user is exposed to this flag
  fallback?: string; // Fallback value if flag is not available
}

/**
 * Hook to get a specific feature flag value
 */
export const useFeatureFlag = (
  _flagKey: string,
  options: UseFeatureFlagOptions = {},
): string | null => {
  return options.fallback ?? 'control';
};

/**
 * Hook to get multiple feature flags at once
 */
export const useFeatureFlags = (
  flagKeys: string[],
  options: UseFeatureFlagOptions = {},
): Record<string, string | null> => {
  const { fallback = 'control' } = options;

  return useMemo(
    () =>
      flagKeys.reduce<Record<string, string | null>>((flags, flagKey) => {
        flags[flagKey] = fallback;
        return flags;
      }, {}),
    [fallback, flagKeys],
  );
};

/**
 * Utility function to track feature flag interactions
 */
export const trackFeatureFlagInteraction = (
  flagKey: string,
  flagValue: string | null,
  interactionType: string,
  additionalData: Record<string, unknown> = {},
) => {
  trackEvent('feature_flag_interaction', {
    flag_key: flagKey,
    flag_value: flagValue || 'control',
    interaction_type: interactionType,
    timestamp: Date.now(),
    ...additionalData,
  });
};
