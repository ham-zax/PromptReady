import React from 'react';
import { motion } from 'framer-motion';

const ContextAnimation: React.FC = () => {
  // Setup timeline for a smooth 6s continuous loop
  const duration = 6;
  
  // Sweep left to right between 10% and 40% of the loop duration
  const scannerX = [-150, -150, 700, 700, -150];
  const scannerTimes = [0, 0.1, 0.45, 0.9, 1];

  // Noise elements disappear right as the scanner hits them
  const noiseOpacity = [1, 1, 0, 0, 1];
  const noiseTimes = [0, 0.2, 0.35, 0.9, 1];
  const noiseScale = [1, 1, 0.8, 0.8, 1];

  // Useful content moves into a perfectly structured layout after scanner passes
  const contentX = [0, 0, -20, -20, 0];
  const contentY = [0, 0, -20, -20, 0];
  const contentTimes = [0, 0.25, 0.4, 0.9, 1];
  
  const widthExpand = [300, 300, 480, 480, 300];

  // Markdown extraction elements (##, ```, etc) fade in
  const mdOpacity = [0, 0, 1, 1, 0];
  const mdTimes = [0, 0.3, 0.45, 0.9, 1];

  return (
    <div className="relative mx-auto mt-10 w-full max-w-2xl lg:mt-0 px-4" style={{ perspective: '1000px' }}>
      <motion.div 
        initial={{ rotateX: 4, rotateY: -6, rotateZ: 1 }}
        animate={{ rotateX: [4, 2, 4], rotateY: [-6, -9, -6], rotateZ: [1, 0, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-brand-border"
        style={{ transformStyle: "preserve-3d", backgroundColor: "#ffffff" }}
      >
        <svg viewBox="0 0 600 400" className="w-full h-auto font-mono overflow-visible" style={{ display: 'block' }}>
          <defs>
            <clipPath id="windowClip">
              <rect x="0" y="0" width="600" height="400" rx="16" />
            </clipPath>
            <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e70000" stopOpacity="0" />
              <stop offset="100%" stopColor="#e70000" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Soft shadow for popups */}
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.1" />
            </filter>
          </defs>

          {/* BACKGROUND FILL TO PREVENT BLACK RENDER */}
          <rect x="0" y="0" width="600" height="400" fill="#ffffff" />

          {/* Window Chrome & Background */}
          <rect x="0" y="0" width="600" height="400" rx="16" fill="#ffffff" stroke="#dcdcd7" strokeWidth="2"/>
          <path d="M0 48 L600 48" stroke="#dcdcd7" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" fill="#ef4444" />
          <circle cx="44" cy="24" r="6" fill="#f59e0b" />
          <circle cx="64" cy="24" r="6" fill="#10b981" />

          {/* CLIPPED ANIMATION AREA */}
          <g clipPath="url(#windowClip)">
            
            {/* --- MESSY NOISE ELEMENTS --- */}
            {/* Ad Banner Popup */}
            <motion.g animate={{ opacity: noiseOpacity, scale: noiseScale }} transition={{ duration, repeat: Infinity, times: noiseTimes }} transformOrigin="300px 80px">
              <rect x="40" y="65" width="520" height="50" rx="8" fill="#ffffff" stroke="#e70000" strokeWidth="2" strokeDasharray="4 4" filter="url(#shadow)" />
              <text x="300" y="95" fill="#e70000" fontSize="16" fontWeight="bold" textAnchor="middle">ANNOYING POPUP AD</text>
            </motion.g>

            {/* Sidebar / Clutter */}
            <motion.g animate={{ opacity: noiseOpacity }} transition={{ duration, repeat: Infinity, times: noiseTimes }}>
              <rect x="440" y="140" width="120" height="180" rx="8" fill="#f8f8f6" stroke="#dcdcd7" strokeWidth="1" />
              <rect x="460" y="160" width="80" height="8" rx="4" fill="#475569" opacity="0.4" />
              <rect x="460" y="180" width="60" height="8" rx="4" fill="#475569" opacity="0.4" />
              <rect x="460" y="200" width="70" height="8" rx="4" fill="#475569" opacity="0.4" />
              {/* Fake thumbnail image */}
              <rect x="460" y="230" width="80" height="60" rx="4" fill="#475569" opacity="0.2" />
            </motion.g>

            {/* Cookie Banner Bottom */}
            <motion.g animate={{ opacity: noiseOpacity, y: [0, 0, 20, 20, 0] }} transition={{ duration, repeat: Infinity, times: noiseTimes }}>
              <rect x="40" y="340" width="380" height="40" rx="8" fill="#171717" filter="url(#shadow)" />
              <text x="60" y="365" fill="#ffffff" fontSize="12">Accept all 500 tracking cookies to continue.</text>
            </motion.g>


            {/* --- STRUCTURED CONTENT TARGETS --- */}
            {/* Title Block */}
            <motion.g animate={{ x: contentX, y: contentY }} transition={{ duration, repeat: Infinity, times: contentTimes }}>
              <rect x="40" y="140" width="300" height="24" rx="4" fill="#171717" />
              <motion.text
                x="15" y="160" fill="#0b7f68" fontSize="24" fontWeight="bold"
                animate={{ opacity: mdOpacity }} transition={{ duration, repeat: Infinity, times: mdTimes }}
              >#</motion.text>
            </motion.g>

            {/* Paragraph Lines */}
            <motion.g animate={{ x: contentX, y: [-10, -10, -40, -40, -10] }} transition={{ duration, repeat: Infinity, times: contentTimes }}>
              <rect x="40" y="190" width="360" height="10" rx="5" fill="#475569" opacity="0.7" />
              <rect x="40" y="210" width="320" height="10" rx="5" fill="#475569" opacity="0.7" />
              <rect x="40" y="230" width="240" height="10" rx="5" fill="#475569" opacity="0.7" />
            </motion.g>

            {/* Code Snippet Block */}
            <motion.g animate={{ x: contentX, y: [-20, -20, -50, -50, -20] }} transition={{ duration, repeat: Infinity, times: contentTimes }}>
              <motion.rect
                x="40" y="260" height="60" rx="6" fill="#f8f8f6" stroke="#dcdcd7" strokeWidth="1"
                animate={{ width: widthExpand }} transition={{ duration, repeat: Infinity, times: contentTimes }}
              />
              
              <motion.text
                x="40" y="250" fill="#0b7f68" fontSize="14" fontWeight="bold"
                animate={{ opacity: mdOpacity }} transition={{ duration, repeat: Infinity, times: mdTimes }}
              >```json</motion.text>
              
              <rect x="60" y="280" width="120" height="6" rx="3" fill="#e70000" opacity="0.6" />
              <rect x="60" y="300" width="80" height="6" rx="3" fill="#171717" opacity="0.6" />

              <motion.text
                x="40" y="340" fill="#0b7f68" fontSize="14" fontWeight="bold"
                animate={{ opacity: mdOpacity }} transition={{ duration, repeat: Infinity, times: mdTimes }}
              >```</motion.text>
            </motion.g>


            {/* --- SWEEPING SCANNER --- */}
            <motion.g animate={{ x: scannerX }} transition={{ duration, repeat: Infinity, times: scannerTimes, ease: "linear" }}>
              <rect x="-100" y="48" width="100" height="352" fill="url(#scanGrad)" />
              <line x1="0" y1="48" x2="0" y2="400" stroke="#e70000" strokeWidth="4" />
              
              {/* Magic Sparkles following scanner */}
              <circle cx="-5" cy="150" r="3" fill="#e70000" />
              <circle cx="-2" cy="200" r="2" fill="#e70000" />
              <circle cx="-6" cy="280" r="4" fill="#e70000" />
              <circle cx="-3" cy="350" r="2" fill="#e70000" />
            </motion.g>

          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default ContextAnimation;
