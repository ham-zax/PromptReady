import React from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/seo/SEOHead';
import Footer from '../components/Footer';
import { usePageSEO } from '../hooks/useSEO';

const sections = [
  {
    title: 'What PromptReady processes',
    body: 'PromptReady captures the page or selection you choose and turns it into Markdown export content. Offline capture and Markdown export run locally by default.',
  },
  {
    title: 'Optional BYOK AI cleanup',
    body: 'If you enable BYOK AI cleanup, the extension sends the captured content and your OpenRouter API key directly to OpenRouter for that request. PromptReady does not proxy or store the request.',
  },
  {
    title: 'What is stored locally',
    body: 'The extension can store local settings such as export preferences and your OpenRouter key in extension local storage. You can remove that data from the extension settings or by uninstalling the extension.',
  },
  {
    title: 'What PromptReady does not do',
    body: 'PromptReady does not sell personal data. PromptReady does not operate a server-side AI proxy for BYOK cleanup and does not store your captured content on PromptReady servers.',
  },
  {
    title: 'Contact',
    body: 'Questions about privacy can be sent to contact@promptready.app.',
  },
];

const PrivacyPage: React.FC = () => {
  const seo = usePageSEO('privacy');

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
          <p className="linear-kicker text-brand-accent text-[1.05rem]">Privacy Policy</p>
          <h1 className="linear-display text-brand-ink mt-3 text-[clamp(3rem,8vw,5rem)] leading-[0.95]">
            Clear boundaries for capture and AI cleanup.
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

export default PrivacyPage;
