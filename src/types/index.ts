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
export type AnalyticsValue = string | number | boolean;
export type AnalyticsPayload = Record<string, AnalyticsValue>;

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ActionComponentProps extends BaseComponentProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

// Animation types
export interface SpringTransition {
  type: 'spring';
  stiffness: number;
  damping: number;
}

// Form types
export interface FormState<T = Record<string, unknown>> {
  data: T;
  isSubmitting: boolean;
  errors: Record<string, string>;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Theme types
export type ThemeMode = 'light' | 'dark';
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

// Size variants
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Status types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';
