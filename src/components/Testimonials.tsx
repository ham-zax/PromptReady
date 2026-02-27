import React from 'react';
import { Star } from '@/components/ui/Icons';
import { useSwipeable } from 'react-swipeable';
import { testimonials } from '../data/testimonialsData';
import useTestimonialCarousel from '../hooks/useTestimonialCarousel';

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5 text-brand-accent">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 fill-current" />
        ))}
        {hasHalfStar && <Star key="half" className="h-4 w-4 fill-current opacity-50" />}
      </div>
      <span className="text-sm font-semibold text-brand-ink">{rating.toFixed(1)}</span>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { currentTestimonial, next, prev, setCurrentTestimonial } = useTestimonialCarousel(
    testimonials.length,
  );

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="mx-auto max-w-4xl">
      <div {...handlers} className="grid grid-cols-1 grid-rows-1">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
              currentTestimonial === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="rounded-3xl border border-brand-border bg-brand-surface/95 p-7 shadow-[0_18px_70px_-42px_rgba(38,70,83,0.25)] sm:p-10">
              <StarRating rating={testimonial.stars} />

              <blockquote className="mt-5 text-xl font-medium leading-relaxed text-brand-ink sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-7 border-t border-brand-border pt-5">
                <p className="font-semibold text-brand-ink">{testimonial.author}</p>
                <p className="text-sm text-brand-muted">{testimonial.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 ${
              currentTestimonial === index
                ? 'w-8 bg-brand-accent'
                : 'w-2 bg-brand-border hover:bg-brand-muted/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
