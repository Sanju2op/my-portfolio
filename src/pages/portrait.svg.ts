import type { APIRoute } from 'astro';

// Dummy portrait drawn at build time. Replace with a real photo when one is supplied.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 576" role="img" aria-label="Portrait placeholder">
  <rect width="480" height="576" fill="#FAF9F5"/>
  <circle cx="240" cy="205" r="92" fill="#3A1A10"/>
  <path d="M50 576 C50 430 140 350 240 350 C340 350 430 430 430 576 Z" fill="#A94E32"/>
  <text x="240" y="510" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="-4" fill="#FAF9F5">SL</text>
</svg>`;

export const GET: APIRoute = () => new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
