// src/config/index.ts

/**
 * Application configuration
 * Centralizes all configuration values and environment variables
 */

// Environment variables with defaults
const env = {
  // App environment
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  DEV: import.meta.env.DEV || false,
  PROD: import.meta.env.PROD || false,

  // External URLs
  WAITLIST_URL: import.meta.env.VITE_WAITLIST_URL || 'https://waitlister.me/p/promptready',
  INTERVIEW_URL: import.meta.env.VITE_INTERVIEW_URL || 'https://cal.com/your-handle/15min',
  FEEDBACK_URL: import.meta.env.VITE_FEEDBACK_URL || 'https://forms.gle/your-form-id',
  
  // Site URLs
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://promptready.app',
  
  // Analytics
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  POSTHOG_KEY: import.meta.env.VITE_PUBLIC_POSTHOG_KEY || '',
  POSTHOG_HOST: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
} as const;

// Animation configuration
export const animations = {
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 26,
  },
  delays: {
    badge1: 0.05,
    badge2: 0.12,
    badge3: 0.18,
    logo: 0.05,
    title: 0.1,
    description: 0.18,
    mode1: 0.05,
    mode2: 0.12,
  },
  durations: {
    carousel: 5000, // 5 seconds
    shimmer: 2000, // 2 seconds
  },
} as const;

// Export environment variables
export { env };
