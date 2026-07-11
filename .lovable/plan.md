## Before I touch code — two hard blockers you should know about

You picked "cheap shared/static host (cPanel, Namecheap static, etc.)". I can convert the site, but there are two things a static host **cannot** do for this project as it stands today, and I don't want to break your site silently.

### Blocker 1: All your images are on Lovable's CDN

Every image on the site (logo, all 14 service photos) is stored as a `.asset.json` pointer that resolves to a URL like `/__l5e/assets-v1/{id}/Massage.jpeg`. That path is served by **Lovable's infrastructure**, not by your static export. If you upload the `dist/` folder to cPanel, every image will 404.

To move to a static host I have to either:
- **(a)** Download each asset from the Lovable CDN, put the binaries back into `public/`, and rewrite every import to point at `/images/...`. Site becomes fully self-contained. Recommended.
- **(b)** Keep pointing at the Lovable CDN URLs using absolute `https://...lovable.app/__l5e/...` links. Works, but your "cheap host" is then still dependent on Lovable serving your images forever.

### Blocker 2: SSR features have to go

TanStack Start renders on a server. A static host serves files only. I'll need to:
- Switch the build to **prerender all pages to static HTML** (SPA + prerendered routes)
- Replace `src/routes/sitemap[.]xml.ts` (currently a server handler) with a **build-time generated `public/sitemap.xml`**
- Remove `src/server.ts` / `src/start.ts` server error middleware (dead code on static)
- Ensure the host is configured with a SPA fallback (`.htaccess` rewrite to `index.html`) so deep links like `/skin` don't 404 on refresh

### Blocker 3 (honest): This is not the cheapest or fastest path

Just so you have the full picture:
- **Publishing on Lovable + pointing your domain's nameservers** is free with your project, runs on Cloudflare's edge (faster than any $3/mo cPanel host in Kenya or anywhere), and needs zero code changes.
- A cPanel/shared host in most cases will be **slower** than Lovable's default Cloudflare edge, not faster — single-region server, no HTTP/3, slower TLS, no image CDN.
- If the goal is "cheap + fast", Lovable-hosted with a custom domain (~$10–15/yr for the domain, hosting included) beats a $3/mo shared host on speed every time.

---

## What I'll do if you confirm

1. Download all 14 service images + logo from the CDN back into `public/images/`
2. Rewrite the 15 `.asset.json` imports to plain string paths (`/images/Massage.jpeg` etc.)
3. Delete the `.asset.json` files
4. Convert `sitemap.xml` route to a build-time generated static file
5. Enable TanStack Start prerendering for all 7 routes (`/`, `/about`, `/skin`, `/wellness`, `/recovery`, `/programs`, `/contact`)
6. Add `public/.htaccess` with SPA fallback + `Cache-Control` headers for images/fonts
7. Add perf polish: `loading="lazy"` + `decoding="async"` on non-hero images, `width`/`height` attributes to prevent layout shift, preload hint for the home hero
8. Verify with `bun run build` and confirm the `dist/` output is fully self-contained (grep for any leftover `__l5e` references)

Deliverable: a `dist/` folder you can zip and drop into cPanel's `public_html`.

**Please confirm:**
- Proceed with static conversion? (yes / no)
- Or reconsider — publish on Lovable and just point your domain? (recommended for speed)
