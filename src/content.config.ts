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

export const collections = {
  works,
};
