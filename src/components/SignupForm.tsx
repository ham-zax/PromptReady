import React, { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { trackWaitlistSubmit } from '../hooks/useAnalytics';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [signupStatus, setSignupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSignupStatus('success');
    trackWaitlistSubmit({ method: 'inline_form' });
    setEmail('');
    setName('');
    // Route to thank you with SPA push and notify listeners
    window.history.pushState({}, '', '/thank-you');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div id="signup" className="mx-auto max-w-2xl">
      <div className="rounded-2xl border bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">Get Exclusive Early Access</h3>
          <p className="text-gray-600">
            Join the waitlist and be the first to experience PromptReady.
          </p>
          <div className="mt-4 inline-flex animate-pulse items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
            <Clock className="mr-2 h-4 w-4" />
            Limited Spots - Sign Up Before We Launch!
          </div>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={signupStatus === 'submitting'}
            className="w-full transform rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {signupStatus === 'submitting' ? (
              <span className="flex items-center justify-center">
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
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
