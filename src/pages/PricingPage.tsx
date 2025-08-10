import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star } from 'lucide-react';
import Logo from '../components/ui/Logo';

// Import components
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
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
        <title>PromptReady Pricing — Free core local features • Pro $3/mo</title>
        <meta 
          name="description" 
          content="Free forever core local features. Pro adds Prompt‑Ready Bundles and optional BYOK validation using your key (OpenRouter or manual base URL/model). No credit card required." 
        />
        <meta property="og:title" content="PromptReady Pricing — Free core local features • Pro $3/mo" />
        <meta 
          property="og:description" 
          content="Free forever core local features. Pro adds Prompt‑Ready Bundles and optional BYOK validation using your key (OpenRouter or manual base URL/model)." 
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://promptready.app/pricing" />
      </Helmet>

      <main>
        <div className="bg-white">
          {/* Pricing Hero Section */}
          <section className="relative bg-gradient-to-b from-white to-blue-50 py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* Logo */}
                <motion.div
                  className="mb-6 justify-center hidden sm:flex"
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
                  Free forever for core. Pro is just $3/mo.
                </motion.h1>
                
                <motion.p
                  className="mx-auto mb-8 max-w-3xl text-lg text-slate-700 sm:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Start free. Clean, structure, and export on‑device with full privacy. 
                  Upgrade anytime to Pro for Prompt‑Ready Bundles and optional BYOK validation using your key.
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
                        One‑click clean & structure
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        100% client‑side privacy
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        Markdown/JSON export
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        Cite‑first footer (URL + timestamp)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        Code & Docs mode
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Star className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Pro (BYOK) — $3/mo or $29/yr</h3>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Everything in Free
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Prompt‑Ready Bundles editor
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Optional BYOK validation (OpenRouter or custom base URL/model)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Model selection and usage controls
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        Power‑user options & early features
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

          <FAQ />

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
          <Footer />
        </div>
      </main>
    </motion.div>
  );
};

export default PricingPage;
