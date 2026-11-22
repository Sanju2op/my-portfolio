import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

// Dummy cover art drawn at build time. Replaced per project by a real screenshot (`cover` in the MDX).
const C = { paper: '#FAF9F5', bar: '#EADFD6', line: '#D9C9BC', ink: '#3A1A10', clay: '#A94E32', gold: '#E0A458', sage: '#7A9B76', slate: '#5B7C99', white: '#FFFFFF' };
const r = (x: number, y: number, w: number, h: number, f: string, rx = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"/>`;
const ln = (x: number, y: number, w: number, f = C.line) => r(x, y, w, 8, f, 4);
const dot = (x: number, y: number, rad: number, f: string) => `<circle cx="${x}" cy="${y}" r="${rad}" fill="${f}"/>`;
const tone = [C.clay, C.gold, C.sage, C.slate];

const mocks: Record<string, () => string> = {
  cards: () => [0, 1, 2].flatMap((c) => [0, 1].map((w) => {
    const x = 40 + c * 250, y = 80 + w * 200;
    return r(x, y, 230, 180, C.white, 12) + `<rect x="${x}" y="${y}" width="230" height="180" rx="12" fill="none" stroke="${C.line}" stroke-width="2"/>`
      + dot(x + 34, y + 38, 18, tone[(c + w) % 4]) + ln(x + 64, y + 30, 90, C.ink) + ln(x + 64, y + 46, 60)
      + ln(x + 24, y + 84, 180) + ln(x + 24, y + 104, 160) + ln(x + 24, y + 124, 120)
      + [0, 1, 2, 3, 4].map((s) => r(x + 24 + s * 22, y + 148, 16, 16, C.gold, 4)).join('');
  })).join(''),
  list: () => r(40, 70, 720, 40, C.white, 20) + ln(64, 86, 200) + r(660, 76, 84, 28, C.clay, 14)
    + [0, 1, 2, 3].map((i) => {
      const y = 130 + i * 88;
      return r(40, y, 720, 74, C.white, 10) + `<rect x="40" y="${y}" width="720" height="74" rx="10" fill="none" stroke="${C.line}" stroke-width="2"/>`
        + ln(64, y + 16, 240, C.ink) + ln(64, y + 36, 520) + r(64, y + 52, 58, 12, tone[i % 4], 6) + r(130, y + 52, 58, 12, C.bar, 6) + r(660, y + 22, 76, 30, C.bar, 15);
    }).join(''),
  grid: () => [0, 1, 2, 3].flatMap((c) => [0, 1].map((w) => {
    const x = 40 + c * 180, y = 76 + w * 205;
    const keys = [0, 1, 2].flatMap((kr) => [0, 1, 2, 3, 4, 5].map((kc) => r(x + 12 + kc * 23, y + 22 + kr * 26, 19, 21, kr === 0 && kc === 0 ? tone[(c + w) % 4] : C.white, 4))).join('');
    return r(x, y, 160, 190, C.white, 10) + `<rect x="${x}" y="${y}" width="160" height="190" rx="10" fill="none" stroke="${C.line}" stroke-width="2"/>`
      + r(x + 6, y + 8, 148, 100, C.bar, 8) + keys + ln(x + 12, y + 128, 110, C.ink) + ln(x + 12, y + 146, 70) + r(x + 12, y + 162, 60, 16, C.clay, 8);
  })).join(''),
  player: () => r(60, 80, 260, 260, C.clay, 14) + dot(190, 210, 70, C.gold) + dot(190, 210, 18, C.clay)
    + [0, 1, 2, 3, 4, 5].map((i) => dot(360, 100 + i * 42, 6, i === 1 ? C.clay : C.line) + ln(380, 96 + i * 42, i === 1 ? 260 : 200 + (i % 3) * 30, i === 1 ? C.ink : C.line)).join('')
    + r(60, 400, 680, 8, C.line, 4) + r(60, 400, 280, 8, C.clay, 4) + dot(340, 404, 10, C.clay)
    + dot(370, 450, 14, C.ink) + dot(410, 450, 20, C.clay) + dot(450, 450, 14, C.ink),
  blocks: () => r(40, 70, 720, 160, C.clay, 12) + ln(70, 110, 300, C.paper) + ln(70, 134, 220, C.bar) + r(70, 170, 110, 32, C.paper, 16)
    + [0, 1, 2].map((i) => r(40 + i * 245, 250, 230, 120, C.bar, 10) + dot(70 + i * 245, 282, 14, tone[i]) + ln(60 + i * 245, 316, 150, C.ink) + ln(60 + i * 245, 336, 110)).join('')
    + r(40, 392, 720, 64, C.ink, 10) + ln(70, 420, 180, C.bar),
};

export const getStaticPaths = (async () => {
  const all = await getCollection('projects');
  return all.map((p) => ({ params: { slug: p.id }, props: { mock: p.data.mock } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const body = (mocks[props.mock] ?? mocks.blocks)();
  const bar = r(0, 0, 800, 44, C.bar, 0) + [0, 1, 2].map((i) => dot(24 + i * 18, 22, 5, [C.clay, C.gold, C.sage][i])).join('') + r(120, 12, 400, 20, C.paper, 10);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="Illustration of the project screen">${r(0, 0, 800, 500, C.paper, 0)}${bar}${body}</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
