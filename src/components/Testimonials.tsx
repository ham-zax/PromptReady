import React from 'react';
import { useSwipeable } from 'react-swipeable';
import useTestimonialCarousel from '../hooks/useTestimonialCarousel';
import { testimonials, Testimonial } from '../data/testimonialsData';
import { Star } from 'lucide-react';

// The StarRating component is where we'll fix the "5.0★" issue.
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-4">
      {' '}
      {/* Increased gap for more space */}
      {/* The star icons */}
      <div className="flex gap-0.5 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-5 w-5 fill-current" />
        ))}
        {hasHalfStar && <Star key="half" className="h-5 w-5 fill-current opacity-50" />}
      </div>
      {/* --- THE FIX --- */}
      {/* 
        - The star is now an inline element, not a separate icon.
        - `align-baseline` ensures it sits perfectly with the text.
        - `text-slate-500` makes it a subtle part of the rating text.
      */}
      <div className="text-lg font-medium text-slate-700">
        {rating.toFixed(1)}
        <Star className="ml-1 inline-block h-4 w-4 fill-slate-400 align-baseline text-slate-400" />
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { currentTestimonial, setCurrentTestimonial, next, prev } = useTestimonialCarousel(
    testimonials.length,
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div {...handlers} className="grid grid-cols-1 grid-rows-1">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
              currentTestimonial === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {/* The actual testimonial card with refined styling */}
            <div className="mx-auto rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              {/* Increased bottom margin for better spacing */}
              <div className="mb-8 flex justify-center">
                <StarRating rating={testimonial.stars} />
              </div>

              {/* Refined typography for the quote */}
              <blockquote className="text-center text-xl font-medium leading-relaxed text-slate-800">
                "{testimonial.quote}"
              </blockquote>

              {/* Increased top margin and refined author typography */}
              <div className="mt-8 text-center">
                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="mt-8 flex items-center justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              currentTestimonial === index
                ? 'w-8 bg-blue-600'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
