import React from 'react';
import { motion } from 'framer-motion';
import { CopyCheck, MousePointerClick, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Select your source',
    description: 'Use the extension button or keyboard shortcut on any page.',
    icon: <MousePointerClick className="h-6 w-6 text-charcoal-500" />,
    badge: '01',
  },
  {
    title: 'Clean in one pass',
    description: 'PromptReady strips clutter and keeps structure that LLMs can parse.',
    icon: <Zap className="h-6 w-6 text-burnt-sienna-500" />,
    badge: '02',
  },
  {
    title: 'Paste with confidence',
    description: 'Get citation-ready Markdown instantly in your clipboard.',
    icon: <CopyCheck className="h-6 w-6 text-persian-green-500" />,
    badge: '03',
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl"
        >
          From noisy page to useful prompt in seconds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          The flow is intentionally simple so you can stay in your research or coding context.
        </motion.p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.article
            key={step.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                {step.icon}
              </div>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-slate-500">
                {step.badge}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-charcoal-500">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
