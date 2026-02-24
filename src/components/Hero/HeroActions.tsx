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
          className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Gradient Background with shimmer on interaction only */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] group-hover:animate-[shimmer_1.6s_linear]" />

          {/* Button Content */}
          <div className="relative z-10 flex items-center gap-2">
            {getCtaText()}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-indigo-500 opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
        </button>

        <Link
          to="/demo"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Glass Background */}
          <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors group-hover:bg-white/10" />

          <div className="relative z-10 flex items-center gap-2">
            <Play className="h-5 w-5 text-indigo-400 transition-transform group-hover:scale-110" />
            <span>Watch 60-sec Demo</span>
          </div>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-300 sm:text-sm">
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 motion-safe:animate-pulse rounded-full bg-emerald-400" />
          Preserves code fences
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Adds clean citations
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Privacy-first local parsing
        </div>
      </div>
    </div>
  );
};

export default HeroActions;
