import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO(domain): switch to the chosen vercel.app name once it is added in Vercel
export default defineConfig({
  site: 'https://my-portfolio-sanjay-lagariyas-projects.vercel.app',
  integrations: [mdx(), sitemap()],
});
