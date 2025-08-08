import React from 'react';
import { Shield, Wand2 } from 'lucide-react';
import { motion, Transition } from 'framer-motion';

interface HeroModesProps {
  spring: Transition;
}

const HeroModes: React.FC<HeroModesProps> = ({ spring }) => {
  return (
    <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      <motion.div
        className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-200 p-6 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ ...spring, delay: 0.05 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          <Shield className="h-4 w-4 text-slate-700" />
          Client-side mode
        </div>
        <h2 className="mb-2 text-lg font-semibold text-slate-900">
          Instant clean text extraction
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li>Smart parsing removes ads, navigation, and clutter.</li>
          <li>Perfect for quick copy-paste workflows.</li>
          <li>100% client-side. Nothing leaves your machine.</li>
        </ul>
      </motion.div>

      <motion.div
        className="relative rounded-2xl border border-violet-200 bg-gradient-to-b from-white to-violet-50 p-6 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ ...spring, delay: 0.12 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
          <Wand2 className="h-4 w-4 text-violet-700" />
          Cloud extras
        </div>
        <h2 className="mb-2 text-lg font-semibold text-slate-900">Optional AI formatting</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            Perfect, LLM-ready structure via our secure API when you want more than basic
            parsing.
          </li>
          <li>Extras: auto-summaries, custom templates, and export.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroModes;
