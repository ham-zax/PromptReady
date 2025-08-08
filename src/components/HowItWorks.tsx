// src/components/HowItWorks.tsx

import React from 'react';
import { Clock, Mail, Shield } from 'lucide-react';
import { ComparativeDisplay } from './ui/ComparativeDisplay';

// Define the content for the "Before" state as a separate JSX variable
const beforeExample = (
  <div className="space-y-3">
    <div className="rounded-md bg-red-100/60 p-2 text-red-700">
      <Clock className="mr-1.5 inline h-4 w-4" />
      <span>LIMITED TIME OFFER! 50% OFF!</span>
    </div>
    <p>Important article content...</p>
    <div className="rounded-md bg-yellow-100/60 p-2 text-yellow-800">
      <Mail className="mr-1.5 inline h-4 w-4" />
      <span>Subscribe to our newsletter!</span>
    </div>
    <p>More valuable content...</p>
    <div className="rounded-md bg-slate-100 p-2 text-xs text-slate-500">
      <Shield className="mr-1.5 inline h-3 w-3" />
      <span>Footer • Privacy Policy • Terms</span>
    </div>
  </div>
);

// Define the content for the "After" state
const afterExample = (
  <div className="space-y-3">
    <h4 className="text-lg font-bold text-slate-900">AI and machine learning trends in 2024</h4>
    <ul className="list-inside list-disc space-y-1.5 text-base leading-relaxed">
      <li>Clean, structured content ready for AI processing.</li>
      <li>No ads, no distractions, just pure information.</li>
      <li>Perfectly formatted for ChatGPT, Claude, or any LLM.</li>
    </ul>
  </div>
);

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="bg-slate-50 py-20 lg:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">From chaos to clarity</h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
          PromptReady doesn’t just copy text — it intelligently refines it, removing clutter and
          revealing the valuable content underneath.
        </p>
      </div>
      {/* Use the new component by passing the content as props */}
      <ComparativeDisplay
        variant="blue-purple"
        beforeContent={beforeExample}
        afterContent={afterExample}
      />
    </div>
  </section>
);

export default HowItWorks;
