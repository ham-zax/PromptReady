import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOResult } from '../../hooks/useSEO';

interface SEOHeadProps {
  seo: SEOResult;
  ogType?: string;
}

const upsertMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertAlternate = (hrefLang: 'en' | 'x-default', href: string) => {
  const selector = `link[rel="alternate"][hreflang="${hrefLang}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'alternate');
    el.setAttribute('hreflang', hrefLang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SEOHead: React.FC<SEOHeadProps> = ({ seo, ogType = 'website' }) => {
  React.useEffect(() => {
    document.title = seo.title;
    upsertMetaTag('name', 'description', seo.description);
    upsertMetaTag('name', 'robots', seo.robots);

    upsertCanonical(seo.canonicalUrl);
    upsertAlternate('en', seo.canonicalUrl);
    upsertAlternate('x-default', seo.canonicalUrl);

    upsertMetaTag('property', 'og:type', ogType);
    upsertMetaTag('property', 'og:site_name', 'PromptReady');
    upsertMetaTag('property', 'og:locale', 'en_US');
    upsertMetaTag('property', 'og:title', seo.ogTitle);
    upsertMetaTag('property', 'og:description', seo.ogDescription);
    upsertMetaTag('property', 'og:url', seo.ogUrl);
    upsertMetaTag('property', 'og:image', seo.ogImage);
    upsertMetaTag(
      'property',
      'og:image:alt',
      'PromptReady UI showing messy content transformed into clean context',
    );

    upsertMetaTag('name', 'twitter:card', seo.twitterCard);
    upsertMetaTag('name', 'twitter:title', seo.twitterTitle);
    upsertMetaTag('name', 'twitter:description', seo.twitterDescription);
    upsertMetaTag('name', 'twitter:image', seo.twitterImage);
  }, [ogType, seo]);

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <link rel="canonical" href={seo.canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={seo.canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={seo.canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="PromptReady" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.ogUrl} />
      <meta property="og:image" content={seo.ogImage} />
      <meta
        property="og:image:alt"
        content="PromptReady UI showing messy content transformed into clean context"
      />
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.twitterImage} />
    </Helmet>
  );
};

export default SEOHead;
