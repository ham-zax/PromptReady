import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardCheck, Code2, Sparkles, Wand2 } from 'lucide-react';
import HeroActions from './Hero/HeroActions';
import { RetroGrid } from './magicui/retro-grid';

interface HeroProps {
  onPrimaryAction: () => void;
}

type Snippet = {
  id: string;
  label: string;
  code: string;
  icon: React.ReactNode;
  tone: string;
};

const SNIPPETS: Snippet[] = [
  {
    id: 'raw',
    label: 'Raw copy-paste',
    code: `<div class="ad-banner">\n  50% off this week\n</div>\n<nav>\n  Home | Categories | Subscribe\n</nav>\n\n<h1>How teams ship better prompts</h1>\n<p>Useful content mixed with popups.</p>\n\n<footer>Cookie policy | Terms</footer>`,
    icon: <Code2 className="h-4 w-4 text-rose-500" />,
    tone: 'text-rose-400/80',
  },
  {
    id: 'process',
    label: 'PromptReady processing',
    code: `> Analyzing DOM structure...\n> Stripping ads and navigation...\n> Extracting primary article body...\n> Formatting as clean Markdown...\n> Attaching source metadata...`,
    icon: <Wand2 className="h-4 w-4 text-indigo-400" />,
    tone: 'text-indigo-300/90 font-semibold',
  },
  {
    id: 'final',
    label: 'AI-ready output',
    code: `# How teams ship better prompts\n\nUseful content with clean structure.\n\n---\nSource: example.com/article\nCaptured: 2026-02-24T18:40Z`,
    icon: <ClipboardCheck className="h-4 w-4 text-emerald-400" />,
    tone: 'text-emerald-400',
  },
];

const CodeTransformation: React.FC = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % SNIPPETS.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const current = SNIPPETS[step];

  return (
    <div className="perspective-[1000px] relative mx-auto mt-12 w-full max-w-2xl lg:mt-0">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 motion-safe:animate-[pulse_6s_ease-in-out_infinite] motion-reduce:animate-none rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-emerald-500/30 opacity-55 blur-3xl" />

      {/* 3D Floating Glass Window */}
      <motion.div
        initial={{ rotateX: 5, rotateY: -5, scale: 0.95 }}
        animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl"
      >
        {/* macOS Style Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-300"
            >
              {current.icon}
              <span>{current.label}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Code Body */}
        <div className="relative flex min-h-[260px] items-center p-6">
          {/* Scanning Laser Effect (only on process step) */}
          {step === 1 && (
            <motion.div
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.1, ease: 'linear' }}
              className="absolute left-0 right-0 z-10 h-1 bg-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.8)]"
            />
          )}

          <AnimatePresence mode="wait">
            <motion.pre
              key={current.id}
              initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
              className={`w-full whitespace-pre-wrap font-mono text-sm leading-relaxed sm:text-base ${current.tone}`}
            >
              {current.code}
            </motion.pre>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40"
    >
      {/* Dark Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <RetroGrid
          className="opacity-20"
          cellSize={50}
          angle={65}
          lightLineColor="rgba(255, 255, 255, 0.05)"
          darkLineColor="rgba(255, 255, 255, 0.05)"
        />
        {/* Subtle radial vignette to focus attention center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_80%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.15)] backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Cleaner input. Better model output.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Turn messy pages into
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text pb-2 text-transparent">
              precise LLM context
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            PromptReady extracts the useful parts, preserves structure, and gives you citation-ready
            text in one click.{' '}
            <strong className="font-medium text-slate-200">No manual cleanup loops.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <HeroActions onPrimaryAction={onPrimaryAction} />
          </motion.div>
        </div>

        {/* 3D Glass Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 50 }}
          className="relative z-10"
        >
          <CodeTransformation />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
