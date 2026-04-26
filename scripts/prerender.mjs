import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const ROUTES = [
  '/',
  // '/blog',
  // '/blog/the-cost-of-a-migration',
  // '/blog/what-i-learned-from-ipl',
  // '/blog/on-deleting-things',
];

async function prerender() {
  const { render } = await import(path.join(ROOT, 'dist-ssr/entry-server.js'));
  const template = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf-8');

  for (const url of ROUTES) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml);

    const outputDir = url === '/'
      ? path.join(ROOT, 'dist')
      : path.join(ROOT, 'dist', url);

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
    console.log(`✓ prerendered ${url}`);
  }

  // 404 page — Cloudflare Pages serves this for any unmatched route
  const notFoundHtml = render('/404');
  const html404 = template.replace('<!--app-html-->', notFoundHtml);
  fs.writeFileSync(path.join(ROOT, 'dist/404.html'), html404);
  console.log('✓ prerendered 404.html');
}

prerender().catch(err => { console.error(err); process.exit(1); });
