/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262626',      // Dark Gray
        secondary: '#F2F2F2',    // Light Gray
        accent: '#FFD700',       // Gold
        'primary-light': '#404040',
        'primary-dark': '#1A1A1A',
        'secondary-light': '#FFFFFF',
        'secondary-dark': '#E0E0E0',
        'accent-light': '#FFE033',
        'accent-dark': '#CCAC00',
        'food-card': {
          'red': '#333333',      // Dark gray for food cards
          'orange': '#4D4D4D',   // Medium gray for food cards
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        'display-base': ['3rem', { lineHeight: '3.5rem' }],    // 48px
        'display-lg': ['3.75rem', { lineHeight: '4rem' }],     // 60px
        'display-xl': ['4.5rem', { lineHeight: '5rem' }],      // 72px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'luxury': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}