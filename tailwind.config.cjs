/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif']
      },
      colors: {
        'custom-green': 'rgba(15, 61, 62, 86%)',
        'custom-red': 'rgba(67, 17, 17, 86%)'
      }
    }
  },
  plugins: []
}
