/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626', // rouge vif (red-600)
        },
        secondary: {
          DEFAULT: '#2563eb', // bleu vif (blue-600)
        },
      },
    },
  },
  plugins: [],
};
