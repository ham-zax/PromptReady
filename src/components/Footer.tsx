import React from 'react';
import { ArrowRight, Github, MessageCircle, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { env } from '../config';
import { trackEvent } from '../hooks/useAnalytics';

const Footer: React.FC = () => {
  const handleWaitlistClick = () => {
    trackEvent('footer_cta_click', { placement: 'footer', destination_url: env.WAITLIST_URL });
    window.open(env.WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-slate-200 bg-white/70 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-charcoal-500">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-charcoal-500 text-white">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="text-xl font-semibold">PromptReady</span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
              Clean, structured context for AI workflows. Capture what matters and skip the manual
              cleanup.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-3 font-semibold text-charcoal-500">Product</p>
                <div className="space-y-2.5 text-slate-700">
                  <a href="/#features" className="block hover:text-charcoal-500">
                    Features
                  </a>
                  <a href="/#pricing" className="block hover:text-charcoal-500">
                    Pricing
                  </a>
                  <a href="/#demo" className="block hover:text-charcoal-500">
                    Demo
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-charcoal-500">Pages</p>
                <div className="space-y-2.5 text-slate-700">
                  <Link to="/" className="block hover:text-charcoal-500">
                    Home
                  </Link>
                  <Link to="/demo" className="block hover:text-charcoal-500">
                    Demo Page
                  </Link>
                  <Link to="/pricing" className="block hover:text-charcoal-500">
                    Pricing Page
                  </Link>
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-charcoal-500">Support</p>
                <div className="space-y-2.5 text-slate-700">
                  <a href={env.FEEDBACK_URL} target="_blank" rel="noreferrer" className="block hover:text-charcoal-500">
                    Feedback
                  </a>
                  <a href={env.WAITLIST_URL} target="_blank" rel="noreferrer" className="block hover:text-charcoal-500">
                    Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-[#f7f4ed] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">Get started</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Install the extension and clean your first page in under a minute.
              </p>

              <button
                onClick={handleWaitlistClick}
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal-400"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <div className="mt-5 flex items-center gap-3 text-slate-600">
                <a href={env.SITE_URL} target="_blank" rel="noreferrer" className="hover:text-charcoal-500" aria-label="PromptReady website">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href={env.SITE_URL} target="_blank" rel="noreferrer" className="hover:text-charcoal-500" aria-label="PromptReady GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PromptReady. All rights reserved.</p>
          <div className="mt-3 flex gap-5 sm:mt-0">
            <Link to="/" className="hover:text-charcoal-500">
              Privacy
            </Link>
            <Link to="/" className="hover:text-charcoal-500">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
