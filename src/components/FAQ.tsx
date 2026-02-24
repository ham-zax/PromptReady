import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const FAQBackground = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.svg 
        style={{ rotate, y }}
        className="absolute top-1/4 right-[10%] w-48 h-48 text-brand-accent/5" 
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
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        className="absolute top-10 left-[5%] w-32 h-32 text-brand-ink" 
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
            className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl relative inline-block"
          >
            Frequently asked questions
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="absolute -bottom-3 right-0 w-24 h-4 text-brand-accent/50"
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
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg"
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={item.key}
                className="rounded-3xl border border-brand-border bg-white/80 backdrop-blur-sm px-6 py-2 transition-all duration-300 hover:shadow-md hover:border-brand-accent/30 data-[state=open]:shadow-md data-[state=open]:bg-white"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-brand-ink hover:no-underline sm:text-lg py-4 group">
                  <span className="group-hover:text-brand-accent transition-colors">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-brand-muted sm:text-base pr-8">
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
