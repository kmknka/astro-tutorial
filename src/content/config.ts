// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      author: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};

