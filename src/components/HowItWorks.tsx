// src/components/HowItWorks.tsx

import React from 'react';
import { Clock, Mail, Shield } from 'lucide-react';
import { ComparativeDisplay } from './ui/ComparativeDisplay';

// Define the content for the "Before" state as a separate JSX variable
const beforeExample = (
  <div className="space-y-3">
    <div className="bg-red-100/60 text-red-700 p-2 rounded-md">
      <Clock className="w-4 h-4 inline mr-1.5" />
      <span>LIMITED TIME OFFER! 50% OFF!</span>
    </div>
    <p>Important article content...</p>
    <div className="bg-yellow-100/60 text-yellow-800 p-2 rounded-md">
      <Mail className="w-4 h-4 inline mr-1.5" />
      <span>Subscribe to our newsletter!</span>
    </div>
    <p>More valuable content...</p>
    <div className="bg-slate-100 text-slate-500 p-2 rounded-md text-xs">
      <Shield className="w-3 h-3 inline mr-1.5" />
      <span>Footer • Privacy Policy • Terms</span>
    </div>
  </div>
);

// Define the content for the "After" state
const afterExample = (
  <div className="space-y-3">
    <h4 className="text-lg font-bold text-slate-900"># AI and Machine Learning Trends in 2024</h4>
    <ul className="list-disc list-inside space-y-1.5 text-base leading-relaxed">
      <li>Clean, structured content ready for AI processing.</li>
      <li>No ads, no distractions, just pure information.</li>
      <li>Perfectly formatted for ChatGPT, Claude, or any LLM.</li>
    </ul>
  </div>
);


const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          From Chaos to Clarity
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          PromptReady doesn't just copy text—it intelligently refines it, removing clutter and revealing the valuable content underneath.
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