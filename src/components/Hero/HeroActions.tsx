import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackHeroCtaClick } from '../../hooks/useAnalytics';

interface HeroActionsProps {
  onPrimaryAction: () => void;
}

const HeroActions: React.FC<HeroActionsProps> = ({ onPrimaryAction }) => {
  return (
    <>
      {/* Primary CTA and secondary actions */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => {
            trackHeroCtaClick({ placement: 'hero_button' });
            onPrimaryAction();
          }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
        >
          Get Early Access
          <ArrowRight className="h-4 w-4" />
        </button>

        <Link
          to="/demo"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          <Play className="h-4 w-4" />
          Watch 60-sec Demo
        </Link>
      </div>

      {/* Micro proof chips */}
      <div className="mx-auto mb-8 flex max-w-2xl flex-wrap justify-center gap-2 text-sm text-slate-700">
        <span className="rounded-full bg-slate-100 px-3 py-1">Preserves code fences</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Citations included</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Privacy‑first, local</span>
      </div>
    </>
  );
};

export default HeroActions;
