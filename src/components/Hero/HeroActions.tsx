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
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <button
          onClick={handlePrimaryClick}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-accent-hover bg-brand-accent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0"
        >
          <div className="flex items-center gap-2">
            {getCtaText()}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

        <Link
          to="/demo"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-surface px-8 py-4 text-base font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-surface-soft active:translate-y-0"
        >
          <div className="flex items-center gap-2">
            <Play className="h-5 w-5 text-brand-accent transition-transform group-hover:scale-110" />
            <span>Watch 60-sec Demo</span>
          </div>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-brand-muted sm:text-sm">
        <div className="flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-success" />
          Preserves code fences
        </div>
        <div className="flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
          Adds clean citations
        </div>
        <div className="flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-ink" />
          Privacy-first local parsing
        </div>
      </div>
    </div>
  );
};

export default HeroActions;
