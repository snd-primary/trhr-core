import rss from "@astrojs/rss";
import { getMemos, getPosts, formatDateTime } from "src/lib/content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../site/config";

export async function GET(context) {
  const [posts, memos] = await Promise.all([getPosts(), getMemos()]);
  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
      categories: post.data.tags,
    })),
    ...memos.map((memo) => ({
      title: memo.data.title ?? `Memo ${formatDateTime(memo.data.date)}`,
      description: memo.body,
      pubDate: memo.data.date,
      link: `/memos/${memo.id}`,
      categories: ["memo", ...memo.data.tags],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
    customData: `<language>ja-jp</language>`,
  });
}
