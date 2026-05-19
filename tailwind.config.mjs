/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#202733",
        muted: "#5f6978",
        line: "#e4e8ee",
        accent: "#0f6f91",
        "accent-dark": "#084f68",
        paper: "#fbfcfd"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(20, 32, 48, 0.06)"
      }
    }
  },
  plugins: []
};
