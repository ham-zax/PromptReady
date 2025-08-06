import React from 'react';
import { Award } from 'lucide-react';

interface PricingProps {
  scrollToSignup: () => void;
}

const Pricing: React.FC<PricingProps> = ({ scrollToSignup }) => (
  <section className="py-16 lg:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        What to Expect in the Beta
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Get early access to new features, help shape the product, and enjoy exclusive updates.
      </p>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">FREE FOREVER</div>
          <p className="text-lg text-gray-700 mb-4">Instant clean text extraction, offline processing, basic AI features</p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
            <Award className="w-4 h-4 mr-2 text-green-600" />
            Enterprise-Ready • Privacy-First • Manifest V3
          </div>
        </div>
      </div>
      <button
        onClick={scrollToSignup}
        className="bg-gradient-to-r from-blue-700 to-green-700 hover:from-blue-800 hover:to-green-800 text-white px-8 py-4 h-12 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        Get Early Access
      </button>
    </div>
  </section>
);

export default Pricing;