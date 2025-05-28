import { defineCollection, z } from "astro:content";

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
      // 'body' is not part of the schema, as it refers to the main content of the entry
    }),
});

export const collections = {
  works,
};
