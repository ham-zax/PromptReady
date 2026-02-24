import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CopyCheck, MousePointerClick, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Select your source',
    description: 'Use the extension button or keyboard shortcut on any page.',
    icon: <MousePointerClick className="h-6 w-6 text-brand-accent" />,
    badge: '01',
  },
  {
    title: 'Clean in one pass',
    description: 'PromptReady strips clutter and keeps structure that LLMs can parse.',
    icon: <Zap className="h-6 w-6 text-brand-success" />,
    badge: '02',
  },
  {
    title: 'Paste with confidence',
    description: 'Get citation-ready Markdown instantly in your clipboard.',
    icon: <CopyCheck className="h-6 w-6 text-brand-ink" />,
    badge: '03',
  },
];

const AnimatedLine = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-[10%] right-[10%] top-1/2 z-0 hidden -translate-y-1/2 md:block h-32">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none">
         {/* Background subtle line */}
        <path
          d="M0,50 Q 250,20 500,50 T 1000,50"
          stroke="var(--brand-border)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
          fill="none"
          className="opacity-50"
        />
        {/* Animated progressive line */}
        <motion.path
          d="M0,50 Q 250,20 500,50 T 1000,50"
          stroke="var(--brand-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="relative py-20 sm:py-32">
    
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="linear-display text-[clamp(2.5rem,6.8vw,4.2rem)] leading-[0.94] text-brand-ink relative inline-block"
        >
          From noisy page to useful prompt <span className="text-brand-accent relative">
            in seconds
             {/* Circular highlight SVG */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none text-brand-accent/30"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <path 
                d="M100 10 C 180 10 190 50 100 90 C 10 90 20 10 100 10 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
              />
            </motion.svg>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted"
        >
          The flow is intentionally simple so you can stay in your research or coding context.
        </motion.p>
      </div>

      <div className="relative z-10">
        <AnimatedLine />
        
        <div className="relative grid gap-8 md:grid-cols-3 md:gap-12 z-10">
          {steps.map((step, index) => (
            <motion.article
              key={step.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] bg-white/80 backdrop-blur-sm"
            >
              {/* Animated subtle background blob */}
              <motion.div 
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-surface-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                layoutId={`blob-${index}`}
              />

              <div className="mb-8 flex items-center justify-between relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface-soft shadow-sm transition-transform duration-500"
                >
                  {step.icon}
                </motion.div>
                <span className="linear-display text-5xl leading-none text-brand-border transition-colors duration-500 group-hover:text-brand-accent/20 font-bold">
                  {step.badge}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-brand-ink relative z-10">{step.title}</h3>
              <p className="text-base leading-relaxed text-brand-muted relative z-10">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
