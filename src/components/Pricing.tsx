import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from '@/components/ui/Icons';

interface PricingProps {
  onPrimaryAction: () => void;
}

const FEATURES = [
  'One-click Markdown exports',
  'Preserve headings, lists, tables, and code fences',
  'Source URL + timestamp metadata',
  'Offline capture and export runs locally',
  'Optional OpenRouter BYOK cleanup, 5 successful runs per local day',
  'No credit card required',
];

const Pricing: React.FC<PricingProps> = ({ onPrimaryAction }) => (
  <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
    {/* Decorative Background Elements */}
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="text-brand-surface-soft/50 h-[800px] w-[800px]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="400"
          cy="400"
          r="300"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="20 20"
        />
        <circle
          cx="400"
          cy="400"
          r="200"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10 10"
        />
        <circle
          cx="400"
          cy="400"
          r="100"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="5 5"
        />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="text-brand-accent/20 absolute top-[14%] right-[6%] h-14 w-64"
        viewBox="0 0 300 70"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M8 34 C 52 4, 98 62, 148 28 S 234 10, 292 52"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="relative text-center">
        {/* Sparkle Decoration */}
        <motion.svg
          initial={{ rotate: -20, scale: 0 }}
          whileInView={{ rotate: 10, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="text-brand-accent/40 absolute -top-10 left-[20%] hidden h-12 w-12 md:block"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0 L14.59 8.41 L23 11 L14.59 13.59 L12 22 L9.41 13.59 L1 11 L9.41 8.41 Z" />
        </motion.svg>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="linear-display text-brand-ink text-[clamp(2.5rem,6.8vw,4.4rem)] leading-[0.94]"
        >
          Get PromptReady
          <br className="hidden sm:block" />
          <span className="text-brand-accent relative inline-block sm:translate-x-2">
            free
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.35 }}
              className="text-brand-accent/35 pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] -rotate-[1deg] sm:-inset-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <path
                d="M100 15 C 160 5 190 30 180 60 C 170 90 30 90 20 60 C 10 30 40 5 100 15 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-muted mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:-translate-x-1 sm:text-lg"
        >
          Core offline capture and Markdown export are free. Optional BYOK AI cleanup uses your
          OpenRouter key with a 5-successful-cleanups-per-day local limit.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
        whileHover={{ y: -5 }}
        className="border-brand-border bg-brand-surface relative mx-auto mt-12 max-w-xl rounded-[2.5rem] border p-8 shadow-[0_22px_80px_-38px_rgba(0,0,0,0.3)] transition-transform duration-500 sm:rotate-[0.25deg] sm:p-10"
      >
        <div className="linear-kicker border-brand-border bg-brand-surface text-brand-ink absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border px-4 py-1.5 text-[1rem] shadow-sm">
          <Sparkles className="text-brand-accent h-4 w-4" />
          Free plan
        </div>

        <div className="mt-6 text-center">
          <p className="linear-kicker text-brand-muted text-[1.2rem] font-medium">PromptReady</p>
          <div className="mt-3 flex items-end justify-center gap-2">
            <span className="linear-display text-brand-ink text-[5.5rem] leading-[0.8]">$0</span>
            <span className="text-brand-muted pb-2 text-base font-medium">/ month</span>
          </div>
          <p className="text-brand-success bg-brand-success/10 mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium">
            Free to use
          </p>
        </div>

        <ul className="mt-10 space-y-4">
          {FEATURES.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`text-brand-muted flex items-start gap-3 text-sm sm:text-base ${index % 2 === 0 ? 'sm:translate-x-1' : 'sm:-translate-x-1'}`}
            >
              <CheckCircle2 className="text-brand-success/80 mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-brand-ink/80 font-medium">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={onPrimaryAction}
          className="group bg-brand-accent hover:bg-brand-accent-hover relative mt-10 w-full overflow-hidden rounded-2xl py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get PromptReady free
            <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 5 }}>
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
