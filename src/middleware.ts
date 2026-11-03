import { defineMiddleware } from "astro:middleware";

// URL は末尾スラッシュなしに統一する (trailingSlash: "never")。
// 事前レンダリングしたページは Cloudflare 側で `/blog/` → `/blog` に
// リダイレクトされるが、SSR のルートは Astro が 404 を返してしまうので
// ここで同じ挙動に揃える。
export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    const target = url.pathname.replace(/\/+$/, "") + url.search;
    return redirect(target, 301);
  }

  // 旧URL: /works → /artifacts (2026-11 に改名)
  if (url.pathname === "/works" || url.pathname.startsWith("/works/")) {
    const target = url.pathname.replace(/^\/works/, "/artifacts") + url.search;
    return redirect(target, 301);
  }

  return next();
});
