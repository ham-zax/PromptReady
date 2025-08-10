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
  POSTHOG_KEY: import.meta.env.VITE_POSTHOG_KEY || '',
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

// UI configuration
export const ui = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  maxWidths: {
    content: '7xl', // max-w-7xl
    text: '4xl',     // max-w-4xl
    form: '2xl',     // max-w-2xl
  },
  colors: {
    primary: 'blue-600',
    secondary: 'slate-600',
    success: 'green-600',
    warning: 'yellow-600',
    error: 'red-600',
  },
} as const;

// SEO configuration
export const seo = {
  title: 'PromptReady - Copy clean, AI-ready text. Instantly.',
  description: 'One-click extension that turns any page into structured, distraction-free text for ChatGPT, Claude, or your LLM workflow — with private, on-device parsing.',
  ogTitle: 'PromptReady - Copy clean, AI-ready text. Instantly.',
  ogDescription: 'One-click extension that turns any page into structured, distraction-free text for ChatGPT, Claude, or your LLM workflow — with private, on-device parsing.',
  ogType: 'website',
  ogUrl: env.SITE_URL,
  canonicalUrl: env.SITE_URL,
} as const;

// Export environment variables
export { env };

// Export all configuration
export const config = {
  env,
  animations,
  ui,
  seo,
} as const;

export default config;
