import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Wand2, XCircle } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className="relative pb-20 pt-12 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl"
          >
            Same source, cleaner context
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            Stop hand-editing every snippet before using it in your prompts.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-[#fffdf8] shadow-[0_18px_70px_-38px_rgba(38,70,83,0.5)]"
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6">
            <div className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:block">
              before / after
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-persian-green-600 bg-persian-green-200/90 px-3 py-1 text-xs font-semibold text-persian-green-900">
              <Wand2 className="h-3.5 w-3.5" />
              PromptReady pass
            </div>
          </div>

          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            <article className="bg-[#fff8f5] p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-burnt-sienna-600">
                <XCircle className="h-5 w-5" />
                Raw Copy-Paste
              </h3>

              <div className="space-y-3 font-mono text-sm leading-relaxed text-slate-700">
                <p className="rounded-xl border border-burnt-sienna-200 bg-white/70 p-3">
                  &lt;div class="promo"&gt;Save 40% today&lt;/div&gt;
                </p>
                <p className="rounded-xl border border-burnt-sienna-100 bg-white/80 p-3">
                  Breaking down retrieval-augmented generation in production...
                </p>
                <p className="rounded-xl border border-burnt-sienna-100 bg-white/80 p-3">
                  Subscribe to our newsletter | Related links | Footer text
                </p>
              </div>
            </article>

            <article className="relative bg-[#f4fbf9] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(42,157,143,0.12),transparent_42%)]" />
              <h3 className="relative z-10 mb-5 flex items-center gap-2 text-lg font-semibold text-persian-green-600">
                <CheckCircle2 className="h-5 w-5" />
                PromptReady Output
              </h3>

              <div className="relative z-10 rounded-2xl border border-persian-green-200/80 bg-white/85 p-4 font-mono text-sm leading-relaxed text-charcoal-500">
                <p className="mb-3 text-base font-semibold text-charcoal-500">
                  # Retrieval-Augmented Generation in Production
                </p>
                <p className="text-slate-700">
                  Clean article body with headings, lists, and code blocks preserved.
                </p>
                <p className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-600">
                  Source: example.com/rag-guide · Captured: 2026-02-24T18:40Z
                </p>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
