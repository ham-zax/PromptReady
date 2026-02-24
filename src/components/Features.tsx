import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Brain, Code, Copy, FileText, Shield, Sparkles } from 'lucide-react';

const cards = [
  {
    title: 'Structure-preserving cleanup',
    description: 'Keeps headings, lists, and tables intact so models parse your context correctly.',
    icon: <Brain className="h-6 w-6 text-indigo-400" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bgGlow: 'rgba(99,102,241,0.15)',
  },
  {
    title: 'One-click extraction',
    description: 'No manual selection dance. Run from toolbar or shortcut and copy instantly.',
    icon: <Copy className="h-6 w-6 text-emerald-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgGlow: 'rgba(16,185,129,0.15)',
  },
  {
    title: 'Citation metadata',
    description: 'Every export can include source URL and capture timestamp for verification.',
    icon: <FileText className="h-6 w-6 text-rose-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgGlow: 'rgba(244,63,94,0.15)',
  },
  {
    title: 'Local-first by default',
    description: 'Core parsing happens on-device. Your browsing context stays private.',
    icon: <Shield className="h-6 w-6 text-purple-400" />,
    colSpan: 'md:col-span-2 lg:col-span-1',
    bgGlow: 'rgba(168,85,247,0.15)',
  },
  {
    title: 'Built for technical content',
    description: 'Understands docs, code snippets, forum threads, and long-form article pages.',
    icon: <Code className="h-6 w-6 text-blue-400" />,
    colSpan: 'md:col-span-1 lg:col-span-2',
    bgGlow: 'rgba(59,130,246,0.15)',
  },
  {
    title: 'Configurable output',
    description: 'Toggle title, source footer, spacing, and formatting to fit your workflow.',
    icon: <Sparkles className="h-6 w-6 text-amber-400" />,
    colSpan: 'md:col-span-2 lg:col-span-3',
    bgGlow: 'rgba(251,191,36,0.15)',
  },
];

// Spotlight Card component for the hover glow effect
const FeatureCard: React.FC<{ card: (typeof cards)[0]; index: number }> = ({ card, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 50 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 ${card.colSpan} transition-colors hover:border-white/10`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${card.bgGlow},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
          {card.icon}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-400">{card.description}</p>
      </div>
    </motion.article>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 sm:py-32">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Built for people who <br className="hidden sm:block" />
            <span className="text-slate-400">prompt all day</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Everything here exists to reduce friction between source material and high-quality model
            responses.
          </motion.p>
        </div>

        <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FeatureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
