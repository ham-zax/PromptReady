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
import FAQ from '../components/FAQ';

// Import analytics components
import ScrollTracker from '../components/analytics/ScrollTracker';
import SectionTracker from '../components/analytics/SectionTracker';

// Import SEO hook
import { usePageSEO } from '../hooks/useSEO';

// Lazy load heavy components
const VideoDemo = React.lazy(() => import('../components/VideoDemo'));

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
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta property="og:title" content={seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seo.ogUrl} />
          <meta property="og:image" content={seo.ogImage} />
          <meta name="twitter:card" content={seo.twitterCard} />
          <meta name="twitter:image" content={seo.twitterImage} />
          <link rel="canonical" href={seo.canonicalUrl} />
          {seo.noindex && <meta name="robots" content="noindex,nofollow" />}
        </Helmet>

        <main className="relative">
          <SectionTracker sectionName="hero" sectionId="hero-section">
            <Hero onPrimaryAction={() => onPrimaryAction('Hero')} />
          </SectionTracker>

          <SectionTracker sectionName="before-after" sectionId="before-after-section">
            <BeforeAfter />
          </SectionTracker>

          <SectionTracker sectionName="video-demo" sectionId="video-demo-section">
            <React.Suspense fallback={<div className="flex h-96 items-center justify-center">Loading demo…</div>}>
              <VideoDemo />
            </React.Suspense>
          </SectionTracker>

          <SectionTracker sectionName="how-it-works" sectionId="how-it-works-section">
            <HowItWorks />
          </SectionTracker>

          <ProblemSolution onPrimaryAction={() => onPrimaryAction('ProblemSolution')} />
          <Features />
          <SocialProof />
          <Pricing onPrimaryAction={() => onPrimaryAction('Pricing')} />
          <FAQ />
          <Footer />
        </main>
      </motion.div>
    </ScrollTracker>
  );
};

export default HomePage;
