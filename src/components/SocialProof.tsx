// src/components/SocialProof.tsx

import React from 'react';
import { ShieldCheck, Code2 } from 'lucide-react';
import Testimonials from './Testimonials';

const SocialProof: React.FC = () => (
  <section className="relative overflow-hidden py-20 lg:py-32">
    <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        {/* --- REFACTORED BADGES --- */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Privacy-First by Design
          </div>
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
            <Code2 className="mr-2 h-5 w-5" />
            Built for a Professional Workflow
          </div>
        </div>
        {/* --- END REFACTORED BADGES --- */}

        <h2 className="my-6 text-4xl font-bold text-gray-900 lg:text-5xl">
          Help Us Build Trust—Share Your Feedback!
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          We're just launching and would love your honest feedback. Be among the first to shape
          PromptReady and see your testimonial featured here.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Testimonials />
      </div>
    </div>
  </section>
);

export default SocialProof;
