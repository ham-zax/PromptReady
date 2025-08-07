
import React from 'react';
import { Lock, Zap, Award, ArrowRight, Wand2, Play } from 'lucide-react';
import { Globe } from './magicui/globe';
import { ShadcnWaitlistCard } from './ShadcnWaitlistCard';
import { motion, Transition } from 'framer-motion';

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
    console.log('[Startup] Hero.tsx: Hero mounted');
    return () => {
      console.log('[Startup] Hero.tsx: Hero unmounted');
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle globe background */}
      <div className="pointer-events-none absolute inset-x-0 top-[6%] z-0 h-[560px] scale-125 [mask-image:linear-gradient(to_bottom,white_0%,transparent_80%)]">
        <Globe className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
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
            className="mx-auto mb-8 max-w-3xl text-lg font-medium text-slate-700 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.18 }}
          >
            One‑click extension that turns any page into structured, distraction‑free text for ChatGPT, Claude, or your LLM workflow — with private, on‑device parsing.
          </motion.p>

          <div className="mb-12 flex justify-center">
            <ShadcnWaitlistCard onPrimaryAction={onPrimaryAction} />
          </div>
        </div>

        {/* Modes */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...spring, delay: 0.05 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              <Lock className="h-4 w-4 text-slate-600" />
              Local mode
            </div>
            <h4 className="mb-2 text-lg font-semibold text-slate-900">Offline & private</h4>
            <ul className="space-y-2 text-slate-700">
              <li>
                Instant parsing that strips ads, pop‑ups, and chrome from any page — keeps only the content that matters.
              </li>
              <li>
                100% client‑side. Nothing leaves your machine.
              </li>
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
            <h4 className="mb-2 text-lg font-semibold text-slate-900">Optional AI formatting</h4>
            <ul className="space-y-2 text-slate-700">
              <li>
                Perfect, LLM‑ready structure via our secure API when you want more than basic parsing.
              </li>
              <li>
                Extras: auto‑summaries, custom templates, and export.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Demo anchor */}
        <div className="mb-10 flex justify-center">
          <a
            href="#demo"
            aria-label="Watch a 30 second demo"
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100"
          >
            <ArrowRight className="h-4 w-4" />
            Watch a 30s demo
          </a>
        </div>

        {/* Before / After mockup */}
        <div className="mb-12">
          <div className="mx-auto max-w-5xl">
            <div className="browser-mockup floating-card mx-auto max-w-4xl">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
                  example‑article.com
                </div>
                <div className="ml-auto">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    <Wand2 className="mr-1 h-3 w-3" />
                    PromptReady On
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="flex items-center text-lg font-bold text-rose-800">
                      <span className="mr-2 h-3 w-3 rounded-full bg-rose-500"></span>
                      Before: messy copy
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="rounded-lg border border-rose-300 bg-rose-50 p-3">
                        <div className="font-medium text-rose-700">Limited‑time offer! 50% off!</div>
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        Important article content about AI and ML trends in 2024…
                      </p>
                      <div className="rounded-lg border border-amber-300 bg-amber-50 p-3">
                        <div className="font-medium text-amber-700">Subscribe to our newsletter</div>
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        More valuable content mixed with promotional elements…
                      </p>
                      <div className="rounded-lg border border-slate-300 bg-slate-50 p-3">
                        <div className="text-xs text-slate-600">Footer • Privacy • Terms</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center text-lg font-bold text-emerald-800">
                      <span className="mr-2 h-3 w-3 rounded-full bg-emerald-500"></span>
                      After: AI‑ready
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="text-lg font-semibold text-slate-900">
                        # AI and Machine Learning Trends in 2024
                      </div>
                      <div className="space-y-2 leading-relaxed text-slate-700">
                        <p>Clean, structured content. No ads. No pop‑ups.</p>
                        <p>Perfect for ChatGPT, Claude, or any LLM.</p>
                        <p>Copy once. Paste anywhere.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video/demo */}
        <div id="demo" className="mb-12">
          <div className="browser-mockup floating-card mx-auto max-w-4xl">
            <div className="browser-header">
              <div className="browser-dot bg-red-500"></div>
              <div className="browser-dot bg-yellow-500"></div>
              <div className="browser-dot bg-green-500"></div>
              <div className="ml-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                🎬 Quick demo (30s)
              </div>
            </div>

            <button
              type="button"
              aria-label="Play demo video"
              onClick={() => {
                console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
                alert('Video demo coming soon! Click recorded.');
              }}
              className="group flex aspect-video w-full items-center justify-center bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 transition-all duration-300 hover:from-blue-100 hover:via-violet-100 hover:to-pink-100"
            >
              <div className="text-center">
                <div className="mb-4 inline-block rounded-full bg-white p-6 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-12 w-12 text-blue-600" />
                </div>
                <p className="mb-1 text-lg font-bold text-slate-900">Install → Copy clean text → Paste anywhere</p>
                <p className="font-semibold text-blue-700">Public demo soon — click to show interest</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;