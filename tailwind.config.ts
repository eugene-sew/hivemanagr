import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", ...fontFamily.sans],
        oswald: ["'Oswald'", ...fontFamily.sans],
      },
      borderRadius: {

      },
      colors: {
        oha__green: '#1b9d3c',
        oha__yellow: '#F09443'

      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;