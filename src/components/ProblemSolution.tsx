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
          className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-white to-[#f4fbf9] px-6 py-10 shadow-[0_18px_70px_-34px_rgba(38,70,83,0.45)] sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-persian-green-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sandy-brown-200/45 blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-semibold leading-tight text-charcoal-500 sm:text-4xl lg:text-5xl">
              Stop spending time fixing text before you can think.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              PromptReady removes cleanup work so you can focus on the actual question you want to
              solve.
            </p>

            <button
              onClick={onPrimaryAction}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-charcoal-400"
            >
              Get PromptReady Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="mt-4 text-sm text-slate-600">No card required. Installs in under 30 seconds.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
