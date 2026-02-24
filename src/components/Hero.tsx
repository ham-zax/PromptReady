import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardCheck, Code2, Sparkles } from 'lucide-react';
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
    code: `<div class="ad-banner">50% off this week</div>\n<nav>Home | Categories | Subscribe</nav>\n\n<h1>How teams ship better prompts</h1>\n<p>Useful content mixed with popups and links.</p>\n\n<footer>Cookie policy | Terms</footer>`,
    icon: <Code2 className="h-4 w-4 text-burnt-sienna-500" />,
    tone: 'text-burnt-sienna-700',
  },
  {
    id: 'process',
    label: 'PromptReady clean pass',
    code: `Selecting primary content...\nRemoving ads and navigation...\nPreserving headings and code blocks...\nAdding source and capture timestamp...`,
    icon: <Sparkles className="h-4 w-4 text-persian-green-500" />,
    tone: 'text-charcoal-400',
  },
  {
    id: 'final',
    label: 'AI-ready output',
    code: `# How teams ship better prompts\n\nUseful content with clean structure.\n\nSource: example.com/article\nCaptured: 2026-02-24T18:40Z`,
    icon: <ClipboardCheck className="h-4 w-4 text-persian-green-500" />,
    tone: 'text-charcoal-500',
  },
];

const CodeTransformation: React.FC = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % SNIPPETS.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const current = SNIPPETS[step];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-2xl lg:mt-0">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sandy-brown-400/25 via-saffron-400/20 to-persian-green-400/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[#fffdf7] shadow-[0_20px_80px_-35px_rgba(38,70,83,0.35)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-burnt-sienna-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-saffron-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-persian-green-500" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-600"
            >
              {current.icon}
              <span>{current.label}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.pre
              key={current.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className={`min-h-[220px] whitespace-pre-wrap rounded-2xl bg-slate-100/70 p-4 font-mono text-sm leading-relaxed ${current.tone}`}
            >
              {current.code}
            </motion.pre>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <RetroGrid
          className="opacity-30"
          cellSize={44}
          angle={60}
          lightLineColor="rgba(38, 70, 83, 0.14)"
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center rounded-full border border-saffron-500 bg-saffron-200/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-900"
          >
            Cleaner input. Better model output.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-balance text-4xl font-semibold leading-tight text-charcoal-500 sm:text-5xl lg:text-6xl"
          >
            Turn messy pages into
            <span className="bg-gradient-to-r from-burnt-sienna-500 to-persian-green-500 bg-clip-text text-transparent">
              {' '}
              precise LLM context
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700"
          >
            PromptReady extracts the useful parts, preserves structure, and gives you citation-ready
            text in one click. No manual cleanup loops.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8"
          >
            <HeroActions onPrimaryAction={onPrimaryAction} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.55 }}
        >
          <CodeTransformation />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
