import React from 'react';
import { Award } from 'lucide-react';

interface PricingProps {
  onPrimaryAction: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPrimaryAction }) => (
  <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
    <div className="mx-auto max-w-md px-2 text-center sm:max-w-2xl sm:px-4 lg:max-w-4xl lg:px-8">
      <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
        Ready to Reclaim Your Time?
      </h2>
      <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
        Get early access to new features, help shape the product, and enjoy exclusive updates.
      </p>
      <div className="group mb-6 rounded-2xl border border-white/30 bg-gradient-to-br from-emerald-50 to-green-100 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-lg sm:mb-8 sm:rounded-3xl sm:p-10">
        <div className="text-center">
          <div className="mb-2 text-3xl font-bold text-emerald-600 sm:mb-3 sm:text-4xl">
            FREE FOREVER
          </div>
          <p className="mb-4 text-base text-gray-700 sm:mb-6 sm:text-lg">
            Instant clean text extraction, offline processing, core local features
          </p>
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-black/5 sm:px-6 sm:py-3">
            <Award className="mr-3 h-5 w-5 text-emerald-600" />
            Enterprise-Ready • Privacy-First • Manifest V3
          </div>
        </div>
      </div>
      <button
        onClick={onPrimaryAction}
        className="group w-full transform rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
        tabIndex={0}
        aria-label="Get Early Access - Limited Beta Spots!"
      >
        Get Early Access
        <span className="mt-2 block text-sm font-medium text-blue-100 group-hover:text-white sm:mt-3">
          Limited beta spots • No credit card required
        </span>
      </button>
    </div>
  </section>
);

export default Pricing;
