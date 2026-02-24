import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Copy, FileText, Shield, Sparkles } from 'lucide-react';

const cards = [
  {
    title: 'Structure-preserving cleanup',
    description: 'Keeps headings, lists, and tables intact so models parse your context correctly.',
    icon: <Brain className="h-6 w-6 text-charcoal-500" />,
    tone: 'from-slate-100 to-white',
  },
  {
    title: 'One-click extraction',
    description: 'No manual selection dance. Run from toolbar or shortcut and copy instantly.',
    icon: <Copy className="h-6 w-6 text-burnt-sienna-500" />,
    tone: 'from-[#fff2eb] to-white',
  },
  {
    title: 'Citation metadata',
    description: 'Every export can include source URL and capture timestamp for verification.',
    icon: <FileText className="h-6 w-6 text-persian-green-500" />,
    tone: 'from-[#ecfaf6] to-white',
  },
  {
    title: 'Local-first by default',
    description: 'Core parsing happens on-device. Your browsing context stays private.',
    icon: <Shield className="h-6 w-6 text-charcoal-500" />,
    tone: 'from-slate-100 to-white',
  },
  {
    title: 'Built for technical content',
    description: 'Understands docs, code snippets, forum threads, and long-form article pages.',
    icon: <Code className="h-6 w-6 text-burnt-sienna-500" />,
    tone: 'from-[#fff2eb] to-white',
  },
  {
    title: 'Configurable output',
    description: 'Toggle title, source footer, spacing, and formatting to fit your workflow.',
    icon: <Sparkles className="h-6 w-6 text-persian-green-500" />,
    tone: 'from-[#ecfaf6] to-white',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl"
          >
            Built for people who prompt all day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            Everything here exists to reduce friction between source material and high-quality model
            responses.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`rounded-3xl border border-slate-200 bg-gradient-to-br ${card.tone} p-6 shadow-sm`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal-500">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
