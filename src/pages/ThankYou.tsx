import React from 'react';
import { Calendar, MessageSquare, ArrowLeft } from '@/components/ui/Icons';
import { trackEvent } from '../hooks/useAnalytics';
import Logo from '../components/ui/Logo';
import { env } from '../config';

const ThankYou: React.FC = () => {
  return (
    <section className="relative bg-brand-bg">
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo size="xl" />
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-brand-ink">
            You're on the list — thank you!
          </h1>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Two quick ways to help shape PromptReady while we build:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={env.INTERVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('thankyou_interview_click', { destination_url: env.INTERVIEW_URL })
            }
            className="group rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm transition hover:border-brand-accent/40 hover:shadow-md"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-brand-muted">
              Get early access
            </div>
            <div className="mb-1 flex items-center gap-2 text-lg font-semibold text-brand-ink">
              <Calendar className="h-5 w-5 text-brand-accent" />
              15-minute interview
            </div>
            <p className="text-sm text-brand-muted">
              Share your workflow and get prioritized access.
            </p>
          </a>

          <a
            href={env.FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('thankyou_feedback_click', { destination_url: env.FEEDBACK_URL })}
            className="group rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm transition hover:border-brand-accent/40 hover:shadow-md"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-brand-muted">
              Share feedback
            </div>
            <div className="mb-1 flex items-center gap-2 text-lg font-semibold text-brand-ink">
              <MessageSquare className="h-5 w-5 text-brand-accent" />
              2-minute survey
            </div>
            <p className="text-sm text-brand-muted">Tell us what you need most to make this great.</p>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
