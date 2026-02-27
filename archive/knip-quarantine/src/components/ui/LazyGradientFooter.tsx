import React from 'react';
import gradientFooterImage from '../../assets/gradient-footer.png';

/**
 * LazyGradientFooter component provides a gradient background image for the footer
 * This component is lazy-loaded to improve performance
 */
const LazyGradientFooter: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
      style={{
        backgroundImage: `url(${gradientFooterImage})`,
      }}
      aria-hidden="true"
    />
  );
};

export default LazyGradientFooter;
