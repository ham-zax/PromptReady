import React from 'react';
import { Award } from 'lucide-react';

interface PricingProps {
  onPrimaryAction: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPrimaryAction }) => (
  <section className="py-8 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-md px-2 text-center sm:max-w-2xl sm:px-4 lg:max-w-4xl lg:px-8">
      <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
        Ready to Reclaim Your Time?
      </h2>
      <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
        Get early access to new features, help shape the product, and enjoy exclusive updates.
      </p>
      <div className="mb-6 rounded-xl border bg-green-50 p-4 sm:mb-8 sm:rounded-2xl sm:p-8">
        <div className="text-center">
          <div className="mb-1 text-2xl font-bold text-green-600 sm:mb-2 sm:text-3xl">
            FREE FOREVER
          </div>
          <p className="mb-3 text-base text-gray-700 sm:mb-4 sm:text-lg">
            Instant clean text extraction, offline processing, core local features
          </p>
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-md sm:px-4 sm:py-2 sm:text-sm">
            <Award className="mr-2 h-4 w-4 text-green-600" />
            Enterprise-Ready • Privacy-First • Manifest V3
          </div>
        </div>
      </div>
      <button
        onClick={onPrimaryAction}
        className="w-full transform rounded-lg bg-blue-700 px-5 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
        tabIndex={0}
        aria-label="Get Early Access - Limited Beta Spots!"
      >
        Get Early Access
        <span className="mt-1 block text-xs font-medium text-blue-100 sm:mt-2">
          Limited beta spots • No credit card required
        </span>
      </button>
    </div>
  </section>
);

export default Pricing;
