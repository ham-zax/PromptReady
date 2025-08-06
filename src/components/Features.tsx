import React from 'react';
import { Zap, Brain, Settings, Shield, Sparkles } from 'lucide-react';

const Features: React.FC = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Powerful Features, Simple Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get perfect results with instant text extraction and optional AI enhancement
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
          <div className="mb-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-xs text-yellow-700 font-medium">Instant Parsing</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Results</h3>
          <p className="text-gray-600 leading-relaxed">Get clean text in under 100ms, even offline</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
          <div className="mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-xs text-purple-700 font-medium">AI Enhancement</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart AI Features</h3>
          <p className="text-gray-600 leading-relaxed">Auto-generate summaries and perfect LLM formatting</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
          <div className="mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-blue-700 font-medium">Customization</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Formatting</h3>
          <p className="text-gray-600 leading-relaxed">Adjust headings, lists & more with one click</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
          <div className="mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-xs text-green-700 font-medium">Privacy First</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Speed</h3>
          <p className="text-gray-600 leading-relaxed">All processing locally for maximum security & performance</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full text-sm font-medium text-gray-700 border">
          <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
          Freemium Model: Start Free, Upgrade for Pro Features Like Advanced Summaries
        </div>
      </div>
    </div>
  </section>
);

export default Features;