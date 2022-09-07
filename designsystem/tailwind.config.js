const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
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
  neutral: "#18191A",
  neutral100: "#fefefe",
  primaryBrand: "#4DACB4",
  primaryFlexBlue70: "#005589",
  primaryFlexBlue60: "#007ECC",
  supportGreen: "#88CD43",
  supportBlue: "#4072F6",
  supportYellow: "#F7BF16",
  supportRed: "#FF4935",
  neutralGray: "#515151",
  neutralGrayLight: "#F1F2F2",
  neutralGray300: "#BCBFC1",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "720px",
      lg: "1366px",
      xl: "1552px",
    },
    boxShadow: {
      input: "0 0px 8px 0 rgba(72, 175, 240, 0.2)",
      default: "0 4px 8px 0 rgba(16, 22, 26, 0.2)",
    },
    extend: {
      inset: {
        "1.2": "1.2rem",
      },
      spacing: {
        24: "1.5rem",
        38: "2.375rem",
        128: "32rem",
        240: "15rem",
      },
      zIndex: {
        "1": "1",
        75: "4.68rem",
      },
      outline: {
        default: "1px solid rgba(72, 175, 240, 1)", //primary color for input outline.
      },
      lineHeight: {
        18: "1.125rem",
      },
      dropShadow: ["hover", "focus"],
      colors: {
        theme: {
          neutral: tColors.neutral,

          // darkness goes from higher number to lower
          // eg. neutral10 is darker and neutral80 tends towards white
          neutral10: tinyColor(tColors.neutral)
            .lighten(10)
            .toString(),
          neutral15: tinyColor(tColors.neutral)
            .lighten(15)
            .toString(),
          neutral20: tinyColor(tColors.neutral)
            .lighten(20)
            .toString(),
          neutral25: tinyColor(tColors.neutral)
            .lighten(25)
            .toString(),
          neutral35: tinyColor(tColors.neutral)
            .lighten(35)
            .toString(),
          neutral45: tinyColor(tColors.neutral)
            .lighten(45)
            .toString(),
          neutral50: tinyColor(tColors.neutral)
            .lighten(50)
            .toString(),
          neutral55: tinyColor(tColors.neutral)
            .lighten(55)
            .toString(),
          neutral60: tinyColor(tColors.neutral)
            .lighten(60)
            .toString(),
          neutral65: tinyColor(tColors.neutral)
            .lighten(65)
            .toString(),
          neutral70: tinyColor(tColors.neutral)
            .lighten(70)
            .toString(),
          neutral75: tinyColor(tColors.neutral)
            .lighten(75)
            .toString(),
          neutral80: tinyColor(tColors.neutral)
            .lighten(80)
            .toString(),
          neutral85: tinyColor(tColors.neutral)
            .lighten(85)
            .toString(),

          neutralDarker70: tColors.neutralDarker70,

          primary: tColors.primaryBrand,
          secondary: tColors.primaryFlexBlue70,
          danger: tColors.supportRed,
          success: tColors.supportGreen,
          warning: tColors.supportYellow,
          info: tColors.supportBlue,
          white: tColors.neutral100,
          dark: tColors.neutral,
          neutralGray: tColors.neutralGray,
          neutralGrayLight: tColors.neutralGrayLight,
          neutralGray300: tColors.neutralGray300,
          

          hover: tColors.neutralLighter10,
          btnHover: tinyColor(tColors.primaryBrand)
            .darken(15)
            .toString(),
          disabled: tinyColor(tColors.neutral)
            .lighten(80)
            .toString(),
          clicked: tinyColor(tColors.primaryBrand)
            .darken(25)
            .toString(),
        },
      },
      fontFamily: {
        sans: "'Roboto', sans-serif",
      },
      important: true,
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
    plugin(function({ addBase, addUtilities, theme }) {
      const range = {
        ".range-select": {
          backgroundColor: tColors.neutralLighter40,
          "-webkit-appearance": "none",
          "&::-webkit-slider-thumb": {
            "-webkit-appearance": "none",
            appearance: "none",
            backgroundColor: tColors.primaryBrand,
            width: "16px",
            height: "16px",
            outline: "none",
            cursor: "pointer",
            borderRadius: "50%",
            "&:hover": {
              "-webkit-transform": "scale(1.5)",
              transform: "scale(1.5)",
            },
            "&:active": {
              "box-shadow": "0px 4px 8px #00000029",
            },
            "&:selected": {
              background: "#4DACB4 0% 0% no-repeat padding-box",
              opacity: "0.15",
            },
          },
        },
      };

      addUtilities(range, ["responsive", "hover"]);

      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
        },
        small: { fontSize: theme("fontSize.sm") },
      });
    }),
  ],
};
