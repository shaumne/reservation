module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        'dark-secondary': '#1E1E1E',
        'gold': '#C6A87D',
        'gold-light': '#D4B78F',
        'gray-custom': '#A0A0A0',
      },
      fontFamily: {
        'primary': ['Playfair Display', 'serif'],
        'secondary': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
