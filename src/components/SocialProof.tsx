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
          className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl relative inline-block"
        >
          Trusted by builders, researchers, and operators
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 text-brand-success/50"
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
          >
            <path 
              d="M10 10 Q 50 15 100 10 T 190 10" 
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
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg"
        >
          Teams use PromptReady when they need reliable context and consistent outputs.
        </motion.p>
      </div>

      <Testimonials />
    </div>
  </section>
);

export default SocialProof;
