import type { APIRoute } from "astro";
import { SITE_URL } from "site/config";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("/sitemap-index.xml", site ?? SITE_URL);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapURL.href}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
