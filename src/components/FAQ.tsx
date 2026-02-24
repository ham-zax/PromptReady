import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQItem {
  key: string;
  q: string;
  a: React.ReactNode;
}

const items: FAQItem[] = [
  {
    key: 'local-first',
    q: 'Is it local first?',
    a: <>Yes. Core cleaning and structuring runs on your device. Nothing is uploaded by default.</>,
  },
  {
    key: 'api-key',
    q: 'Do I need an API key?',
    a: <>No. The core product works without one. Optional pro features may support BYOK.</>,
  },
  {
    key: 'browsers',
    q: 'Which browsers are supported?',
    a: <>Chrome and Chromium-based browsers are currently supported. Firefox support is planned.</>,
  },
  {
    key: 'preserve',
    q: 'Will it preserve code and tables?',
    a: <>Yes. PromptReady is built for technical formatting and keeps structure intact.</>,
  },
  {
    key: 'pricing',
    q: 'Is the free plan time-limited?',
    a: <>No. Current beta access is free, with optional paid tiers added separately.</>,
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 id="faq-heading" className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Details on privacy, support, and how PromptReady fits into your workflow.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item) => (
            <AccordionItem
              key={item.key}
              value={item.key}
              className="rounded-2xl border border-slate-200 bg-white/85 px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-charcoal-500 hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
