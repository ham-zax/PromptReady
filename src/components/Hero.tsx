import React from 'react';
import { Lock, Zap, Award, ArrowRight, Wand2 } from 'lucide-react';
import { RetroGrid } from './magicui/retro-grid';
import { motion, Transition } from 'framer-motion';
import { trackHeroCtaClick } from '../hooks/useAnalytics';

interface HeroProps {
  onPrimaryAction: () => void;
}

const spring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  React.useEffect(() => {
    if (import.meta.env.DEV) console.log('[Startup] Hero.tsx: Hero mounted');
    return () => {
      if (import.meta.env.DEV) console.log('[Startup] Hero.tsx: Hero unmounted');
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Optional soft brand glow to anchor hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* Subtle retro grid background */}
      <div className="pointer-events-none absolute inset-x-0 top-[6%] z-0 h-[500px] w-full overflow-hidden bg-transparent">
        <RetroGrid />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top copy */}
        <div className="text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.05 }}
            >
              <Lock className="h-4 w-4" />
              Client‑side privacy
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.12 }}
            >
              <Zap className="h-4 w-4" />
              Blazingly fast
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.18 }}
            >
              <Award className="h-4 w-4" />
              Manifest V3 ready
            </motion.span>
          </div>

          <motion.h1
            className="mb-4 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            Copy clean, AI‑ready text. Instantly.
          </motion.h1>

          <motion.p
            className="mx-auto mb-6 max-w-4xl text-lg font-medium text-slate-700 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.18 }}
          >
            One‑click extension that turns any page into structured, distraction‑free text for
            ChatGPT, Claude, or your LLM workflow — with private, on‑device parsing.
          </motion.p>

          {/* Primary CTA directly under headline (mirrors main action) */}
          <div className="mb-6 flex justify-center">
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
          </div>

          {/* Supporting credibility/badges */}
          <div className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-600">
            Privacy‑first by design.
            <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">
              Chrome (soon) • Firefox (planned) • Edge (planned)
            </div>
          </div>

          {/* Keep a single primary action overall, but allow email card as alternate entry */}
          {/* <div className="mb-10 flex justify-center">
            <ShadcnWaitlistCard onPrimaryAction={onPrimaryAction} />
          </div> */}

          {/* Micro FAQ near CTA */}
          {/*  <div className="mx-auto mb-12 max-w-3xl text-left text-sm text-slate-700">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Is it private?</dt>
                <dd>All default parsing runs on‑device; nothing leaves your machine.</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Paywalled sites?</dt>
                <dd>Works on most public pages; support for paywalled PDFs coming.</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wide text-slate-500">Pricing</dt>
                <dd>Free local mode. Optional AI features planned from $5–$9/mo.</dd>
              </div>
            </dl>
          </div> */}
        </div>

        {/* Modes */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-200 p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...spring, delay: 0.05 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              <Lock className="h-4 w-4 text-slate-600" />
              Local mode
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Offline and private</h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                Instant parsing that strips ads, pop‑ups, and chrome from any page — keeps only the
                content that matters.
              </li>
              <li>100% client‑side. Nothing leaves your machine.</li>
            </ul>
          </motion.div>

          <motion.div
            className="relative rounded-2xl border border-violet-200 bg-gradient-to-b from-white to-violet-50 p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...spring, delay: 0.12 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
              <Wand2 className="h-4 w-4 text-violet-700" />
              Cloud extras
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Optional AI formatting</h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                Perfect, LLM‑ready structure via our secure API when you want more than basic
                parsing.
              </li>
              <li>Extras: auto‑summaries, custom templates, and export.</li>
            </ul>
          </motion.div>
        </div>

        {/* Before / After mockup moved to App as <BeforeAfter /> */}
      </div>
    </section>
  );
};

export default Hero;
