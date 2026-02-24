import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Code, Copy, FileText, Shield, Sparkles } from 'lucide-react';

const cards = [
  {
    title: 'Structure-preserving cleanup',
    description: 'Keeps headings, lists, and tables intact so models parse your context correctly.',
    icon: <Brain className="h-6 w-6 text-brand-accent" />,
    size: 'tall',
    accent: 'bg-brand-accent',
  },
  {
    title: 'One-click extraction',
    description: 'No manual selection dance. Run from toolbar or shortcut and copy instantly.',
    icon: <Copy className="h-6 w-6 text-brand-success" />,
    size: 'medium',
    accent: 'bg-brand-success',
  },
  {
    title: 'Citation metadata',
    description: 'Every export can include source URL and capture timestamp for verification.',
    icon: <FileText className="h-6 w-6 text-brand-ink" />,
    size: 'short',
    accent: 'bg-brand-ink',
  },
  {
    title: 'Local-first by default',
    description: 'Core parsing happens on-device. Your browsing context stays private.',
    icon: <Shield className="h-6 w-6 text-brand-accent-hover" />,
    size: 'medium',
    accent: 'bg-brand-accent-hover',
  },
  {
    title: 'Built for technical content',
    description: 'Understands docs, code snippets, forum threads, and long-form article pages.',
    icon: <Code className="h-6 w-6 text-brand-muted" />,
    size: 'tall',
    accent: 'bg-brand-muted',
  },
  {
    title: 'Configurable output',
    description: 'Toggle title, source footer, spacing, and formatting to fit your workflow.',
    icon: <Sparkles className="h-6 w-6 text-brand-accent" />,
    size: 'short',
    accent: 'bg-brand-accent',
  },
];

const FeatureCard: React.FC<{ card: (typeof cards)[0]; index: number }> = ({ card, index }) => {
  const sizeClass =
    card.size === 'tall'
      ? 'min-h-[300px]'
      : card.size === 'medium'
      ? 'min-h-[250px]'
      : 'min-h-[210px]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] ${sizeClass}`}
    >
      {/* Animated corner accent */}
      <motion.div 
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150 ${card.accent}`}
      />
      <div className={`absolute left-0 top-0 h-1.5 w-full ${card.accent} transition-all duration-300 group-hover:h-2`} />
      
      <div className="relative z-10">
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface-soft shadow-sm"
        >
          {card.icon}
        </motion.div>
        <h3 className="text-2xl font-bold tracking-tight text-brand-ink mb-3">{card.title}</h3>
        <p className="mt-3 max-w-sm text-lg leading-relaxed text-brand-muted">{card.description}</p>
      </div>
    </motion.article>
  );
};

const FeaturesBackground = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large background star/sparkle */}
      <motion.svg 
        style={{ y, rotate }}
        className="absolute top-[20%] right-[-10%] w-96 h-96 text-brand-muted/5" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
      </motion.svg>
      
      {/* Floating dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 sm:py-32">
      <FeaturesBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="linear-display text-[clamp(2.6rem,7.5vw,5.2rem)] leading-[0.94] text-brand-ink"
          >
            Built for people who <br className="hidden sm:block" />
            <span className="text-brand-accent relative inline-block">
              prompt all day
              {/* Hand-drawn circle around 'all day' */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none text-brand-accent/40"
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
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted"
          >
            Everything here exists to reduce friction between source material and high-quality model
            responses.
          </motion.p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
          {cards.map((card, index) => (
            <FeatureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
