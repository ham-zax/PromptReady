# PostHog Feature Flags Setup Guide

This guide will help you set up feature flags in PostHog for A/B testing your PromptReady landing page.

## 🚀 Quick Setup

### 1. Access PostHog Feature Flags
1. Go to [PostHog Dashboard](https://us.posthog.com/project/199797)
2. Navigate to **Feature Flags** in the left sidebar
3. Click **New Feature Flag**

### 2. Create Hero CTA Variant Flag

**Flag Key:** `hero-cta-variant`
**Name:** Hero CTA A/B Test
**Description:** Test different CTA button text variants on the hero section

**Variants:**
- `control` (25%) - "Get Early Access" (default)
- `variant-a` (25%) - "Join the Waitlist"
- `variant-b` (25%) - "Get Early Access" 
- `variant-c` (25%) - "Start Free Trial"

**Release Conditions:**
- Set to 100% of users
- Use **Percentage rollout** with equal distribution

### 3. Create Hero Headline Variant Flag

**Flag Key:** `hero-headline-variant`
**Name:** Hero Headline A/B Test
**Description:** Test different headline approaches

**Variants:**
- `control` (25%) - Original headline
- `variant-a` (25%) - Original headline
- `variant-b` (25%) - Benefit-focused headline
- `variant-c` (25%) - Problem-focused headline

### 4. Create Additional Flags (Optional)

You can also create these flags for future testing:

- `pricing-display-variant` - Test different pricing table layouts
- `demo-placement-variant` - Test video demo placement
- `navigation-style-variant` - Test navigation styles

## 📊 Monitoring Results

### Dashboard Access
Your custom analytics dashboard: https://us.posthog.com/project/199797/dashboard/501055

### Key Metrics to Watch
1. **Feature Flag Performance** - Compare click rates across variants
2. **Landing Page Conversion Funnel** - Track user journey
3. **Section Engagement Analysis** - See which sections perform best
4. **Scroll Depth Analysis** - Understand user engagement

## 🧪 Testing Your Setup

### Development Testing
1. Run `npm run dev`
2. Open browser console
3. Look for "🧪 Feature Flags Test" log group
4. Verify PostHog is loaded and flags are working

### Manual Testing
In browser console, you can override flags for testing:
```javascript
// Test different CTA variants
window.posthog.featureFlags.override({"hero-cta-variant": "variant-a"});

// Test different headlines
window.posthog.featureFlags.override({"hero-headline-variant": "variant-b"});

// Reset overrides
window.posthog.featureFlags.override({});
```

Then refresh the page to see changes.

## 📈 Analytics Events

The implementation automatically tracks:

- `feature_flag_exposure` - When users see a variant
- `feature_flag_interaction` - When users interact with variant elements
- `cta_click` - CTA clicks with variant context
- `section_view` - Section engagement
- `scroll_milestone` - Scroll depth tracking

## 🔧 Code Integration

The feature flags are integrated into:

- **Hero CTA Button** (`src/components/Hero/HeroActions.tsx`)
- **Hero Headlines** (`src/components/Hero/HeroContent.tsx`)
- **Analytics Tracking** (`src/hooks/useEnhancedAnalytics.ts`)

## 📝 Best Practices

1. **Start Small** - Begin with one flag (hero CTA) and expand
2. **Equal Distribution** - Use 25% for each variant for clear results
3. **Statistical Significance** - Wait for enough data before making decisions
4. **Monitor Closely** - Check dashboard daily during active tests
5. **Document Results** - Keep notes on what works and what doesn't

## 🚨 Troubleshooting

### Feature Flags Not Working?
1. Check PostHog is loaded: `window.posthog` in console
2. Verify flag keys match exactly (case-sensitive)
3. Check browser network tab for PostHog requests
4. Ensure `VITE_PUBLIC_POSTHOG_KEY` is set in environment

### No Data in Dashboard?
1. Verify events are being sent (check browser network tab)
2. Wait a few minutes for data to appear
3. Check date range in dashboard filters
4. Ensure you're looking at the correct project

## 📞 Support

If you need help:
1. Check PostHog documentation: https://posthog.com/docs/feature-flags
2. Review the implementation in the codebase
3. Check browser console for errors
4. Verify environment variables are set correctly
