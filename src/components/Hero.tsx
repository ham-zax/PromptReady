import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/ui/Icons';
import HeroActions from './Hero/HeroActions';
import HeroBackground from './ui/HeroBackground';
import ContextAnimation from './ui/ContextAnimation';

interface HeroProps {
  onPrimaryAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-48 min-h-[90vh] flex items-center">
      <HeroBackground />
      <div className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full bg-brand-surface-soft" />
      <div className="pointer-events-none absolute -right-16 top-40 h-44 w-44 rounded-full bg-brand-surface-soft" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="linear-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-[1.05rem] text-brand-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            Cleaner input. Better model output.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="linear-display text-[clamp(3.2rem,9vw,6.2rem)] leading-[0.92] tracking-[0.01em] text-brand-ink relative"
          >
            Turn messy pages into
            <span className="block text-brand-accent relative inline-block">
              precise LLM context
              {/* Hand-drawn underline SVG under 'context' */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-4 text-brand-accent"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 Q 150 5 295 10 T 290 18 Q 150 8 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted sm:text-xl"
          >
            PromptReady extracts the useful parts, preserves structure, and gives you citation-ready
            text in one click.
            <br />
            <strong className="font-semibold text-brand-ink">No cleanup loops.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <HeroActions onPrimaryAction={onPrimaryAction} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative z-10"
        >
          <ContextAnimation />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mx-auto mt-12 w-full max-w-2xl px-4 text-xs font-medium text-brand-muted sm:text-sm"
          >
            <div className="flex flex-wrap justify-center gap-3 xl:flex-nowrap">
              <div className="flex w-fit items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2 sm:whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-success" />
                Preserves code fences
              </div>
              <div className="flex w-fit items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2 sm:whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Adds clean citations
              </div>
              <div className="sm:basis-full sm:flex sm:justify-center xl:basis-auto xl:block">
                <div className="flex w-fit items-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-4 py-2 sm:whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-ink" />
                  Privacy-first local parsing
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
