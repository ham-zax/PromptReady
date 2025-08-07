import React from 'react';
import { Calendar, MessageSquare, ArrowLeft } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';

const INTERVIEW_URL = 'https://cal.com/your-handle/15min'; // TODO: replace with your Calendly/Cal.com link
const FEEDBACK_URL = 'https://forms.gle/your-form-id'; // TODO: replace with your Typeform or Google Forms link

const ThankYou: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900">You're on the list — thank you!</h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Two quick ways to help shape PromptReady while we build:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={INTERVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('thankyou_interview_click', { destination_url: INTERVIEW_URL })}
            className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-slate-500">Get early access</div>
            <div className="mb-1 flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Calendar className="h-5 w-5 text-blue-600" />
              15‑minute interview
            </div>
            <p className="text-sm text-slate-600">Share your workflow and get prioritized access.</p>
          </a>

          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('thankyou_feedback_click', { destination_url: FEEDBACK_URL })}
            className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-slate-500">Share feedback</div>
            <div className="mb-1 flex items-center gap-2 text-lg font-semibold text-slate-900">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              2‑minute survey
            </div>
            <p className="text-sm text-slate-600">Tell us what you need most to make this great.</p>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

