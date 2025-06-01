// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://binarybrains-upiicsa.github.io",
  base: "Hacktion",
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
