// src/components/ui/ProductDemoCard.tsx

import React from 'react';
import { Clock, Mail, Shield, Sparkles, Circle } from 'lucide-react';

export const ProductDemoCard: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-200">
      {/* Browser Header */}
      <div className="flex items-center p-3 border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500 hidden md:block"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hidden md:block"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hidden md:block"></div>
        </div>
        <div className="flex-grow text-center">
          <div className="bg-gray-100 rounded-lg px-4 py-1 text-sm text-gray-500 inline-block">
            example-article.com
          </div>
        </div>
        <div className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>PromptReady Active</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 grid md:grid-cols-2 gap-8">
        {/* Before Column */}
        <div>
          <div className="flex items-center mb-4">
            <Circle className="w-4 h-4 text-red-500 fill-current mr-2" />
            <h3 className="font-bold text-gray-800">Before: Messy Copy</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-100 text-red-700 text-center text-sm p-2 rounded-lg flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>LIMITED TIME OFFER! 50% OFF!</span>
            </div>
            <p className="text-gray-600">
              Important article content about AI and machine learning trends in 2024...
            </p>
            <div className="bg-yellow-100 text-yellow-800 text-center text-sm p-2 rounded-lg flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Subscribe to our newsletter!</span>
            </div>
            <p className="text-gray-600">
              More valuable content mixed with promotional elements...
            </p>
            <div className="bg-gray-100 text-gray-500 text-center text-xs p-2 rounded-lg flex items-center justify-center gap-2">
              <Shield className="w-3 h-3" />
              <span>Footer • Privacy Policy • Terms of Service</span>
            </div>
          </div>
        </div>

        {/* After Column */}
        <div>
          <div className="flex items-center mb-4">
            <Circle className="w-4 h-4 text-green-500 fill-current mr-2" />
            <h3 className="font-bold text-gray-800">After: PromptReady</h3>
          </div>
          <div className="space-y-2 text-gray-700">
            <h4 className="text-xl font-bold text-gray-900"># AI and Machine Learning Trends in 2024</h4>
            <p>Clean, structured content ready for AI processing.</p>
            <p>No ads, no distractions, just pure information.</p>
            <p>Perfectly formatted for ChatGPT, Claude, or any LLM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};