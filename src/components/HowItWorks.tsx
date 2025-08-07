import React from 'react';
import { Play, Download, Settings, Copy, Award, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => (
  <section className="py-20 lg:py-32 bg-blue-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-6">
          <Play className="w-4 h-4 mr-2" />
          How It Works
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          From Clutter to Clean in 3 Seconds.
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform how you copy content forever with our simple installation and intuitive interface
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="text-center group">
          <div className="relative mb-8">
            <div className="browser-mockup floating-card mx-auto max-w-sm">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                  Chrome Web Store
                </div>
              </div>
              <div className="aspect-video bg-blue-200 flex items-center justify-center group-hover:bg-blue-300 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-sm text-blue-700 font-medium">🎬 Installation Demo</div>
                  <div className="text-xs text-blue-600 mt-1">Click → Install → Done!</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            Install Extension
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Add PromptReady to Chrome, Firefox, or Edge in seconds. One-click installation from the official store.
          </p>
        </div>
        {/* Step 2 */}
        <div className="text-center group">
          <div className="relative mb-8">
            <div className="browser-mockup floating-card mx-auto max-w-sm">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                  example.com
                </div>
              </div>
              <div className="aspect-video bg-green-200 flex items-center justify-center group-hover:bg-green-300 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-sm text-green-700 font-medium">🎬 Mode Selection</div>
                  <div className="text-xs text-green-600 mt-1">Offline ⟷ AI Enhanced</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
            Choose Your Mode
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Toggle between offline mode for speed or AI-enhanced mode for intelligent formatting and summaries.
          </p>
        </div>
        {/* Step 3 */}
        <div className="text-center group">
          <div className="relative mb-8">
            <div className="browser-mockup floating-card mx-auto max-w-sm">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                  article.com
                </div>
              </div>
              <div className="aspect-video bg-purple-200 flex items-center justify-center group-hover:bg-purple-300 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                    <Copy className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-sm text-purple-700 font-medium">🎬 Clean Copy Action</div>
                  <div className="text-xs text-purple-600 mt-1">Select → Copy → Perfect!</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
            Copy & Paste
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Click the PromptReady button, customize formatting if needed, and paste clean text anywhere.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="inline-flex items-center px-8 py-4 bg-white rounded-full font-semibold text-gray-700 shadow-xl">
          <Award className="w-5 h-5 mr-3 text-green-600" />
          Manifest V3 Compliant • Compatible with Chrome, Firefox, Edge
          <Sparkles className="w-5 h-5 ml-3 text-blue-600" />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;