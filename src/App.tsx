
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { trackEvent, trackHeroCtaClick } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';
import ThankYou from './pages/ThankYou';

// Centralized waitlist URL
const WAITLIST_URL = "https://waitlister.me/p/promptready"; // TODO: Replace with actual URL

function App() {
  const [currentPath, setCurrentPath] = React.useState<string>(typeof window !== 'undefined' ? window.location.pathname : '/');

  React.useEffect(() => {
    console.log('[Startup] App.tsx: App mounted');
    const onPop = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      console.log('[Startup] App.tsx: App unmounted');
    };
  }, []);
  // Centralized Action Handler for waitlist redirect
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      source_component: sourceComponent, // e.g., 'Hero', 'ProblemSolution'
    });
    // Opens the link in a new tab for better user experience
    window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  // Simple no-router page switch for /thank-you
  const isThankYou = currentPath === '/thank-you';

  return (
    <>
      <Helmet>
        {/* --- Standard SEO Meta Tags --- */}
        <title>PromptReady: Get Instantly AI-Ready Content</title>
        <meta name="description" content="Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM." />
        <link rel="canonical" href="https://promptready.vercel.app/" />

        {/* --- Open Graph Tags with Conversion-Oriented Copy --- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PromptReady" />
        <meta property="og:url" content="https://promptready.vercel.app/" />
        <meta property="og:locale" content="en_US" />

        {/* ✨ Optimized Billboard Text ✨ */}
        <meta property="og:title" content="Get Instantly AI-Ready Content with PromptReady" />
        <meta property="og:description" content="Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM." />

        {/* Image Tags */}
        <meta property="og:image" content="https://promptready.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PromptReady Logo and Headline: Skip the Manual Cleanup. Get Instantly AI-Ready Content." />

        {/* --- Twitter Card Tags (inherits from OG, but we specify for clarity) --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourActualTwitterHandle" />
        <meta name="twitter:title" content="Get Instantly AI-Ready Content with PromptReady" />
        <meta name="twitter:description" content="Tired of messy copy-pasting? PromptReady is the one-click extension that instantly cleans any webpage into perfect, private context for your LLM." />
        <meta name="twitter:image" content="https://promptready.vercel.app/og-image.png" />
      </Helmet>

      <Analytics />

      {isThankYou ? (
        <ThankYou />
      ) : (
        <>
          {/* Sticky mobile CTA so action is always visible */}
          <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[92%] sm:hidden">
            <button
              onClick={() => {
                trackHeroCtaClick({ placement: 'sticky_mobile' });
                handlePrimaryAction('StickyMobile');
              }}
              className="w-full rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white shadow-lg"
            >
              Join the early access
            </button>
          </div>

          {/* Use a <main> tag for better accessibility and semantic structure */}
          <main>
            {/* Persuasive narrative funnel order */}
            <Hero onPrimaryAction={() => handlePrimaryAction('Hero')} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="my-12 border-t border-slate-100" />
            </div>
            <ProblemSolution onPrimaryAction={() => handlePrimaryAction('ProblemSolution')} />
          
            <Features />
          
            <HowItWorks />
          
            <SocialProof />
          
            <Pricing onPrimaryAction={() => handlePrimaryAction('Pricing')} />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;