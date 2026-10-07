import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;
export type Memo = CollectionEntry<"memos">;

// draft: true は開発サーバーでのみ表示する
const isVisible = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft;

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getPosts(): Promise<Post[]> {
  return (await getCollection("blog", isVisible)).sort(byDateDesc);
}

export async function getMemos(): Promise<Memo[]> {
  return (await getCollection("memos", isVisible)).sort(byDateDesc);
}

export async function getAllTags(): Promise<string[]> {
  const [posts, memos] = await Promise.all([getPosts(), getMemos()]);
  const tags = new Set([...posts, ...memos].flatMap((e) => e.data.tags));
  return [...tags].sort((a, b) => a.localeCompare(b, "ja"));
}

// ビルド環境(UTC)に左右されないよう、表示は常にJSTに揃える
const TIME_ZONE = "Asia/Tokyo";

export function formatDate(date: Date): string {
  return date
    .toLocaleDateString("ja-JP", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", ".");
}

export function formatDateTime(date: Date): string {
  const time = date.toLocaleTimeString("ja-JP", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formatDate(date)} ${time}`;
}
