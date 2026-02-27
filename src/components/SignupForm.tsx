import React, { useState } from 'react';
import { CheckCircle, Clock } from '@/components/ui/Icons';
import { trackWaitlistSubmit } from '../hooks/useAnalytics';
import { env } from '../config';

interface SignupFormProps {
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [signupStatus, setSignupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus('submitting');
    setErrorMessage(null);

    try {
      const endpoint = import.meta.env.VITE_WAITLIST_API_URL || '/api/join-waitlist';
      const isLocalhost =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (import.meta.env.DEV && isLocalhost && endpoint === '/api/join-waitlist') {
        setSignupStatus('success');
        trackWaitlistSubmit({ method: 'inline_form_dev_mock' });
        setEmail('');
        setName('');
        if (onSuccess) onSuccess();
        window.history.pushState({}, '', '/thank-you');
        window.dispatchEvent(new PopStateEvent('popstate'));
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        let serverMessage = '';
        try {
          const payload = (await response.json()) as { error?: string };
          serverMessage = payload.error || '';
        } catch {
          // no-op: non-JSON response
        }

        throw new Error(
          serverMessage || 'Could not submit right now. Please use the backup waitlist link below.',
        );
      }

      setSignupStatus('success');
      trackWaitlistSubmit({ method: 'inline_form' });
      setEmail('');
      setName('');

      // If we are in a modal, tell the modal to close
      if (onSuccess) {
        onSuccess();
      }

      // Route to thank you with SPA push and notify listeners
      window.history.pushState({}, '', '/thank-you');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setSignupStatus('idle');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <div id="signup" className="mx-auto max-w-2xl">
      <div className="border-brand-border bg-brand-surface rounded-2xl border p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h3 className="text-brand-ink mb-2 text-2xl font-bold">Get Exclusive Early Access</h3>
          <p className="text-brand-muted">
            Join the waitlist and be the first to experience PromptReady.
          </p>
          <div className="bg-brand-accent/10 text-brand-accent mt-4 inline-flex animate-pulse items-center rounded-full px-4 py-2 text-sm font-medium">
            <Clock className="mr-2 h-4 w-4" />
            Limited Spots - Sign Up Before We Launch!
          </div>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-brand-ink mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                required
                className="border-brand-border focus:border-brand-accent focus:ring-brand-accent/30 w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-brand-ink mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                required
                className="border-brand-border focus:border-brand-accent focus:ring-brand-accent/30 w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {errorMessage && (
            <div className="rounded-lg border border-brand-accent/30 bg-brand-accent/8 p-3 text-sm text-brand-ink">
              <p className="font-medium">{errorMessage}</p>
              <a
                href={env.WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-brand-accent-hover mt-2 inline-flex font-semibold underline underline-offset-2"
              >
                Open backup waitlist form
              </a>
            </div>
          )}
          <button
            type="submit"
            disabled={signupStatus === 'submitting'}
            className="bg-brand-accent hover:bg-brand-accent-hover w-full cursor-pointer transform rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {signupStatus === 'submitting' ? (
              <span className="flex items-center justify-center">
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                Joining Waitlist...
              </span>
            ) : signupStatus === 'success' ? (
              <span className="flex items-center justify-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Successfully Added to Waitlist!
              </span>
            ) : (
              'Join the Waitlist for Free'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
