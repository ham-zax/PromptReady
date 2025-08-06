// src/hooks/useTestimonialCarousel.ts
import { useState, useEffect } from 'react';

const useTestimonialCarousel = (testimonialCount: number) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialCount);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialCount]);

  return { currentTestimonial, setCurrentTestimonial };
};

export default useTestimonialCarousel;