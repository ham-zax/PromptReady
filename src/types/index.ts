// src/types/index.ts

/**
 * Common types and interfaces used throughout the application
 */

// Navigation types
export interface NavigationItem {
  name: string;
  path: string;
  id: string;
}

// Analytics types
export type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsPayload = Record<string, AnalyticsValue | Record<string, AnalyticsValue> | AnalyticsValue[]>;

// Component prop types
