// src/utils/canonicalUrl.ts

/**
 * Canonical URL utilities for proper SEO handling across deployments
 * Ensures search engines always know the official domain is promptready.app
 */

// Production domain - this is your official domain
export const PRODUCTION_DOMAIN = 'https://promptready.app';

// Known deployment domains that should redirect to production
// Note: vercel.json uses regex .*\.vercel\.app to catch all Vercel deployments
// Note: public/_redirects handles Cloudflare Pages redirects
export const DEPLOYMENT_DOMAINS = [
  'https://promptready.vercel.app',
  'https://promptready.pages.dev',
  // All other *.vercel.app domains are handled by vercel.json regex
  // Cloudflare Pages redirects are handled by public/_redirects
];

/**
 * Get the canonical URL for the current page
 * Always returns the production domain URL regardless of where the site is accessed
 */
export const getCanonicalUrl = (pathname: string = '/'): string => {
  // Ensure pathname starts with /
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Always return production domain for canonical URL
  return `${PRODUCTION_DOMAIN}${cleanPath}`;
};

/**
 * Get the current page's canonical URL based on the current location
 */
export const getCurrentCanonicalUrl = (): string => {
  if (typeof window === 'undefined') {
    return PRODUCTION_DOMAIN;
  }
  
  return getCanonicalUrl(window.location.pathname);
};

/**
 * Check if the current domain is the production domain
 */
export const isProductionDomain = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return window.location.origin === PRODUCTION_DOMAIN;
};

/**
 * Check if the current domain is a deployment domain that should redirect
 */
export const isDeploymentDomain = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return DEPLOYMENT_DOMAINS.includes(window.location.origin);
};

/**
 * Get SEO-friendly URL for Open Graph and Twitter cards
 * Always uses production domain
 */
export const getSocialUrl = (pathname: string = '/'): string => {
  return getCanonicalUrl(pathname);
};

/**
 * Development utility to log canonical URL information
 */
export const logCanonicalInfo = () => {
  if (typeof window === 'undefined' || import.meta.env.PROD) {
    return;
  }
  
  console.group('🔗 Canonical URL Info');
  console.log('Current Origin:', window.location.origin);
  console.log('Current Pathname:', window.location.pathname);
  console.log('Canonical URL:', getCurrentCanonicalUrl());
  console.log('Is Production Domain:', isProductionDomain());
  console.log('Is Deployment Domain:', isDeploymentDomain());
  console.groupEnd();
};

// Auto-log in development
if (import.meta.env.DEV && typeof window !== 'undefined') {
  setTimeout(logCanonicalInfo, 1000);
}

export default {
  getCanonicalUrl,
  getCurrentCanonicalUrl,
  isProductionDomain,
  isDeploymentDomain,
  getSocialUrl,
  PRODUCTION_DOMAIN,
  DEPLOYMENT_DOMAINS,
};
