import React from 'react';
import { Star, Copy, CheckCircle, Shield } from 'lucide-react';

const ProblemSolution: React.FC = () => (
<section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  End the Web Copy Nightmare
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ads, footers, and broken formats waste your time—especially for AI workflows.
                </p>
              </div>
              
              {/* Social Proof Card - Repositioned and Redesigned */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                {/* Consistent rounded accent instead of sharp line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
                <div className="ml-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 fill-current opacity-50" />
                    </div>
                    {/* Improved contrast for accessibility */}
                    <span className="text-sm font-semibold text-gray-800">4.5★ Rating</span>
                  </div>
                  <p className="text-gray-700 italic font-medium">"Transformed my research workflow!" – Developer</p>
                </div>
              </div>
            </div>

            {/* Solution Section - Enhanced Visual Separation */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  PromptReady: Simple, Secure, and Smart
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dual modes deliver instant results offline or AI-enhanced structuring online, all client-side for ultimate privacy.
                </p>
              </div>
              
              {/* Enhanced Icon Group with Better Visual Hierarchy */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <Copy className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Copy Clean</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-green-100 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Instant Results</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-purple-100 p-4 rounded-xl">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Privacy First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
);

export default ProblemSolution;