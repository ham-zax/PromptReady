import React from 'react';
import { Zap, Brain, Settings, Shield, Sparkles } from 'lucide-react';

const Features: React.FC = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
          Benefits that save you time (and sanity)
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Every feature is designed to eliminate a frustrating step in your workflow, giving you
          back your most valuable asset: time.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-white/80 hover:scale-105 hover:shadow-lg">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 shadow-lg">
            <div className="text-center">
              <Zap className="mx-auto mb-2 h-10 w-10 text-yellow-600" />
              <div className="text-xs font-semibold text-yellow-700">Instant Parsing</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Save time</h3>
          <p className="leading-relaxed text-gray-600">Cut 30–90 seconds of clean‑up on every paste.</p>
        </div>
        <div className="group rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-white/80 hover:scale-105 hover:shadow-lg">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 p-4 shadow-lg">
            <div className="text-center">
              <Brain className="mx-auto mb-2 h-10 w-10 text-purple-600" />
              <div className="text-xs font-semibold text-purple-700">AI Enhancement</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Preserve structure</h3>
          <p className="leading-relaxed text-gray-600">Headings, lists, tables, and code fences intact.</p>
        </div>
        <div className="group rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-white/80 hover:scale-105 hover:shadow-lg">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-4 shadow-lg">
            <div className="text-center">
              <Settings className="mx-auto mb-2 h-10 w-10 text-blue-600" />
              <div className="text-xs font-semibold text-blue-700">Customization</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Cite confidently</h3>
          <p className="leading-relaxed text-gray-600">Canonical URL + timestamp in every export.</p>
        </div>
        <div className="group rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-6 shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-white/80 hover:scale-105 hover:shadow-lg">
          <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200 p-4 shadow-lg">
            <div className="text-center">
              <Shield className="mx-auto mb-2 h-10 w-10 text-green-600" />
              <div className="text-xs font-semibold text-green-700">Privacy First</div>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Privacy‑first</h3>
          <p className="leading-relaxed text-gray-600">All processing runs locally; nothing leaves your device.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center rounded-full border border-white/30 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-black/5">
          <Sparkles className="mr-3 h-5 w-5 text-blue-600" />
          Smart Hybrid Engine (Pro): Local cleaning + optional AI validation with your key
        </div>
      </div>
    </div>
  </section>
);

export default Features;
