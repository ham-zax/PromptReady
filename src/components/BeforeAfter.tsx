import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Wand2, XCircle } from 'lucide-react';

const BeforeAfterBackground = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.svg
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute left-[8%] top-[8%] h-14 w-72 text-brand-accent/25"
        viewBox="0 0 300 70"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M8 42 C 60 8, 120 72, 178 32 S 260 10, 296 58"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <motion.svg 
        style={{ x: x1, rotate }}
        className="absolute top-[30%] left-[-5%] w-64 h-64 text-brand-muted/10" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hand-drawn abstract shape */}
        <path 
          d="M 50 150 C 50 50 150 50 150 150 C 150 200 50 200 50 150 Z" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeDasharray="10 10" 
        />
        <path 
          d="M 70 130 C 70 80 130 80 130 130" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
      </motion.svg>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className="relative pb-20 pt-12 sm:pb-24">
      <BeforeAfterBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="linear-display text-[clamp(2.6rem,7vw,4.8rem)] leading-[0.94] text-brand-ink"
          >
            Same source,
            <br className="hidden sm:block" />
            <span className="relative inline-block text-brand-accent sm:translate-x-3">
              cleaner context

              {/* Hand-drawn loop */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] -rotate-[1.8deg] text-brand-accent/40 sm:-inset-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
                viewBox="0 0 200 100"
                preserveAspectRatio="none"
              >
                <path 
                  d="M100 15 C 160 5 190 30 180 60 C 170 90 30 90 20 60 C 10 30 40 5 100 15 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted sm:translate-x-1"
          >
            Stop hand-editing every snippet before using it in your prompts.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-[0_18px_42px_-26px_rgba(0,0,0,0.35)] sm:rotate-[-0.2deg]"
        >
          <div className="flex items-center justify-between border-b border-brand-border bg-brand-surface-soft px-4 py-4 sm:px-6">
            <div className="hidden text-xs font-semibold uppercase tracking-widest text-brand-muted sm:block">
              Before / After Comparison
            </div>
            <div className="linear-kicker inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 text-[1rem] text-brand-muted">
              <Wand2 className="h-4 w-4" />
              PromptReady pass
            </div>
          </div>

          <div className="grid divide-y divide-brand-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* Before Side */}
            <article className="bg-brand-surface-soft p-6 sm:p-8 md:-translate-y-1">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-brand-accent">
                <XCircle className="h-5 w-5" />
                Raw Copy-Paste
              </h3>

              <div className="space-y-4 font-mono text-sm leading-relaxed text-brand-muted relative">
                
                {/* Drawn X over the bad parts */}
                <motion.svg 
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 1, pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-2 left-2 w-full h-full text-brand-accent pointer-events-none z-10" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <path d="M5 5 L95 95 M95 5 L5 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                </motion.svg>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-brand-accent/20 bg-brand-surface p-4 relative"
                >
                  <span className="text-brand-accent/70">&lt;div class="promo"&gt;</span>
                  <br />
                  &nbsp;&nbsp;Save 40% today! Subscribe to our newsletter.
                  <br />
                  <span className="text-brand-accent/70">&lt;/div&gt;</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-brand-border bg-brand-surface p-4 text-brand-muted"
                >
                  Breaking down retrieval-augmented generation in production...
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-brand-accent/20 bg-brand-surface p-4"
                >
                  <span className="text-brand-accent/70">&lt;footer&gt;</span>
                  <br />
                  &nbsp;&nbsp;Subscribe to our newsletter | Related links | Footer text
                  <br />
                  <span className="text-brand-accent/70">&lt;/footer&gt;</span>
                </motion.div>
              </div>
            </article>

            {/* After Side */}
            <article className="relative overflow-hidden bg-brand-surface p-6 sm:p-8 md:translate-y-1">
              <h3 className="relative z-10 mb-6 flex items-center gap-2 text-lg font-semibold text-brand-success">
                <CheckCircle2 className="h-5 w-5" />
                PromptReady Output
              </h3>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-2xl border border-brand-success/20 bg-brand-surface-soft p-6 font-mono text-sm leading-relaxed text-brand-muted"
              >
                 {/* Sparkle decoration */}
                 <motion.svg
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.8 }}
                  className="absolute -top-4 -right-4 w-8 h-8 text-brand-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </motion.svg>

                <p className="mb-4 text-base font-semibold text-brand-success">
                  # Retrieval-Augmented Generation in Production
                </p>
                <p className="leading-loose text-brand-muted">
                  Clean article body with headings, lists, and code blocks preserved perfectly. No
                  ads, no navigation, no noise.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-brand-border pt-4 text-xs text-brand-muted">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-success/50" />
                  <span>Source: example.com/rag-guide</span>
                  <span className="mx-2">•</span>
                  <span>Captured: 2026-02-24T18:40Z</span>
                </div>
              </motion.div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
