# andrei-chereches-site

Personal site for Andrei Petru Cherecheș — Computer Engineering student at the
Technical University of Cluj-Napoca, software engineer at Eforah, co-founder of Dash,
and organiser of student technology events in Cluj-Napoca.

One page, statically rendered, no client-side data fetching.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 — tokens defined in `src/app/globals.css` |
| Icons | `lucide-react` |
| Fonts | Newsreader (display) + Inter (text), self-hosted via `next/font` |
| Client JS | Two small components only: the theme toggle and the mobile menu |

Scroll reveals use the native CSS `animation-timeline: view()` rather than a JavaScript
observer, so they cost nothing and degrade to plain static content where unsupported.
Everything respects `prefers-reduced-motion`.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Editing the content

**All copy lives in [`src/content/site.ts`](src/content/site.ts).** Nothing is hard-coded
into components, so adding a project, changing a job title or fixing a sentence is a
one-file edit. The exports map onto the page in order: `hero`, `affiliations`, `method`,
`featured`, `projects`, `campus`, `philosophy`, `recognition`, `about`, `contact`.

Two values to review before publishing:

- `SITE_URL` — currently `https://andreichereches.com`. It drives the canonical URL,
  Open Graph tags, `sitemap.xml` and `robots.txt`, so set it to the domain you actually
  deploy to.
- `EMAIL` — currently `andrei@eforah.nl`, your work address. Swap it if you would rather
  publish a personal one; it is referenced from the contact section, the footer and the
  structured data.

### Adding a project

Append to the `projects` array. The `Project` type keeps the shape honest:

```ts
{
  title: "Name",
  meta: "Role · Year",
  oneLiner: "One sentence on what it is.",
  body: "Two or three sentences on why it mattered and what you did.",
  result: "1st place · Some competition 2026", // optional
  tags: ["Tag", "Tag"],
}
```

Keep the grid to four cards plus the featured one. Past that the section stops reading
as curation.

## Where the claims come from

`research/andrei-profile-notes.md` records every factual claim on the site with its
source and a confidence level, and lists what was deliberately left off.

That file is **deliberately untracked** — `/research` is in `.gitignore`, so it lives on
the author's machine only. It is working material, not documentation, and it names which
claims rest on personal knowledge rather than a public source. Keep it updated alongside
any content change so the two never drift apart.

## Deploying

**Vercel is the easiest route** — it is the Next.js host, the project needs no
configuration, and the free tier covers a personal site comfortably.

1. Push this directory to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository. Vercel
   detects Next.js on its own; accept the defaults and deploy.
3. Set `SITE_URL` in `src/content/site.ts` to your production domain and push again.
4. Add the domain under **Project → Settings → Domains** and point your registrar at the
   records Vercel shows. HTTPS is issued automatically.

Every push to `main` then redeploys, and pull requests get their own preview URLs.

No environment variables, database or external services are required. The whole site
prerenders to static output, so any host that can serve a Next.js build works —
Netlify, Cloudflare Pages or a container all behave the same.

## Notes

- `src/app/opengraph-image.tsx` renders the link-preview card at build time. Editing the
  hero copy does not update it automatically — it has its own text.
- `src/app/icon.svg` is the favicon.
- Security headers are set in `next.config.ts` and apply on any Node-based host.
