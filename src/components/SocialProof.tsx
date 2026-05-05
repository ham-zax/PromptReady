import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const proofCards = [
  {
    label: 'Research',
    title: 'Articles and long reads',
    body: 'Capture the useful sections, keep source details nearby, and paste cleaner context into notes or AI tools.',
  },
  {
    label: 'Technical docs',
    title: 'Code blocks stay readable',
    body: 'Preserve headings, commands, config blocks, tables, and URLs so technical references survive the cleanup pass.',
  },
  {
    label: 'Threads',
    title: 'Reddit and discussions',
    body: 'Turn noisy discussion pages into structured Markdown while staying honest about hard social and app-heavy pages.',
  },
];

const SocialProofBackground = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="from-brand-accent/5 via-brand-success/5 absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-br to-transparent blur-3xl"
      />

      {/* Hand-drawn quotes SVG */}
      <motion.svg
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-brand-ink absolute top-10 left-[15%] h-24 w-24"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M20 50 Q 20 20 40 10 L 45 15 Q 30 30 30 50 H 45 V 80 H 10 V 50 Z M 60 50 Q 60 20 80 10 L 85 15 Q 70 30 70 50 H 85 V 80 H 50 V 50 Z" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 0.22, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="text-brand-accent/35 absolute top-[20%] right-[10%] h-12 w-56"
        viewBox="0 0 240 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M10 30 C 48 8, 82 50, 124 22 S 186 12, 230 38"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

const SocialProof: React.FC = () => (
  <section className="relative py-20 sm:py-24">
    <SocialProofBackground />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="linear-display text-brand-ink text-[clamp(2.35rem,6.5vw,4.6rem)] leading-[0.94]"
        >
          Built for the sources
          <br className="hidden sm:block" />
          <span className="text-brand-accent relative inline-block sm:translate-x-2">
            people actually copy
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.35 }}
              className="text-brand-accent/35 pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] -rotate-[1.5deg] sm:-inset-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
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
          className="text-brand-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:-translate-x-1 sm:text-lg"
        >
          PromptReady is for researchers, students, builders, writers, and anyone turning messy web
          pages into context they can reuse.
        </motion.p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {proofCards.map((card, index) => (
          <motion.article
            key={card.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.35 }}
            className="border-brand-border bg-brand-surface/95 rounded-3xl border p-6 shadow-[0_18px_70px_-42px_rgba(38,70,83,0.25)]"
          >
            <p className="linear-kicker text-brand-accent text-[1rem]">{card.label}</p>
            <h3 className="text-brand-ink mt-3 text-2xl leading-tight font-semibold">
              {card.title}
            </h3>
            <p className="text-brand-muted mt-4 text-base leading-relaxed">{card.body}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
