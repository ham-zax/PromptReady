import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div style={{ opacity }} className="w-full h-full relative">
        {/* Animated Hand-drawn Squiggles/Shapes */}
        
        {/* Top Left Sparkle */}
        <motion.svg 
          style={{ y: y1 }}
          className="absolute top-10 left-[10%] w-24 h-24 text-brand-accent/20" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            d="M50 10 C50 30 70 50 90 50 C70 50 50 70 50 90 C50 70 30 50 10 50 C30 50 50 30 50 10 Z" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Right Side Arrow/Swoosh pointing down to content */}
        <motion.svg 
          style={{ y: y2 }}
          className="absolute top-32 right-[5%] w-40 h-40 text-brand-ink/10" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            d="M30 30 Q 150 50 170 150" 
            stroke="currentColor" 
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
            d="M140 140 L170 150 L180 120" 
            stroke="currentColor" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>

        {/* Bottom Left Curly underline */}
        <motion.svg 
          className="absolute bottom-10 left-[20%] w-48 h-12 text-brand-accent/30" 
          viewBox="0 0 200 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
            d="M10 25 Q 40 10 70 30 T 130 20 T 190 35" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </motion.div>
    </div>
  );
};

export default HeroBackground;
