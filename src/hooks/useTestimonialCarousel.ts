// src/hooks/useTestimonialCarousel.ts
import { useState, useEffect, useCallback } from 'react';
import { animations } from '../config';

interface UseTestimonialCarouselReturn {
  currentTestimonial: number;
  setCurrentTestimonial: (index: number) => void;
  next: () => void;
  prev: () => void;
}

const useTestimonialCarousel = (
  testimonialCount: number,
  interval: number = animations.durations.carousel
): UseTestimonialCarouselReturn => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const next = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialCount);
  }, [testimonialCount]);

  const prev = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  }, [testimonialCount]);

  useEffect(() => {
    if (!interval) return;
    const timer: NodeJS.Timeout = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval, next]);

  return { currentTestimonial, setCurrentTestimonial, next, prev };
};

export default useTestimonialCarousel;
