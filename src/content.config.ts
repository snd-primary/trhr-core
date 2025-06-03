import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: ({ image }) =>
    z.object(
      {
        title: z.string(),
        description: z.string(),
        image: image(), // For the thumbnail
        date: z.date(),
        tags: z.array(z.string()), // For genre
      },
      rssSchema,
    ),
});

export const collections = {
  works,
};
