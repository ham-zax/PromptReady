import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Play, RotateCcw } from '@/components/ui/Icons';
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
    label: 'Wikipedia page',
    source: 'en.wikipedia.org/wiki/Artificial_intelligence',
    raw: `Donate | Create account | Log in\n\nContents [hide]\n(Top)\nGoals\n\nArtificial intelligence\n\nFrom Wikipedia, the free encyclopedia\n\nArtificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment...\n\n<div class="navbox">Categories: Artificial intelligence</div>\n\nPrivacy policy | About Wikipedia`,
    cleanFrames: [
      'Selecting main content...',
      '# Artificial intelligence\n\nArtificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment...',
      '# Artificial intelligence\n\nArtificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment...\n\nSource: en.wikipedia.org/wiki/Artificial_intelligence\nCaptured: 2026-02-25T14:30Z',
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
    <section id="demo" className="pb-24 pt-20 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="linear-display text-[clamp(2.5rem,6.8vw,4.4rem)] leading-[0.94] text-brand-ink">
            See the transformation in one pass
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
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
                    ? 'bg-brand-accent text-white'
                    : 'border border-brand-border bg-brand-surface text-brand-muted hover:bg-brand-surface-soft'
                }`}
              >
                {SCENARIOS[key].label}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-brand-border bg-brand-surface p-4 shadow-[0_20px_85px_-44px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <article className="rounded-2xl border border-brand-border bg-brand-surface-soft p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
                <span>Raw input</span>
                <span className="truncate">{current.source}</span>
              </div>
              <pre className="min-h-[220px] whitespace-pre-wrap rounded-xl bg-brand-surface p-3 font-mono text-xs leading-relaxed text-brand-muted sm:text-sm">
                {current.raw}
              </pre>
            </article>

            <article className="rounded-2xl border border-brand-success/30 bg-brand-surface-soft p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  PromptReady output
                </div>
                {stepIndex === STEP_LABELS.length - 1 ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-success/30 bg-brand-surface px-2.5 py-1 text-xs font-semibold text-brand-success">
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
                  className="min-h-[220px] whitespace-pre-wrap rounded-xl border border-brand-success/25 bg-brand-surface p-3 font-mono text-xs leading-relaxed text-brand-ink sm:text-sm"
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
                        ? 'bg-brand-accent text-white'
                        : 'border border-brand-border bg-brand-surface text-brand-muted'
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-accent-hover bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isRunning ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                {isRunning ? 'Running...' : 'Run Demo'}
              </button>

              <button
                onClick={resetDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-surface px-5 py-2.5 text-sm font-semibold text-brand-muted transition-colors hover:bg-brand-surface-soft"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>

              <Link
                to="/demo"
                onClick={() => trackUserEngagement('demo_to_full_page', 'video_demo', { scenario })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-surface-soft px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-surface-soft"
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
