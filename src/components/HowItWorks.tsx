import React from 'react';
import { motion } from 'framer-motion';
import { CopyCheck, MousePointerClick, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Select your source',
    description: 'Use the extension button or keyboard shortcut on any page.',
    icon: <MousePointerClick className="h-6 w-6 text-indigo-400" />,
    badge: '01',
    glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',
  },
  {
    title: 'Clean in one pass',
    description: 'PromptReady strips clutter and keeps structure that LLMs can parse.',
    icon: <Zap className="h-6 w-6 text-emerald-400" />,
    badge: '02',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
  },
  {
    title: 'Paste with confidence',
    description: 'Get citation-ready Markdown instantly in your clipboard.',
    icon: <CopyCheck className="h-6 w-6 text-purple-400" />,
    badge: '03',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="relative py-20 sm:py-32">
    {/* Connecting Line (Desktop only) */}
    <div className="absolute left-[10%] right-[10%] top-1/2 z-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          From noisy page to useful prompt <span className="text-indigo-400">in seconds</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          The flow is intentionally simple so you can stay in your research or coding context.
        </motion.p>
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-3 md:gap-12">
        {steps.map((step, index) => (
          <motion.article
            key={step.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: 'spring', stiffness: 50 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${step.glow}`}
          >
            {/* Subtle inner top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="mb-8 flex items-center justify-between">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform duration-500 group-hover:scale-110">
                {step.icon}
              </div>
              <span className="text-4xl font-black tracking-tighter text-white/5 transition-colors duration-500 group-hover:text-white/10">
                {step.badge}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-base leading-relaxed text-slate-400">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
