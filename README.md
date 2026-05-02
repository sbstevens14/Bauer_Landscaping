# Bauer Landscaping Services

Single-page marketing site for Bauer Landscaping Services (Wildwood, MO). Built with Next.js + Tailwind CSS, exported as a static site, hosted on GitHub Pages.

**Live URL (after first deploy):** https://sbstevens14.github.io/Bauer_Landscaping/

---

## Local development

```bash
npm install     # first time only
npm run dev
```

Open http://localhost:3000.

In dev mode `basePath` is empty, so URLs are `/`. In production it's `/Bauer_Landscaping`. Both work.

## Production build

```bash
npm run build       # writes the static site to ./out/
npx serve out       # preview locally on http://localhost:3000
```

## Deploy (one-time setup)

1. **Create the GitHub repo** (only the local repo exists right now):
   - Go to https://github.com/new
   - Owner: `sbstevens14`, name: **`Bauer_Landscaping`** (case must match exactly), public, don't initialize with anything
   - Click Create repository
2. **Push from this folder**:
   ```bash
   git remote add origin https://github.com/sbstevens14/Bauer_Landscaping.git
   git add .
   git commit -m "Initial site"
   git branch -M main
   git push -u origin main
   ```
3. **Enable Pages**:
   - Repo → **Settings → Pages**
   - Under **Source**, pick **GitHub Actions**
4. The workflow at `.github/workflows/deploy.yml` will run on every push to `main` and publish `./out/` to Pages. First deploy takes ~2 minutes; site appears at the URL above.

## Editing content

Most copy lives in one file: [`src/lib/site.ts`](src/lib/site.ts) — phone number, tagline, hero text, services. Change it once, the whole site updates.

| Update | File |
| --- | --- |
| Phone, address, tagline, hero copy | `src/lib/site.ts` |
| Service list (titles + descriptions) | `src/lib/site.ts` |
| Header / nav | `src/components/Header.tsx` |
| Hero section | `src/components/Hero.tsx` |
| Services cards | `src/components/Services.tsx` |
| Photo gallery | `src/components/Gallery.tsx` |
| About blurb | `src/components/About.tsx` |
| Footer (phone, FB link) | `src/components/Footer.tsx` |
| Page metadata / SEO | `src/app/layout.tsx` |
| Color palette | `src/app/globals.css` (search for `--brand-` / `--earth-`) |

### Replacing photos

Drop new files into `public/images/` with the existing names (`hero.jpg`, `work-01.jpg`, `work-02.jpg`, `work-03.jpg`, `logo.jpg`). They'll be picked up automatically. Recommended sizes:

- `hero.jpg` — 1600×900 or 1920×1080, landscape
- `work-XX.jpg` — 4:3 ratio, ~1200×900
- `logo.jpg` — square, 500×500+

## Project layout

```
src/
├── app/
│   ├── layout.tsx        # root layout, metadata, fonts
│   ├── page.tsx          # composes the homepage from components
│   ├── globals.css       # Tailwind theme + color tokens
│   └── favicon.ico
├── components/           # one file per page section
└── lib/
    ├── site.ts           # business info + services list
    └── asset.ts          # prepends /Bauer_Landscaping to image URLs in prod

public/
├── .nojekyll             # required for GitHub Pages to serve _next/ assets
└── images/               # all photos and logo
```

## Important notes for future edits

- **basePath gotcha**: GitHub Pages serves the site at `/Bauer_Landscaping/`, not `/`. The `next.config.ts` sets `basePath` for production. **Anytime you reference an image in `<Image src=...>` or any other element**, wrap it with `asset(...)` from `@/lib/asset` so the prefix is applied. `next/link` hrefs get the prefix automatically.
- **Static export only**: this site has no server. No API routes, no `getServerSideProps`, no server actions. If you need a contact form later, use Formspree or similar.
- **Renaming the repo** breaks deployment. The basePath is hard-coded as `/Bauer_Landscaping` in `next.config.ts` and `src/lib/asset.ts` — update both if you ever rename.
- **Custom domain later**: when you point a domain at this Pages site, set `basePath` and `assetPrefix` to `""` in `next.config.ts` and remove the `Bauer_Landscaping` reference in `src/lib/asset.ts`.
