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

      <main>
        {/* The base background for the entire page */}
        <div className="bg-white">
          {/* Section 1: Hero (White) */}
          <SectionTracker sectionName="hero" sectionId="hero-section">
            <section className="relative bg-gradient-to-b from-white to-blue-50">
              <Hero onPrimaryAction={() => onPrimaryAction('Hero')} />
            </section>
          </SectionTracker>

          {/* Section 2: Micro Before/After proof */}
          <SectionTracker sectionName="before-after" sectionId="before-after-section">
            <section className="relative bg-gradient-to-b from-blue-50">
              <BeforeAfter />
            </section>
          </SectionTracker>

          {/* Section 3: VideoDemo (Smoothly fades from White to a light Blue) */}
          <SectionTracker sectionName="video-demo" sectionId="video-demo-section">
            <section className="to-bg-white relative bg-gradient-to-b from-blue-50">
              <React.Suspense fallback={<div className="h-96 flex items-center justify-center">Loading demo...</div>}>
                <VideoDemo />
              </React.Suspense>
            </section>
          </SectionTracker>

          {/* Section 4: HowItWorks (Sits on the light Blue background) */}
          <SectionTracker sectionName="how-it-works" sectionId="how-it-works-section">
            <section className="relative bg-blue-50">
              <HowItWorks />
            </section>
          </SectionTracker>

          {/* Section 5: ProblemSolution (Fades from light Blue to our accent Purple) */}
          <section className="relative bg-gradient-to-b from-blue-50 to-purple-50">
            <ProblemSolution onPrimaryAction={() => onPrimaryAction('ProblemSolution')} />
          </section>

          {/* Section 6: Features (Sits on the accent Purple background) */}
          <section className="relative bg-purple-50">
            <Features />
          </section>

          {/* Section 7: Social Proof (Fades from Purple back to White) */}
          <section className="relative bg-gradient-to-b from-purple-50 to-white">
            <SocialProof />
          </section>

          {/* Section 8: Pricing (Sits on White, with a gradient overlay fading to dark) */}
          <section className="relative bg-white">
            {/* This div creates the fade-to-dark effect BEFORE the footer */}
            <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-900 to-transparent" />
            <Pricing onPrimaryAction={() => onPrimaryAction('Pricing')} />
          </section>

          {/* Section 9: FAQ */}
          <section className="relative bg-white">
            <FAQ />
          </section>

          {/* Section 10: Footer */}
          <Footer />
        </div>
      </main>
    </motion.div>
    </ScrollTracker>
  );
};

export default HomePage;
