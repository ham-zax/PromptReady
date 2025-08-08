import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/logo.svg';
import logoWhiteSvg from '../../assets/logo-white.svg';

interface LogoProps {
  /** Size variant for the logo */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show the text alongside the logo */
  showText?: boolean;
  /** Whether the logo should be clickable (links to home) */
  clickable?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Text color variant */
  textColor?: 'light' | 'dark';
  /** Logo color variant */
  logoColor?: 'dark' | 'light' | 'auto';
  /** Background style */
  background?: 'none' | 'subtle' | 'card';
  /** Theme context for auto logo color detection */
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
  theme
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      logo: 'h-5 w-5',
      text: 'text-sm font-light',
      gap: 'gap-2'
    },
    md: {
      logo: 'h-6 w-6',
      text: 'text-3xl font-light', // 28px equivalent
      gap: 'gap-3'
    },
    lg: {
      logo: 'h-8 w-8',
      text: 'text-3xl font-light', // 28px equivalent
      gap: 'gap-3'
    },
    xl: {
      logo: 'h-12 w-12',
      text: 'text-3xl font-light', // 28px equivalent
      gap: 'gap-3'
    }
  };

  // Text color configurations
  const textColorConfig = {
    light: 'text-white',
    dark: 'text-slate-900'
  };

  // Background configurations
  const backgroundConfig = {
    none: '',
    subtle: 'bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200 shadow-sm',
    card: 'bg-white px-4 py-2 rounded-full border border-slate-200 shadow-md'
  };

  const config = sizeConfig[size];

  // Auto-detect logo color based on theme or explicit setting
  const getLogoColor = () => {
    if (logoColor === 'auto') {
      // Auto-detect based on theme or background
      if (theme === 'dark') return 'light';
      if (textColor === 'light') return 'light'; // If text is light, likely dark background
      return 'dark';
    }
    return logoColor;
  };

  const finalLogoColor = getLogoColor();
  const logoSrc = finalLogoColor === 'light' ? logoWhiteSvg : logoSvg;

  // CSS filter approach as fallback (inverts black to white)
  const logoFilter = finalLogoColor === 'light' && logoSrc === logoSvg
    ? 'brightness(0) invert(1)'
    : '';

  const logoElement = (
    <div className={`flex items-center ${config.gap} ${backgroundConfig[background]} ${className}`}>
      <img
        src={logoSrc}
        alt="PromptReady"
        className={config.logo}
        style={logoFilter ? { filter: logoFilter } : undefined}
      />
      {showText && (
        <span className={`${config.text} ${textColorConfig[textColor]}`}>
          PromptReady
        </span>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-flex">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
};

export default Logo;
