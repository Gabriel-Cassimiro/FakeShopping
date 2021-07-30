module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateAreas: {
      layout: [
        "image content1", 
        "image content2", 
        "image content3", 
        "image content4",
        "image button",
      ]
    },
    extend: {
      gridTemplateRows: {
        layout: " 1fr 0.5fr 0.2fr 2.5fr 0.2fr"
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
    extend: {}
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")]
}
