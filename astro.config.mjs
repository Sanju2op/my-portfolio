import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Primary domain. Set in Vercel: Project, Settings, Domains.
export default defineConfig({
  site: 'https://sanjaylagariya.vercel.app',
  integrations: [mdx(), sitemap()],
});
