import React from 'react';
import { Lock, Zap, Award } from 'lucide-react';
import { motion, Transition } from 'framer-motion';
import { animations } from '../../config';

interface HeroBadgesProps {
  spring: Transition;
}

const HeroBadges: React.FC<HeroBadgesProps> = ({ spring }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      <motion.span
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: animations.delays.badge1 }}
      >
        <Lock className="h-4 w-4" />
        Client-side privacy
      </motion.span>
      <motion.span
        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: animations.delays.badge2 }}
      >
        <Zap className="h-4 w-4" />
        Blazingly fast
      </motion.span>
      <motion.span
        className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: animations.delays.badge3 }}
      >
        <Award className="h-4 w-4" />
        Manifest V3 ready
      </motion.span>
    </div>
  );
};

export default HeroBadges;
