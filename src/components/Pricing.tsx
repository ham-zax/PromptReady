import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface PricingProps {
  onPrimaryAction: () => void;
}

const FEATURES = [
  'Unlimited clean exports',
  'Preserve headings, lists, tables, and code blocks',
  'Source URL + timestamp metadata',
  'Local-first processing',
  'No credit card required',
];

const Pricing: React.FC<PricingProps> = ({ onPrimaryAction }) => (
  <section id="pricing" className="py-20 sm:py-24 relative overflow-hidden">
     {/* Decorative Background Elements */}
    <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
      <motion.svg 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[800px] h-[800px] text-brand-surface-soft/50" 
        viewBox="0 0 800 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="2" strokeDasharray="20 20" />
        <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
      </motion.svg>
    </div>

    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center relative">
        {/* Sparkle Decoration */}
        <motion.svg
          initial={{ rotate: -20, scale: 0 }}
          whileInView={{ rotate: 10, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="absolute -top-10 left-[20%] w-12 h-12 text-brand-accent/40 hidden md:block"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0 L14.59 8.41 L23 11 L14.59 13.59 L12 22 L9.41 13.59 L1 11 L9.41 8.41 Z" />
        </motion.svg>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="linear-display text-[clamp(2.5rem,6.8vw,4.4rem)] leading-[0.94] text-brand-ink relative inline-block"
        >
          Simple pricing while in beta
           {/* Underline drawn under 'beta' */}
          <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="absolute -bottom-2 right-0 w-32 h-4 text-brand-accent"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path 
                d="M5 15 Q 50 5 95 15" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
            </motion.svg>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg"
        >
          Core functionality is free today. Join now and lock in early-adopter access.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
        whileHover={{ y: -5 }}
        className="relative mx-auto mt-12 max-w-xl rounded-[2.5rem] border border-brand-border bg-brand-surface p-8 shadow-[0_22px_80px_-38px_rgba(0,0,0,0.3)] sm:p-10 transition-transform duration-500 bg-white/90 backdrop-blur-md"
      >
        {/* Corner Ribbon/Tag */}
        <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 rounded-tr-[2.5rem]">
          <div className="absolute top-4 -right-8 w-32 bg-brand-success text-white text-[10px] font-bold py-1 text-center transform rotate-45 shadow-sm">
            BETA
          </div>
        </div>

        <div className="linear-kicker absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 text-[1rem] text-brand-ink shadow-sm">
          <Sparkles className="h-4 w-4 text-brand-accent" />
          Early Access Plan
        </div>

        <div className="mt-6 text-center">
          <p className="linear-kicker text-[1.2rem] text-brand-muted font-medium">PromptReady</p>
          <div className="mt-3 flex items-end justify-center gap-2">
            <span className="linear-display text-[5.5rem] leading-[0.8] text-brand-ink">$0</span>
            <span className="pb-2 text-base text-brand-muted font-medium">/ month</span>
          </div>
          <p className="mt-3 text-sm font-medium text-brand-success bg-brand-success/10 inline-block px-3 py-1 rounded-full">Free during beta</p>
        </div>

        <ul className="mt-10 space-y-4">
          {FEATURES.map((feature, index) => (
            <motion.li 
              key={feature} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 text-sm text-brand-muted sm:text-base"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-success/80" />
              <span className="font-medium text-brand-ink/80">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={onPrimaryAction}
          className="group relative mt-10 w-full overflow-hidden rounded-2xl bg-brand-accent py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-accent-hover hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Add to Chrome
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >→</motion.span>
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
