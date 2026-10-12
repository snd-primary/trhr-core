// build.format: "file" で事前レンダリングすると、Astro.url.pathname が
// "/blog.html" や "/index.html" になる。公開URL (末尾スラッシュなし) に正規化する。
export function toPublicPath(pathname: string): string {
  const path = pathname
    .replace(/\/index\.html$/, "/")
    .replace(/\.html$/, "")
    .replace(/\/+$/, "");
  return path || "/";
}
