import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star } from 'lucide-react';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import { usePageSEO } from '../hooks/useSEO';

interface PricingPageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onPrimaryAction }) => {
  const seo = usePageSEO('pricing');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.ogUrl} />
        <meta property="og:image" content={seo.ogImage} />
        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:image" content={seo.twitterImage} />
        <link rel="canonical" href={seo.canonicalUrl} />
        {seo.noindex && <meta name="robots" content="noindex,nofollow" />}
      </Helmet>

      <main>
        <section className="px-4 pb-4 pt-24 text-center sm:px-6 sm:pb-8 sm:pt-32 lg:px-8 lg:pt-36">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-persian-green-600 bg-persian-green-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-persian-green-900"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Star className="h-3.5 w-3.5" />
            Straightforward pricing
          </motion.p>

          <motion.h1
            className="mx-auto mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Free core product, paid extras only when you need them
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Start with the free plan and upgrade later for advanced workflow controls.
          </motion.p>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-black/10">
              <h3 className="text-lg font-semibold text-charcoal-500">Free</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700 sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-persian-green-500" />
                  Unlimited core clean exports
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-persian-green-500" />
                  Local-first privacy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-persian-green-500" />
                  Citation footer support
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-emerald-300/70 bg-[#fff7f1] p-6 shadow-[0_10px_30px_-18px_rgba(16,185,129,0.6)]">
              <h3 className="text-lg font-semibold text-charcoal-500">Pro (optional)</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700 sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-burnt-sienna-600" />
                  All free features
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-burnt-sienna-600" />
                  Bundle templates and advanced options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-burnt-sienna-600" />
                  BYOK validation workflows
                </li>
              </ul>
            </article>
          </motion.div>
        </section>

        <Pricing onPrimaryAction={() => onPrimaryAction('PricingPage-Pricing')} />
        <Features />
        <FAQ />

        <section className="pb-20 pt-8 text-center sm:pt-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Want early access?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Join now to get notified about upcoming releases and paid-tier launch details.
          </p>
          <button
            onClick={() => onPrimaryAction('PricingPage-Final-CTA')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-indigo-400"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>

        <Footer />
      </main>
    </motion.div>
  );
};

export default PricingPage;
