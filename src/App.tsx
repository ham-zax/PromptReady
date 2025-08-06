import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import useAnalytics from './hooks/useAnalytics';

function App() {
  useAnalytics();

  const scrollToSignup = () => {
    const el = document.getElementById('signup');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero scrollToSignup={scrollToSignup} />
      <ProblemSolution />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Pricing scrollToSignup={scrollToSignup} />
      <Footer />
    </div>
  );
}

export default App;