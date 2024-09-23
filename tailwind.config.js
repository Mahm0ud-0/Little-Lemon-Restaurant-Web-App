/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],  theme: {
    extend: {
      colors: {
        primaryWhite: '#FAFAFA',
        secondary: '#F4CE14',
        accent: '#495E57',
        highlight: '#EE9972',
        primaryBlack: '#333333'
      }
    },
  },
  plugins: [],
}

