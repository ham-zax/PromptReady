// src/components/ui/ProductDemoCard.tsx

import React from 'react';
import { Clock, Mail, Shield, Sparkles, Circle } from 'lucide-react';

export const ProductDemoCard: React.FC = () => {
  return (
    // The main container is already responsive with max-w-4xl and mx-auto
    <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-200 bg-white">
      {/* Browser Header - Simplified for mobile */}
      <div className="flex items-center p-3 border-b border-gray-200">
        {/* Traffic lights are hidden on mobile, visible on desktop */}
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* URL bar is centered and responsive */}
        <div className="flex-grow text-center">
          <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-1 text-xs sm:text-sm text-gray-500 inline-block">
            example-article.com
          </div>
        </div>

        {/* PromptReady status badge - text is hidden on small screens */}
        <div className="bg-blue-100 text-blue-700 text-sm font-semibold px-2 sm:px-3 py-1 rounded-full flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">PromptReady Active</span>
        </div>
      </div>

      {/* 
        Content Area - Responsive changes:
        - Padding is reduced on mobile (`p-4`) and increased on larger screens (`sm:p-6 md:p-8`).
        - The grid collapses to one column on mobile by default.
        - The gap between columns is smaller on mobile (`gap-4`) and larger on desktop (`md:gap-8`).
      */}
      <div className="p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Before Column */}
        <div className="space-y-3">
          <div className="flex items-center mb-3">
            <Circle className="w-3 h-3 text-red-500 fill-current mr-2 flex-shrink-0" />
            <h3 className="font-bold text-gray-800">Before: Messy Copy</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-red-50/80 text-red-700 text-center p-2 rounded-lg flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>LIMITED TIME OFFER! 50% OFF!</span>
            </div>
            <p className="text-gray-600">
              Important article content about AI and machine learning trends in 2024...
            </p>
            <div className="bg-yellow-50/80 text-yellow-800 text-center p-2 rounded-lg flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>Subscribe to our newsletter!</span>
            </div>
            <p className="text-gray-600">
              More valuable content mixed with promotional elements...
            </p>
            <div className="bg-gray-100 text-gray-500 text-center text-xs p-2 rounded-lg flex items-center justify-center gap-2">
              <Shield className="w-3 h-3 flex-shrink-0" />
              <span>Footer • Privacy Policy • Terms of Service</span>
            </div>
          </div>
        </div>
        
        {/* Separator - Only visible on mobile to divide the sections */}
        <div className="border-b border-dashed border-gray-300 md:hidden"></div>

        {/* After Column */}
        <div className="space-y-2">
          <div className="flex items-center mb-3">
            <Circle className="w-3 h-3 text-green-500 fill-current mr-2 flex-shrink-0" />
            <h3 className="font-bold text-gray-800">After: PromptReady</h3>
          </div>
          <div className="space-y-2 text-gray-700">
            {/* Responsive heading size */}
            <h4 className="text-lg sm:text-xl font-bold text-gray-900"># AI and Machine Learning Trends in 2024</h4>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              <li>Clean, structured content ready for AI processing.</li>
              <li>No ads, no distractions, just pure information.</li>
              <li>Perfectly formatted for ChatGPT, Claude, or any LLM.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};