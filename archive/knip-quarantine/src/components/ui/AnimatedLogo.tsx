import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '', color = 'currentColor', size = 'md' }) => {
  const sizeMap = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
    xl: 'h-14',
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.2 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        fill="none"
        className={`${sizeMap[size]} text-[${color}]`}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkles (paths broken up for animation) */}
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M1.3 20.1 l8.4 -0.1" variants={draw} custom={0} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M26.7 19.8 l8.4 -0.1" variants={draw} custom={1} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M19.8 35.4 l-0.1 -8.4" variants={draw} custom={2} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M19.5 10 l-0.1 -8.4" variants={draw} custom={3} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M7.4 31.6 l5.9 -6.0" variants={draw} custom={4} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M25.1 13.4 l5.9 -6.0" variants={draw} custom={5} />
        <motion.path stroke={color} strokeWidth="1.5" strokeLinecap="round" d="M13.1 11.5 l6.0 5.9" variants={draw} custom={6} />

        {/* Cursor path - animated drawing */}
        <motion.path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M24.116 25.572a.931.931 0 0 1 1.225-1.224L55.44 36.575a.94.94 0 0 1-.118 1.781L43.8 41.33a3.763 3.763 0 0 0-2.705 2.7l-2.97 11.523a.94.94 0 0 1-1.782.118L24.116 25.572Z"
          variants={draw}
          custom={7}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;
