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
    q: 'Is it local‑first?',
    a: (
      <>
        Yes. All core cleaning and structuring runs on your device. Nothing is uploaded or stored on a server.
      </>
    ),
  },
  {
    key: 'api-key',
    q: 'Do I need an API key?',
    a: (
      <>
        No. An API key is not required. Pro adds optional “Bring Your Own Key (BYOK)” for validation or formatting
        using OpenAI‑compatible providers (e.g., OpenRouter or a custom base URL/model).
      </>
    ),
  },
  {
    key: 'browsers',
    q: 'Which browsers are supported?',
    a: (
      <>
        Chrome MV3 and Chromium‑based browsers targeting stable releases from roughly the past 12 months.
      </>
    ),
  },
  {
    key: 'preserve',
    q: 'Will it preserve code and tables?',
    a: (
      <>
        Yes. Use Code & Docs mode to keep code fences (with language inference), tables, and technical formatting intact.
      </>
    ),
  },
  {
    key: 'naming',
    q: 'How are files named?',
    a: (
      <>
        <code className="font-mono">&lt;title&gt;__YYYY-MM-DD__hhmm__hash.(md|json)</code> for easy sorting and traceability.
      </>
    ),
  },
  {
    key: 'free-forever',
    q: 'Is the free version really free forever?',
    a: (
      <>
        Yes. Core clean/structure/export is free forever. Upgrade to Pro when you want Bundles or optional BYOK validation.
      </>
    ),
  },
  {
    key: 'what-pro',
    q: 'What does Pro include?',
    a: (
      <>
        Prompt‑Ready Bundles editor, optional BYOK validation (OpenAI‑compatible), and power‑user options. Pricing is
        <strong> $3/mo or $29/yr</strong>.
      </>
    ),
  },
  {
    key: 'cancel',
    q: 'Can I cancel Pro anytime?',
    a: (
      <>Yes. You can cancel anytime and keep access until the end of the billing period.</>
    ),
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-700">Everything you need to know about PromptReady.</p>
        </div>

        <Accordion type="single" collapsible defaultValue="local-first">
          {items.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger className="text-left text-base text-slate-900">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700">
                <div className="prose prose-sm max-w-none">
                  {item.a}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;


