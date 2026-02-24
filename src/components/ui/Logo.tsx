import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  clickable?: boolean;
  className?: string;
  textColor?: 'light' | 'dark';
  logoColor?: 'dark' | 'light' | 'auto';
  background?: 'none' | 'subtle' | 'card';
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  clickable = false,
  className = '',
  textColor = 'dark',
  logoColor = 'auto',
  background = 'none',
  theme,
}) => {
  const sizeConfig = {
    sm: { logo: 'w-5 h-5', text: 'linear-display text-xl font-black', gap: 'gap-2', strokeWidth: '4' },
    md: { logo: 'w-6 h-6', text: 'linear-display text-2xl font-black', gap: 'gap-3', strokeWidth: '3.5' },
    lg: { logo: 'w-8 h-8', text: 'linear-display text-3xl font-black', gap: 'gap-3', strokeWidth: '3' },
    xl: { logo: 'w-12 h-12', text: 'linear-display text-5xl font-black', gap: 'gap-4', strokeWidth: '2.5' },
  };

  const textColorConfig = {
    light: 'text-white',
    dark: 'text-brand-ink',
  };

  const backgroundConfig = {
    none: '',
    subtle: 'rounded-full border border-brand-border bg-brand-surface/80 px-3 py-1.5 shadow-sm backdrop-blur-sm',
    card: 'rounded-full border border-brand-border bg-brand-surface px-4 py-2 shadow-md',
  };

  const config = sizeConfig[size];

  const getLogoColor = () => {
    if (logoColor === 'auto') {
      if (theme === 'dark') return 'light';
      if (textColor === 'light') return 'light';
      return 'dark';
    }
    return logoColor;
  };

  const finalLogoColor = getLogoColor();
  const strokeColor = finalLogoColor === 'light' ? '#ffffff' : '#000000';

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.1 + i * 0.1;
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

  // Convert the text into letter paths or just animate standard text with a handwritten feel
  const textAnimation = {
    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: 0.5 + i * 0.05, duration: 0.4, ease: "easeOut" }
    })
  };

  const logoElement = (
    <div className={`flex items-center ${config.gap} ${backgroundConfig[background]} ${className}`}>
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 60 60" 
        fill="none" 
        className={`${config.logo} shrink-0 block`}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkles (paths broken up for animation) - thicker strokes for bold look */}
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M1.3 20.1 l8.4 -0.1" variants={draw} custom={0} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M26.7 19.8 l8.4 -0.1" variants={draw} custom={1} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M19.8 35.4 l-0.1 -8.4" variants={draw} custom={2} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M19.5 10 l-0.1 -8.4" variants={draw} custom={3} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M7.4 31.6 l5.9 -6.0" variants={draw} custom={4} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M25.1 13.4 l5.9 -6.0" variants={draw} custom={5} />
        <motion.path stroke={strokeColor} strokeWidth={config.strokeWidth} strokeLinecap="round" d="M13.1 11.5 l6.0 5.9" variants={draw} custom={6} />
        
        {/* Cursor path - animated drawing - thicker strokes */}
        <motion.path 
          stroke={strokeColor} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={Number(config.strokeWidth) + 0.5} 
          d="M24.116 25.572a.931.931 0 0 1 1.225-1.224L55.44 36.575a.94.94 0 0 1-.118 1.781L43.8 41.33a3.763 3.763 0 0 0-2.705 2.7l-2.97 11.523a.94.94 0 0 1-1.782.118L24.116 25.572Z"
          variants={draw} 
          custom={7}
        />
      </motion.svg>
      
      {showText && (
        <span className={`flex ${config.text} ${textColorConfig[textColor]} leading-none tracking-tight font-black`}>
          {"PROMPTREADY".split("").map((letter, i) => (
            <motion.span 
              key={i} 
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-flex group">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          {logoElement}
        </motion.div>
      </Link>
    );
  }

  return logoElement;
};

export default Logo;
