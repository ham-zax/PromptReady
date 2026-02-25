import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from '@/components/ui/Icons';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import HeroBackground from '../components/ui/HeroBackground';
import { usePageSEO } from '../hooks/useSEO';
import SEOHead from '../components/seo/SEOHead';

const VideoDemo = React.lazy(() => import('../components/VideoDemo'));

interface DemoPageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const DemoPage: React.FC<DemoPageProps> = ({ onPrimaryAction }) => {
  const seo = usePageSEO('demo');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <SEOHead seo={seo} />

      <main className="relative pb-16 sm:pb-20">
        <HeroBackground />
        <section className="relative z-10 px-4 pt-36 pb-8 text-center sm:px-6 sm:pt-44 lg:px-8 lg:pt-48">
          <motion.p
            className="linear-kicker border-brand-border bg-brand-surface text-brand-muted inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[1.05rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Play className="text-brand-accent h-3.5 w-3.5" />
            Interactive walkthrough
          </motion.p>

          <motion.h1
            className="linear-display text-brand-ink mx-auto mt-4 max-w-5xl text-[clamp(3rem,8vw,5.8rem)] leading-[0.92] tracking-[0.01em] sm:mt-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Watch PromptReady clean a page from start to finish
          </motion.h1>

          <motion.p
            className="text-brand-muted mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:mt-5 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            See exactly how the extension captures content, removes noise, and prepares model-ready
            context.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <button
              onClick={() => onPrimaryAction('DemoPage-Hero')}
              className="border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white transition-colors sm:text-base"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/pricing"
              className="border-brand-border bg-brand-surface text-brand-ink hover:bg-brand-surface-soft inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors sm:text-base"
            >
              View Pricing
            </Link>
          </motion.div>
        </section>

        <React.Suspense
          fallback={<div className="flex h-96 items-center justify-center">Loading demo…</div>}
        >
          <VideoDemo />
        </React.Suspense>

        <HowItWorks />

        <section className="pt-10 pb-20 text-center sm:pt-14">
          <h2 className="linear-display text-brand-ink text-[clamp(2.5rem,6.6vw,3.6rem)] leading-[0.95]">
            Ready to use this on your own workflow?
          </h2>
          <p className="text-brand-muted mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Join the waitlist and get notified as soon as the next release is live.
          </p>
          <button
            onClick={() => onPrimaryAction('DemoPage-CTA')}
            className="border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover mt-6 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-base font-semibold text-white transition-colors"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>

        <Footer onPrimaryAction={() => onPrimaryAction('Footer')} />
      </main>
    </motion.div>
  );
};

export default DemoPage;
