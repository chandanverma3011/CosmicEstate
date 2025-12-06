/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7000FF', // Electric Violet
          light: '#A35CFF',
          dark: '#4A00B3',
        },
        secondary: {
          DEFAULT: '#00F0FF', // Neon Cyan
          light: '#5CFAFF',
          dark: '#0099A3',
        },
        accent: {
          DEFAULT: '#FF005E', // Neon Pink
          light: '#FF5C96',
          dark: '#B30042',
        },
        dark: {
          bg: '#050511', // Deep Space
          surface: '#0F1221', // Dark nebula
          card: '#161B33',
          border: '#2D3455',
          lighter: '#1F2544',
        }
      },
      backgroundColor: {
        'dark-primary': '#050511',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        'cyber-grid': 'radial-gradient(circle, rgba(112,0,255,0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(112, 0, 255, 0.5), 0 0 20px rgba(112, 0, 255, 0.3)',
        'neon-pink': '0 0 10px rgba(255, 0, 94, 0.5), 0 0 20px rgba(255, 0, 94, 0.3)',
        'cosmic-glow': '0 0 15px rgba(112, 0, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.2)',
      },
    },
  },
  plugins: [],
}

