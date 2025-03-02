import { plugins } from "#tailwind-config";
import colors from "tailwindcss/colors";

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
