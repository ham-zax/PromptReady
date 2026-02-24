import React from 'react';
import { ArrowRight, Github, MessageCircle } from '@/components/ui/Icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { env } from '../config';
import { trackEvent } from '../hooks/useAnalytics';
import Logo from './ui/Logo';

const FooterBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
     {/* Large decorative curve at bottom */}
    <motion.svg 
      className="absolute bottom-0 left-0 w-full h-32 text-brand-surface-soft" 
      viewBox="0 0 1000 100" 
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0 100 V 50 Q 250 0 500 50 T 1000 50 V 100 Z" />
    </motion.svg>
    
    {/* Subtle hand-drawn sparkles scattered */}
    <svg className="absolute bottom-10 left-[10%] w-8 h-8 text-brand-muted/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" strokeLinecap="round"/>
    </svg>
    <svg className="absolute bottom-20 right-[15%] w-6 h-6 text-brand-accent/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 C12 12 22 12 22 12 C12 12 12 22 12 22 C12 12 2 12 2 12 C12 12 12 2 12 2 Z" fill="currentColor"/>
    </svg>
  </div>
);

const Footer: React.FC = () => {
  const handleWaitlistClick = () => {
    trackEvent('footer_cta_click', { placement: 'footer', destination_url: env.WAITLIST_URL });
    window.open(env.WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative border-t border-brand-border bg-brand-bg py-14 sm:py-16 overflow-hidden">
      <FooterBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="lg" clickable />
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-brand-muted sm:text-base">
              Clean, structured context for AI workflows. Capture what matters and skip the manual
              cleanup.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-3 font-semibold text-brand-ink">Product</p>
                <div className="space-y-2.5 text-brand-muted">
                  <a href="/#features" className="block hover:text-brand-ink transition-colors">
                    Features
                  </a>
                  <a href="/#pricing" className="block hover:text-brand-ink transition-colors">
                    Pricing
                  </a>
                  <a href="/#demo" className="block hover:text-brand-ink transition-colors">
                    Demo
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-brand-ink">Pages</p>
                <div className="space-y-2.5 text-brand-muted">
                  <Link to="/" className="block hover:text-brand-ink transition-colors">
                    Home
                  </Link>
                  <Link to="/demo" className="block hover:text-brand-ink transition-colors">
                    Demo Page
                  </Link>
                  <Link to="/pricing" className="block hover:text-brand-ink transition-colors">
                    Pricing Page
                  </Link>
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-brand-ink">Support</p>
                <div className="space-y-2.5 text-brand-muted">
                  <a href={env.FEEDBACK_URL} target="_blank" rel="noreferrer" className="block hover:text-brand-ink transition-colors">
                    Feedback
                  </a>
                  <a href={env.WAITLIST_URL} target="_blank" rel="noreferrer" className="block hover:text-brand-ink transition-colors">
                    Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl border border-brand-border bg-brand-surface p-6 shadow-sm group hover:shadow-md transition-shadow">
              {/* Decorative accent line */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-brand-accent rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">Get started</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                Install the extension and clean your first page in under a minute.
              </p>

              <button
                onClick={handleWaitlistClick}
                className="group/btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <div className="mt-5 flex items-center gap-3 text-brand-muted">
                <a href={env.SITE_URL} target="_blank" rel="noreferrer" className="hover:text-brand-ink transition-colors" aria-label="PromptReady website">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href={env.SITE_URL} target="_blank" rel="noreferrer" className="hover:text-brand-ink transition-colors" aria-label="PromptReady GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-border pt-6 text-sm text-brand-muted sm:flex sm:items-center sm:justify-between">
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
