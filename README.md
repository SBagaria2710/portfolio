# shashwat.dev — portfolio

Personal portfolio and writing space. Built with React 19, TypeScript, and Vite 8. Statically generated at build time — no server required.

## Stack

| Layer | Choice |
|---|---|
| UI | React 19 + TypeScript (strict) |
| Bundler | Vite 8 |
| Routing | react-router-dom v7 |
| Rendering | SSG via Vite SSR + prerender script |
| Styles | Vanilla CSS with custom properties |
| Package manager | Yarn (PnP) |

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
  prerender.mjs     # Walks all routes, writes dist/**\/index.html
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
dist/blog/index.html
dist/blog/<slug>/index.html   (one per post)
```

Preview the static output locally:

```bash
yarn preview
```

## How SSG works

`entry-server.tsx` exports a `render(url)` function that uses `renderToString` + `StaticRouter`. The prerender script imports this, calls it for every known route, and injects the result into `index.html`'s `<!--app-html-->` placeholder.

`main.tsx` uses `hydrateRoot` instead of `createRoot`, so React attaches event listeners to the existing HTML instead of re-rendering from scratch.