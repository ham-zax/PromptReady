import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import { usePageSEO } from '../hooks/useSEO';

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
        <section className="px-4 pb-8 pt-14 text-center sm:px-6 sm:pt-18 lg:px-8">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Play className="h-3.5 w-3.5" />
            Interactive walkthrough
          </motion.p>

          <motion.h1
            className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-charcoal-500 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Watch PromptReady clean a page from start to finish
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal-400 sm:text-base"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-charcoal-500 transition-colors hover:bg-slate-100 sm:text-base"
            >
              View Pricing
            </Link>
          </motion.div>
        </section>

        <React.Suspense fallback={<div className="flex h-96 items-center justify-center">Loading demo…</div>}>
          <VideoDemo />
        </React.Suspense>

        <HowItWorks />

        <section className="pb-20 pt-10 text-center sm:pt-14">
          <h2 className="text-3xl font-semibold text-charcoal-500 sm:text-4xl">
            Ready to use this on your own workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Join the waitlist and get notified as soon as the next release is live.
          </p>
          <button
            onClick={() => onPrimaryAction('DemoPage-CTA')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-charcoal-400"
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

export default DemoPage;
