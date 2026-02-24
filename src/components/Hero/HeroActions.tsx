import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackHeroCtaClick } from '../../hooks/useAnalytics';
import {
  FEATURE_FLAGS,
  FEATURE_FLAG_VALUES,
  trackFeatureFlagInteraction,
  useFeatureFlag,
} from '../../hooks/useFeatureFlags';

interface HeroActionsProps {
  onPrimaryAction: () => void;
}

const HeroActions: React.FC<HeroActionsProps> = ({ onPrimaryAction }) => {
  const ctaVariant = useFeatureFlag(FEATURE_FLAGS.HERO_CTA_VARIANT, { fallback: 'control' });

  const getCtaText = React.useCallback(() => {
    switch (ctaVariant) {
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_A:
        return 'Join the Waitlist';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_B:
        return 'Get Early Access';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_C:
        return 'Start Free Trial';
      default:
        return 'Get Early Access';
    }
  }, [ctaVariant]);

  const handlePrimaryClick = React.useCallback(() => {
    const ctaText = getCtaText();

    trackFeatureFlagInteraction(FEATURE_FLAGS.HERO_CTA_VARIANT, ctaVariant, 'cta_click', {
      placement: 'hero_button',
      cta_text: ctaText,
    });

    trackHeroCtaClick({
      placement: 'hero_button',
      cta_variant: ctaVariant || 'control',
      cta_text: ctaText,
    });

    onPrimaryAction();
  }, [onPrimaryAction, ctaVariant, getCtaText]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={handlePrimaryClick}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_-16px_rgba(38,70,83,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-charcoal-400"
        >
          {getCtaText()}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <Link
          to="/demo"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white/90 px-7 py-3.5 text-base font-semibold text-charcoal-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-charcoal-400"
        >
          <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
          Watch 60-sec Demo
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5 text-xs font-medium text-slate-700 sm:text-sm">
        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5">
          Preserves code fences
        </span>
        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5">
          Adds clean citations
        </span>
        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5">
          Privacy-first local parsing
        </span>
      </div>
    </>
  );
};

export default HeroActions;
