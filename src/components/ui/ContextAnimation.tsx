import React from 'react';

const ContextAnimation: React.FC = () => {
  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-2xl px-4 lg:mt-0"
      style={{ perspective: '1000px' }}
    >
      <div className="hero-window-float w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]">
        <div
          className="relative w-full overflow-hidden rounded-2xl border-[2px] border-[#dcdcd7] bg-[#ffffff]"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="relative z-10 flex h-12 items-center gap-2 border-b-[2px] border-[#dcdcd7] bg-[#ffffff] px-4">
            <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
            <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            <div className="h-3 w-3 rounded-full bg-[#10b981]" />
          </div>

          <svg
            viewBox="0 0 600 352"
            className="hero-context-svg block h-auto w-full overflow-hidden bg-[#ffffff] font-mono"
          >
            <defs>
              <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e70000" stopOpacity="0" />
                <stop offset="100%" stopColor="#e70000" stopOpacity="0.4" />
              </linearGradient>

              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.1" />
              </filter>
            </defs>

            <g className="hero-noise-pop">
              <rect
                x="40"
                y="20"
                width="520"
                height="50"
                rx="8"
                fill="#ffffff"
                stroke="#e70000"
                strokeWidth="2"
                strokeDasharray="4 4"
                filter="url(#shadow)"
              />
              <text x="300" y="50" fill="#e70000" fontSize="16" fontWeight="bold" textAnchor="middle">
                ANNOYING POPUP AD
              </text>
            </g>

            <g className="hero-noise-sidebar">
              <rect
                x="440"
                y="90"
                width="120"
                height="180"
                rx="8"
                fill="#f8f8f6"
                stroke="#dcdcd7"
                strokeWidth="1"
              />
              <rect x="460" y="110" width="80" height="8" rx="4" fill="#475569" opacity="0.4" />
              <rect x="460" y="130" width="60" height="8" rx="4" fill="#475569" opacity="0.4" />
              <rect x="460" y="150" width="70" height="8" rx="4" fill="#475569" opacity="0.4" />
              <rect x="460" y="180" width="80" height="60" rx="4" fill="#475569" opacity="0.2" />
            </g>

            <g className="hero-noise-cookie">
              <rect x="40" y="290" width="380" height="40" rx="8" fill="#171717" filter="url(#shadow)" />
              <text x="60" y="315" fill="#ffffff" fontSize="12">
                Accept all 500 tracking cookies to continue.
              </text>
            </g>

            <g className="hero-content-title">
              <text x="40" y="108" fill="#0b7f68" fontSize="24" fontWeight="bold" className="hero-md-fade">
                #
              </text>
              <rect x="65" y="90" width="300" height="24" rx="4" fill="#171717" />
            </g>

            <g className="hero-content-para">
              <rect x="65" y="135" width="360" height="10" rx="5" fill="#475569" opacity="0.7" />
              <rect x="65" y="155" width="320" height="10" rx="5" fill="#475569" opacity="0.7" />
              <rect x="65" y="175" width="240" height="10" rx="5" fill="#475569" opacity="0.7" />
            </g>

            <g className="hero-content-code">
              <rect
                x="65"
                y="215"
                height="110"
                rx="6"
                fill="#f8f8f6"
                stroke="#dcdcd7"
                strokeWidth="1"
                className="hero-code-expand"
              />

              <text x="80" y="240" fill="#0b7f68" fontSize="14" fontWeight="bold" className="hero-md-fade">
                ```json
              </text>

              <rect x="100" y="260" width="120" height="6" rx="3" fill="#e70000" opacity="0.6" />
              <rect x="100" y="280" width="80" height="6" rx="3" fill="#171717" opacity="0.6" />

              <text x="80" y="310" fill="#0b7f68" fontSize="14" fontWeight="bold" className="hero-md-fade">
                ```
              </text>
            </g>

            <g className="hero-scanner">
              <rect x="-100" y="0" width="100" height="352" fill="url(#scanGrad)" />
              <line x1="0" y1="0" x2="0" y2="352" stroke="#e70000" strokeWidth="4" />

              <circle cx="-5" cy="100" r="3" fill="#e70000" />
              <circle cx="-2" cy="150" r="2" fill="#e70000" />
              <circle cx="-6" cy="230" r="4" fill="#e70000" />
              <circle cx="-3" cy="300" r="2" fill="#e70000" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContextAnimation;
