const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
 theme: {
        extend: {
          animation: {
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
        },
           keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(18deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(18deg)' },
          '40%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      
      
          'gradient-y': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'center top'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'center center'
              }
          },
          'gradient-x': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'gradient-xy': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          }
      
        
      },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow,
                stone: colors.warmGray,
                sky: colors.lightBlue,
                neutral: colors.trueGray,
                gray: colors.coolGray,
                slate: colors.blueGray,
                lime: colors.lime,
                rose: colors.rose,
                amber: colors.amber,
                paleblue: "#ECF8F9",
                richblue: "#068DA9",
                darkblue: "#023047",
                chedder: "#FFB703",
                tangerine: "#f9bc60",
                darkgray: "#2a2a2c",
                darkergray: "#1c1b1b",

 yale_blue: { DEFAULT: '#0d3b66', 100: '#030c15', 200: '#05182a', 300: '#08243e', 400: '#0b3053', 500: '#0d3b66', 600: '#1764ad', 700: '#2e8ce4', 800: '#74b2ed', 900: '#b9d9f6' },
 lemon_chiffon: { DEFAULT: '#faf0ca', 100: '#534408', 200: '#a6880f', 300: '#ebc326', 400: '#f3da79', 500: '#faf0ca', 600: '#fbf4d6', 700: '#fcf7e0', 800: '#fdf9ea', 900: '#fefcf5' },
 naples_yellow: { DEFAULT: '#f4d35e', 100: '#3f3204', 200: '#7e6509', 300: '#bd970d', 400: '#efc21e', 500: '#f4d35e', 600: '#f6dc7d', 700: '#f8e59e', 800: '#faedbe', 900: '#fdf6df' },
 sandy_brown: { DEFAULT: '#ee964b', 100: '#391d05', 200: '#723b0b', 300: '#ab5810', 400: '#e47615', 500: '#ee964b', 600: '#f1ab6d', 700: '#f5c092', 800: '#f8d5b6', 900: '#fceadb' },
 tomato: { DEFAULT: '#f95738', 100: '#3b0b02', 200: '#771704', 300: '#b22206', 400: '#ed2e07', 500: '#f95738', 600: '#fa7a61', 700: '#fb9b88', 800: '#fdbdb0', 900: '#feded7' },
 cadet_gray: { DEFAULT: '#7b9ea8', 100: '#172123', 200: '#2e4146', 300: '#45626a', 400: '#5c828d', 500: '#7b9ea8', 600: '#95b2ba', 700: '#afc5cb', 800: '#cad8dc', 900: '#e4ecee' },
 sea_green: { DEFAULT: '#07beb8', 100: '#012625', 200: '#034d4a', 300: '#04736f', 400: '#069a95', 500: '#07beb8', 600: '#0ff6ef', 700: '#4bf8f3', 800: '#87fbf7', 900: '#c3fdfb' },

        browny: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#7c2181",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b"
        },
                "th-background": "var(--background)",
                "th-background-secondary": "var(--background-secondary)",
                "th-foreground": "var(--foreground)",
                "th-primary-dark": "var(--primary-dark)",
                "th-primary-medium": "var(--primary-medium)",
                "th-primary-light": "var(--primary-light)",
                "th-accent-dark": "var(--accent-dark)",
                "th-accent-medium": "var(--accent-medium)",
                "th-accent-light": "var(--accent-light)"
            },
        },
    },
  variants: {
    extend: {},
  },
  plugins: [],
};

