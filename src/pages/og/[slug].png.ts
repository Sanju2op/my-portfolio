import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { site } from '../../data/site';

// One social preview card per project, drawn at build time (no binary files to commit).
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(text: string, max: number, maxLines: number) {
  const lines: string[] = [];
  let cur = '';
  for (const word of text.split(' ')) {
    if ((cur + ' ' + word).trim().length > max && cur) { lines.push(cur); cur = word; } else { cur = (cur + ' ' + word).trim(); }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '…'; }
  return lines;
}

export const getStaticPaths = (async () => {
  const all = await getCollection('projects');
  return all.map((p) => ({ params: { slug: p.id }, props: { title: p.data.title, stack: p.data.stack.join(', ') } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const lines = wrap(props.title, 22, 3);
  const size = lines.length > 2 ? 78 : 92;
  const startY = 290 - (lines.length - 1) * size * 0.45;
  const title = lines.map((l, i) => `<text x="110" y="${startY + i * size * 1.08}" font-family="Helvetica, Arial, sans-serif" font-size="${size}" font-weight="800" letter-spacing="-3" fill="#FAF9F5">${esc(l)}</text>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#A94E32"/>
  <rect x="60" y="60" width="1080" height="510" fill="none" stroke="#FAF9F5" stroke-width="6"/>
  <text x="110" y="135" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="#FBEEE6">Project</text>
  ${title}
  ${props.stack ? `<text x="110" y="470" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="#FBEEE6">${esc(props.stack)}</text>` : ''}
  <text x="110" y="535" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="700" fill="#FAF9F5">${esc(site.name)} · Portfolio</text>
</svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
