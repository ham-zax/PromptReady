// src/utils/testFeatureFlags.ts

import { FEATURE_FLAGS, FEATURE_FLAG_VALUES } from '../hooks/useFeatureFlags';

/**
 * Development utility to test feature flags
 * This file is only imported in development mode
 */

export const testFeatureFlags = () => {
  if (import.meta.env.PROD) return;

  console.group('Feature Flags Test');
  
  // Test feature flag constants
  console.log('Available feature flags:', FEATURE_FLAGS);
  console.log('Feature flag values:', FEATURE_FLAG_VALUES);
  
  Object.values(FEATURE_FLAGS).forEach((flagKey) => {
    console.log(`Flag "${flagKey}": control`);
  });
  
  console.groupEnd();
};

// Auto-run in development
if (import.meta.env.DEV) {
  testFeatureFlags();
}
