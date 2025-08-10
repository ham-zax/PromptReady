# Canonical URL Implementation Guide

## 🎯 **The Problem Solved**

When you deploy the same site to both Vercel (e.g., `vire-promptready.vercel.app`) and your custom domain (`promptready.app`), search engines see duplicate content. This implementation ensures search engines always know that `promptready.app` is the official domain.

## ✅ **The Three-Step Solution Implemented**

### **Step 1: Multi-Platform Domain Configuration**

#### **Step 1a: Vercel Domain Configuration**
- **File**: `vercel.json`
- **Purpose**: Automatically redirects all Vercel URLs to your production domain
- **Implementation**: 301 redirects from all Vercel subdomains to `promptready.app`
- **SEO Protection**: Prevents indexing of preview/feature branch deployments

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{"type": "host", "value": ".*\\.vercel\\.app"}],
      "destination": "https://promptready.app/$1",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "if": "equals(system.env.VERCEL_GIT_COMMIT_REF, 'main')",
      "headers": [{"key": "X-Robots-Tag", "value": "index, follow"}]
    },
    {
      "source": "/(.*)",
      "if": "not(equals(system.env.VERCEL_GIT_COMMIT_REF, 'main'))",
      "headers": [{"key": "X-Robots-Tag", "value": "noindex, nofollow"}]
    }
  ]
}
```

#### **Step 1b: Cloudflare Pages Domain Configuration**
- **File**: `public/_redirects`
- **Purpose**: Automatically redirects the `promptready.pages.dev` URL to your production domain
- **Implementation**: A 301 redirect rule that captures all traffic to the Cloudflare deployment
- **Rationale**: Ensures complete coverage across all deployment platforms

```
# Cloudflare Pages redirect configuration
https://promptready.pages.dev/* https://promptready.app/:splat 301!
```

**Why This Matters:**
- **Complete Coverage**: Handles both Vercel and Cloudflare deployments
- **Platform Agnostic**: Your SEO strategy works regardless of hosting platform
- **Future-Proof**: Easy to add new deployment platforms as needed

### **Step 2: Dynamic Canonical URLs**
- **Files**: `src/utils/canonicalUrl.ts`, `src/hooks/useSEO.ts`
- **Purpose**: Automatically generates correct canonical URLs for every page
- **Implementation**: React hooks that always point to production domain

```typescript
// Always returns production domain regardless of where site is accessed
export const getCanonicalUrl = (pathname: string = '/'): string => {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `https://promptready.app${cleanPath}`;
};
```

### **Step 3: Page-Level Implementation**
- **Files**: All page components (`HomePage.tsx`, `DemoPage.tsx`, etc.)
- **Purpose**: Each page gets proper canonical URL in `<head>`
- **Implementation**: Dynamic SEO meta tags with correct canonical URLs

```jsx
const seo = usePageSEO('home');
<Helmet>
  <link rel="canonical" href={seo.canonicalUrl} />
  {/* Other meta tags */}
</Helmet>
```

## 🔧 **Technical Implementation**

### **Canonical URL Utility** (`src/utils/canonicalUrl.ts`)
- **Production Domain**: Always `https://promptready.app`
- **Dynamic Generation**: Automatically handles all page paths
- **Multi-Platform Support**: Tracks both Vercel and Cloudflare deployments
- **Development Logging**: Shows canonical URL info in dev console

### **SEO Hook** (`src/hooks/useSEO.ts`)
- **Pre-configured Pages**: Home, Demo, Pricing, Thank You, 404
- **Dynamic URLs**: Automatically generates canonical URLs based on current route
- **Complete Meta Tags**: Handles title, description, Open Graph, Twitter Cards

### **Page Integration**
Each page now uses the SEO hook:
```typescript
const HomePage = ({ onPrimaryAction }) => {
  const seo = usePageSEO('home');
  
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonicalUrl} />
      {/* Always points to https://promptready.app/ */}
    </Helmet>
  );
};
```

## 🌐 **How It Works**

### **For Search Engines:**
1. **Vercel URLs**: Automatically redirect to `promptready.app` (301 redirect)
2. **Cloudflare URLs**: Automatically redirect to `promptready.app` (301 redirect)
3. **Canonical Tags**: Every page explicitly states the official URL
4. **Production Indexing**: Only main branch deployments are indexed
5. **Preview Protection**: Feature branches are marked `noindex, nofollow`
6. **Consistent Signals**: All SEO signals point to production domain

### **For Users:**
1. **Seamless Experience**: Redirects happen automatically
2. **Correct URLs**: Always see the official domain in browser
3. **No Broken Links**: All internal links work correctly

### **For Development:**
1. **Console Logging**: See canonical URL info in dev mode
2. **Easy Testing**: Test different domains and see canonical URLs
3. **Type Safety**: TypeScript ensures correct implementation

## 📊 **SEO Benefits**

### **Prevents Duplicate Content Issues**
- Search engines know which URL is official
- All ranking signals consolidate to production domain
- No penalty for duplicate content

### **Improves Search Rankings**
- Concentrated link equity to single domain
- Clear site structure for search engines
- Better crawling and indexing

### **Protects Preview Deployments**
- Feature branches are marked `noindex, nofollow`
- Prevents unfinished work from appearing in search results
- Maintains clean search presence during development

### **Professional Appearance**
- Users always see official domain
- Consistent branding across all touchpoints
- Clean, professional URLs

## 🧪 **Testing Your Implementation**

### **Development Testing**
1. Run `npm run dev`
2. Check browser console for canonical URL logs
3. Verify canonical URLs in page source

### **Production Testing**
1. Deploy to Vercel
2. Visit Vercel URL - should redirect to `promptready.app`
3. Check canonical tags in page source
4. Test with SEO tools (Google Search Console, etc.)

### **SEO Validation**
1. **Google Search Console**: Verify canonical URLs are recognized
2. **SEO Tools**: Use tools like Screaming Frog to audit canonical tags
3. **Manual Check**: View page source and confirm canonical URLs

## 🚀 **Deployment Checklist**

- [ ] `vercel.json` configured with redirects and branch-based indexing
- [ ] `public/_redirects` configured for Cloudflare Pages
- [ ] All pages use `usePageSEO` hook
- [ ] Canonical URLs point to `promptready.app`
- [ ] Test redirects from Vercel URLs
- [ ] Test redirects from Cloudflare Pages URLs
- [ ] Verify canonical tags in page source
- [ ] Submit updated sitemap to Google Search Console

## 📈 **Expected Results**

### **Immediate (1-2 weeks)**
- Vercel URLs redirect to production domain
- Canonical tags appear in page source
- Search Console shows canonical URLs

### **Medium-term (1-2 months)**
- Search engines consolidate rankings to production domain
- Improved search visibility
- Better click-through rates from search

### **Long-term (3+ months)**
- Stronger domain authority
- Higher search rankings
- Increased organic traffic

This implementation ensures your SEO is bulletproof across all deployment environments! 🎯
