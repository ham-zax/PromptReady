"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Pointer } from "./magicui/pointer";
import { Lock, Zap, BrainCircuit, Globe } from "lucide-react";
import { ComparativeDisplay } from "./ui/ComparativeDisplay";

const InteractiveFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tired of the Manual Copy-Paste-Cleanse Cycle?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ever copy text only to end up with a mess—random line breaks, weird spaces, and broken formatting? Tired of wasting time fixing what should be simple? We know the frustration of cleaning up chaos, just to get your work done.
            </p>
        </div>

        <ComparativeDisplay
          before={`Messy, copied text with
random line breaks,    inconsistent spacing,
and    weird formatting.`}
          after={`Cleaned text with consistent spacing and formatting, ready to use anywhere.`}
        />
        {/* Summary/CTA after feature grid */}
        <div className="mt-12 text-center">
          <button className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            tabIndex={0}
            aria-label="Try PromptReady Now"
          >
            Try PromptReady Now
          </button>
          <div className="mt-4 text-gray-600 text-sm">Experience all features instantly—no signup required.</div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveFeatures;