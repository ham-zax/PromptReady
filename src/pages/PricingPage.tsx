import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from '@/components/ui/Icons';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import { usePageSEO } from '../hooks/useSEO';
import SEOHead from '../components/seo/SEOHead';
import HeroBackground from '../components/ui/HeroBackground';

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
      <SEOHead seo={seo} />

      <main className="relative">
        <HeroBackground />
        <section className="relative z-10 px-4 pb-4 pt-36 text-center sm:px-6 sm:pb-8 sm:pt-44 lg:px-8 lg:pt-48">
          <motion.p
            className="linear-kicker inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 text-[1.05rem] text-brand-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Star className="h-3.5 w-3.5 text-brand-accent" />
            Straightforward pricing
          </motion.p>

          <motion.h1
            className="linear-display mx-auto mt-4 max-w-5xl text-[clamp(3rem,8vw,5.8rem)] leading-[0.92] tracking-[0.01em] text-brand-ink sm:mt-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Free core product, paid extras only when you need them
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:mt-5 sm:text-lg"
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
            <article className="rounded-3xl border border-brand-border bg-brand-surface p-6 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.28)]">
              <h3 className="linear-display text-[2rem] leading-none text-brand-ink">Free</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-muted sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-success" />
                  Unlimited core clean exports
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-success" />
                  Local-first privacy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-success" />
                  Citation footer support
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-brand-accent/40 bg-brand-surface-soft p-6 shadow-[0_14px_34px_-22px_rgba(231,0,0,0.35)]">
              <h3 className="linear-display text-[2rem] leading-none text-brand-ink">
                Pro (optional)
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-muted sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-accent" />
                  All free features
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-accent" />
                  Bundle templates and advanced options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-accent" />
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
          <h2 className="linear-display text-[clamp(2.5rem,6.6vw,3.6rem)] leading-[0.95] text-brand-ink">
            Want early access?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Join now to get notified about upcoming releases and paid-tier launch details.
          </p>
          <button
            onClick={() => onPrimaryAction('PricingPage-Final-CTA')}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-accent-hover bg-brand-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-accent-hover"
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
