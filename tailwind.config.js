/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0d0804',
        'deep-space-light': '#1a0f06',
        'cyber-cyan': '#FF7A00', // Orange accent
        'cyber-green': '#FF5500', // Deep orange
        'glass-dark': 'rgba(20, 10, 2, 0.75)', // Dark orange-tinted glass
        'glass-border': 'rgba(255, 122, 0, 0.2)', // Orange border
      },
      fontFamily: {
        'mono': ['Fira Code', 'Source Code Pro', 'Consolas', 'monospace'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 122, 0, 0.3)',
        'glow-sm': '0 0 8px rgba(255, 122, 0, 0.15)',
        'glow-lg': '0 0 25px rgba(255, 122, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 122, 0, 0.1)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 122, 0, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 122, 0, 0.5)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
