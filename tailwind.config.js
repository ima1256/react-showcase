/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Path to your content files
  ],
  theme: {
    extend: {
      fontFamily: {
        digital: ['Digital7', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

