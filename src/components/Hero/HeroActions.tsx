import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackHeroCtaClick } from '../../hooks/useAnalytics';
import { useFeatureFlag, FEATURE_FLAGS, FEATURE_FLAG_VALUES, trackFeatureFlagInteraction } from '../../hooks/useFeatureFlags';

interface HeroActionsProps {
  onPrimaryAction: () => void;
}

const HeroActions: React.FC<HeroActionsProps> = ({ onPrimaryAction }) => {
  // Get feature flag for CTA variant
  const ctaVariant = useFeatureFlag(FEATURE_FLAGS.HERO_CTA_VARIANT, { fallback: 'control' });

  // Define CTA text based on variant
  const getCtaText = () => {
    switch (ctaVariant) {
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_A:
        return 'Join the Waitlist';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_B:
        return 'Get Early Access';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_C:
        return 'Start Free Trial';
      default:
        return 'Get Early Access'; // Control/default
    }
  };

  // Memoize click handler to prevent unnecessary re-renders
  const handlePrimaryClick = React.useCallback(() => {
    // Track the feature flag interaction
    trackFeatureFlagInteraction(
      FEATURE_FLAGS.HERO_CTA_VARIANT,
      ctaVariant,
      'cta_click',
      { placement: 'hero_button', cta_text: getCtaText() }
    );

    trackHeroCtaClick({
      placement: 'hero_button',
      cta_variant: ctaVariant || 'control',
      cta_text: getCtaText()
    });
    onPrimaryAction();
  }, [onPrimaryAction, ctaVariant]);

  return (
    <>
      {/* Premium CTA and secondary actions */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handlePrimaryClick}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 motion-safe:transform-gpu"
        >
          {getCtaText()}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <Link
          to="/demo"
          className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-slate-700 shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-white hover:scale-105 hover:shadow-lg motion-safe:transform-gpu"
        >
          <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
          Watch 60-sec Demo
        </Link>
      </div>

      {/* Premium proof chips */}
      <div className="mx-auto mb-8 flex max-w-2xl flex-wrap justify-center gap-3 text-sm">
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">✨ Preserves code fences</span>
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">📝 Citations included</span>
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">🔒 Privacy‑first, local</span>
      </div>
    </>
  );
};

export default HeroActions;
