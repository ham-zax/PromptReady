import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardCheck, Code2, Sparkles, Wand2 } from 'lucide-react';
import HeroActions from './Hero/HeroActions';
import HeroBackground from './ui/HeroBackground';

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
    icon: <Code2 className="h-4 w-4 text-brand-accent-hover" />,
    tone: 'text-brand-accent-hover',
  },
  {
    id: 'process',
    label: 'PromptReady processing',
    code: `> Analyzing DOM structure...\n> Stripping ads and navigation...\n> Extracting primary article body...\n> Formatting as clean Markdown...\n> Attaching source metadata...`,
    icon: <Wand2 className="h-4 w-4 text-brand-muted" />,
    tone: 'text-brand-ink font-semibold',
  },
  {
    id: 'final',
    label: 'AI-ready output',
    code: `# How teams ship better prompts\n\nUseful content with clean structure.\n\n---\nSource: example.com/article\nCaptured: 2026-02-24T18:40Z`,
    icon: <ClipboardCheck className="h-4 w-4 text-brand-success" />,
    tone: 'text-brand-success',
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
    <div className="relative mx-auto mt-10 w-full max-w-2xl lg:mt-0">
      <motion.div
        initial={{ y: 18, opacity: 0.9 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-surface shadow-[0_22px_56px_-34px_rgba(0,0,0,0.4)]"
      >
        <div className="flex items-center justify-between border-b border-brand-border bg-brand-surface-soft px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-accent/70" />
            <span className="h-3 w-3 rounded-full bg-brand-muted/70" />
            <span className="h-3 w-3 rounded-full bg-brand-success/70" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-brand-muted"
            >
              {current.icon}
              <span>{current.label}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-[340px] overflow-hidden p-6">
          {step === 1 && (
            <motion.div
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.1, ease: 'linear' }}
              className="absolute left-0 right-0 z-10 h-1 bg-brand-accent/40"
            />
          )}

          <AnimatePresence mode="wait">
            <motion.pre
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className={`linear-mono h-full w-full overflow-y-auto whitespace-pre-wrap text-xs leading-relaxed sm:text-sm ${current.tone}`}
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
    <section id="hero" className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-48 min-h-[90vh] flex items-center">
      <HeroBackground />
      <div className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full bg-brand-surface-soft" />
      <div className="pointer-events-none absolute -right-16 top-40 h-44 w-44 rounded-full bg-brand-surface-soft" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="linear-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-[1.05rem] text-brand-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            Cleaner input. Better model output.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="linear-display text-[clamp(3.2rem,9vw,6.2rem)] leading-[0.92] tracking-[0.01em] text-brand-ink relative"
          >
            Turn messy pages into
            <span className="block text-brand-accent relative inline-block">
              precise LLM context
              {/* Hand-drawn underline SVG under 'context' */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-4 text-brand-accent"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
              >
                <path 
                  d="M5 15 Q 150 5 295 10 T 290 18 Q 150 8 10 18" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted sm:text-xl"
          >
            PromptReady extracts the useful parts, preserves structure, and gives you citation-ready
            text in one click. <strong className="font-semibold text-brand-ink">No cleanup loops.</strong>
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative z-10 flex flex-col"
        >
          <CodeTransformation />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mx-auto mt-8 w-full max-w-2xl"
          >
            <HeroActions onPrimaryAction={onPrimaryAction} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
