import React from 'react';
import { ArrowLeft } from '@/components/ui/Icons';
import Logo from '../components/ui/Logo';
import SEOHead from '../components/seo/SEOHead';
import { usePageSEO } from '../hooks/useSEO';

const ThankYou: React.FC = () => {
  const seo = usePageSEO('thankYou');

  return (
    <section className="relative flex min-h-screen items-center bg-brand-bg">
      <SEOHead seo={seo} />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo size="xl" />
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-brand-ink">
            You&apos;re on the list — thank you!
          </h1>
          <p className="mx-auto max-w-2xl text-brand-muted">
            We will email you as soon as early access opens.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover"
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
