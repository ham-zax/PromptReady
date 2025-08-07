/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		animation: {
  			shimmer: 'shimmer 2s linear infinite',
  		},
  		keyframes: {
  			shimmer: {
  				from: { backgroundPosition: '200% 0' },
  				to: { backgroundPosition: '-200% 0' },
  			},
  		},
  		colors: {
  			charcoal: {
  				'100': '#080e11',
  				'200': '#0f1c22',
  				'300': '#172b32',
  				'400': '#1f3943',
  				'500': '#264653',
  				'600': '#3f7489',
  				'700': '#609db6',
  				'800': '#95bece',
  				'900': '#cadee7',
  				DEFAULT: '#264653'
  			},
  			'persian-green': {
  				'100': '#081f1d',
  				'200': '#113f39',
  				'300': '#195e56',
  				'400': '#217e73',
  				'500': '#2a9d8f',
  				'600': '#3acbba',
  				'700': '#6cd8cb',
  				'800': '#9de5dc',
  				'900': '#cef2ee',
  				DEFAULT: '#2a9d8f'
  			},
  			saffron: {
  				'100': '#3b2c09',
  				'200': '#755912',
  				'300': '#b0851a',
  				'400': '#e0ad2e',
  				'500': '#e9c46a',
  				'600': '#edd086',
  				'700': '#f1dca4',
  				'800': '#f6e7c3',
  				'900': '#faf3e1',
  				DEFAULT: '#e9c46a'
  			},
  			'sandy-brown': {
  				'100': '#401f04',
  				'200': '#803e09',
  				'300': '#c05e0d',
  				'400': '#f07e22',
  				'500': '#f4a261',
  				'600': '#f6b681',
  				'700': '#f8c8a1',
  				'800': '#fbdac0',
  				'900': '#fdede0',
  				DEFAULT: '#f4a261'
  			},
  			'burnt-sienna': {
  				'100': '#371107',
  				'200': '#6e220f',
  				'300': '#a43316',
  				'400': '#db441e',
  				'500': '#e76f51',
  				'600': '#ec8b73',
  				'700': '#f1a896',
  				'800': '#f5c5b9',
  				'900': '#fae2dc',
  				DEFAULT: '#e76f51'
  			},
  			brand: {
  				cream: '#faf3e1',
  				white: '#ffffff'
  			},
  			text: {
  				primary: '#264653',
  				secondary: '#3f7489',
  				muted: '#95bece'
  			},
  			action: {
  				primary: '#2a9d8f',
  				hover: '#3acbba'
  			},
  			accent: {
  				warm: '#e76f51',
  				attention: '#e9c46a',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			surface: {
  				primary: '#ffffff',
  				secondary: '#f8fafc',
  				dark: '#264653',
  				elevated: '#ffffff',
  				subtle: '#f8fafc'
  			},
  			ui: {
  				border: '#cadee7'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};