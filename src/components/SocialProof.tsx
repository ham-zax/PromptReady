import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Testimonials from './Testimonials';

const SocialProofBackground = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div 
        style={{ scale, opacity }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] bg-gradient-to-br from-brand-accent/5 via-brand-success/5 to-transparent blur-3xl"
      />
      
      {/* Hand-drawn quotes SVG */}
      <motion.svg 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-[15%] w-24 h-24 text-brand-ink" 
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
        className="absolute right-[10%] top-[20%] h-12 w-56 text-brand-accent/35"
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
          className="linear-display text-[clamp(2.35rem,6.5vw,4.6rem)] leading-[0.94] text-brand-ink"
        >
          Trusted by builders, researchers,
          <br className="hidden sm:block" />
          <span className="relative inline-block text-brand-accent sm:translate-x-2">
            and operators
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.35 }}
              className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] -rotate-[1.5deg] text-brand-accent/35 sm:-inset-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
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
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:-translate-x-1 sm:text-lg"
        >
          Teams use PromptReady when they need reliable context and consistent outputs.
        </motion.p>
      </div>

      <Testimonials />
    </div>
  </section>
);

export default SocialProof;
