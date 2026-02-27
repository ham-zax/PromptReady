import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SketchyStructure = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 20 30 C 40 25 60 35 80 30 M 20 50 C 40 45 60 55 80 50 M 20 70 C 40 65 60 75 80 70 M 15 30 C 15 50 20 70 20 90 M 85 30 C 80 50 85 70 80 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyCursor = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 35 25 L 45 75 L 55 55 L 75 75 L 82 68 L 62 48 L 80 40 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 15 25 C 25 15 30 20 40 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const SketchyTag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 25 45 L 55 15 L 85 25 L 75 55 L 45 85 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="65" cy="35" r="5" fill="currentColor" />
    <path
      d="M 35 55 L 60 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const SketchyShield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 20 30 C 50 20 50 20 80 30 C 85 60 65 85 50 90 C 35 85 15 60 20 30 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 40 55 L 50 65 L 70 35"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchyDoc = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 25 20 C 45 15 75 25 75 25 L 80 80 C 60 85 30 75 30 75 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 40 40 C 50 38 60 42 65 40 M 42 55 C 50 53 62 57 67 55 M 45 70 C 50 68 55 72 60 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SketchySparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      d="M 50 15 C 50 40 40 50 15 50 C 40 50 50 60 50 85 C 50 60 60 50 85 50 C 60 50 50 40 50 15 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 20 20 C 25 30 20 35 10 35 C 20 35 25 40 25 50 C 25 40 30 35 40 35 C 30 35 25 30 25 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cards = [
  {
    title: 'Structure-preserving cleanup',
    description: 'Keeps headings, lists, and tables intact so models parse your context correctly.',
    icon: <SketchyStructure className="h-7 w-7 text-brand-accent" />,
    size: 'tall',
    accent: 'bg-brand-accent',
    blob: '60% 40% 30% 70% / 60% 30% 70% 40%',
    rotation: -2,
    pattern: (
      <>
        <path d="M 20 50 C 30 20 60 10 80 40 C 90 70 70 90 40 80 C 10 70 10 40 30 20 C 50 0 80 20 90 50" />
        <path d="M 30 50 C 40 30 70 20 80 50 C 90 80 50 90 30 70 C 10 50 30 30 50 20" />
      </>
    ),
  },
  {
    title: 'One-click extraction',
    description: 'No manual selection dance. Run from toolbar or shortcut and copy instantly.',
    icon: <SketchyCursor className="h-7 w-7 text-brand-success" />,
    size: 'medium',
    accent: 'bg-brand-success',
    blob: '40% 60% 70% 30% / 40% 50% 60% 50%',
    rotation: 1,
    pattern: (
      <path d="M 10 20 C 30 5 50 35 70 20 C 90 5 90 35 90 35 M 5 45 C 25 30 45 60 65 45 C 85 30 95 60 95 60 M 15 70 C 35 55 55 85 75 70 C 95 55 90 85 90 85" />
    ),
  },
  {
    title: 'Citation metadata',
    description: 'Every export can include source URL and capture timestamp for verification.',
    icon: <SketchyTag className="h-7 w-7 text-brand-ink" />,
    size: 'short',
    accent: 'bg-brand-ink',
    blob: '50% 50% 30% 70% / 60% 40% 60% 40%',
    rotation: 3,
    pattern: (
      <path d="M 20 10 C 25 30 15 70 25 90 M 40 5 C 45 35 35 65 45 95 M 60 15 C 65 40 55 70 65 85 M 80 10 C 85 30 75 70 85 90 M 10 30 C 40 25 60 35 90 25 M 5 50 C 35 45 65 55 95 50 M 15 70 C 45 65 55 75 85 70" />
    ),
  },
  {
    title: 'Local-first by default',
    description: 'Core parsing happens on-device. Your browsing context stays private.',
    icon: <SketchyShield className="h-7 w-7 text-brand-accent-hover" />,
    size: 'medium',
    accent: 'bg-brand-accent-hover',
    blob: '70% 30% 40% 60% / 50% 60% 40% 50%',
    rotation: -1,
    pattern: (
      <path d="M 50 10 C 55 30 45 40 50 90 M 10 50 C 30 45 40 55 90 50 M 20 20 C 35 35 40 40 80 80 M 80 20 C 65 35 60 40 20 80 M 35 15 C 45 35 55 35 65 85 M 15 35 C 35 45 35 55 85 65" />
    ),
  },
  {
    title: 'Built for any content',
    description: 'Understands Wikipedia, news articles, long-form essays, docs, and forum threads.',
    icon: <SketchyDoc className="h-7 w-7 text-brand-muted" />,
    size: 'tall',
    accent: 'bg-brand-muted',
    blob: '40% 60% 50% 50% / 60% 50% 50% 40%',
    rotation: 2,
    pattern: (
      <path d="M 10 60 C 15 20 35 10 40 50 C 45 90 65 80 70 40 C 75 0 95 10 90 50 C 85 90 105 80 110 40 M 10 30 C 20 10 40 20 50 60 C 60 100 80 90 90 50" />
    ),
  },
  {
    title: 'Configurable output',
    description: 'Toggle title, source footer, spacing, and formatting to fit your workflow.',
    icon: <SketchySparkle className="h-7 w-7 text-brand-accent" />,
    size: 'short',
    accent: 'bg-brand-accent',
    blob: '50% 50% 60% 40% / 40% 60% 40% 60%',
    rotation: -3,
    pattern: (
      <path d="M 30 30 C 70 20 80 60 40 80 C 10 60 20 20 60 30 C 90 40 70 90 30 70 C 0 50 30 10 70 40 C 90 60 50 90 20 50 C 10 20 60 10 80 50 M 40 40 C 60 45 55 60 40 55" />
    ),
  },
];

const FeatureCard: React.FC<{ card: (typeof cards)[0]; index: number }> = ({ card, index }) => {
  const sizeClass =
    card.size === 'tall'
      ? 'min-h-[320px] sm:min-h-[340px]'
      : card.size === 'medium'
      ? 'min-h-[280px] sm:min-h-[300px]'
      : 'min-h-[240px] sm:min-h-[260px]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', bounce: 0.4 }}
      whileHover={{ y: -8, scale: 1.02, rotate: card.rotation }}
      className={`group relative mb-6 flex h-auto w-full break-inside-avoid flex-col overflow-hidden rounded-[2rem] border-2 border-brand-border bg-brand-surface p-8 transition-all duration-300 hover:border-brand-ink/10 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] ${sizeClass}`}
    >
      {/* Hand-drawn scribble accent in corner */}
      <motion.div
        className={`absolute -right-16 -top-16 h-48 w-48 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20 ${card.accent.replace('bg-', 'text-')}`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full"
        >
          {card.pattern}
        </svg>
      </motion.div>

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          style={{ borderRadius: card.blob }}
          className="mb-8 inline-flex h-16 w-16 items-center justify-center border-2 border-brand-border bg-brand-surface-soft shadow-sm transition-colors group-hover:bg-brand-surface"
        >
          {card.icon}
        </motion.div>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">{card.title}</h3>
        <p className="max-w-sm text-lg leading-relaxed text-brand-muted">{card.description}</p>
      </div>
    </motion.article>
  );
};

const FeaturesBackground = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Large background star/sparkle */}
      <motion.svg
        style={{ y, rotate }}
        className="absolute -right-[10%] top-[20%] h-96 w-96 text-brand-muted/5"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
      </motion.svg>

      {/* Floating dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
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
            <span className="relative inline-block text-brand-accent">
              prompt all day
              {/* Hand-drawn circle around 'all day' */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-brand-accent/40"
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
