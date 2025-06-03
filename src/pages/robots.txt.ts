import type { APIRoute } from "astro";
import { SITE_URL } from "site/config";

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
    console.warn(
      "Astro.site is not configured in astro.config.mjs. Sitemap URL in robots.txt will be relative or use a default. Please set the `site` property for production.",
    );
    sitemapURL = new URL(`/sitemap-index.xml", ${SITE_URL}`);
  }

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
