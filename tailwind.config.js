/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#5C2018',
        cream: '#FAF8F5',
        gold: '#D4A84B',
        'gold-soft': '#E8D5A3',
        sage: '#8B9A6E',
        'sage-dark': '#5C2018',
        'sage-light': '#B8BF9E',
        paper: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Lora"', 'serif'],
      },
      borderRadius: {
        card: '0.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

