import React from 'react';
import { RetroGrid } from './magicui/retro-grid';
import HeroBadges from './Hero/HeroBadges';
import HeroContent from './Hero/HeroContent';
import HeroActions from './Hero/HeroActions';
import HeroModes from './Hero/HeroModes';
import { animations } from '../config';

interface HeroProps {
  onPrimaryAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  React.useEffect(() => {
    if (import.meta.env.DEV) console.log('[Startup] Hero.tsx: Hero mounted');
    return () => {
      if (import.meta.env.DEV) console.log('[Startup] Hero.tsx: Hero unmounted');
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50">
      {/* Enhanced premium glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(59,130,246,0.15),rgba(99,102,241,0.08),transparent_70%)]" />
      
      {/* Glass morphism overlay */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-white/20 backdrop-blur-[1px]" />

      {/* Enhanced retro grid background */}
      <div className="pointer-events-none absolute inset-x-0 top-[6%] z-0 h-[500px] w-full overflow-hidden bg-transparent opacity-60">
        <RetroGrid />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top copy */}
        <div className="text-center">
          <HeroBadges spring={animations.spring} />

          <HeroContent spring={animations.spring} />

          <HeroActions onPrimaryAction={onPrimaryAction} />

          {/* Keep a single primary action overall, but allow email card as alternate entry */}
          {/* <div className="mb-10 flex justify-center">
            <ShadcnWaitlistCard onPrimaryAction={onPrimaryAction} />
          </div> */}

          {/* Micro FAQ near CTA */}
          {/*  <div className="mx-auto mb-12 max-w-3xl text-left text-sm text-slate-700">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Is it private?</dt>
                <dd>All default parsing runs on-device; nothing leaves your machine.</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Paywalled sites?</dt>
                <dd>Works on most public pages; support for paywalled PDFs coming.</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Pricing</dt>
                <dd>Free local mode. Optional AI features planned from $5-$9/mo.</dd>
              </div>
            </dl>
          </div> */}
        </div>

        <HeroModes spring={animations.spring} />

        {/* Before / After mockup moved to App as <BeforeAfter /> */}
      </div>
    </section>
  );
};

export default Hero;
