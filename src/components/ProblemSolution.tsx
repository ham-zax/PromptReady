import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
          className="relative overflow-hidden rounded-[2.25rem] border border-brand-border bg-brand-surface px-6 py-10 shadow-[0_18px_70px_-34px_rgba(0,0,0,0.32)] sm:px-10 sm:py-14"
        >
          <div className="relative z-10 text-center">
            <h2 className="linear-display text-[clamp(2.6rem,7vw,4.8rem)] leading-[0.94] text-brand-ink">
              Stop spending time fixing text before you can think.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              PromptReady removes cleanup work so you can focus on the actual question you want to
              solve.
            </p>

            <button
              onClick={onPrimaryAction}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-brand-accent-hover bg-brand-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover"
            >
              Get PromptReady Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="mt-4 text-sm text-brand-muted">No card required. Installs in under 30 seconds.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
