import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star } from 'lucide-react';
import Logo from '../components/ui/Logo';

// Import components
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Footer from '../components/Footer';

interface PricingPageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onPrimaryAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>PromptReady Pricing - Free Forever Core Features</title>
        <meta 
          name="description" 
          content="PromptReady pricing plans. Free forever core features with optional premium AI enhancements. No credit card required." 
        />
        <meta property="og:title" content="PromptReady Pricing - Free Forever Core Features" />
        <meta 
          property="og:description" 
          content="PromptReady pricing plans. Free forever core features with optional premium AI enhancements. No credit card required." 
        />
        <link rel="canonical" href="https://promptready.vercel.app/pricing" />
      </Helmet>

      <main>
        <div className="bg-white">
          {/* Pricing Hero Section */}
          <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* Logo */}
                <motion.div
                  className="mb-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  <Logo size="lg" background="subtle" />
                </motion.div>

                <motion.div
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Star className="h-4 w-4" />
                  Free Forever Core Features
                </motion.div>
                
                <motion.h1
                  className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Simple, Transparent Pricing
                </motion.h1>
                
                <motion.p
                  className="mx-auto mb-8 max-w-3xl text-lg text-slate-700 sm:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Start with our powerful free tier that covers all essential text cleaning features. 
                  Upgrade only when you need advanced AI enhancements.
                </motion.p>

                <motion.div
                  className="mb-12 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="inline-flex items-center gap-4 rounded-full bg-slate-100 p-1">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                      Monthly
                    </span>
                    <span className="px-4 py-2 text-sm font-medium text-slate-600">
                      Annual (Save 20%)
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Quick Comparison */}
              <motion.div
                className="mx-auto mb-16 max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-2">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Free Forever</h3>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        One-click text cleaning
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        100% client-side privacy
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        Basic formatting options
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        Unlimited usage
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Star className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Premium AI</h3>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Everything in Free
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        AI-powered summaries
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Custom templates
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Advanced export options
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Detailed Pricing Section */}
          <section className="relative bg-white">
            <Pricing onPrimaryAction={() => onPrimaryAction('PricingPage-Pricing')} />
          </section>

          {/* Features Section */}
          <section className="relative bg-purple-50">
            <Features />
          </section>

          {/* FAQ Section */}
          <section className="relative bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-700">
                  Everything you need to know about PromptReady pricing.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Is the free version really free forever?
                  </h3>
                  <p className="text-slate-700">
                    Yes! Our core text cleaning features will always be free. We believe everyone should have access to clean, AI-ready text without barriers.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    What's the difference between free and premium?
                  </h3>
                  <p className="text-slate-700">
                    The free version handles all essential text cleaning locally on your device. Premium adds AI-powered features like smart summaries, custom templates, and advanced export options.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Can I cancel my premium subscription anytime?
                  </h3>
                  <p className="text-slate-700">
                    Absolutely. You can cancel anytime and you'll continue to have access to premium features until the end of your billing period. Then you'll automatically return to the free tier.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative bg-slate-900 py-16 lg:py-24 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Ready to get started?
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Join our waitlist to be among the first to experience PromptReady.
              </p>
              <button
                onClick={() => onPrimaryAction('PricingPage-Final-CTA')}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Footer */}
          <section className="relative bg-slate-900 text-slate-100">
            <Footer />
          </section>
        </div>
      </main>
    </motion.div>
  );
};

export default PricingPage;
