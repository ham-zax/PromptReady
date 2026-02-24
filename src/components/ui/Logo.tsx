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
    sm: { logo: 'w-5 h-5 -translate-y-[1px]', text: 'linear-kicker text-xl font-normal', gap: 'gap-2' },
    md: { logo: 'w-6 h-6 -translate-y-[1px]', text: 'linear-kicker text-2xl font-normal', gap: 'gap-3' },
    lg: { logo: 'w-8 h-8 -translate-y-[2px]', text: 'linear-kicker text-3xl font-normal', gap: 'gap-3' },
    xl: { logo: 'w-12 h-12 -translate-y-[3px]', text: 'linear-kicker text-5xl font-normal', gap: 'gap-4' },
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
  const fillColor = finalLogoColor === 'light' ? '#ffffff' : '#000000';

  const draw = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
      const delay = 0.1 + i * 0.05;
      return {
        opacity: 1,
        transition: {
          delay,
          duration: 0.2
        }
      };
    }
  };

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
        viewBox="0 0 40 40"
        className={`${config.logo} shrink-0 block`}
        shapeRendering="crispEdges"
      >
        <g fill={fillColor}>
          {/* Sparkles Top */}
          <motion.rect x="19" y="0" width="2" height="6" variants={draw} custom={0} initial="hidden" animate="visible" />

          {/* Sparkles Top Right */}
          <motion.rect x="25" y="4" width="2" height="2" variants={draw} custom={1} initial="hidden" animate="visible" />
          <motion.rect x="27" y="6" width="2" height="2" variants={draw} custom={1} initial="hidden" animate="visible" />
          <motion.rect x="29" y="8" width="2" height="2" variants={draw} custom={1} initial="hidden" animate="visible" />

          {/* Sparkles Right */}
          <motion.rect x="30" y="15" width="6" height="2" variants={draw} custom={2} initial="hidden" animate="visible" />

          {/* Sparkles Left */}
          <motion.rect x="4" y="15" width="6" height="2" variants={draw} custom={3} initial="hidden" animate="visible" />

          {/* Sparkles Top Left */}
          <motion.rect x="13" y="4" width="2" height="2" variants={draw} custom={4} initial="hidden" animate="visible" />
          <motion.rect x="11" y="6" width="2" height="2" variants={draw} custom={4} initial="hidden" animate="visible" />
          <motion.rect x="9" y="8" width="2" height="2" variants={draw} custom={4} initial="hidden" animate="visible" />

          {/* Mouse Cursor Body (8-bit pointer style) */}
          <motion.path
            variants={draw}
            custom={5}
            initial="hidden"
            animate="visible"
            d="
            M 18 10
            h 4
            v 2 h 2
            v 2 h 2
            v 2 h 2
            v 2 h 2
            v 2 h 2
            v 2 h 2
            v 2
            h -8
            v 4 h 2
            v 4 h 2
            v 2 h -4
            v -4 h -2
            v -4
            h -6
            v -18
            Z"
          />

          {/* Cursor white inner border to separate from background */}
          <motion.path
            variants={draw}
            custom={5}
            initial="hidden"
            animate="visible"
            fill="none"
            stroke={finalLogoColor === 'light' ? '#000000' : '#ffffff'}
            strokeWidth="2"
            d="
            M 20 12
            v 14
            h 4
            v 4 h 2
            v 2 h -2
            v -4 h -2
            v -4
            h 6
            v -2 h -2
            v -2 h -2
            v -2 h -2
            v -2 h -2
            Z"
          />
        </g>
      </motion.svg>

      {showText && (
        <span className={`flex ${config.text} ${textColorConfig[textColor]} leading-none tracking-tight`}>
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
