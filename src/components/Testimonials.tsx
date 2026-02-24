import React from 'react';
import { Star } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { testimonials } from '../data/testimonialsData';
import useTestimonialCarousel from '../hooks/useTestimonialCarousel';

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5 text-saffron-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 fill-current" />
        ))}
        {hasHalfStar && <Star key="half" className="h-4 w-4 fill-current opacity-50" />}
      </div>
      <span className="text-sm font-semibold text-charcoal-500">{rating.toFixed(1)}</span>
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
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-[0_18px_70px_-42px_rgba(38,70,83,0.7)] sm:p-10">
              <StarRating rating={testimonial.stars} />

              <blockquote className="mt-5 text-xl font-medium leading-relaxed text-charcoal-500 sm:text-2xl">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <p className="font-semibold text-charcoal-500">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burnt-sienna-500 focus:ring-offset-2 ${
              currentTestimonial === index
                ? 'w-8 bg-burnt-sienna-500'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
