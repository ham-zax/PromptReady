import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';

const SocialProof: React.FC = () => (
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight text-charcoal-500 sm:text-4xl lg:text-5xl"
        >
          Trusted by builders, researchers, and operators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          Teams use PromptReady when they need reliable context and consistent outputs.
        </motion.p>
      </div>

      <Testimonials />
    </div>
  </section>
);

export default SocialProof;
