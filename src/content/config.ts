import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content', // 'content' for Markdown/MDX files, 'data' for JSON/YAML
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // For the thumbnail
    date: z.date(),
    tags: z.array(z.string()), // For genre
    // 'body' is not part of the schema, as it refers to the main content of the entry
  }),
});

export const collections = {
  'works': worksCollection,
};
