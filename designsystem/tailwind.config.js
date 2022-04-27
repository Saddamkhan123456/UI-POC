const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');
const tinyColor = require("tinycolor2");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== "undefined") {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
const tColors = {
  neutralLighter90: "#17181a",
  neutralLighter70: "#0e2330",
  neutralLighter60: "#667580",
  neutralLighter40: "#8FA5B3",
  neutralLighter30: "#B8C4CC",
  neutralLighter20: "#CFDCE6",
  neutralLighter10: "#F2FAFF",
  neutralLighter0: "#FFFFFF",
  neutralDarker70: "#282E33",
  primaryBrand: "#48AFF0",
  primaryFlexBlue70: "#005589 ",
  primaryFlexBlue60: "#007ECC",
  supportGreen: "#88CD43",
  supportBlue: "#5169F2",
  supportYellow: "#F7BF16",
  supportRed: "#FF4935",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "720px",
      lg: "960px",
      xl: "1552px",
    },
    boxShadow: {
      input: "0 0px 8px 0 rgba(72, 175, 240, 0.2)",
      default: "0 4px 8px 0 rgba(16, 22, 26, 0.2)",
    },
    extend: {
      spacing: {
        10: "0.625rem",
        24: "1.5rem",
        38: "2.375rem",
        128: "32rem",
        240: "15rem",
      },
      zIndex: {
        '1': '1',
        75: "4.68rem",
      },
      outline: {
        default: '1px solid rgba(72, 175, 240, 1)', //primary color for input outline.
      },
      lineHeight: {
        18: "1.125rem",
      },
      dropShadow: ["hover", "focus"],
      colors: {
        theme: {
          neutralLighter90: tColors.neutralLighter90,
          neutralLighter70: tColors.neutralLighter70,
          neutralLighter60: tColors.neutralLighter60,
          neutralLighter40: tColors.neutralLighter40,
          neutralLighter30: tColors.neutralLighter30,
          neutralLighter20: tColors.neutralLighter20,
          neutralLighter10: tColors.neutralLighter10,
          neutralLighter0: tColors.neutralLighter0,

          neutralDarker70: tColors.neutralDarker70,

          primary: tColors.primaryBrand,
          secondary: tColors.primaryFlexBlue70,
          danger: tColors.supportRed,
          success: tColors.supportGreen,
          warning:tColors.supportYellow,
          info: tColors.supportBlue,
          white: tColors.neutralLighter0,
          dark:tColors.neutralLighter90,

          hover: tColors.neutralLighter10,
          btnHover: tinyColor(tColors.primaryBrand).darken(20).toString(),
          disabled: tColors.neutralLighter20,
          clicked: tinyColor(tColors.primaryBrand).darken(30).toString(),
        },
      },
      fontFamily: {
        sans: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["active", "disabled"],
      textDecoration: ["active"],
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const range = {
        '.range-select': {
          backgroundColor: 'red',
          '-webkit-appearance': 'none',
          '&::-webkit-slider-thumb': {
            '-webkit-appearance': 'none',
            appearance: 'none',
            backgroundColor: tColors.primaryBrand,
            width: '1.25rem',
            height: '1.25rem',
            outline: 'none',
            cursor: 'pointer',
          },
        },
      }

      addUtilities(range, ['responsive', 'hover'])
    })
  ],
};
