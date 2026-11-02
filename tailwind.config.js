/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        'purple-gradient': '#8b5cf6',
        'blue-gradient': '#3b82f6',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-color': 'pulse-color 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        'pulse-color': {
          '0%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)' },
          '100%': { boxShadow: '0 0 30px rgba(240, 147, 251, 0.8)' }
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    },
  },
  plugins: [],
}