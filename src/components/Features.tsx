import React from 'react';
import { Zap, Brain, Settings, Shield, Sparkles } from 'lucide-react';

const Features: React.FC = () => (
  <section className="py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
          The Tools We Built to Save You Hours
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Every feature is designed to eliminate a frustrating step in your workflow, giving you
          back your most valuable asset: time.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-4 shadow-lg transition-shadow hover:border-blue-200 hover:shadow-xl">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-yellow-200 p-4">
            <div className="text-center">
              <Zap className="mx-auto mb-2 h-8 w-8 text-yellow-600" />
              <div className="text-xs font-medium text-yellow-700">Instant Parsing</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Instant Results</h3>
          <p className="leading-relaxed text-gray-600">
            Get clean text in under 100ms, even offline
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-lg transition-shadow hover:border-blue-200 hover:shadow-xl">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-purple-200 p-4">
            <div className="text-center">
              <Brain className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <div className="text-xs font-medium text-purple-700">AI Enhancement</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Smart AI Features</h3>
          <p className="leading-relaxed text-gray-600">
            Auto-generate summaries and perfect LLM formatting
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-lg transition-shadow hover:border-blue-200 hover:shadow-xl">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-blue-200 p-4">
            <div className="text-center">
              <Settings className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <div className="text-xs font-medium text-blue-700">Customization</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Personalized Formatting</h3>
          <p className="leading-relaxed text-gray-600">
            Adjust headings, lists & more with one click
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-lg transition-shadow hover:border-blue-200 hover:shadow-xl">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-green-200 p-4">
            <div className="text-center">
              <Shield className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <div className="text-xs font-medium text-green-700">Privacy First</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Privacy & Speed</h3>
          <p className="leading-relaxed text-gray-600">
            All processing locally for maximum security & performance
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center rounded-full border bg-blue-50 px-6 py-3 text-sm font-medium text-gray-700">
          <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
          Freemium Model: Start Free, Upgrade for Pro Features Like Advanced Summaries
        </div>
      </div>
    </div>
  </section>
);

export default Features;
