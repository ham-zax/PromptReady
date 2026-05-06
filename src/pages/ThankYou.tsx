import React from 'react';
import { ArrowLeft } from '@/components/ui/Icons';
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
            PromptReady is available now
          </h1>
          <p className="text-brand-muted mx-auto max-w-2xl">
            Install PromptReady from the Chrome Web Store to start exporting clean Markdown.
          </p>
        </div>

        <div className="mt-8 text-center">
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
