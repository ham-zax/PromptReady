import React from 'react';
import { ArrowRight, Github, MessageCircle } from '@/components/ui/Icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { env } from '../config';
import { trackEvent } from '../hooks/useAnalytics';
import Logo from './ui/Logo';

const FooterBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Large decorative curve at bottom */}
    <motion.svg
      className="text-brand-surface-soft absolute bottom-0 left-0 h-32 w-full"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0 100 V 50 Q 250 0 500 50 T 1000 50 V 100 Z" />
    </motion.svg>

    {/* Subtle hand-drawn sparkles scattered */}
    <svg
      className="text-brand-muted/20 absolute bottom-10 left-[10%] h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" strokeLinecap="round" />
    </svg>
    <svg
      className="text-brand-accent/20 absolute right-[15%] bottom-20 h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 2 C12 12 22 12 22 12 C12 12 12 22 12 22 C12 12 2 12 2 12 C12 12 12 2 12 2 Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

interface FooterProps {
  onPrimaryAction?: (sourceComponent: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPrimaryAction }) => {
  const handleWaitlistClick = () => {
    trackEvent('footer_cta_click', { placement: 'footer' });
    if (onPrimaryAction) {
      onPrimaryAction('Footer');
    } else {
      window.open(env.WAITLIST_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="border-brand-border bg-brand-bg relative overflow-hidden border-t py-14 sm:py-16">
      <FooterBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="lg" clickable />
            </div>

            <p className="text-brand-muted max-w-lg text-sm leading-relaxed sm:text-base">
              Clean, structured context for AI workflows. Capture what matters and skip the manual
              cleanup.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
              <div>
                <p className="text-brand-ink mb-3 font-semibold">Product</p>
                <div className="text-brand-muted space-y-2.5">
                  <a href="/#features" className="hover:text-brand-ink block transition-colors">
                    Features
                  </a>
                  <a href="/#pricing" className="hover:text-brand-ink block transition-colors">
                    Pricing
                  </a>
                  <a href="/#demo" className="hover:text-brand-ink block transition-colors">
                    Demo
                  </a>
                </div>
              </div>

              <div>
                <p className="text-brand-ink mb-3 font-semibold">Pages</p>
                <div className="text-brand-muted space-y-2.5">
                  <Link to="/" className="hover:text-brand-ink block transition-colors">
                    Home
                  </Link>
                  <Link to="/demo" className="hover:text-brand-ink block transition-colors">
                    Demo Page
                  </Link>
                  <Link to="/pricing" className="hover:text-brand-ink block transition-colors">
                    Pricing Page
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-brand-ink mb-3 font-semibold">Support</p>
                <div className="text-brand-muted space-y-2.5">
                  <a
                    href={env.FEEDBACK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-ink block transition-colors"
                  >
                    Feedback
                  </a>
                  <button
                    onClick={handleWaitlistClick}
                    className="hover:text-brand-ink block cursor-pointer text-left transition-colors"
                  >
                    Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border-brand-border bg-brand-surface group relative rounded-3xl border p-6 shadow-sm transition-shadow hover:shadow-md">
              {/* Decorative accent line */}
              <div className="bg-brand-accent absolute top-0 right-6 left-6 h-1 rounded-b-md opacity-0 transition-opacity group-hover:opacity-100" />

              <p className="text-brand-muted text-sm font-semibold tracking-[0.16em] uppercase">
                Get started
              </p>
              <p className="text-brand-muted mt-3 text-sm leading-relaxed sm:text-base">
                Install the extension and clean your first page in under a minute.
              </p>

              <button
                onClick={handleWaitlistClick}
                className="group/btn bg-brand-accent hover:bg-brand-accent-hover mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition-colors"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <div className="text-brand-muted mt-5 flex items-center gap-3">
                <a
                  href={env.SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-ink transition-colors"
                  aria-label="PromptReady website"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={env.SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-ink transition-colors"
                  aria-label="PromptReady GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-brand-border text-brand-muted mt-10 border-t pt-6 text-sm sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PromptReady. All rights reserved.</p>
          <div className="mt-3 flex gap-5 sm:mt-0">
            <Link to="/" className="hover:text-brand-ink transition-colors">
              Privacy
            </Link>
            <Link to="/" className="hover:text-brand-ink transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
