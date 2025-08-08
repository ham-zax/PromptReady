// src/components/ProblemSolution.tsx

import React from 'react';
import { ComparativeDisplay } from './ui/ComparativeDisplay';
import { Button } from './ui/button';

interface ProblemSolutionProps {
  onPrimaryAction: () => void;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onPrimaryAction }) => {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Tired of the Manual Copy-Paste-Cleanse Cycle?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Ever copy text only to end up with a mess? We know the frustration of cleaning up chaos
            just to get your work done.
          </p>
        </div>

        <ComparativeDisplay
          beforeContent={
            <>
              Messy, copied text with
              <br />
              random line breaks, &nbsp;&nbsp;&nbsp;inconsistent spacing,
              <br />
              and &nbsp;&nbsp;&nbsp;weird formatting.
            </>
          }
          afterContent={
            <>
              Cleaned text with consistent spacing and formatting,
              <br />
              ready to use anywhere.
            </>
          }
        />

        <div className="mt-16 text-center">
          <Button onClick={onPrimaryAction} size="lg" className="px-10 py-6 text-lg shadow-lg">
            Try PromptReady Now
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Experience all features instantly—no signup required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
