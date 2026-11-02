import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(), // For the thumbnail
      date: z.date(),
      tags: z.array(z.string()), // For genre
    }),
});

// 通常のブログ記事: src/data/blog/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// 短い公開メモ: src/data/memos/<yyyy-mm-dd-hhmm>.md
// タイトルは任意。本文だけでも投稿できる。
const memos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/memos" }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  works,
  blog,
  memos,
};
