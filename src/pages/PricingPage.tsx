import React from 'react';
import { motion } from 'motion/react';
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
        <section className="relative z-10 px-4 pt-36 pb-4 text-center sm:px-6 sm:pt-44 sm:pb-8 lg:px-8 lg:pt-48">
          <motion.p
            className="linear-kicker border-brand-border bg-brand-surface text-brand-muted inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[1.05rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Star className="text-brand-accent h-3.5 w-3.5" />
            Straightforward pricing
          </motion.p>

          <motion.h1
            className="linear-display text-brand-ink mx-auto mt-4 max-w-5xl text-[clamp(3rem,8vw,5.8rem)] leading-[0.92] tracking-[0.01em] sm:mt-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Get PromptReady free
          </motion.h1>

          <motion.p
            className="text-brand-muted mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:mt-5 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Use offline capture and Markdown export without an API key. Optional OpenRouter BYOK AI
            cleanup is available with a 5-successful-cleanups-per-day local limit.
          </motion.p>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <article className="border-brand-border bg-brand-surface rounded-3xl border p-6 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.28)]">
              <h3 className="linear-display text-brand-ink text-[2rem] leading-none">Free</h3>
              <ul className="text-brand-muted mt-4 space-y-2.5 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="text-brand-success h-4 w-4" />
                  Core one-click Markdown exports
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-success h-4 w-4" />
                  Offline capture and export runs locally
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-success h-4 w-4" />
                  Citation footer support
                </li>
              </ul>
            </article>

            <article className="border-brand-accent/40 bg-brand-surface-soft rounded-3xl border p-6 shadow-[0_14px_34px_-22px_rgba(231,0,0,0.35)]">
              <h3 className="linear-display text-brand-ink text-[2rem] leading-none">
                BYOK AI (optional)
              </h3>
              <ul className="text-brand-muted mt-4 space-y-2.5 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Check className="text-brand-accent h-4 w-4" />
                  All free features
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-accent h-4 w-4" />5 successful AI cleanups per local
                  day
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-accent h-4 w-4" />
                  Direct OpenRouter requests with your key
                </li>
              </ul>
            </article>
          </motion.div>
        </section>

        <Pricing onPrimaryAction={() => onPrimaryAction('PricingPage-Pricing')} />
        <Features />
        <FAQ />

        <section className="pt-8 pb-20 text-center sm:pt-12">
          <h2 className="linear-display text-brand-ink text-[clamp(2.5rem,6.6vw,3.6rem)] leading-[0.95]">
            Ready to clean your next source?
          </h2>
          <p className="text-brand-muted mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Turn messy pages, docs, and threads into clean Markdown without copy-paste repair.
          </p>
          <button
            onClick={() => onPrimaryAction('PricingPage-Final-CTA')}
            className="border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover mt-6 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-base font-semibold text-white transition-colors"
          >
            Get PromptReady free
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>

        <Footer onPrimaryAction={() => onPrimaryAction('Footer')} />
      </main>
    </motion.div>
  );
};

export default PricingPage;
