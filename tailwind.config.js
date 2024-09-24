/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geistMedium: ["Geist-Medium)"],
        geistBold: ["Geist-Bold)"],
        geistLight: ["Geist-Light)"],
        manropeBold: ["Manrope-Bold"]
      },
      letterSpacing: {
        titulo: '-0.085em',
        texto: '-0.03em',
        explorar: '0.3em'
      }
    },
  },
  plugins: [],
}
