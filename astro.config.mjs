// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";

const siteUrl = "https://trhr-core.dev";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  integrations: [sitemap(), db()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: "./wrangler.json",
    },
    imageService: "compile",
    sessionKVBindingName: "TEST",
  }),
});
