// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import panda from "@pandacss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import { codeDemoPlugin } from "./src/util/codeDemoPlugin";
const siteUrl = "https://trhr-core.dev";

// サイトマップから除外するパス (noindex のページ)
const SITEMAP_EXCLUDE = new Set(["/404"]);

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
  markdown: {
    processor: satteri({ mdastPlugins: [codeDemoPlugin] }),
  },
  vite: {
    plugins: [panda()],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.has(new URL(page).pathname),
    }),
  ],
  session: false,
  adapter: cloudflare(),
});
