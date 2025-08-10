import React from 'react';
import { ArrowRight, ChevronDown, Loader2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { trackDemoPlay, trackUserEngagement } from '../hooks/useAnalytics';

// Deduplicate processing toast across re-renders/scroll events
const PROCESSING_TOAST_ID = 'video-demo-processing';

type DemoStep = {
  id: string;
  title: string;
  description: string;
  durationMs: number;
};

const STEPS: DemoStep[] = [
  {
    id: 'select',
    title: '1) Select content on the page',
    description:
      'Drag to select the article section you want. PromptReady captures exactly what you need.',
    durationMs: 1800,
  },
  {
    id: 'clean',
    title: '2) Click "Clean & Export"',
    description:
      'Removes clutter while perfectly preserving headings, lists, tables, and code.',
    durationMs: 2000,
  },
  {
    id: 'structure',
    title: '3) Structuring content…',
    description:
      'Automatically adds the source URL and timestamp for effortless, accurate citations.',
    durationMs: 2200,
  },
  {
    id: 'export',
    title: '4) Your Result: Perfect Markdown, Every Time',
    description:
      'Clean, structured content ready to paste anywhere. No manual cleanup needed.',
    durationMs: 2400,
  },
];

const REDDIT_STEPS: DemoStep[] = [
  {
    id: 'select',
    title: '1) Open a Reddit thread',
    description:
      'Select the discussion you want to capture. PromptReady understands comment structure.',
    durationMs: 2000,
  },
  {
    id: 'clean',
    title: '2) Click the extension & process',
    description:
      'Removes votes, ads, and clutter while preserving authors and comment nesting.',
    durationMs: 2500,
  },
  {
    id: 'export',
    title: '3) Perfect Thread Outline',
    description:
      'Structured discussion ready for your notes. All context preserved.',
    durationMs: 2500,
  },
];

type Scenario = 'article' | 'reddit';

const useAutoDemo = (scenario: Scenario) => {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [started, setStarted] = React.useState(false);
  const steps = scenario === 'reddit' ? REDDIT_STEPS : STEPS;
  const step = steps[stepIndex];

  React.useEffect(() => {
    if (!isPlaying) return;
    const timeout = setTimeout(() => {
      setStepIndex((prev) => {
        const next = (prev + 1) % steps.length;
        if (next === 0) trackUserEngagement('demo_complete', 'auto_demo');
        return next;
      });
    }, step.durationMs);
    return () => clearTimeout(timeout);
  }, [stepIndex, isPlaying, step.durationMs, steps.length]);

  const play = () => {
    if (!started) {
      setStarted(true);
      trackDemoPlay({ placement: 'interactive_demo' });
    }
    setIsPlaying(true);
  };
  const pause = () => setIsPlaying(false);
  const restart = () => {
    setStepIndex(0);
    setIsPlaying(true);
    if (!started) trackDemoPlay({ placement: 'interactive_demo' });
  };
  const next = () => setStepIndex((i) => (i + 1) % steps.length);
  const prev = () => setStepIndex((i) => (i - 1 + steps.length) % steps.length);

  return { step, stepIndex, isPlaying, play, pause, restart, next, prev, steps, setStepIndex };
};

interface DemoPageProps {
  onPrimaryAction?: (source: string) => void;
}

const VideoDemo: React.FC<DemoPageProps> = ({ onPrimaryAction }) => {
  const { step, stepIndex, pause, next, setStepIndex, steps } = useAutoDemo('reddit');

  const [flashEffect, setFlashEffect] = React.useState(false);

  // Options for the refined extension UI
  const [optionsOpen, setOptionsOpen] = React.useState(false);
  const [includeTitle, setIncludeTitle] = React.useState(false);
  const [includeUrl, setIncludeUrl] = React.useState(false);
  const [includeTimestamp, setIncludeTimestamp] = React.useState(true);
  const [preserveLineBreaks, setPreserveLineBreaks] = React.useState(false);
  const [singleBlock, setSingleBlock] = React.useState(false);
  const [addAISummaryPrompt, setAddAISummaryPrompt] = React.useState(false);
  // Pro (no-op in demo) — omitted to avoid unused state warning
  const [showDownloadActions, setShowDownloadActions] = React.useState(false);

  const RAW_REDDIT_TEXT = `Skip to main content Did you see this tweet by Sam Altman? : r/microsaas

r/microsaas Current search is within r/microsaas Remove r/microsaas filter and expand search to all of Reddit Search in r/microsaas Advertise on Reddit Open chat 1 Create Create post Open inbox 2

Back r/microsaas icon Go to microsaas r/microsaas • 4 days ago Intelligent_Play_719

Did you see this tweet by Sam Altman?

I've been telling my team this for months...

Upvote 765 Downvote 116 Go to comments Share

Comments Section u/distalx avatar distalx • 3d ago

A lot of successful SaaS companies aren't just selling simple CRUD tools...

track me

Upvote 129 Downvote Reply reply Award Share

unitcodes • 3d ago here’s my ⬆️ vote Upvote 8 Downvote

... (and 150 more lines of clutter) ...

Community Info Section r/microsaas Joined Software as a Service businesses run by a very small team. A place to change your life with micro SaaS apps Created Jul 31, 2017 Public Community Guide 101K Members`;

  const buildCleanMarkdown = React.useCallback(() => {
    const title = '# Did you see this tweet by Sam Altman?';
    const body = `**Original Post** (u/Intelligent_Play_719)\nI've been telling my team this for months...`;
    const comments = `## Top Comments\n\n**u/distalx** (↑ 129)\nA lot of successful SaaS companies aren't just selling simple CRUD tools...\n\n**u/unitcodes** (↑ 8)\nHere is my upvote.\n`;
    const url = 'Source: reddit.com/r/microsaas';
    const timestamp = `Captured: ${new Date().toISOString().slice(0, 16)}Z`;

    const lines: string[] = [];
    if (includeTitle) lines.push(title, '');
    lines.push(body, '', comments, '---');
    const footerBits: string[] = [];
    if (includeUrl) footerBits.push(url);
    if (includeTimestamp) footerBits.push(timestamp);
    if (footerBits.length) lines.push(footerBits.join(' • '));
    let result = lines.join('\n');
    if (singleBlock) {
      result = result.replace(/\n+/g, ' ');
    }
    if (addAISummaryPrompt) {
      result += `\n\n> Prompt: Summarize the above content in 5 bullet points and extract key action items.`;
    }
    return result;
  }, [includeTitle, includeUrl, includeTimestamp, singleBlock, addAISummaryPrompt]);

  const onExtensionClick = () => {
    trackUserEngagement('extension_click', 'auto_demo');
    // Visual feedback effect
    setFlashEffect(true);
    setTimeout(() => setFlashEffect(false), 300);
    // Drive the simplified flow: click -> process -> export
    pause();
    if (step.id === 'export') return;
    if (step.id === 'select') {
      next(); // to clean/process
      setTimeout(() => {
        next(); // to export
      }, 800);
    } else if (step.id === 'clean') {
      next(); // to export
    }
  };

  // Scroll-driven narrative: GSAP pinned section
  const demoRef = React.useRef<HTMLDivElement | null>(null);

  // GSAP pinned timeline - stops demo in viewport, scrubs through steps (desktop only)
  React.useEffect(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) return;
    if (!demoRef.current) return;

    const demoEl = demoRef.current;
    const NAVBAR_OFFSET_PX = 65;

    // Create scroll trigger with shorter scroll distance
    const scrollTrigger = ScrollTrigger.create({
      trigger: demoEl,
      start: 'top top',
      end: `+=${window.innerHeight * 1.5}`, // Reduced to 1.5 viewport heights
      pin: true,
      pinSpacing: true,
      scrub: 0.5, // Add some smoothing
      snap: 1 / (steps.length - 1),
      invalidateOnRefresh: true,
      onToggle: (self: any) => {
        demoEl.style.marginTop = self.isActive ? `${NAVBAR_OFFSET_PX}px` : '0px';
      },
      onUpdate: (self: any) => {
        const progress = self.progress;
        const newIdx = Math.round(progress * (steps.length - 1));
        if (newIdx !== stepIndex) {
          setStepIndex(newIdx);
        }
      },
      onEnter: () => {
        // Dismiss any existing toasts when entering demo section
        toast.dismiss();
        // Reset to first step when entering
        setStepIndex(0);
      },
      onLeave: () => {
        // Dismiss all toasts when leaving the demo section (scrolling down)
        toast.dismiss();
      },
      onLeaveBack: () => {
        // Dismiss all toasts when leaving the demo section (scrolling up)
        toast.dismiss();
        // Reset to first step when scrolling back up
        setStepIndex(0);
      },
      onEnterBack: () => {
        // Dismiss toasts first, then show appropriate one when coming back
        toast.dismiss();
        setTimeout(() => {
          const currentStep = steps[stepIndex];
          if (currentStep.id === 'clean') {
            toast.loading('Processing selection…', { id: PROCESSING_TOAST_ID, duration: Infinity });
          } else if (currentStep.id === 'export') {
            toast.success('Copied: cleaned Markdown ready');
          }
        }, 100);
      },
    });
    // Ensure initial margin for navbar offset if already active
    if ((scrollTrigger as any).isActive) demoEl.style.marginTop = `${NAVBAR_OFFSET_PX}px`;

    return () => {
      scrollTrigger.kill();
    };
  }, [steps.length]);

  React.useEffect(() => {
    if (step.id === 'clean') {
      // Show a single persistent processing toast; do not spawn duplicates on scroll/rerender
      toast.loading('Processing selection…', { id: PROCESSING_TOAST_ID, duration: Infinity });
    } else {
      // Ensure any processing toast is dismissed when not in the clean step
      toast.dismiss(PROCESSING_TOAST_ID);
      if (step.id === 'export') {
        toast.success('Copied: cleaned Markdown ready');
      }
    }
  }, [step.id]);


  // Cleanup any lingering processing toast on unmount (helps on mobile route/scroll remounts)
  React.useEffect(() => {
    return () => {
      toast.dismiss(PROCESSING_TOAST_ID);
    };
  }, []);

  return (
    <section className="py-8 lg:py-24">
      {/* Section Header */}
      <div className="mb-16 px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Watch It Work
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Messy web content becomes clean Markdown. One click.
        </p>
      </div>

      {/* Mobile: beautiful demo showcase */}
      <div className="md:hidden mx-auto max-w-sm px-4">
        {/* Hero demo card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg">
          {/* Header */}
          <div className="mb-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              See the Magic in Action
            </div>
          </div>

          {/* Before/After showcase */}
          <div className="space-y-3">
            <div className="rounded-lg bg-white/70 p-3 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                <span className="text-xs font-medium text-slate-600">Before: The Raw Copy-Paste</span>
              </div>
              <div className="text-xs text-slate-700 font-mono leading-tight">
                Skip to main content Did you see this tweet by Sam Altman? : r/microsaas...
                <br />r/microsaas Current search is within r/microsaas Remove...
                <br />Upvote 765 Downvote 116 Go to comments Share...
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-full bg-white/80 p-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            <div className="rounded-lg bg-white/90 p-3 backdrop-blur-sm border border-emerald-200">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-medium text-emerald-700">After: Your Instant Result</span>
              </div>
              <div className="text-xs text-slate-700 font-mono leading-tight">
                **Original Post** (u/Intelligent_Play_719)
                <br />I've been telling my team this for months...
                <br />
                <br />## Top Comments
                <br />**u/distalx** (↑ 129)
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onExtensionClick}
            disabled={step.id === 'clean'}
            className={`mt-4 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
              step.id === 'clean'
                ? 'bg-blue-600 scale-95'
                : step.id === 'export'
                ? 'bg-emerald-500 scale-105'
                : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
            }`}
          >
            {step.id === 'clean' && (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                Processing...
              </>
            )}
            {step.id === 'export' && (
              <>
                <Check className="h-4 w-4" />
                Perfect! ✨
              </>
            )}
            {step.id === 'select' && (
              <>
                Try PromptReady Magic
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {/* Subtle feature hints */}
        <div className="mt-4 flex justify-center gap-4 text-xs text-slate-500">
          <span>✨ Instant</span>
          <span>🔒 Private</span>
          <span>📝 Perfect</span>
        </div>
      </div>

      {/* Interactive Auto Demo (desktop only) */}
      <div id="demo" ref={demoRef} className="hidden md:flex md:items-center mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 min-h-screen">
        {/* Step indicator (hidden on mobile) */}
        <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-10 flex-col gap-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-8 rounded-full transition-colors ${
                idx <= stepIndex ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 shadow-lg border border-white/20 backdrop-blur-sm">
          <div className="browser-header px-4 bg-white/80 backdrop-blur-md border-b border-white/30">
            <div className="browser-dot bg-red-400 shadow-sm"></div>
            <div className="browser-dot bg-yellow-400 shadow-sm"></div>
            <div className="browser-dot bg-green-400 shadow-sm"></div>
            <div className="ml-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-1 text-sm font-medium text-white shadow-lg">
              ⚡ From Raw Mess to Perfect Markdown
            </div>
            {/* Step progress indicator in center */}
            <div className="flex-1 hidden md:flex justify-center">
              <div className="rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-slate-700 shadow-lg border border-white/50 backdrop-blur-sm ring-1 ring-black/5">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Step {stepIndex + 1} / {steps.length} — {step.title.replace(/^\d+\)\s*/, '')}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 pr-2">
              {/* Beautiful extension button */}
              <button
                aria-label="Click extension"
                onClick={onExtensionClick}
                className={`rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition-all duration-200 flex items-center gap-2 ${
                  step.id === 'clean'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-2 ring-blue-300 scale-105'
                    : 'bg-white/90 text-slate-700 hover:bg-white hover:shadow-lg hover:scale-105 border border-white/50 backdrop-blur-sm'
                }`}
              >
                {step.id === 'clean' && (
                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                )}
                Clean in browser
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Browser look only (no progress, no controls) */}

            {/* Scene */}
            {/* Scene: Reddit content + Narrow Extension UI */}
            <div className="relative md:flex md:items-start md:gap-6">
              {/* Left: Reddit-style content (beautiful design) */}
              <motion.div
                className={`relative flex-1 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 ${
                  flashEffect ? 'ring-2 ring-blue-400 bg-blue-50/80 scale-[1.02]' : ''
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {/* No initial overlay */}
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Reddit thread</div>
                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-orange-500">↑ 1.2k</span>
                    <span>r/programming</span>
                    <span>•</span>
                    <span>Posted by u/dev_user</span>
                    <span>•</span>
                    <span>3h ago</span>
                  </div>
                  <div className="font-semibold text-slate-900">What are the best resources to learn Rust?</div>
                  <p className="text-slate-700">I'm coming from JavaScript and want to dive into systems programming. What would you recommend?</p>

                  <div className="ml-4 border-l-2 border-slate-200 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                      <span className="text-orange-500">↑ 856</span>
                      <span>u/rust_expert</span>
                      <span>•</span>
                      <span>2h ago</span>
                    </div>
                    <p className="mb-2 text-slate-700">Start with "The Rust Programming Language" (the official book). It's free online and covers everything systematically.</p>

                    <div className="ml-4 border-l-2 border-slate-200 pl-3">
                      <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                        <span className="text-orange-500">↑ 234</span>
                        <span>u/beginner_dev</span>
                        <span>•</span>
                        <span>1h ago</span>
                      </div>
                      <p className="text-slate-700">Also try Rustlings exercises! They're great for hands-on practice.</p>
                    </div>
                  </div>

                  <div className="ml-4 border-l-2 border-slate-200 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                      <span className="text-orange-500">↑ 445</span>
                      <span>u/systems_dev</span>
                      <span>•</span>
                      <span>1h ago</span>
                    </div>
                    <p className="text-slate-700">Don't skip the ownership chapter - it's the most important concept in Rust!</p>
                  </div>
                </div>
                {/* Selection overlay */}
                {step.id === 'select' && (
                  <div className="pointer-events-none absolute inset-3 rounded-md ring-4 ring-blue-400/60" />
                )}
              </motion.div>

              {/* Right: Extension UI (beautiful design) */}
               <motion.div
                 className="mt-4 w-full rounded-2xl border border-white/30 bg-white/80 backdrop-blur-md p-4 shadow-lg md:mt-0 md:w-[380px] ring-1 ring-black/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-base font-bold text-slate-800">PromptReady</div>
                  <div className="text-[11px] rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">Extension</div>
                </div>
                <div className="space-y-4 text-sm">
                  <button
                    onClick={onExtensionClick}
                    disabled={step.id === 'clean'}
                    aria-busy={step.id === 'clean'}
                    aria-live="polite"
                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                      step.id === 'clean'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 ring-2 ring-blue-300 shadow-blue-500/40 cursor-not-allowed scale-95'
                        : step.id === 'export'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 scale-105 shadow-emerald-500/30'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 shadow-blue-500/30'
                    }`}
                  >
                    {step.id === 'clean' && (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing…
                      </>
                    )}
                    {step.id === 'export' && (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    )}
                    {step.id === 'select' && 'Copy Clean Markdown'}
                  </button>

                  <div className="rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-3 shadow-inner">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-base font-semibold text-slate-800">Customize</div>
                      <button
                        onClick={() => setOptionsOpen((v) => !v)}
                        className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-3 py-1 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                      >
                        Options <ChevronDown className={`h-4 w-4 transition-transform ${optionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                                          {optionsOpen && (
                        <div className="rounded-xl border border-white/50 bg-white/90 backdrop-blur-sm p-3 shadow-lg ring-1 ring-black/5">
                        <div className="mb-2 text-[12px] font-semibold text-slate-500">OUTPUT FORMAT</div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={includeTimestamp} onChange={(e) => setIncludeTimestamp(e.target.checked)} />
                            Show timestamps
                          </label>
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={includeTitle} onChange={(e) => setIncludeTitle(e.target.checked)} />
                            Show Title
                          </label>
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={includeUrl} onChange={(e) => setIncludeUrl(e.target.checked)} />
                            Show URL
                          </label>
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={preserveLineBreaks} onChange={(e) => setPreserveLineBreaks(e.target.checked)} />
                            Add spacing between lines
                          </label>
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={singleBlock} onChange={(e) => setSingleBlock(e.target.checked)} />
                            Paragraph style (single block)
                          </label>
                          <label className="flex items-center gap-2 text-slate-700">
                            <input type="checkbox" className="h-4 w-4" checked={addAISummaryPrompt} onChange={(e) => setAddAISummaryPrompt(e.target.checked)} />
                            Add AI Summary Prompt
                          </label>
                        </div>
                        <div className="my-3 h-px w-full bg-slate-200" />
                        <div className="mb-2 text-[12px] font-semibold text-slate-500">INTERFACE OPTIONS</div>
                        <label className="flex items-center gap-2 text-slate-700">
                          <input type="checkbox" className="h-4 w-4" checked={showDownloadActions} onChange={(e) => setShowDownloadActions(e.target.checked)} />
                          Show download button
                        </label>
                        <div className="mt-3 text-center text-xs text-slate-500 underline underline-offset-2">Report an issue / Suggest a feature</div>
                      </div>
                    )}
                  </div>

                   {step.id === 'clean' && (
                     <div className="flex items-center gap-2 text-slate-600">
                       <Loader2 className="h-4 w-4 animate-spin" /> Cleaning and structuring…
                     </div>
                   )}

                  {step.id === 'export' && showDownloadActions && (
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-md border px-3 py-1 text-sm">Download .md</button>
                      <button className="rounded-md border px-3 py-1 text-sm">Download .json</button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Bottom: Before Raw vs After Clean (beautiful two columns) */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className={`rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-300 ${flashEffect ? 'ring-2 ring-blue-400 bg-blue-50/80 scale-[1.02]' : ''}`}>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="text-sm font-semibold text-slate-700">Before: The Raw Copy-Paste</div>
                </div>
                <pre className="max-h-72 overflow-auto whitespace-pre-wrap text-[13px] leading-relaxed text-slate-800 font-mono bg-slate-50/50 rounded-lg p-3">{RAW_REDDIT_TEXT}</pre>
              </div>
              <div className={`rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-300 ${flashEffect ? 'ring-2 ring-emerald-400 bg-emerald-50/80 scale-[1.02]' : ''}`}>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <div className="text-sm font-semibold text-emerald-700">After: Your Instant Result</div>
                </div>
                <pre className={`max-h-72 overflow-auto text-[13px] leading-relaxed text-slate-800 font-mono bg-emerald-50/50 rounded-lg p-3 ${preserveLineBreaks ? 'whitespace-pre' : 'whitespace-pre-wrap'}`}>{buildCleanMarkdown()}</pre>
              </div>
            </div>

            {/* Controls removed for cleaner browser-like demo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
