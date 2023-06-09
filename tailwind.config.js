/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        prata: ['Prata', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'orange': 'hsla(30, 75%, 41%, 1)',
        'textColor': 'hsla(0, 0%, 12%, 1)',
        'textLight': 'hsla(30, 100%, 98%, 1)',
        'gray': 'hsla(180, 6%, 20%, 1)',
        'lightGreen': 'hsla(160, 5%, 44%, 1)',
        'darkModeBg': 'hsla(30, 18%, 7%, 1)',
        'navbarDark': 'hsla(30, 26%, 8%, 1)',
        'darkRed': 'hsla(0, 0%, 15%, 1)',
      },
      letterSpacing: {
        wider: '0.055em',
      }
    },
  },
  plugins: [],
}
