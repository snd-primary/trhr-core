import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const works = await getCollection("works");
  return rss({
    title: "TRHR Portphorio",
    description: "フロントエンドエンジニア TRHR のポートフォリオサイト",
    site: context.site,
    items: works.map((work) => ({
      title: work.data.title,
      description: work.data.description,
      date: work.data.date,
      link: `/works/${work.id}`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}
