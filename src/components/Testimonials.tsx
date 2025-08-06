import React from "react";
import useTestimonialCarousel from "../hooks/useTestimonialCarousel";
import { testimonials } from "../data/testimonialsData";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const { currentTestimonial, setCurrentTestimonial } = useTestimonialCarousel(testimonials.length);
  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="testimonial-carousel max-w-5xl mx-auto mb-16 px-4">
      <div className="testimonial-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
        {/* Testimonial 1 */}
        <div className="testimonial-slide px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex text-yellow-400 mr-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">5.0★</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
              "Saves me hours weekly on research! The offline mode is incredibly fast and the AI features are game-changing for content creation."
            </blockquote>
            <div className="text-center space-y-2">
              <div className="text-gray-800 font-semibold text-lg">Alex Chen</div>
              <div className="text-sm text-gray-500">Senior Developer, Reddit</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-slide px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex text-yellow-400 mr-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">5.0★</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
              "Privacy-first approach is exactly what our team needed. No more worrying about sensitive data being processed externally."
            </blockquote>
            <div className="text-center space-y-2">
              <div className="text-gray-800 font-semibold text-lg">Sarah Mitchell</div>
              <div className="text-sm text-gray-500">IT Security Manager, Enterprise Corp</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-slide px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex text-yellow-400 mr-3 gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <Star className="w-5 h-5 fill-current opacity-50" />
              </div>
              <span className="text-lg font-semibold text-gray-700">4.5★</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
              "Finally, clean copies without the junk! Perfect for feeding content to ChatGPT and Claude. This is a must-have tool."
            </blockquote>
            <div className="text-center space-y-2">
              <div className="text-gray-800 font-semibold text-lg">Marcus Johnson</div>
              <div className="text-sm text-gray-500">Content Creator, YouTube</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center items-center space-x-3 mt-12">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${currentTestimonial === index
                ? 'bg-blue-600 w-12 h-4'
                : 'bg-gray-300 hover:bg-gray-400 w-4 h-4'
              }`}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;