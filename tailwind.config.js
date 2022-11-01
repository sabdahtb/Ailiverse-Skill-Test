/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        greenMSU: '#124340',
        darkCyan: '#0F9488',
        diamond: '#C4FFFA',
        morningGray: '#8D999A',
        yellowAmber: '#FFC000',
        darkJungleGreen: '#0D2728',
        grenMSU40: 'rgba(255, 255, 255, 0.2)',
        grenMSU20: 'rgba(255, 255, 255, 0.1)',
        diamond40: 'rgba(196, 255, 250, 0.2)',
      },
      backgroundImage: {
        introcard: 'url(/src/assets/twotone.svg)',
      },
    },
  },
  plugins: [],
}
