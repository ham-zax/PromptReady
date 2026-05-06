import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQItem {
  key: string;
  q: string;
  a: React.ReactNode;
}

const items: FAQItem[] = [
  {
    key: 'local-first',
    q: 'What runs locally?',
    a: (
      <>
        Offline capture and Markdown export run locally by default. If you enable BYOK AI cleanup,
        the extension sends the captured content and your OpenRouter API key directly to OpenRouter
        for that request.
      </>
    ),
  },
  {
    key: 'api-key',
    q: 'Do I need an API key?',
    a: (
      <>
        No. The core product works without one. Optional AI cleanup can use your own OpenRouter key
        when you enable it. PromptReady does not proxy or store that request.
      </>
    ),
  },
  {
    key: 'browsers',
    q: 'Which browsers are supported?',
    a: <>Chrome and Chromium-based browsers are currently supported. Firefox support is planned.</>,
  },
  {
    key: 'preserve',
    q: 'Will it preserve code and tables?',
    a: (
      <>
        That is the goal of the offline baseline. AI cleanup is quality-gated so it can fall back
        when headings, code fences, or technical tokens are lost.
      </>
    ),
  },
  {
    key: 'site-limits',
    q: 'Does it work on every site?',
    a: (
      <>
        Not perfectly. PromptReady is designed for articles, docs, Reddit-style discussions,
        research pages, and everyday web content, but app-heavy, lazy, and social pages can still
        need site-specific handling.
      </>
    ),
  },
  {
    key: 'pricing',
    q: 'Is the free plan time-limited?',
    a: (
      <>
        No. Core offline capture and Markdown export are free. Optional OpenRouter BYOK AI cleanup
        is limited to 5 successful cleanups per local day, and failed OpenRouter calls do not count.
      </>
    ),
  },
];

const FAQBackground = () => {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.svg
        style={{ rotate, y }}
        className="text-brand-accent/5 absolute top-1/4 right-[10%] h-48 w-48"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 C 70 20 80 50 50 100 C 30 80 20 50 50 0 Z" />
      </motion.svg>
      {/* Hand-drawn question mark */}
      <motion.svg
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
        className="text-brand-ink absolute top-10 left-[5%] h-32 w-32"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M 30 40 C 30 20 70 20 70 40 C 70 55 50 60 50 70 M 50 85 L 50 90" />
      </motion.svg>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-24" aria-labelledby="faq-heading">
      <FAQBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="faq-heading"
            className="text-brand-ink relative inline-block text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Frequently asked questions
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="text-brand-accent/50 absolute right-0 -bottom-3 h-4 w-24"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M5 10 C 30 5 70 15 95 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          >
            Details on privacy, support, and how PromptReady fits into your workflow.
          </motion.p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={item.key}
                className="border-brand-border hover:border-brand-accent/30 rounded-3xl border bg-white/80 px-6 py-2 backdrop-blur-sm transition-all duration-300 hover:shadow-md data-[state=open]:bg-white data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-brand-ink group py-4 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  <span className="group-hover:text-brand-accent transition-colors">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted pr-8 pb-6 text-sm leading-relaxed sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
