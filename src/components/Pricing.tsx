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
  <section id="pricing" className="py-20 sm:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl"
        >
          Simple pricing while in beta
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          Core functionality is free today. Join now and lock in early-adopter access.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.14 }}
        className="relative mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_22px_80px_-38px_rgba(38,70,83,0.55)] sm:p-10"
      >
        <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-persian-green-600 bg-persian-green-200 px-3 py-1 text-xs font-semibold tracking-wide text-persian-green-900">
          <Sparkles className="h-3.5 w-3.5" />
          Early Access Plan
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">PromptReady</p>
          <div className="mt-3 flex items-end justify-center gap-2">
            <span className="text-6xl font-semibold tracking-tight text-charcoal-500">$0</span>
            <span className="pb-2 text-base text-slate-600">/ month</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Free during beta</p>
        </div>

        <ul className="mt-8 space-y-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-persian-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onPrimaryAction}
          className="mt-8 w-full rounded-2xl bg-charcoal-500 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-charcoal-400"
        >
          Add to Chrome
        </button>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
