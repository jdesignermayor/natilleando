module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#1F6E43',
        primaryLight: '#EDFFF8',
        purple: '#F3E9FF',
        orange: '#FFF0F0',
        blueLight: '#EBFBFF',
        pink: '#FFEAF8',
        money: '#D3F0E0',
      },
      fontFamily: {
        'sans': ['Recoleta', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
