import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import existing components
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import ProblemSolution from '../components/ProblemSolution';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import VideoDemo from '../components/VideoDemo';

interface HomePageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPrimaryAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>PromptReady — One-click clean Markdown from any page</title>
        <meta 
          name="description" 
          content="Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved. Runs locally. Pro adds optional validation with your key." 
        />
        <meta property="og:title" content="PromptReady — One-click clean Markdown from any page" />
        <meta 
          property="og:description" 
          content="Turn any selection into AI-ready Markdown/JSON — code fences, tables, and citations preserved. Runs locally. Pro adds optional validation with your key." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promptready.vercel.app/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://promptready.vercel.app/" />
      </Helmet>

      <main>
        {/* The base background for the entire page */}
        <div className="bg-white">
          {/* Section 1: Hero (White) */}
          <section className="relative bg-gradient-to-b from-white to-blue-50">
            <Hero onPrimaryAction={() => onPrimaryAction('Hero')} />
          </section>

          {/* Section 2: Micro Before/After proof */}
          <section className="relative bg-gradient-to-b from-blue-50">
            <BeforeAfter />
            <div className="mt-4 flex justify-center pb-2">
              <button
                onClick={() => onPrimaryAction('BeforeAfterCTA')}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Get Early Access
              </button>
            </div>
          </section>

          {/* Section 3: VideoDemo (Smoothly fades from White to a light Blue) */}
          <section className="to-bg-white relative bg-gradient-to-b from-blue-50">
            <VideoDemo />
          </section>

          {/* Section 4: HowItWorks (Sits on the light Blue background) */}
          <section className="relative bg-blue-50">
            <HowItWorks />
          </section>

          {/* Section 5: ProblemSolution (Fades from light Blue to our accent Purple) */}
          <section className="relative bg-gradient-to-b from-blue-50 to-purple-50">
            <ProblemSolution onPrimaryAction={() => onPrimaryAction('ProblemSolution')} />
          </section>

          {/* Section 6: Features (Sits on the accent Purple background) */}
          <section className="relative bg-purple-50">
            <Features />
          </section>

          {/* Section 7: Social Proof (Fades from Purple back to White) */}
          <section className="relative bg-gradient-to-b from-purple-50 to-white">
            <SocialProof />
          </section>

          {/* Section 8: Pricing (Sits on White, with a gradient overlay fading to dark) */}
          <section className="relative bg-white">
            {/* This div creates the fade-to-dark effect BEFORE the footer */}
            <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-900 to-transparent" />
            <Pricing onPrimaryAction={() => onPrimaryAction('Pricing')} />
          </section>

          {/* Section 9: Footer (Solid dark background) */}
          <section className="relative bg-slate-900 text-slate-100">
            <Footer />
          </section>
        </div>
      </main>
    </motion.div>
  );
};

export default HomePage;
