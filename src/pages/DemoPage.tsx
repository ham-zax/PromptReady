import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { usePageSEO } from '../hooks/useSEO';

// Import components
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

// Lazy load heavy components
const VideoDemo = React.lazy(() => import('../components/VideoDemo'));

interface DemoPageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const DemoPage: React.FC<DemoPageProps> = ({ onPrimaryAction }) => {
  // Get dynamic SEO configuration with proper canonical URLs
  const seo = usePageSEO('demo');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
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
        <div className="bg-white">
          {/* Demo Hero Section */}
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
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Play className="h-4 w-4" />
                  Interactive Demo
                </motion.div>
                
                <motion.h1
                  className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  See PromptReady in Action
                </motion.h1>
                
                <motion.p
                  className="mx-auto mb-8 max-w-3xl text-lg text-slate-700 sm:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Turn any selection into AI‑ready Markdown or JSON — code fences, tables, and citations preserved.
                  Privacy‑first, runs locally. Pro adds optional validation with your own API key.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => onPrimaryAction('DemoPage-Hero')}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
                  >
                    Get Early Access
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

           {/* Video Demo Section */}
          <section className="relative bg-gradient-to-b from-blue-50 to-white">
            <React.Suspense fallback={<div className="h-96 flex items-center justify-center">Loading demo...</div>}>
              <VideoDemo />
            </React.Suspense>
          </section>

          {/* How It Works Section */}
          <section className="relative bg-blue-50">
            <HowItWorks />
          </section>

          {/* CTA Section */}
          <section className="relative bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Ready to streamline your workflow?
              </h2>
              <p className="mb-8 text-lg text-slate-700">
                Join thousands of professionals who are already saving hours every week with PromptReady.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onPrimaryAction('DemoPage-CTA')}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
                >
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </motion.div>
  );
};

export default DemoPage;
