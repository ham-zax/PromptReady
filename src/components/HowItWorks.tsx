// src/components/HowItWorks.tsx

import React from 'react';
import { ProductDemoCard } from './ui/ProductDemoCard'; // Import our new component

const HowItWorks: React.FC = () => (
  <section className="py-20 lg:py-32 bg-saffron-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          See How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          One click is all it takes to transform a cluttered webpage into perfectly structured, AI-ready content.
        </p>
      </div>
      
      <ProductDemoCard />
      
    </div>
  </section>
);

export default HowItWorks;