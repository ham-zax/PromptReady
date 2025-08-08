// src/hooks/useTestimonialCarousel.ts
import { useState, useEffect, useCallback } from 'react';

const useTestimonialCarousel = (testimonialCount: number, interval = 5000) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const next = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialCount);
  }, [testimonialCount]);

  const prev = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  }, [testimonialCount]);

  useEffect(() => {
    if (!interval) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval, next]);

  return { currentTestimonial, setCurrentTestimonial, next, prev };
};

export default useTestimonialCarousel;
