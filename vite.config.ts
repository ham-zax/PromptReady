import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {},
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
              'react',
              'react-dom',
              'scheduler', // Core React (always static)
              'react-router',
              'react-router-dom', // Router (static imports)
              'react-helmet-async', // SEO (static import)
              '@vercel/analytics', // Analytics (static import)
              'clsx',
              'tailwind-merge', // Utils (static imports)
              'sonner', // Toast (static import)
            ];
            const modulePath = id.split('node_modules/')[1] ?? '';
            const packageName = modulePath.startsWith('@')
              ? modulePath.split('/').slice(0, 2).join('/')
              : modulePath.split('/')[0];

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
      },
    },
  },
  // Performance optimizations
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
});
