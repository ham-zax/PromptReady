import React, { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [signupStatus, setSignupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSignupStatus('success');
    setEmail('');
    setName('');
    setTimeout(() => setSignupStatus('idle'), 3000);
  };

  return (
    <div id="signup" className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Join the Waitlist for Exclusive Early Access
          </h3>
          <p className="text-gray-600">
            Get notified when PromptReady launches and receive exclusive updates
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Limited Spots – Sign Up Before We Launch!
          </div>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={signupStatus === 'submitting'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {signupStatus === 'submitting' ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Joining Waitlist...
              </span>
            ) : signupStatus === 'success' ? (
              <span className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
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