import React from 'react';
import { motion, Transition } from 'framer-motion';
import Logo from '../ui/Logo';
import { useFeatureFlag, FEATURE_FLAGS, FEATURE_FLAG_VALUES } from '../../hooks/useFeatureFlags';

interface HeroContentProps {
  spring: Transition;
}

const HeroContent: React.FC<HeroContentProps> = ({ spring }) => {
  // Get feature flag for headline variant
  const headlineVariant = useFeatureFlag(FEATURE_FLAGS.HERO_HEADLINE_VARIANT, { fallback: 'control' });

  // Define headline and description based on variant
  const getHeadlineContent = () => {
    switch (headlineVariant) {
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_HEADLINE_VARIANT].VARIANT_A:
        return {
          headline: "One-click clean Markdown from any page.",
          description: "Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved. Runs locally. Pro adds optional validation with your key."
        };
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_HEADLINE_VARIANT].VARIANT_B:
        return {
          headline: "Save hours with perfect AI-ready content.",
          description: "Extract clean, structured Markdown from any webpage in seconds. No more copy-paste cleanup — just perfect formatting for your AI workflows."
        };
      case FEATURE_FLAG_VALUES[FEATURE_FLAGS.HERO_HEADLINE_VARIANT].VARIANT_C:
        return {
          headline: "Stop wasting time on messy web content.",
          description: "Instantly transform cluttered web pages into clean, AI-ready Markdown. Preserve formatting, remove distractions, and get back to what matters."
        };
      default:
        return {
          headline: "One-click clean Markdown from any page.",
          description: "Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved. Runs locally. Pro adds optional validation with your key."
        };
    }
  };

  const { headline, description } = getHeadlineContent();

  return (
    <>
      {/* Subtle logo watermark */}
      <motion.div
        className="mb-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.05 }}
      >
        <Logo size="lg" background="subtle" />
      </motion.div>

      <motion.h1
        className="mb-4 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.1 }}
      >
        {headline}
      </motion.h1>

      <motion.p
        className="mx-auto mb-6 max-w-4xl text-lg font-medium text-slate-700 sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.18 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default HeroContent;
