
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { trackEvent } from './hooks/useAnalytics';
import { Analytics } from '@vercel/analytics/react';

// Centralized waitlist URL
const WAITLIST_URL = "https://waitlister.me/p/promptready"; // TODO: Replace with actual URL

function App() {
  // Centralized Action Handler for waitlist redirect
  const handlePrimaryAction = (sourceComponent: string) => {
    trackEvent('primary_cta_click', {
      destination_url: WAITLIST_URL,
      source_component: sourceComponent, // e.g., 'Hero', 'ProblemSolution'
    });
    // Opens the link in a new tab for better user experience
    window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        {/* --- Standard SEO Meta Tags --- */}
        <title>PromptReady: Instant, AI-Ready Web Content</title>
        <meta name="description" content="Stop the manual copy-paste-cleanse cycle. PromptReady is a one-click browser extension that turns any web page into perfect, private context for your LLM." />
        <link rel="canonical" href="https://promptready.vercel.app/" />

        {/* --- Open Graph Tags for Social Sharing (Facebook, WhatsApp, LinkedIn, etc.) --- */}
        {/* Basic OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PromptReady: Instant, AI-Ready Web Content" />
        <meta property="og:description" content="Stop the manual copy-paste-cleanse cycle. PromptReady turns any web page into perfect context for your LLM." />
        <meta property="og:url" content="https://promptready.vercel.app/" />

        {/* ✨ ENHANCED OG Tags ✨ */}
        <meta property="og:site_name" content="PromptReady" />
        <meta property="og:locale" content="en_US" />

        {/* Image Tags - CRITICAL for Previews */}
        <meta property="og:image" content="https://promptready.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PromptReady Logo and Headline: Skip the Manual Cleanup. Get Instantly AI-Ready Content." />

        {/* --- Twitter Card Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourActualTwitterHandle" />
        <meta name="twitter:title" content="PromptReady: Instant, AI-Ready Web Content" />
        <meta name="twitter:description" content="Stop the manual copy-paste-cleanse cycle. PromptReady turns any web page into perfect context for your LLM." />
        <meta name="twitter:image" content="https://promptready.vercel.app/og-image.png" />
      </Helmet>

      <Analytics />
      {/* Use a <main> tag for better accessibility and semantic structure */}
      <main>
        {/* Persuasive narrative funnel order */}
        <Hero onPrimaryAction={() => handlePrimaryAction('Hero')} />
        <ProblemSolution onPrimaryAction={() => handlePrimaryAction('ProblemSolution')} />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing onPrimaryAction={() => handlePrimaryAction('Pricing')} />
        <Footer />
      </main>
    </>
  );
}

export default App;