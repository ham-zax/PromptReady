import React from 'react';
import { Lock, Zap, Award, ArrowRight, Star, Wand2, Play } from 'lucide-react';
import { Globe } from "./magicui/globe";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from './magicui/border-beam';
import { Pointer } from './magicui/pointer';
import { ShadcnWaitlistCard } from './ShadcnWaitlistCard';
import { motion } from 'framer-motion';

interface HeroProps {
  onPrimaryAction: () => void;
}
 
const Hero: React.FC<HeroProps> = ({ onPrimaryAction }) => {
  React.useEffect(() => {
    console.log('[Startup] Hero.tsx: Hero mounted');
    return () => {
      console.log('[Startup] Hero.tsx: Hero unmounted');
    };
  }, []);
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Globe background element */}
      <div className="absolute top-[7%] left-0 right-0 h-[600px] z-0 [mask-image:linear-gradient(to_bottom,white_0%,transparent_80%)] pointer-events-none scale-125">
        <Globe className="w-full h-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
  <div className="mb-8">
          <motion.div
            className="flex justify-center flex-wrap gap-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 24 } }
              }}
            >
              <Lock className="w-4 h-4 mr-2" />
              100% Client-Side Privacy
            </motion.div>
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 24 } }
              }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Lightning Fast
            </motion.div>
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 24 } }
              }}
            >
              <Award className="w-4 h-4 mr-2" />
              Manifest V3 Compliant
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          >
            Stop Copying Clutter. Get Instantly AI-Ready Content.
          </motion.h1>
          <motion.p
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
          >
            The one-click extension for developers, writers, and researchers that transforms any webpage into perfectly structured text for your LLM, saving you 2+ hours weekly.
          </motion.p>
          
          <div className="flex justify-center mb-12 mt-12">
            <ShadcnWaitlistCard onPrimaryAction={onPrimaryAction} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-10 max-w-4xl mx-auto relative">
            {/* Standard Card */}
            <div className="relative bg-gradient-to-br from-white to-blue-200 border border-blue-100 rounded-l-2xl rounded-r-none p-8 flex flex-col justify-center items-start z-10">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </span>
                <span className="text-xl font-bold text-blue-600">Standard</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Offline & Private</h4>
              
              <ul className="list-disc list-inside text-gray-800 space-y-2 text-base mb-4">
                <li>
                  <span className="font-semibold">Instant Parsing:</span> Transforms webpage clutter into structured, readable text in milliseconds.
                </li>
                <li>
                  <span className="font-semibold">100% Client-Side Privacy:</span> This standard mode runs entirely on your device. Your data never leaves your machine.
                </li>
              </ul>
              <Pointer>
                <motion.div
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-2xl">👆</div>
                </motion.div>
              </Pointer>
            </div>
            {/* Dotted Separator */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 z-0" aria-hidden="true">
              <div className="h-full border-l-2 border-dotted border-gray-300"></div>
            </div>
            {/* Optional AI Card */}
            <div className="relative bg-gradient-to-br from-purple-200 to-white border border-purple-100 rounded-r-2xl rounded-l-none p-8 flex flex-col justify-center items-start z-10">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mr-3">
                  <Wand2 className="w-6 h-6 text-purple-600" />
                </span>
                <span className="text-xl font-bold text-purple-600">Optional AI</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Cloud-Powered</h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2 text-base mb-4">
                <li>
                  <span className="font-semibold">Perfect Formatting:</span> Go beyond simple parsing. Use our secure API to get perfectly structured content for any LLM.
                </li>
                <li>
                  <span className="font-semibold">Advanced Features:</span> Unlock auto-summaries, custom formatting, and more.
                </li>
              </ul>
              <Pointer>
                <motion.div
                  animate={{
                    scale: [0.9, 1.2, 0.9],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="text-2xl">✨</div>
                </motion.div>
              </Pointer>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <a
              href="#browser-mockup"
              className="inline-flex items-center px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-base font-semibold shadow hover:bg-blue-100 transition-all duration-200"
              style={{ textDecoration: 'none' }}
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Watch a Quick Demo
            </a>
          </div>
        </div>
        <div className="mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
            </div>
            <div className="browser-mockup floating-card max-w-4xl mx-auto">
              <div className="browser-header">
                <div className="browser-dot bg-red-500"></div>
                <div className="browser-dot bg-yellow-500"></div>
                <div className="browser-dot bg-green-500"></div>
                <div className="ml-4 bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-600 font-medium">
                  example-article.com
                </div>
                <div className="ml-auto">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    <Wand2 className="w-3 h-3 mr-1" />
                    PromptReady Active
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-red-800 text-lg flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      Before: Messy Copy
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-100 border border-red-300 p-3 rounded-lg">
                        <div className="text-red-700 font-medium">🎯 LIMITED TIME OFFER! 50% OFF!</div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        Important article content about AI and machine learning trends in 2024...
                      </div>
                      <div className="bg-yellow-100 border border-yellow-300 p-3 rounded-lg">
                        <div className="text-yellow-700 font-medium">📧 Subscribe to our newsletter!</div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        More valuable content mixed with promotional elements...
                      </div>
                      <div className="bg-gray-100 border border-gray-300 p-3 rounded-lg">
                        <div className="text-gray-600 text-xs">Footer • Privacy Policy • Terms of Service</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-green-800 text-lg flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      After: PromptReady
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="font-semibold text-gray-900 text-lg">
                        # AI and Machine Learning Trends in 2024
                      </div>
                      <div className="text-gray-700 leading-relaxed space-y-2">
                        <p>Clean, structured content ready for AI processing.</p>
                        <p>No ads, no distractions, just pure information.</p>
                        <p>Perfectly formatted for ChatGPT, Claude, or any LLM.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="browser-mockup" className="mb-12">
          <div className="browser-mockup floating-card max-w-4xl mx-auto">
            <div className="browser-header">
              <div className="browser-dot bg-red-500"></div>
              <div className="browser-dot bg-yellow-500"></div>
              <div className="browser-dot bg-green-500"></div>
              <div className="ml-4 bg-blue-100 rounded-full px-4 py-1 text-sm font-medium">
                🎬 Quick Demo (30s)
              </div>
            </div>
            <div
              className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-200 hover:via-purple-200 hover:to-pink-200 transition-all duration-300 group"
              onClick={() => {
                console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
                alert('Video demo coming soon! This click shows user interest in seeing the product in action.');
              }}
            >
              <div className="text-center">
                <div className="bg-white rounded-full p-6 mb-4 shadow-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">Watch: Install → Copy Clean Text → Paste Anywhere</p>
                <p className="text-blue-600 font-semibold">Coming after validation • Click to show interest!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;