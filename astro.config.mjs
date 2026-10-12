// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import panda from "@pandacss/vite";
const siteUrl = "https://trhr-core.dev";

// サイトマップから除外するパス (noindex のページ)
const SITEMAP_EXCLUDE = new Set(["/thanks", "/404"]);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  // URL は末尾スラッシュなしで統一する。
  // Cloudflare の静的アセット配信は `/blog.html` を `/blog` で返し、
  // `/blog/` を `/blog` にリダイレクトするので、format: "file" と組み合わせる。
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    plugins: [panda()],
    build: {
      rollupOptions: {
        external: ["cloudflare:email"],
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.has(new URL(page).pathname),
    }),
  ],
  session: false,
  adapter: cloudflare(),
});
