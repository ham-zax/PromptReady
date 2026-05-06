import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from '@/components/ui/Icons';

interface ProblemSolutionProps {
  onPrimaryAction: () => void;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onPrimaryAction }) => {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-brand-border bg-brand-surface relative overflow-hidden rounded-[2.25rem] border px-6 py-10 shadow-[0_18px_70px_-34px_rgba(0,0,0,0.32)] sm:px-10 sm:py-14"
        >
          <div className="relative z-10 text-center">
            <h2 className="linear-display text-brand-ink text-[clamp(2.6rem,7vw,4.8rem)] leading-[0.94]">
              Copy-paste should not eat your workflow.
            </h2>
            <p className="text-brand-muted mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              PromptReady turns noisy web content into clean Markdown for prompts, notes, research,
              docs, and threads while keeping the source details close.
            </p>

            <button
              onClick={onPrimaryAction}
              className="group border-brand-accent-hover bg-brand-accent hover:bg-brand-accent-hover mt-8 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Get PromptReady free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="text-brand-muted mt-4 text-sm">
              No card required. Clean articles, docs, Reddit threads, and everyday web pages faster.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
