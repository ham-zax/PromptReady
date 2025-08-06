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

const InteractiveFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              An Interactive Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PromptReady is designed to be fast, smart, and secure. See our core principles in action.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
          <Card className="col-span-1 row-span-1 overflow-hidden border bg-gradient-to-br from-slate-50 to-slate-100 transition-all dark:from-slate-900 dark:to-slate-800 shadow-none">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold">Instant Text Cleaning</CardTitle>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                Removes all clutter in milliseconds.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="pointer-events-none text-center text-xl font-medium text-slate-800 dark:text-slate-200">
                Highlight any text
              </span>
            </CardContent>
            <Pointer>
                <Zap className="w-8 h-8 text-yellow-500" />
            </Pointer>
          </Card>

          <Card className="col-span-1 row-span-1 overflow-hidden border bg-gradient-to-br from-blue-50 to-blue-100 transition-all dark:from-blue-900 dark:to-blue-800 shadow-none">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold">AI-Powered Formatting</CardTitle>
              <CardDescription className="text-sm text-blue-700 dark:text-blue-300">
                Perfectly structured for any LLM.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="pointer-events-none text-center text-xl font-medium text-blue-800 dark:text-blue-200">
                Get perfect results
              </span>
            </CardContent>
            <Pointer className="fill-blue-500" />
          </Card>

          <Card className="col-span-1 row-span-1 overflow-hidden border bg-gradient-to-br from-purple-50 to-purple-100 transition-all dark:from-purple-900 dark:to-purple-800 shadow-none">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold">Privacy First</CardTitle>
              <CardDescription className="text-sm text-purple-700 dark:text-purple-300">
                All processing is done client-side.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="pointer-events-none text-center text-xl font-medium text-purple-800 dark:text-purple-200">
                Your data stays safe
              </span>
            </CardContent>
            <Pointer>
              <Lock className="w-8 h-8 text-purple-500" />
            </Pointer>
          </Card>

          <Card className="col-span-1 row-span-1 overflow-hidden border bg-gradient-to-br from-green-50 to-green-100 transition-all dark:from-green-900 dark:to-green-800 shadow-none">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold">Universal Compatibility</CardTitle>
              <CardDescription className="text-sm text-green-700 dark:text-green-300">
                Works with any site, any AI model.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="pointer-events-none text-center text-xl font-medium text-green-800 dark:text-green-200">
                Works everywhere
              </span>
            </CardContent>
            <Pointer>
              <div className="text-4xl">✨</div>
            </Pointer>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default InteractiveFeatures;