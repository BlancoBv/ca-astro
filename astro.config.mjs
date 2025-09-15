// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

import "dotenv/config";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  server: { host: true },
  site: "https://computodistribuido.org",

  security: {
    checkOrigin: true,
  },

  integrations: [vue({ appEntrypoint: "/src/pages/_app" })],

  vite: {
    plugins: [tailwindcss()],
  },
});
