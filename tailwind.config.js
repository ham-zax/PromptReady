/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Your core color palette remains the same, which is excellent.
      colors: {
        'charcoal': { DEFAULT: '#264653', 100: '#080e11', 200: '#0f1c22', 300: '#172b32', 400: '#1f3943', 500: '#264653', 600: '#3f7489', 700: '#609db6', 800: '#95bece', 900: '#cadee7' },
        'persian-green': { DEFAULT: '#2a9d8f', 100: '#081f1d', 200: '#113f39', 300: '#195e56', 400: '#217e73', 500: '#2a9d8f', 600: '#3acbba', 700: '#6cd8cb', 800: '#9de5dc', 900: '#cef2ee' },
        'saffron': { DEFAULT: '#e9c46a', 100: '#3b2c09', 200: '#755912', 300: '#b0851a', 400: '#e0ad2e', 500: '#e9c46a', 600: '#edd086', 700: '#f1dca4', 800: '#f6e7c3', 900: '#faf3e1' },
        'sandy-brown': { DEFAULT: '#f4a261', 100: '#401f04', 200: '#803e09', 300: '#c05e0d', 400: '#f07e22', 500: '#f4a261', 600: '#f6b681', 700: '#f8c8a1', 800: '#fbdac0', 900: '#fdede0' },
        'burnt-sienna': { DEFAULT: '#e76f51', 100: '#371107', 200: '#6e220f', 300: '#a43316', 400: '#db441e', 500: '#e76f51', 600: '#ec8b73', 700: '#f1a896', 800: '#f5c5b9', 900: '#fae2dc' },

        // --- REFINED SEMANTIC ALIASES for the Design System ---
        'brand': {
          'cream': '#faf3e1', // Our primary soothing background
          'white': '#ffffff',  // Our secondary clean background
        },
        'text': {
          'primary': '#264653',     // charcoal
          'secondary': '#3f7489',   // charcoal-600
          'muted': '#95bece',       // charcoal-800
        },
        'action': {
          'primary': '#2a9d8f',     // persian-green
          'hover': '#3acbba',       // persian-green-600
        },
        'accent': {
          'warm': '#e76f51',        // burnt-sienna
          'attention': '#e9c46a',  // saffron
        },
        'surface': {
          'primary': '#ffffff',      // for floating cards
          'secondary': '#f8fafc',    // for very subtle backgrounds
          'dark': '#264653',         // charcoal for dark surfaces
          'elevated': '#ffffff',     // for elevated cards
          'subtle': '#f8fafc',       // for subtle backgrounds
        },
        'ui': {
          'border': '#cadee7',      // charcoal-900 - for subtle borders
        },
      },
    },
  },
  plugins: [],
};