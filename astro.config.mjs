import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.SITE || "https://lyuhng.github.io";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
