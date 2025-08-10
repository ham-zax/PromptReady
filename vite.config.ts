import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { beasties } from 'vite-plugin-beasties';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    beasties({
      // Critical CSS configuration
      options: {
        preload: 'swap', // Use swap strategy for better performance
        inlineFonts: false, // Don't inline fonts to keep bundle size smaller
        preloadFonts: true, // Preload critical fonts
        pruneSource: true, // Remove inlined CSS from external stylesheets
        mergeStylesheets: true, // Merge inlined styles into single tag
        compress: true, // Compress critical CSS
        logLevel: 'info'
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2020',
    minify: 'esbuild', // Use esbuild for faster minification
    sourcemap: 'hidden',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Aligned chunking strategy: static imports get manual chunks, dynamic imports get automatic splitting
        manualChunks: (id) => {
          if (id.includes('node_modules/')) {
            // Only chunk STATICALLY imported libraries
            const staticImports = [
              'react', 'react-dom', 'scheduler',     // Core React (always static)
              'react-router', 'react-router-dom',    // Router (static imports)
              'react-helmet-async',                  // SEO (static import)
              '@vercel/analytics',                   // Analytics (static import)
              'clsx', 'tailwind-merge',             // Utils (static imports)
              'sonner',                             // Toast (static import)
              'lucide-react'                        // Icons (static imports)
            ];
            
            const packageName = id.split('node_modules/')[1]?.split('/')[0];
            
            // React ecosystem gets its own chunk
            if (packageName && ['react', 'react-dom', 'scheduler'].includes(packageName)) {
              return 'vendor-react';
            }
            
            // Router gets its own chunk
            if (packageName && ['react-router', 'react-router-dom'].includes(packageName)) {
              return 'vendor-router';
            }
            
            // Other static imports go to vendor-utils
            if (packageName && staticImports.includes(packageName)) {
              return 'vendor-utils';
            }
            
            // Everything else (including dynamic imports like gsap, framer-motion, lenis)
            // Let Vite handle automatically - no manual chunking
            return undefined;
          }
        },
      },      treeshake: {
        moduleSideEffects: (id) => {
          return id.includes('.css') || id.includes('posthog-js');
        },
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      external: (id) => {
        // Exclude PostHog survey modules from bundling (even more aggressive)
        if (id.includes('posthog-js')) {
          const excludedModules = [
            '/surveys',
            '/toolbar',
            '/session-recording',
            '/heatmaps',
            '/experiments',
            '/web-experiments',
            '/exception-autocapture',
            '/dead-clicks-autocapture',
            '/surveys-extension',
            '/extensions/surveys',
          ];
          
          if (excludedModules.some(module => id.includes(module))) {
            return true;
          }
        }
        return false;
      }
    },
  },
  // Performance optimizations
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
});
