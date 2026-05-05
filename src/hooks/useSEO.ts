// src/hooks/useSEO.ts

import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, getSocialUrl } from '../utils/canonicalUrl';

export interface SEOConfig {
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

export interface SEOResult extends Required<Omit<SEOConfig, 'ogTitle' | 'ogDescription'>> {
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  robots: 'index,follow' | 'noindex,nofollow';
}

const toAbsoluteUrl = (value: string): string => {
  if (/^https?:\/\//i.test(value)) return value;
  const normalized = value.startsWith('/') ? value : `/${value}`;
  return getSocialUrl(normalized);
};

/**
 * Hook to generate proper SEO meta tags with canonical URLs
 * Automatically handles canonical URLs for all deployment environments
 * Includes conditional robots directive based on environment
 */
export const useSEO = (config: SEOConfig): SEOResult => {
  const location = useLocation();

  // Generate canonical URL for current page
  const canonicalUrl = config.canonicalUrl || getCanonicalUrl(location.pathname);
  const ogUrl = config.ogUrl || getSocialUrl(location.pathname);

  // Determine if this should be indexed based on environment
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const shouldIndex =
    import.meta.env.VITE_VERCEL_GIT_COMMIT_REF === 'main' ||
    hostname === 'promptready.app' ||
    hostname === 'www.promptready.app';
  const noindex = config.noindex !== undefined ? config.noindex : !shouldIndex;
  const ogImage = toAbsoluteUrl(config.ogImage || '/og-image.png');

  return {
    title: config.title,
    description: config.description,
    ogTitle: config.ogTitle || config.title,
    ogDescription: config.ogDescription || config.description,
    ogImage,
    twitterCard: config.twitterCard || 'summary_large_image',
    twitterImage: toAbsoluteUrl(config.twitterImage || ogImage),
    twitterTitle: config.ogTitle || config.title,
    twitterDescription: config.ogDescription || config.description,
    canonicalUrl,
    ogUrl,
    noindex,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
  };
};

/**
 * Pre-configured SEO configs for common pages
 */
export const seoConfigs = {
  home: {
    title: 'PromptReady — One-click clean Markdown for AI context',
    description:
      'Turn messy pages, docs, articles, and Reddit threads into clean Markdown for prompts, notes, and LLM workflows.',
  },
  demo: {
    title: 'PromptReady Demo — One-click clean Markdown',
    description:
      'See PromptReady turn noisy web content into clean, source-aware Markdown for articles, technical docs, and Reddit-style threads.',
  },
  pricing: {
    title: 'PromptReady Pricing — Get PromptReady free',
    description:
      'Get PromptReady free for core Markdown capture and export. Optional AI cleanup can use your own OpenRouter key.',
  },
  thankYou: {
    title: 'Thank You — PromptReady',
    description:
      "Thank you for your interest in PromptReady! We'll keep you updated on our progress.",
    noindex: true, // Don't index thank you pages
  },
  notFound: {
    title: 'Page Not Found — PromptReady',
    description: "The page you're looking for doesn't exist. Return to PromptReady homepage.",
    noindex: true, // Don't index 404 pages
  },
} as const;

/**
 * Hook for common page SEO configurations
 */
export const usePageSEO = (pageKey: keyof typeof seoConfigs) => {
  return useSEO(seoConfigs[pageKey]);
};
