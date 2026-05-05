import React from 'react';
import { ArrowRight, Play } from '@/components/ui/Icons';
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
        return 'Get PromptReady free';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_B:
        return 'Get PromptReady free';
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_CTA_VARIANT].VARIANT_C:
        return 'Get PromptReady free';
      default:
        return 'Get PromptReady free';
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
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <button
        onClick={handlePrimaryClick}
        className="group border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
      >
        <div className="flex items-center gap-2">
          {getCtaText()}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </div>
      </button>

      <Link
        to="/demo"
        className="group border-brand-border bg-brand-surface text-brand-ink hover:bg-brand-surface-soft inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
      >
        <div className="flex items-center gap-2">
          <Play className="text-brand-accent h-5 w-5 transition-transform group-hover:scale-110" />
          <span>Watch Demo</span>
        </div>
      </Link>
    </div>
  );
};

export default HeroActions;
