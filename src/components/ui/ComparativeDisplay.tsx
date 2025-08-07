// src/components/ui/ComparativeDisplay.tsx

import React from 'react';
import { Trash2, Sparkles } from 'lucide-react'; // A more "magical" icon for the "After" state

interface ComparativeDisplayProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}

export const ComparativeDisplay: React.FC<ComparativeDisplayProps> = ({
  beforeContent,
  afterContent,
}) => {
  return (
    // Use a responsive grid layout
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto">
      {/* Before Column */}
      <div className="bg-red-50/60 border-2 border-dashed border-red-300 rounded-xl p-6 min-h-[10rem] flex flex-col justify-center">
        <div className="flex items-center text-red-600 font-bold mb-3">
          <Trash2 className="w-5 h-5 mr-2" />
          <span>Before</span>
        </div>
        <div className="font-mono text-red-900/80">
          {beforeContent}
        </div>
      </div>

      {/* After Column */}
      <div className="bg-green-50/60 border-2 border-solid border-green-400 rounded-xl p-6 min-h-[10rem] flex flex-col justify-center shadow-lg shadow-green-500/10">
        <div className="flex items-center text-green-700 font-bold mb-3">
          <Sparkles className="w-5 h-5 mr-2" />
          <span>After</span>
        </div>
        <div className="font-sans text-green-900">
          {afterContent}
        </div>
      </div>
    </div>
  );
};