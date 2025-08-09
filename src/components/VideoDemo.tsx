import React from 'react';
import { ArrowRight, CheckCircle, Bell, ChevronDown } from 'lucide-react';
import { trackDemoPlay, trackUserEngagement } from '../hooks/useAnalytics';

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
    durationMs: 1800,
  },
  {
    id: 'clean',
    title: '2) Click the extension',
    description:
      'Removes votes, ads, and clutter while preserving authors and comment nesting.',
    durationMs: 2000,
  },
  {
    id: 'structure',
    title: '3) Processing…',
    description:
      'Creates a clean outline with proper threading and adds source citation.',
    durationMs: 2200,
  },
  {
    id: 'export',
    title: '4) Your Result: Perfect Thread Outline',
    description:
      'Structured discussion ready for your notes. All context preserved.',
    durationMs: 2400,
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

  return { step, stepIndex, isPlaying, play, pause, restart, next, prev, steps };
};

interface DemoPageProps {
  onPrimaryAction?: (source: string) => void;
}

const VideoDemo: React.FC<DemoPageProps> = ({ onPrimaryAction }) => {
  const { step, pause, next } = useAutoDemo('reddit');
  const [toast, setToast] = React.useState<string | null>(null);
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
    // Drive the refined flow: click -> process -> export
    pause();
    if (step.id === 'export') return;
    if (step.id === 'select') {
      next(); // to clean/open
      setTimeout(() => {
        next(); // to structure
        setTimeout(() => {
          next(); // to export
        }, 700);
      }, 250);
    } else if (step.id === 'clean') {
      next(); // to structure
      setTimeout(() => next(), 700); // to export
    } else if (step.id === 'structure') {
      next(); // to export
    }
  };

  React.useEffect(() => {
    if (step.id === 'structure') {
      setToast('Processing selection…');
    } else if (step.id === 'export') {
      setToast('Copied: cleaned Markdown ready');
      const t = setTimeout(() => setToast(null), 1500);
      return () => clearTimeout(t);
    } else {
      setToast(null);
    }
  }, [step.id]);

  return (
    <section className="py-8 lg:py-24">
      {/* Demo anchor */}
      <div className="mb-10 flex justify-center">
        <a
          href="#demo"
          aria-label="Interactive demo"
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100"
        >
          <ArrowRight className="h-4 w-4" />
          Try the interactive demo
        </a>
      </div>

      {/* Interactive Auto Demo */}
      <div id="demo" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="browser-mockup floating-card mx-auto max-w-6xl">
          <div className="browser-header">
            <div className="browser-dot bg-red-500"></div>
            <div className="browser-dot bg-yellow-500"></div>
            <div className="browser-dot bg-green-500"></div>
            <div className="ml-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
              ⚡ Interactive demo (auto‑play)
            </div>
            <div className="ml-auto flex items-center gap-2 pr-2">
              {/* Simulated extension button only */}
              <button
                aria-label="Click extension"
                onClick={onExtensionClick}
                className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm transition-colors ${
                  step.id === 'clean' ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                Clean in browser
              </button>
            </div>
            {/* Scenario switch */}
            {/* Scenario switch removed (reddit only) */}
            {/* Toast */}
            {toast && (
              <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                {step.id === 'export' ? (
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Bell className="h-3.5 w-3.5 text-blue-600" />
                )}
                {toast}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            {/* Browser look only (no progress, no controls) */}

            {/* Scene */}
            {/* Scene: Reddit content + Narrow Extension UI */}
            <div className="relative md:flex md:items-start md:gap-6">
              {/* Left: Reddit-style content (previous format) */}
              <div
                className={`relative flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 ${
                  flashEffect ? 'ring-2 ring-blue-400 bg-blue-50' : ''
                }`}
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
              </div>

              {/* Right: Extension UI (narrow like a browser extension) */}
              <div className="mt-6 w-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:mt-0 md:w-[360px]">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-base font-bold text-slate-800">PromptReady</div>
                  <div className="text-[11px] rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">Extension</div>
                </div>
                <div className="space-y-4 text-sm">
                  <button
                    onClick={onExtensionClick}
                    className={`w-full rounded-[10px] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors ${
                      step.id === 'clean' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    Copy Clean Markdown
                  </button>

                  <div className="rounded-[12px] border border-slate-200 bg-slate-50/50 p-3">
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
                      <div className="rounded-lg border border-slate-200 bg-white p-3">
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

                  {step.id === 'structure' && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" /> Processing…
                    </div>
                  )}

                  {step.id === 'export' && showDownloadActions && (
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-md border px-3 py-1 text-sm">Download .md</button>
                      <button className="rounded-md border px-3 py-1 text-sm">Download .json</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom: Before Raw vs After Clean (two columns) */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${flashEffect ? 'ring-2 ring-blue-400 bg-blue-50' : ''}`}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Before: Raw copy</div>
                <pre className="max-h-72 overflow-auto whitespace-pre-wrap text-[13px] leading-relaxed text-slate-800 font-mono">{RAW_REDDIT_TEXT}</pre>
              </div>
              <div className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${flashEffect ? 'ring-2 ring-blue-400 bg-blue-50' : ''}`}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">After: Clean Markdown</div>
                <pre className={`max-h-72 overflow-auto text-[13px] leading-relaxed text-slate-800 font-mono ${preserveLineBreaks ? 'whitespace-pre' : 'whitespace-pre-wrap'}`}>{buildCleanMarkdown()}</pre>
              </div>
            </div>

            {/* Output preview (CTA) */}
            {step.id === 'export' && (
              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="text-center">
                  <button
                    onClick={() => onPrimaryAction?.('demo_output_cta')}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
                  >
                    Get Early Access
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
            {/* Controls removed for cleaner browser-like demo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
