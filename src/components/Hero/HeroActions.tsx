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
      {/* Premium CTA and secondary actions */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => {
            trackHeroCtaClick({ placement: 'hero_button' });
            onPrimaryAction();
          }}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
        >
          Get Early Access
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <Link
          to="/demo"
          className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-slate-700 shadow-xl ring-1 ring-black/5 transition-all duration-200 hover:bg-white hover:scale-105 hover:shadow-2xl"
        >
          <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
          Watch 60-sec Demo
        </Link>
      </div>

      {/* Premium proof chips */}
      <div className="mx-auto mb-8 flex max-w-2xl flex-wrap justify-center gap-3 text-sm">
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">✨ Preserves code fences</span>
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">📝 Citations included</span>
        <span className="rounded-full bg-white/60 backdrop-blur-sm px-4 py-2 text-slate-700 shadow-lg ring-1 ring-black/5">🔒 Privacy‑first, local</span>
      </div>
    </>
  );
};

export default HeroActions;
