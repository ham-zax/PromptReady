import React from 'react';
import { motion } from 'framer-motion';
import DeferredSection from '../components/performance/DeferredSection';
import SEOHead from '../components/seo/SEOHead';
import {
  loadFAQ,
  loadFeatures,
  loadFooter,
  loadHowItWorks,
  loadPricing,
  loadProblemSolution,
  loadSocialProof,
  loadVideoDemo,
} from '../lazyLoaders/homeSections';

// Import existing components
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';

// Lazy load below-the-fold components
const ProblemSolution = React.lazy(loadProblemSolution);
const SocialProof = React.lazy(loadSocialProof);
const Features = React.lazy(loadFeatures);
const HowItWorks = React.lazy(loadHowItWorks);
const Pricing = React.lazy(loadPricing);
const Footer = React.lazy(loadFooter);
const FAQ = React.lazy(loadFAQ);
const VideoDemo = React.lazy(loadVideoDemo);

// Import analytics components
import ScrollTracker from '../components/analytics/ScrollTracker';
import SectionTracker from '../components/analytics/SectionTracker';

// Import SEO hook
import { usePageSEO } from '../hooks/useSEO';

interface HomePageProps {
  onPrimaryAction: (sourceComponent: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPrimaryAction }) => {
  // Get dynamic SEO configuration with proper canonical URLs
  const seo = usePageSEO('home');

  return (
    <ScrollTracker milestones={[25, 50, 75, 90, 100]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SEOHead seo={seo} />

        <main className="relative">
          <SectionTracker sectionName="hero" sectionId="hero-section">
            <Hero onPrimaryAction={() => onPrimaryAction('Hero')} />
          </SectionTracker>

          <SectionTracker sectionName="before-after" sectionId="before-after-section">
            <BeforeAfter />
          </SectionTracker>

          <DeferredSection placeholderClassName="min-h-[420px] sm:min-h-[520px]">
            <React.Suspense fallback={<div className="min-h-[420px] sm:min-h-[520px]" />}>
              <SectionTracker sectionName="video-demo" sectionId="video-demo-section">
                <VideoDemo />
              </SectionTracker>
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[360px] sm:min-h-[440px]">
            <React.Suspense fallback={<div className="min-h-[360px] sm:min-h-[440px]" />}>
              <SectionTracker sectionName="how-it-works" sectionId="how-it-works-section">
                <HowItWorks />
              </SectionTracker>
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[260px] sm:min-h-[300px]">
            <React.Suspense fallback={<div className="min-h-[260px] sm:min-h-[300px]" />}>
              <ProblemSolution onPrimaryAction={() => onPrimaryAction('ProblemSolution')} />
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[420px] sm:min-h-[520px]">
            <React.Suspense fallback={<div className="min-h-[420px] sm:min-h-[520px]" />}>
              <Features />
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[360px] sm:min-h-[440px]">
            <React.Suspense fallback={<div className="min-h-[360px] sm:min-h-[440px]" />}>
              <SocialProof />
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[360px] sm:min-h-[460px]">
            <React.Suspense fallback={<div className="min-h-[360px] sm:min-h-[460px]" />}>
              <Pricing onPrimaryAction={() => onPrimaryAction('Pricing')} />
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[280px] sm:min-h-[340px]">
            <React.Suspense fallback={<div className="min-h-[280px] sm:min-h-[340px]" />}>
              <FAQ />
            </React.Suspense>
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[220px] sm:min-h-[260px]">
            <React.Suspense fallback={<div className="min-h-[220px] sm:min-h-[260px]" />}>
              <Footer onPrimaryAction={() => onPrimaryAction('Footer')} />
            </React.Suspense>
          </DeferredSection>
        </main>
      </motion.div>
    </ScrollTracker>
  );
};

export default HomePage;
