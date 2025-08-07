// src/components/SocialProof.tsx

import React from "react";
import { ShieldCheck, Code2 } from "lucide-react";
import Testimonials from "./Testimonials";

const SocialProof: React.FC = () => (
  <section className="py-20 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        {/* --- REFACTORED BADGES --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap items-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            <ShieldCheck className="w-5 h-5 mr-2" />
            Privacy-First by Design
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
            <Code2 className="w-5 h-5 mr-2" />
            Built for a Professional Workflow
          </div>
        </div>
        {/* --- END REFACTORED BADGES --- */}
        
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 my-6">
          Help Us Build Trust—Share Your Feedback!
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're just launching and would love your honest feedback. Be among the first to shape PromptReady and see your testimonial featured here.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Testimonials />
      </div>
    </div>
  </section>
);

export default SocialProof;
