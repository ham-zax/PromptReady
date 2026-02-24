import React from 'react';

const SketchyFilter = () => (
  <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
    <filter id="sketchy-icon-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

const organicProps: React.SVGProps<SVGSVGElement> = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: { filter: 'url(#sketchy-icon-filter)' }
};

export const SketchyIconProvider = () => <SketchyFilter />;

export const Copy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M15 4h-8a2 2 0 0 0-2 2v10c0 1 1 2 2 2h8a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2z" />
    <path d="M9 4v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
  </svg>
);

export const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

export const Shield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const Trash2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </svg>
);

export const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export const Wand2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 11.8 19 13" />
    <path d="M15 9h0" />
    <path d="M17.8 6.2 19 5" />
    <path d="m3 21 9-9" />
    <path d="M12.2 6.2 11 5" />
  </svg>
);

export const ShieldX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m14.5 9-5 5" />
    <path d="m9.5 9 5 5" />
  </svg>
);

export const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CheckCircle2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const MessageCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Loader2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props} className={`animate-spin ${props.className || ''}`}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const Play = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const RotateCcw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Home = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const XCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export const Lock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Zap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Award = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const MessageSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Info = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const AlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...organicProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const SearchIcon = Search; // alias for Search
