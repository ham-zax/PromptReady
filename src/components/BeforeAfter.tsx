import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Wand2, XCircle } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className="relative pb-20 pt-12 sm:pb-24">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Same source, cleaner context
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Stop hand-editing every snippet before using it in your prompts.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-4 sm:px-6">
            <div className="hidden text-xs font-semibold uppercase tracking-widest text-slate-500 sm:block">
              Before / After Comparison
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Wand2 className="h-4 w-4" />
              PromptReady pass
            </div>
          </div>

          <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* Before Side */}
            <article className="bg-black/20 p-6 sm:p-8">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-rose-400">
                <XCircle className="h-5 w-5" />
                Raw Copy-Paste
              </h3>

              <div className="space-y-4 font-mono text-sm leading-relaxed text-slate-400">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
                >
                  <span className="text-rose-500/60">&lt;div class="promo"&gt;</span>
                  <br />
                  &nbsp;&nbsp;Save 40% today! Subscribe to our newsletter.
                  <br />
                  <span className="text-rose-500/60">&lt;/div&gt;</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                >
                  Breaking down retrieval-augmented generation in production...
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
                >
                  <span className="text-rose-500/60">&lt;footer&gt;</span>
                  <br />
                  &nbsp;&nbsp;Subscribe to our newsletter | Related links | Footer text
                  <br />
                  <span className="text-rose-500/60">&lt;/footer&gt;</span>
                </motion.div>
              </div>
            </article>

            {/* After Side */}
            <article className="relative overflow-hidden bg-indigo-950/20 p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />

              <h3 className="relative z-10 mb-6 flex items-center gap-2 text-lg font-semibold text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                PromptReady Output
              </h3>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 font-mono text-sm leading-relaxed text-slate-300 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
              >
                <p className="mb-4 text-base font-semibold text-emerald-400">
                  # Retrieval-Augmented Generation in Production
                </p>
                <p className="leading-loose text-slate-300">
                  Clean article body with headings, lists, and code blocks preserved perfectly. No
                  ads, no navigation, no noise.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
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
