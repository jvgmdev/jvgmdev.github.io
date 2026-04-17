import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string(),
    category: z.string(),
    excerpt: z.string(),
    placeholder: z.boolean().optional(),
  }),
});

export const collections = { notes };
