
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100: "rgb(248 113 113 / var(--tw-text-opacity))",
        },
      },
    },
  },
  plugins: [],
}
