// src/hooks/useSEO.ts

import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, getSocialUrl } from '../utils/canonicalUrl';

interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterImage?: string;
  canonicalUrl?: string;
  ogUrl?: string;
  noindex?: boolean;
}

interface SEOResult extends Required<Omit<SEOConfig, 'ogTitle' | 'ogDescription'>> {
  ogTitle: string;
  ogDescription: string;
}

/**
 * Hook to generate proper SEO meta tags with canonical URLs
 * Automatically handles canonical URLs for all deployment environments
 */
export const useSEO = (config: SEOConfig): SEOResult => {
  const location = useLocation();
  
  // Generate canonical URL for current page
  const canonicalUrl = config.canonicalUrl || getCanonicalUrl(location.pathname);
  const ogUrl = config.ogUrl || getSocialUrl(location.pathname);
  
  return {
    title: config.title,
    description: config.description,
    ogTitle: config.ogTitle || config.title,
    ogDescription: config.ogDescription || config.description,
    ogImage: config.ogImage || '/og-image.png',
    twitterCard: config.twitterCard || 'summary_large_image',
    twitterImage: config.twitterImage || config.ogImage || '/og-image.png',
    canonicalUrl,
    ogUrl,
    noindex: config.noindex || false,
  };
};

/**
 * Pre-configured SEO configs for common pages
 */
export const seoConfigs = {
  home: {
    title: 'PromptReady — One-click clean Markdown from any page',
    description: 'Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved. Runs locally. Pro adds optional validation with your key.',
  },
  demo: {
    title: 'PromptReady Demo — One‑click clean Markdown from any page',
    description: 'See PromptReady turn messy selections into AI‑ready Markdown/JSON with citations. Privacy‑first, runs locally. Pro adds optional BYOK validation using your key.',
  },
  pricing: {
    title: 'PromptReady Pricing — Free core local features • Pro $3/mo',
    description: 'Free forever core local features. Pro adds Prompt‑Ready Bundles and optional BYOK validation using your key (OpenRouter or manual base URL/model). No credit card required.',
  },
  thankYou: {
    title: 'Thank You — PromptReady',
    description: 'Thank you for your interest in PromptReady! We\'ll keep you updated on our progress.',
    noindex: true, // Don't index thank you pages
  },
  notFound: {
    title: 'Page Not Found — PromptReady',
    description: 'The page you\'re looking for doesn\'t exist. Return to PromptReady homepage.',
    noindex: true, // Don't index 404 pages
  },
} as const;

/**
 * Hook for common page SEO configurations
 */
export const usePageSEO = (pageKey: keyof typeof seoConfigs) => {
  return useSEO(seoConfigs[pageKey]);
};

export default useSEO;
