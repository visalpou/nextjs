const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./Layout/**/*.{js,ts,jsx,tsx}','./component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'Battambang',
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        ...defaultTheme.fontFamily.sans],
      mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    colors: {
      text: "var(--color-text)",
      button: "var(--color-button-text)",
      transparent: "transparent",
      translucent: "var(--color-primary-100-translucent)",
      primary: {
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)", 
        300: "var(--color-primary-300)", 
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        DEFAULT: "var(--color-secondary)",
        "washed-out": "var(--color-secondary-washed-out)",
      },
      white:"#fff",
      black:"#000",
      blue:"#1c7fe9",
      green:"rgba(52, 211, 153,1)",
      red:"#d24848",
      //test
      pink: {
        900:"rgba(131, 24, 67,1)"
      },
      purple: {
        900: "rgba(76, 29, 149,1)"
      },
      //endtest
      accent: {
        DEFAULT: "var(--color-accent)",
        hover: "var(--color-accent-hover)",
        disabled: "var(--color-accent-disabled)",
      },
    },
    boxShadow: {
      outlineLg: "0 0 0 4pt var(--color-primary-800)",
      outlineMd: "0 0 0 2pt var(--color-primary-800)",
      outlineSm: "0 0 0 1pt var(--color-primary-800)",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      4: "4px",
      2: "2px",
    },
    spacing: {
      0: "0px",
      1: "5px",
      1.5: "6px",
      2: "10px",
      3: "15px",
      4: "20px",
      4.5: "25px",
      5: "30px",
      5.5: "35px",
      6: "40px",
      6.5: "50px",
      7: "60px",
      7.5: "65px",
      8: "75px",
      9: "80px",
      10: "90px",
      11: "100px",
      15: "150px",
      "5l": "10rem",
      "n1/2": "-50%",
      24: "24rem",
      400: "400px",
    },

    boxShadow: {
      outlineLg: "0 0 0 4pt var(--color-primary-800)",
      outlineMd: "0 0 0 2pt var(--color-primary-800)",
      outlineSm: "0 0 0 1pt var(--color-primary-800)",
    },
    extend: {
      borderRadius: {
        5: "5px",
        8: "8px",
        20: "20px",
        40: "40px",
      },
      borderColor: {
        "color-800": "var(--color-primary-800)",
      },
      outline: {
        "no-chrome": "none",
      },
      transitionTimingFunction: {
        "in-out-hard": "cubic-bezier(.77, 0, .175, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        breathe: {
          "0%, 100%": {
            boxShadow: "0 0 20px 2px var(--color-primary-100-translucent)",
            borderColor: "var(--color-primary-300)",
          },
          "50%": {
            boxShadow: "0 0 20px 2px transparent",
            borderColor: "var(--color-primary-700)",
          },
        },
      },
      animation: {
        "breathe-slow": "breathe 5s infinite ease-in-out",
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
    scrollbar: ["rounded", "dark"],
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp")
  ],
}
