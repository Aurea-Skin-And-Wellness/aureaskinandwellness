// ============================================================
// SiteNav
// Sticky top navigation, mobile-friendly.
// - Desktop: horizontal links + primary "Book Now" CTA.
// - Mobile: hamburger menu, links collapse to full-width sheet
//   that closes on link tap.
// - Logo: rendered inside a cream disc with a gold ring for
//   legibility against any background.
// ============================================================
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aurea-logo.asset.json";

// Single source of truth for top-level navigation links.
// Order here = order shown in both desktop nav and mobile sheet.
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skin", label: "Skin" },
  { to: "/wellness", label: "Wellness" },
  { to: "/recovery", label: "Recovery" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  // Mobile menu open/closed state.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* Brand lockup: logo disc + wordmark */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream ring-1 ring-gold/60 shadow-sm">
            <img decoding="async"
              src={logo.url}
              alt="Aurea Skin & Wellness Studio"
              className="h-12 w-12 rounded-full object-contain"
            />
          </span>
          <div className="min-w-0 leading-tight">
            <div className="font-display text-xl text-emerald-deep truncate">AUREA</div>
            <div className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase truncate">
              Skin · Wellness · Longevity
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-emerald-deep [&.active]:text-emerald-deep [&.active]:font-medium"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-emerald-deep px-5 py-2 text-sm font-medium text-cream shadow-elegant transition hover:bg-emerald"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden rounded-md p-2 text-emerald-deep hover:bg-secondary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile collapsible nav sheet */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/85 border-b border-border/60 last:border-0 [&.active]:text-emerald-deep [&.active]:font-medium"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Aurea-Brochure.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-gold/60 px-5 py-3 text-center text-sm font-medium text-emerald-deep"
            >
              Download Brochure
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-emerald-deep px-5 py-3 text-center text-sm font-medium text-cream"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
