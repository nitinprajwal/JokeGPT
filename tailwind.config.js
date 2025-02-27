/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(238, 226, 210)',
        secondary: '#f8b400',
        accent: '#fc6d6d',
        textColor: '#2d2d2d',
        background: '#f5f0e8',
      },
      fontFamily: {
        londrina: ['"Londrina Solid"', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};