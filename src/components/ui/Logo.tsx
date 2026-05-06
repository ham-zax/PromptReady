import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoSvg from '../../assets/logo_pixelated_simple';

const LOGO_CHARACTERS = Array.from('PROMPTREADY').map((letter, order) => ({
  id: `${letter}-${order}`,
  letter,
  order,
}));

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
      <motion.div
        className={`${config.logo} block shrink-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LogoSvg className="w-full h-full" />
      </motion.div>

      {showText && (
        <span
          className={`flex ${config.text} ${textColorConfig[textColor]} leading-none tracking-tight`}
        >
          {LOGO_CHARACTERS.map((character) => (
            <motion.span
              key={character.id}
              custom={character.order}
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="inline-block"
            >
              {character.letter}
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
