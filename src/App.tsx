import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { trackEvent } from './hooks/useAnalytics'; // Assuming trackHeroCtaClick is also in here
import { Analytics } from '@vercel/analytics/react';
import ThankYou from './pages/ThankYou';
import VideoDemo from './components/VideoDemo';

const WAITLIST_URL = 'https://waitlister.me/p/promptready';

function App() {
  const [currentPath] = React.useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  // ... (React hooks and handlers remain the same) ...
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      source_component: sourceComponent,
    });
    window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  const isThankYou = currentPath === '/thank-you';

  return (
    <>
      <Helmet>{/* ... */}</Helmet>
      <Analytics />
      {isThankYou ? (
        <ThankYou />
      ) : (
        <>
          {/* ... (Sticky mobile CTA remains the same) ... */}
          <main>
            {/* The base background for the entire page */}
            <div className="bg-white">
              {/* Section 1: Hero (White) */}
              <section className="relative bg-gradient-to-b from-white to-blue-50">
                <Hero onPrimaryAction={() => handlePrimaryAction('Hero')} />
              </section>

              {/* Section 2: VideoDemo (Smoothly fades from White to a light Blue) */}
              <section className="to-bg-white relative bg-gradient-to-b from-blue-50">
                <VideoDemo />
              </section>

              {/* Section 3: HowItWorks (Sits on the light Blue background) */}
              <section className="relative bg-blue-50">
                <HowItWorks />
              </section>

              {/* Section 4: ProblemSolution (Fades from light Blue to our accent Purple) */}
              <section className="relative bg-gradient-to-b from-blue-50 to-purple-50">
                <ProblemSolution onPrimaryAction={() => handlePrimaryAction('ProblemSolution')} />
              </section>

              {/* Section 5: Features (Sits on the accent Purple background) */}
              <section className="relative bg-purple-50">
                <Features />
              </section>

              {/* Section 6: BeforeAfter (Fades from Purple back to White) */}
              <section className="relative bg-gradient-to-b from-purple-50 to-white">
                <SocialProof />
              </section>

              {/* Section 7: SocialProof (Sits on the clean White background) */}
              {/* <section className="relative bg-white">
                <SocialProof />
              </section> */}

              {/* Section 8: Pricing (Sits on White, with a gradient overlay fading to dark) */}
              <section className="relative bg-white">
                {/* This div creates the fade-to-dark effect BEFORE the footer */}
                <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-900 to-transparent" />
                <Pricing onPrimaryAction={() => handlePrimaryAction('Pricing')} />
              </section>

              {/* Section 9: Footer (Solid dark background) */}
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
