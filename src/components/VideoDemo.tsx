import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Play, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackDemoPlay, trackUserEngagement } from '../hooks/useAnalytics';

type Scenario = 'article' | 'reddit';

type DemoScenario = {
  label: string;
  source: string;
  raw: string;
  cleanFrames: string[];
};

const SCENARIOS: Record<Scenario, DemoScenario> = {
  article: {
    label: 'Article page',
    source: 'example.com/ai/retrieval-guide',
    raw: `Top nav | Pricing | Sign in\n\n<div class="promo">Subscribe for weekly AI news</div>\n\nHow retrieval boosts LLM reliability\n\nRetrieval-augmented generation combines model reasoning with an external knowledge index...\n\nRelated posts | Privacy | Cookie banner`,
    cleanFrames: [
      'Selecting main content...',
      '# How retrieval boosts LLM reliability\n\nRetrieval-augmented generation combines model reasoning with an external knowledge index...',
      '# How retrieval boosts LLM reliability\n\nRetrieval-augmented generation combines model reasoning with an external knowledge index...\n\nSource: example.com/ai/retrieval-guide\nCaptured: 2026-02-24T18:40Z',
    ],
  },
  reddit: {
    label: 'Reddit thread',
    source: 'reddit.com/r/microsaas/comments/abc123',
    raw: `r/microsaas - Did you see this tweet by Sam Altman?\n\nUpvote 765 | Downvote 116 | Share | Save\n\nu/distalx: A lot of successful SaaS companies are not just CRUD tools...\n\nu/unitcodes: here is my upvote\n\nCommunity links | rules | banner | ads`,
    cleanFrames: [
      'Parsing thread structure...',
      '# Did you see this tweet by Sam Altman?\n\nOriginal post summary...\n\n## Top comments\n- u/distalx: A lot of successful SaaS companies are not just CRUD tools...\n- u/unitcodes: here is my upvote',
      '# Did you see this tweet by Sam Altman?\n\nOriginal post summary...\n\n## Top comments\n- u/distalx: A lot of successful SaaS companies are not just CRUD tools...\n- u/unitcodes: here is my upvote\n\nSource: reddit.com/r/microsaas/comments/abc123\nCaptured: 2026-02-24T18:40Z',
    ],
  },
};

const STEP_LABELS = ['Select source', 'Clean and structure', 'Copy result'];

const VideoDemo: React.FC = () => {
  const [scenario, setScenario] = React.useState<Scenario>('article');
  const [stepIndex, setStepIndex] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const hasTrackedPlayRef = React.useRef(false);

  const current = SCENARIOS[scenario];

  React.useEffect(() => {
    if (!isRunning) return;

    const timeout = setTimeout(() => {
      setStepIndex((prev) => {
        if (prev >= STEP_LABELS.length - 1) {
          setIsRunning(false);
          return prev;
        }

        return prev + 1;
      });
    }, 1300);

    return () => clearTimeout(timeout);
  }, [isRunning, stepIndex]);

  React.useEffect(() => {
    trackUserEngagement('demo_step', 'video_demo', {
      scenario,
      step_index: stepIndex,
      step_name: STEP_LABELS[stepIndex],
    });
  }, [scenario, stepIndex]);

  const runDemo = () => {
    if (!hasTrackedPlayRef.current) {
      trackDemoPlay({ placement: 'video_demo', scenario });
      hasTrackedPlayRef.current = true;
    }

    trackUserEngagement('demo_run_click', 'video_demo', { scenario });
    setStepIndex(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    trackUserEngagement('demo_reset', 'video_demo', { scenario });
    setIsRunning(false);
    setStepIndex(0);
  };

  const currentFrame = current.cleanFrames[Math.min(stepIndex, current.cleanFrames.length - 1)];

  return (
    <section id="demo" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl">
            See the transformation in one pass
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Preview how PromptReady turns noisy web content into clean, source-aware output.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {(Object.keys(SCENARIOS) as Scenario[]).map((key) => {
            const isActive = key === scenario;
            return (
              <button
                key={key}
                onClick={() => {
                  setScenario(key);
                  setStepIndex(0);
                  setIsRunning(false);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-charcoal-500 text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {SCENARIOS[key].label}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_85px_-44px_rgba(38,70,83,0.55)] sm:p-6 lg:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <article className="rounded-2xl border border-slate-200 bg-[#fff8f4] p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                <span>Raw input</span>
                <span className="truncate">{current.source}</span>
              </div>
              <pre className="min-h-[220px] whitespace-pre-wrap rounded-xl bg-white/90 p-3 font-mono text-xs leading-relaxed text-slate-700 sm:text-sm">
                {current.raw}
              </pre>
            </article>

            <article className="rounded-2xl border border-persian-green-200 bg-[#eff9f6] p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  PromptReady output
                </div>
                {stepIndex === STEP_LABELS.length - 1 ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-persian-green-300 bg-white px-2.5 py-1 text-xs font-semibold text-persian-green-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Ready
                  </span>
                ) : null}
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={`${scenario}-${stepIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="min-h-[220px] whitespace-pre-wrap rounded-xl border border-persian-green-200/80 bg-white/95 p-3 font-mono text-xs leading-relaxed text-charcoal-500 sm:text-sm"
                >
                  {currentFrame}
                </motion.pre>
              </AnimatePresence>
            </article>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-2">
              {STEP_LABELS.map((label, index) => {
                const active = index <= stepIndex;
                return (
                  <span
                    key={label}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm ${
                      active
                        ? 'bg-charcoal-500 text-white'
                        : 'border border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    {index + 1}. {label}
                  </span>
                );
              })}
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <button
                onClick={runDemo}
                disabled={isRunning}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-charcoal-400 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isRunning ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                {isRunning ? 'Running...' : 'Run Demo'}
              </button>

              <button
                onClick={resetDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>

              <Link
                to="/demo"
                onClick={() => trackUserEngagement('demo_to_full_page', 'video_demo', { scenario })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-[#f7f4ed] px-5 py-2.5 text-sm font-semibold text-charcoal-500 transition-colors hover:bg-[#efe9dc]"
              >
                See full flow
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
