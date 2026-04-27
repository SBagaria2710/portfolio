# shashwatbagaria.com — portfolio

Personal portfolio and writing space for [Shashwat Bagaria](https://portfolio.shashwatbagaria.com) — Senior Software Engineer at Deel, React & system design specialist, remote from Lucknow, India.

Built with React 19, TypeScript, and Vite 8. Statically generated at build time — no server required.

## Stack

| Layer | Choice |
|---|---|
| UI | React 19 + TypeScript (strict) |
| Bundler | Vite 8 |
| Routing | react-router-dom v7 |
| Rendering | SSG via Vite SSR + prerender script |
| Styles | Vanilla CSS with custom properties |
| Package manager | Yarn (PnP) |
| Hosting | Cloudflare Pages |
| DNS / CDN | Cloudflare |
| Domain | shashwatbagaria.com |

## Project structure

```
src/
  components/
    sections/       # Home page sections (Hero, About, Work, …)
    Footer.tsx
    ScrollToTop.tsx
    Ticker.tsx
    Whisper.tsx     # Keyboard easter egg overlay
  hooks/
    useConsoleEgg.ts
    useScrollReveal.ts
    useTabTitle.ts
  pages/
    posts/          # Individual blog post pages
    Blog.tsx
    Home.tsx
    NotFound.tsx
  data/
    posts.ts        # Post metadata
  App.tsx
  entry-server.tsx  # SSR entry (used only at build time)
  main.tsx          # Client hydration entry
scripts/
  prerender.mjs     # Walks all routes, writes dist/**/index.html
public/
  _headers          # Cloudflare Pages HTTP headers (security + cache)
  robots.txt
  sitemap.xml
  avatar.jpg        # Used for favicon + OG image
```

## Getting started

```bash
yarn install
yarn dev        # localhost:5173, HMR
```

## Build

```bash
yarn build
```

Three-phase pipeline:
1. `vite build` — client bundle → `dist/`
2. `vite build --ssr` — server bundle → `dist-ssr/`
3. `node scripts/prerender.mjs` — writes static HTML for each route

Output in `dist/`:
```
dist/index.html
dist/404.html                         (served by Cloudflare for unknown routes)
dist/blog/index.html
dist/blog/<slug>/index.html           (one per post)
```

Preview the static output locally:

```bash
yarn preview
```

## How SSG works

`entry-server.tsx` exports a `render(url)` function that uses `renderToString` + `StaticRouter`. The prerender script imports this, calls it for every known route, and injects the result into `index.html`'s `<!--app-html-->` placeholder.

`main.tsx` uses `hydrateRoot` instead of `createRoot`, so React attaches event listeners to the existing HTML instead of re-rendering from scratch.

## Performance

- **Code splitting** — blog routes are lazy-loaded via `React.lazy`. Only the home page bundle loads on initial visit.
- **Async fonts** — Google Fonts loaded with `media="print"` trick to avoid render-blocking.
- **Composited animations** — all animations (`roll`, `spin`, `reveal`, `blink`) use only `transform` and `opacity` — no layout-triggering properties.
- **LCP fix** — `useScrollReveal` staggers only in-viewport elements, so the hero heading renders immediately without delay.
- **Edge caching** — versioned assets (`/assets/*`) served with `Cache-Control: immutable` via Cloudflare Pages `_headers`.

## Security headers

Set via `public/_headers` (Cloudflare Pages convention):

- `Strict-Transport-Security` — enforces HTTPS for 1 year across all subdomains
- `Content-Security-Policy` — whitelists scripts, styles, fonts, and image sources
- `X-Frame-Options: DENY` — prevents clickjacking
- `Cross-Origin-Opener-Policy: same-origin` — isolates browsing context

## SEO

- Schema.org `Person` structured data in `index.html`
- `robots.txt` + `sitemap.xml` in `public/`
- Canonical URL, OG tags, and Twitter card meta tags
- Submitted to Google Search Console
