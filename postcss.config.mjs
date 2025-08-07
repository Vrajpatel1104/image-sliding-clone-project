import { px } from "motion";

const config = {
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
        md: '8px',
      }
    }
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
