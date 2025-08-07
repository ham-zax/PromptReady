import React from "react";
import Testimonials from "./Testimonials";
import SignupForm from "./SignupForm";
import { Users } from "lucide-react";

const SocialProof: React.FC = () => (
  <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" aria-label="Loved by Developers" />
              Loved by Developers
              {/* Visual trust badge */}
              <img src="/assets/trust-badge.png" alt="Trusted by Industry Leaders" className="ml-3 h-6 inline-block" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Users{' '}
              <span className="text-green-700 font-bold">
                Love PromptReady
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of developers, content creators, and professionals who've transformed their workflow
            </p>
          </div>
        <Testimonials />
        
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2" aria-label="500+ Beta Users">500+</div>
              <div className="text-gray-600">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2" aria-label="4.8 Average Rating">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2" aria-label="2hrs+ Time Saved Weekly">2hrs+</div>
              <div className="text-gray-600">Time Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2" aria-label="100% Privacy Protected">100%</div>
              <div className="text-gray-600">Privacy Protected</div>
            </div>
          </div>
        <SignupForm />
    </div>
    </div>

  </section>
);

export default SocialProof;