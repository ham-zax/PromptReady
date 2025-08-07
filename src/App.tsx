import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import useAnalytics from './hooks/useAnalytics';

// Centralized waitlist URL
const WAITLIST_URL = "https://waitlister.me/p/promptready"; // TODO: Replace with actual URL

function App() {
  const trackEvent = useAnalytics();

  // Centralized Action Handler for waitlist redirect
  const handlePrimaryAction = () => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      component: 'App'
    });
    window.location.href = WAITLIST_URL;
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Hero scrollToSignup={handlePrimaryAction} />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Pricing scrollToSignup={handlePrimaryAction} />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;