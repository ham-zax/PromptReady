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
    sm: {
      logo: 'w-5 h-5 -translate-y-[1px]',
      text: 'linear-kicker text-xl font-normal',
      gap: 'gap-1',
    },
    md: {
      logo: 'w-6 h-6 -translate-y-[1px]',
      text: 'linear-kicker text-2xl font-normal',
      gap: 'gap-2',
    },
    lg: {
      logo: 'w-8 h-8 -translate-y-[2px]',
      text: 'linear-kicker text-3xl font-normal',
      gap: 'gap-2',
    },
    xl: {
      logo: 'w-12 h-12 -translate-y-[3px]',
      text: 'linear-kicker text-5xl font-normal',
      gap: 'gap-3',
    },
  };

  const textColorConfig = {
    light: 'text-white',
    dark: 'text-brand-ink',
  };

  const backgroundConfig = {
    none: '',
    subtle:
      'rounded-full border border-brand-border bg-brand-surface/80 px-3 py-1.5 shadow-sm backdrop-blur-sm',
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

  // High contrast configuration for pixel art readability
  const outlineColor = finalLogoColor === 'light' ? '#ffffff' : '#000000';

  // Snappy sequence animation
  const draw = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.2,
      },
    }),
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 5, filter: 'blur(2px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: 0.4 + i * 0.04, duration: 0.3, ease: 'easeOut' as const },
    }),
  };

  const logoElement = (
    <div className={`flex items-center ${config.gap} ${backgroundConfig[background]} ${className}`}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={`${config.logo} block shrink-0`}
        // crispEdges is crucial for pixel art SVGs to prevent blurry anti-aliasing
        shapeRendering="crispEdges"
      >
        <g fill={outlineColor}>
          {/* Top Sparks */}
          <motion.rect
            x="11"
            y="0"
            width="2"
            height="5"
            variants={draw}
            custom={0}
            initial="hidden"
            animate="visible"
          />
          <motion.rect
            x="11"
            y="6"
            width="2"
            height="2"
            variants={draw}
            custom={1}
            initial="hidden"
            animate="visible"
          />

          {/* Left Sparks */}
          <motion.rect
            x="0"
            y="11"
            width="5"
            height="2"
            variants={draw}
            custom={2}
            initial="hidden"
            animate="visible"
          />
          <motion.rect
            x="6"
            y="11"
            width="2"
            height="2"
            variants={draw}
            custom={3}
            initial="hidden"
            animate="visible"
          />

          {/* Top-Left Diagonal Sparks */}
          <motion.rect
            x="4"
            y="4"
            width="2"
            height="2"
            variants={draw}
            custom={4}
            initial="hidden"
            animate="visible"
          />
          <motion.rect
            x="7"
            y="7"
            width="2"
            height="2"
            variants={draw}
            custom={5}
            initial="hidden"
            animate="visible"
          />

          {/* Top-Right Diagonal Sparks */}
          <motion.rect
            x="18"
            y="4"
            width="2"
            height="2"
            variants={draw}
            custom={6}
            initial="hidden"
            animate="visible"
          />
          <motion.rect
            x="15"
            y="7"
            width="2"
            height="2"
            variants={draw}
            custom={7}
            initial="hidden"
            animate="visible"
          />
        </g>

        {/* Pixel Cursor Body */}
        {/* Using a precise orthogonal path without stroke creates a crisp solid pixel shape */}
        <motion.path
          variants={draw}
          custom={8}
          initial="hidden"
          animate="visible"
          d="M12 12 v15 h1 v-1 h1 v-1 h1 v-1 h1 v-1 h1 v2 h1 v3 h1 v2 h2 v-1 h1 v-1 h-1 v-2 h-1 v-2 h-1 v-2 h4 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 Z"
          fill={outlineColor}
          stroke="none"
        />
      </motion.svg>

      {showText && (
        <span
          className={`flex ${config.text} ${textColorConfig[textColor]} leading-none tracking-tight`}
        >
          {'PROMPTREADY'.split('').map((letter, i) => (
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
      <Link to="/" className="group inline-flex">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          {logoElement}
        </motion.div>
      </Link>
    );
  }

  return logoElement;
};

export default Logo;
