// src/utils/testFeatureFlags.ts

import { FEATURE_FLAGS, FEATURE_FLAG_VALUES } from '../hooks/useFeatureFlags';

/**
 * Development utility to test feature flags
 * This file is only imported in development mode
 */

export const testFeatureFlags = () => {
  if (import.meta.env.PROD) return;

  console.group('🧪 Feature Flags Test');
  
  // Test feature flag constants
  console.log('Available feature flags:', FEATURE_FLAGS);
  console.log('Feature flag values:', FEATURE_FLAG_VALUES);
  
  // Test PostHog connection
  if (window.posthog) {
    console.log('✅ PostHog is loaded');
    
    // Test getting feature flags
    Object.values(FEATURE_FLAGS).forEach(flagKey => {
      const value = window.posthog.getFeatureFlag(flagKey);
      console.log(`Flag "${flagKey}":`, value || 'not set (will use control)');
    });
    
    // Test manual feature flag override (for testing)
    console.log('\n🔧 To test different variants, run in console:');
    console.log('window.posthog.featureFlags.override({"hero-cta-variant": "variant-a"})');
    console.log('Then refresh the page to see the changes.');
    
  } else {
    console.log('⚠️ PostHog not loaded yet');
  }
  
  console.groupEnd();
};

// Auto-run in development
if (import.meta.env.DEV) {
  // Wait for PostHog to load
  setTimeout(testFeatureFlags, 2000);
}

export default testFeatureFlags;
