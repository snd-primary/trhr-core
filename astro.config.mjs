// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import panda from "@pandacss/vite";
const siteUrl = "https://trhr-core.dev";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  vite: {
    plugins: [panda()],
    build: {
      rollupOptions: {
        external: ["cloudflare:email"],
      },
    },
  },
  integrations: [sitemap()],
  session: false,
  adapter: cloudflare(),
});
