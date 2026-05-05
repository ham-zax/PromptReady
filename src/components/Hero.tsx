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
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-48 lg:pb-28"
    >
      <HeroBackground />
      <div className="bg-brand-surface-soft pointer-events-none absolute top-8 -left-20 h-52 w-52 rounded-full" />
      <div className="bg-brand-surface-soft pointer-events-none absolute top-40 -right-16 h-44 w-44 rounded-full" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="linear-kicker border-brand-border bg-brand-surface text-brand-muted mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[1.05rem]"
          >
            <Sparkles className="text-brand-accent h-3.5 w-3.5" />
            One click. Clean Markdown. Better context.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="linear-display text-brand-ink relative text-[clamp(3.2rem,9vw,6.2rem)] leading-[0.92] tracking-[0.01em]"
          >
            Turn messy web pages into
            <span className="text-brand-accent relative block inline-block">
              prompt-ready Markdown
              {/* Hand-drawn underline SVG under 'context' */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                className="text-brand-accent absolute -bottom-2 left-0 h-4 w-full"
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
            className="text-brand-muted mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
          >
            PromptReady extracts the useful parts, preserves structure, and gives you clean Markdown
            in one click.
            <br />
            <strong className="text-brand-ink font-semibold">
              Use it for articles, docs, Reddit threads, research, and everyday AI prompts.
            </strong>
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
            className="text-brand-muted mx-auto mt-12 w-full max-w-2xl px-4 text-xs font-medium sm:text-sm"
          >
            <div className="flex flex-wrap justify-center gap-3 xl:flex-nowrap">
              <div className="border-brand-border bg-brand-surface-soft flex w-fit items-center gap-2 rounded-full border px-4 py-2 sm:whitespace-nowrap">
                <span className="bg-brand-success h-1.5 w-1.5 rounded-full" />
                One-click clean copy
              </div>
              <div className="border-brand-border bg-brand-surface-soft flex w-fit items-center gap-2 rounded-full border px-4 py-2 sm:whitespace-nowrap">
                <span className="bg-brand-accent h-1.5 w-1.5 rounded-full" />
                Articles, docs, and Reddit
              </div>
              <div className="sm:flex sm:basis-full sm:justify-center xl:block xl:basis-auto">
                <div className="border-brand-border bg-brand-surface-soft flex w-fit items-center gap-2 rounded-full border px-4 py-2 sm:whitespace-nowrap">
                  <span className="bg-brand-ink h-1.5 w-1.5 rounded-full" />
                  Private local parsing
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
