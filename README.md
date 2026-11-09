# research-website

Personal research website of Kurihara Yuta (栗原 悠太): https://yutakurihara.github.io/research-website/

- Next.js (static export, `output: "export"`, `basePath: /research-website`) + Tailwind CSS 4
- Bilingual (JA/EN) via `lib/locale-context.tsx`; the toggle is in the header
- Content lives in code: profile, tools and publications in `lib/data.ts`, blog index in `app/blog/page.tsx`, each post in `app/blog/<slug>/content.tsx`
- `public/sitemap.xml` lists every page; update it when adding a post or publication
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Development

```bash
npm ci
npm run dev     # http://localhost:3000/research-website
npm run lint
npm run build   # static output in ./out
```
