import React from 'react';
import { trackDemoPlay } from '../hooks/useAnalytics';
import { ArrowRight, Play } from 'lucide-react';

const VideoDemo: React.FC = () => {
  return (

    <section className="py-8 lg:py-24">

      {/* Demo anchor */}
      <div className="mb-10 justify-center flex">
        <a
          href="#demo"
          aria-label="Watch a 30 second demo"
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100"
        >
          <ArrowRight className="h-4 w-4" />
          Watch a 30s demo
        </a>
      </div>
      {/* Video/demo */}
      <div id="demo" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="browser-mockup floating-card mx-auto max-w-4xl">
          <div className="browser-header">
            <div className="browser-dot bg-red-500"></div>
            <div className="browser-dot bg-yellow-500"></div>
            <div className="browser-dot bg-green-500"></div>
            <div className="ml-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
              🎬 Quick demo (30s)
            </div>
          </div>

          <button
            type="button"
            aria-label="Play demo video"
            onClick={() => {
              trackDemoPlay({ placement: 'hero_demo' });
              console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
              alert('Video demo coming soon! Click recorded.');
            }}
            className="group flex aspect-video w-full items-center justify-center bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 transition-all duration-300 hover:from-blue-100 hover:via-violet-100 hover:to-pink-100"
          >
            <div className="text-center">
              <div className="mb-4 inline-block rounded-full bg-white p-6 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-12 w-12 text-blue-600" />
              </div>
              <p className="mb-1 text-lg font-bold text-slate-900">Install → Copy clean text → Paste anywhere</p>
              <p className="font-semibold text-blue-700">Public demo soon — click to show interest</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;

