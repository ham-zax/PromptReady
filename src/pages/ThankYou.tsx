import React from 'react';
import { ArrowLeft, ArrowRight } from '@/components/ui/Icons';
import { env } from '../config';
import Logo from '../components/ui/Logo';
import SEOHead from '../components/seo/SEOHead';
import { usePageSEO } from '../hooks/useSEO';

const ThankYou: React.FC = () => {
  const seo = usePageSEO('thankYou');

  return (
    <section className="bg-brand-bg relative flex min-h-screen items-center">
      <SEOHead seo={seo} />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo size="xl" />
          </div>

          <h1 className="text-brand-ink mb-3 text-4xl font-bold tracking-tight">
            PromptReady is headed to the Chrome Web Store
          </h1>
          <p className="text-brand-muted mx-auto max-w-2xl">
            The extension listing is wired into the launch CTAs now, so the same link is ready when
            publication goes live.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <a
            href={env.CHROME_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-accent hover:bg-brand-accent-hover inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            Open Chrome Web Store
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/"
            className="text-brand-accent hover:text-brand-accent-hover inline-flex items-center gap-2 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
