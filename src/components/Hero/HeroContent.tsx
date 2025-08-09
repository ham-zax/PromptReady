import React from 'react';
import { motion, Transition } from 'framer-motion';
import Logo from '../ui/Logo';

interface HeroContentProps {
  spring: Transition;
}

const HeroContent: React.FC<HeroContentProps> = ({ spring }) => {
  return (
    <>
      {/* Subtle logo watermark */}
      <motion.div
        className="mb-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.05 }}
      >
        <Logo size="lg" background="subtle" />
      </motion.div>

      <motion.h1
        className="mb-4 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.1 }}
      >
        One-click clean Markdown from any page.
      </motion.h1>

      <motion.p
        className="mx-auto mb-6 max-w-4xl text-lg font-medium text-slate-700 sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.18 }}
      >
        Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved.
        Runs locally. Pro adds optional validation with your key.
      </motion.p>
    </>
  );
};

export default HeroContent;
