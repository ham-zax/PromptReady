import React from 'react';
import { Wand2 } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Tired of the Manual Copy-Paste-Cleanse Cycle?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Ever copy text only to end up with a mess? We know the frustration of cleaning up chaos
            just to get your work done.
          </p>
        </div>

        <div className="browser-mockup floating-card mx-auto max-w-4xl">
          <div className="browser-header">
            <div className="browser-dot hidden bg-red-500 sm:inline-block"></div>
            <div className="browser-dot hidden bg-yellow-500 sm:inline-block"></div>
            <div className="browser-dot hidden bg-green-500 sm:inline-block"></div>
            <div className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700 sm:ml-4">
              example-article.com
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
                    <div className="font-medium text-rose-700">Limited-time offer! 50% off!</div>
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
                  After: AI-ready
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="text-lg font-semibold text-slate-900">
                    # AI and Machine Learning Trends in 2024
                  </div>
                  <div className="space-y-2 leading-relaxed text-slate-700">
                    <p>Clean, structured content. No ads. No pop-ups.</p>
                    <p>Perfect for ChatGPT, Claude, or any LLM.</p>
                    <p>Copy once. Paste anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
