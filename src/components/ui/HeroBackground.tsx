import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ opacity }} className="relative h-full w-full">
        {/* Animated Hand-drawn Squiggles/Shapes */}

        {/* Top Left Sparkle (Replaced with a different scribble shape) */}
        <motion.svg
          style={{ y: y1 }}
          className="absolute left-[10%] top-10 h-24 w-24 text-brand-accent/20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
            d="M 20 20 L 80 80 M 80 20 L 20 80 M 50 10 L 50 90 M 10 50 L 90 50"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Right Side Arrow/Swoosh pointing down to content */}
        <motion.svg
          style={{ y: y2 }}
          className="absolute right-[25%] top-32 h-40 w-40 text-brand-ink/10"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
            d="M30 30 Q 150 50 170 150"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 2.3 }}
            d="M140 140 L170 150 L180 120"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>

        {/* Center Floating Plus Signs */}
        <motion.svg
          style={{ y: y3, rotate: rotate1 }}
          className="absolute left-[55%] top-40 h-16 w-16 text-brand-ink/5"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 1.5 }}
            d="M 50 20 L 50 80 M 20 50 L 80 50"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 1.8 }}
            d="M 80 10 L 80 30 M 70 20 L 90 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Floating Outline Circle on the Left */}
        <motion.svg
          style={{ y: y4, rotate: rotate2 }}
          className="absolute bottom-40 left-[5%] h-32 w-32 text-brand-muted/10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
            d="M 50 10 C 75 10 90 30 90 50 C 90 75 70 90 50 90 C 25 90 10 70 10 50 C 10 25 30 10 50 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 8"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.7 }}
            d="M 45 15 C 70 15 85 35 85 55 C 85 80 65 85 45 85 C 20 85 15 65 15 45 C 15 20 35 15 45 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Bottom Left Curly underline */}
        <motion.svg
          className="absolute bottom-10 left-[20%] h-12 w-48 text-brand-accent/30"
          viewBox="0 0 200 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 1.2 }}
            d="M 10 25 C 40 -10, 60 60, 100 25 C 140 -10, 160 60, 190 25"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>
    </div>
  );
};

export default HeroBackground;
