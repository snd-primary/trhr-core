import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) =>
  `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  let sitemapURL: URL;
  if (site) {
    sitemapURL = new URL("sitemap-index.xml", site);
  } else {
    // Astro.siteが未設定の場合のフォールバック。ビルド時やローカル開発で警告が出る可能性があります。
    // astro.config.mjs で site プロパティを設定することを強く推奨します。
    console.warn(
      "Astro.site is not configured in astro.config.mjs. Sitemap URL in robots.txt will be relative or use a default. Please set the `site` property for production.",
    );
    sitemapURL = new URL("/sitemap-index.xml", "http://localhost"); // ローカル開発用の仮のベースURL
  }

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
