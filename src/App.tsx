import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { trackEvent, trackHeroCtaClick } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';
import ThankYou from './pages/ThankYou';
import VideoDemo from './components/VideoDemo';

const WAITLIST_URL = "https://waitlister.me/p/promptready";

function App() {
  const [currentPath, setCurrentPath] = React.useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('pushstate', onLocationChange as any); // graceful if pushstate custom event exists
    window.addEventListener('replacestate', onLocationChange as any);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('pushstate', onLocationChange as any);
      window.removeEventListener('replacestate', onLocationChange as any);
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

  const isThankYou = currentPath === '/thank-you';

  return (
    <>
      <Helmet>
        <title>PromptReady — AI prompt workflows for teams</title>
        <meta name="description" content="PromptReady helps teams create, share, and optimize AI prompts inside familiar workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Analytics />

      {isThankYou ? (
        <ThankYou />
      ) : (
        <>
          <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[92%] sm:hidden">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg p-3 shadow-lg flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Join the waitlist</div>
                <div className="text-xs text-slate-500">Get early access and updates</div>
              </div>
              <button
                onClick={() => handlePrimaryAction('StickyMobileCTA')}
                className="ml-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus:outline-none"
              >
                Join
              </button>
            </div>
          </div>

          <main>
            <div className="bg-white">
              
              {/* Section 1: Hero (White) */}
              <section className="relative">
                <Hero onPrimaryAction={() => handlePrimaryAction('Hero')} />
              </section>
              
              {/* Section 2: VideoDemo (Transitions from White to Light Blue) */}
              <section className="relative bg-gradient-to-b from-white via-blue-50 to-blue-100">
                <VideoDemo />
              </section>

              {/* Section 3: BeforeAfter (Stays in Light Blue) */}
              <section className="relative ">
                <BeforeAfter />
              </section>

              {/* Section 4: ProblemSolution (Transitions from Light Blue to Light Purple for accent) */}
              <section className="relative bg-gradient-to-b from-white via-blue-50 to-purple-100">
                <ProblemSolution onPrimaryAction={() => handlePrimaryAction('ProblemSolution')} />
              </section>
              
              {/* Section 5: Features (Stays in Light Purple) */}
              <section className="relative bg-purple-100">
                <Features />
              </section>

              {/* Section 6: HowItWorks (Transitions from Purple back to White) */}
              <section className="relative bg-gradient-to-b from-purple-100 via-purple-50 to-white">
                <HowItWorks />
              </section>

              {/* Section 7: SocialProof (Stays in White) */}
              <section className="relative bg-white">
                <SocialProof />
              </section>

              {/* Section 8: Pricing (Stays in White, subtle transition to dark footer) */}
              <section className="relative bg-slate-200">
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 to-transparent -z-10"></div>
                <Pricing onPrimaryAction={() => handlePrimaryAction('Pricing')} />
              </section>

              {/* Section 9: Footer (Dark background) */}
              <section className="relative bg-slate-900 text-slate-100">
                <Footer />
              </section>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;