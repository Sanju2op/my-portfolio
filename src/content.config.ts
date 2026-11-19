import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    role: z.string().optional(),
    year: z.number().optional(),
    links: z.object({ code: z.string().url().optional(), live: z.string().url().optional(), docs: z.string().url().optional() }).default({}),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    todo: z.boolean().default(false),
  }),
});

export const collections = { projects };
