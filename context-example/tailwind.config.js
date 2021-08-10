module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: " 0.4fr 0.1fr 0.1fr 0.2fr 0.2fr"
      },
      gridTemplateColumns: {
        layout: " 1fr 1fr"
      },
      height: {
        "screen-80": "80vh",
        "screen-50": "50vh",
        "screen-33": "calc(100vh / 3)",
        "screen-25": "calc(100vh / 4)",
        "screen-20": "calc(100vh / 5)"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
