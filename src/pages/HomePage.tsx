import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';

// Import existing components
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import ProblemSolution from '../components/ProblemSolution';
import ProductScreenshots from '../components/ProductScreenshots';
import SocialProof from '../components/SocialProof';
import VideoDemo from '../components/VideoDemo';

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

          <SectionTracker sectionName="product-screenshots" sectionId="product-screenshots-section">
            <ProductScreenshots />
          </SectionTracker>

          <SectionTracker sectionName="before-after" sectionId="before-after-section">
            <BeforeAfter />
          </SectionTracker>

          <SectionTracker sectionName="video-demo" sectionId="video-demo-section">
            <VideoDemo />
          </SectionTracker>

          <SectionTracker sectionName="how-it-works" sectionId="how-it-works-section">
            <HowItWorks />
          </SectionTracker>

          <ProblemSolution onPrimaryAction={() => onPrimaryAction('ProblemSolution')} />

          <Features />

          <SocialProof />

          <Pricing onPrimaryAction={() => onPrimaryAction('Pricing')} />

          <FAQ />

          <Footer onPrimaryAction={() => onPrimaryAction('Footer')} />
        </main>
      </motion.div>
    </ScrollTracker>
  );
};

export default HomePage;
