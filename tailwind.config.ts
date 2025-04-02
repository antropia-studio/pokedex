import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        grass: "#B7E5B8",
      },
    },
  },
} satisfies Config;
