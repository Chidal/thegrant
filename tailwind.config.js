/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        zora: {
          primary: '#1a1a1a',
          secondary: '#ff4f0a',
          accent: '#00ff9d',
        },
      },
    },
  },
  plugins: [],
};