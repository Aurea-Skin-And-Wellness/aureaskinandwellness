/**
 * Static export script for cheap shared/static hosting (cPanel, Namecheap static, etc.).
 *
 * Why this exists:
 *   TanStack Start is a server-rendered framework. `bun run build` produces a
 *   Cloudflare Worker bundle, not static HTML. To host on a $3/mo shared host
 *   we need real .html files.
 *
 * How it works:
 *   1. Spins up the Vite dev server on http://localhost:8080 in the background.
 *   2. Uses Playwright (Chromium) to visit each route, wait for React to hydrate,
 *      and snapshot the rendered HTML.
 *   3. Strips dev-only HMR client scripts.
 *   4. Writes /path/index.html for each route into `static-export/`.
 *   5. Copies everything from `public/` alongside so images/pdf/sitemap/.htaccess
 *      travel with it.
 *
 * Usage:
 *   bun run export:static
 *
 * Then zip the `static-export/` folder and upload its contents into cPanel's
 * public_html directory.
 */
import { spawn } from "node:child_process";
import { mkdirSync, cpSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { chromium } from "playwright";

const ROUTES = ["/", "/about", "/skin", "/wellness", "/recovery", "/programs", "/contact"];
const OUT = "static-export";
const PORT = 8080;
const BASE = `http://localhost:${PORT}`;

async function waitForServer(url, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not become ready`);
}

function stripDevScripts(html) {
  // Remove Vite/HMR client scripts and any dev-only overlay hooks.
  return html
    .replace(/<script[^>]*type="module"[^>]*src="\/@vite\/[^"]*"[^>]*><\/script>/g, "")
    .replace(/<script[^>]*type="module"[^>]*src="\/@react-refresh"[^>]*><\/script>/g, "")
    .replace(/<script[^>]*>[^<]*__vite__[^<]*<\/script>/g, "")
    .replace(/<script[^>]*src="\/@id\/[^"]*"[^>]*><\/script>/g, "");
}

async function main() {
  if (existsSync(OUT)) rmSync(OUT, { recursive: true });
  mkdirSync(OUT, { recursive: true });

  // Copy public/ so images, sitemap.xml, .htaccess, brochure land in the export.
  cpSync("public", OUT, { recursive: true });

  console.log("Starting dev server on port", PORT, "...");
  const dev = spawn("bun", ["run", "dev"], {
    stdio: ["ignore", "inherit", "inherit"],
    detached: false,
  });

  try {
    await waitForServer(BASE);
    console.log("Server ready. Prerendering routes...");

    const browser = await chromium.launch();
    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      const url = BASE + route;
      console.log("  →", route);
      await page.goto(url, { waitUntil: "networkidle" });
      const html = stripDevScripts(await page.content());
      const outPath =
        route === "/"
          ? join(OUT, "index.html")
          : join(OUT, route.replace(/^\//, ""), "index.html");
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
    }

    await browser.close();
    console.log(`\n✓ Static export ready in ./${OUT}/`);
    console.log("  Zip its contents and upload to cPanel public_html.");
  } finally {
    dev.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
