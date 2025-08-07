import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { trackEvent } from './hooks/useAnalytics';

// Centralized waitlist URL
const WAITLIST_URL = "https://waitlister.me/p/promptready"; // TODO: Replace with actual URL

function App() {
  // Centralized Action Handler for waitlist redirect
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      source_component: sourceComponent, // e.g., 'Hero', 'ProblemSolution'
    });
    window.location.href = WAITLIST_URL;
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Pass a string to identify the source of the click */}
      <Hero onPrimaryAction={() => handlePrimaryAction('Hero')} />
      <ProblemSolution onTryNow={() => handlePrimaryAction('ProblemSolution')} />
      <Features />
      <HowItWorks />
      <Pricing onPrimaryAction={() => handlePrimaryAction('Pricing')} />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;