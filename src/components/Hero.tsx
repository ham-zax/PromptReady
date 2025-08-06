import React from 'react';
import { Lock, Zap, Award, ArrowRight, Star, Sparkles, Play } from 'lucide-react';

interface HeroProps {
  scrollToSignup: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSignup }) => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
    <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="flex justify-center flex-wrap gap-4 mb-8 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Lock className="w-4 h-4 mr-2" />
              100% Client-Side Privacy
            </div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Zap className="w-4 h-4 mr-2" />
              Lightning Fast
            </div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Award className="w-4 h-4 mr-2" />
              Manifest V3 Compliant
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
            Stop Wasting Time on{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Messy Web Copies
            </span>
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            PromptReady Delivers Perfect, LLM-Ready Text in 1 Click
          </p>
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.6s'}}>
            Save 2+ hours weekly copying web content. Get clean, AI-ready text instantly—works offline or with optional AI enhancement for perfect formatting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <button
              onClick={scrollToSignup}
              className="glow-effect bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Join the Private Beta</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <div className="flex items-center text-gray-700 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.9★ • Join 500+ testers in our private beta</span>
            </div>
          </div>
        </div>
        <div className="mb-12 animate-slide-up" style={{animationDelay: '1s'}}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See How It Works</h3>
            </div>
            <div className="browser-mockup floating-card max-w-4xl mx-auto">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-600 font-medium">
                  example-article.com
                </div>
                <div className="ml-auto">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    <Sparkles className="w-3 h-3 mr-1" />
                    PromptReady Active
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-red-800 text-lg flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      Before: Messy Copy
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-100 border border-red-300 p-3 rounded-lg">
                        <div className="text-red-700 font-medium">🎯 LIMITED TIME OFFER! 50% OFF!</div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        Important article content about AI and machine learning trends in 2024...
                      </div>
                      <div className="bg-yellow-100 border border-yellow-300 p-3 rounded-lg">
                        <div className="text-yellow-700 font-medium">📧 Subscribe to our newsletter!</div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        More valuable content mixed with promotional elements...
                      </div>
                      <div className="bg-gray-100 border border-gray-300 p-3 rounded-lg">
                        <div className="text-gray-600 text-xs">Footer • Privacy Policy • Terms of Service</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-green-800 text-lg flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      After: PromptReady
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="font-semibold text-gray-900 text-lg">
                        # AI and Machine Learning Trends in 2024
                      </div>
                      <div className="text-gray-700 leading-relaxed space-y-2">
                        <p>Clean, structured content ready for AI processing.</p>
                        <p>No ads, no distractions, just pure information.</p>
                        <p>Perfectly formatted for ChatGPT, Claude, or any LLM.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 animate-slide-up" style={{animationDelay: '1.2s'}}>
          <div className="browser-mockup floating-card max-w-4xl mx-auto">
            <div className="browser-header">
              <div className="browser-dot bg-red-500"></div>
              <div className="browser-dot bg-yellow-500"></div>
              <div className="browser-dot bg-green-500"></div>
              <div className="ml-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-1 text-sm font-medium">
                🎬 Quick Demo (30s)
              </div>
            </div>
            <div
              className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-200 hover:via-purple-200 hover:to-pink-200 transition-all duration-300 group"
              onClick={() => {
                console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
                alert('Video demo coming soon! This click shows user interest in seeing the product in action.');
              }}
            >
              <div className="text-center">
                <div className="bg-white rounded-full p-6 mb-4 shadow-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">Watch: Install → Copy Clean Text → Paste Anywhere</p>
                <p className="text-blue-600 font-semibold">Coming after validation • Click to show interest!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;