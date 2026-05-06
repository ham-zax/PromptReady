// src/config/index.ts

/**
 * Application configuration
 * Centralizes all configuration values and environment variables
 */

// Environment variables with defaults
const chromeStoreUrl =
  'https://chromewebstore.google.com/detail/promptready/inghgabddmlnmlgnjedkcleelonkggkg';

const env = {
  // App environment
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  DEV: import.meta.env.DEV || false,
  PROD: import.meta.env.PROD || false,

  // External URLs
  CHROME_STORE_URL: import.meta.env.VITE_CHROME_STORE_URL || chromeStoreUrl,
  FEEDBACK_URL: import.meta.env.VITE_FEEDBACK_URL || 'mailto:contact@promptready.app',

  // Site URLs
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://promptready.app',

} as const;



// Export environment variables
export { env };
