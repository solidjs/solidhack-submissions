import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Jetbrains Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#fb923c",
      },
      boxShadow: {
        "inner-lg": "inset 0 0 30px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
      },
    },
  },
});
