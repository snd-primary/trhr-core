// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const siteUrl = "https://trhr-core.dev";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  integrations: [sitemap()],
  adapter: cloudflare(),
});