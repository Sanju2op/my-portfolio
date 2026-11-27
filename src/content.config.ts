import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    role: z.string().optional(),
    year: z.number().optional(),
    links: z.object({ code: z.string().url().optional(), live: z.string().url().optional(), docs: z.string().url().optional() }).default({}),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Which generated cover to draw until a real screenshot is set in `cover`
    mock: z.enum(['cards', 'list', 'grid', 'player', 'blocks']).default('blocks'),
    // A real screenshot in src/assets/shots/, e.g. cover: ../../assets/shots/testimonials.png. Resized and converted to WebP at build time. Overrides the generated cover. See Docs/SCREENSHOTS.md.
    cover: image().optional(),
    // dummy: true = placeholder text still to be replaced. Not shown on the page; tracked in Docs/NEEDS.md.
    dummy: z.boolean().default(false),
  }),
});

export const collections = { projects };
