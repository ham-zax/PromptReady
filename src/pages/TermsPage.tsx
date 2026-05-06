import React from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/seo/SEOHead';
import Footer from '../components/Footer';
import { usePageSEO } from '../hooks/useSEO';

const sections = [
  {
    title: 'Using PromptReady',
    body: 'PromptReady provides browser-extension tools for capturing selected page content and exporting cleaned Markdown or JSON. You are responsible for using exports in a lawful way and respecting source-site terms.',
  },
  {
    title: 'Free core features',
    body: 'Core offline capture and Markdown export are free. Optional BYOK AI cleanup is limited to 5 successful AI cleanups per local day.',
  },
  {
    title: 'OpenRouter BYOK',
    body: 'If you enable BYOK AI cleanup, the extension sends the captured content and your OpenRouter API key directly to OpenRouter for that request. Your use of OpenRouter is also governed by OpenRouter terms and policies.',
  },
  {
    title: 'No warranty',
    body: 'PromptReady is provided as-is. Extraction quality can vary by site, and app-heavy, lazy-loaded, or social pages may need site-specific handling.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to contact@promptready.app.',
  },
];

const TermsPage: React.FC = () => {
  const seo = usePageSEO('terms');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28 }}
    >
      <SEOHead seo={seo} />

      <main className="bg-brand-bg pt-32 sm:pt-40">
        <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="linear-kicker text-brand-accent text-[1.05rem]">Terms of Use</p>
          <h1 className="linear-display text-brand-ink mt-3 text-[clamp(3rem,8vw,5rem)] leading-[0.95]">
            Terms for the published PromptReady release.
          </h1>
          <p className="text-brand-muted mt-5 text-base leading-relaxed sm:text-lg">
            Effective date: May 6, 2026
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-brand-ink text-xl font-semibold">{section.title}</h2>
                <p className="text-brand-muted mt-3 text-base leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </motion.div>
  );
};

export default TermsPage;
