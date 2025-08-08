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
          Join the early access
          <ArrowRight className="h-4 w-4" />
        </button>

        <Link
          to="/demo"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          <Play className="h-4 w-4" />
          Watch Demo
        </Link>
      </div>

      {/* Supporting credibility/badges */}
      <div className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-600">
        Privacy-first by design.
        <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">
          Chrome (soon) • Firefox (planned) • Edge (planned)
        </div>
      </div>
    </>
  );
};

export default HeroActions;
