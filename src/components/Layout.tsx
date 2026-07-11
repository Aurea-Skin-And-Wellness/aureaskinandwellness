import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-hero-gradient text-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
        {eyebrow && (
          <div className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-gold">{eyebrow}</div>
        )}
        <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-cream/85 sm:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

// Service list — pricing intentionally omitted (see brochure).
// When an item provides `details`, it renders as a collapsible
// disclosure powered by native <details>/<summary>.
export function PriceList({
  items,
}: {
  items: { name: string; desc?: string; details?: string }[];
}) {
  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
      {items.map((it) =>
        it.details ? (
          <li key={it.name}>
            <details className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-foreground">{it.name}</div>
                  {it.desc && (
                    <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
                  )}
                </div>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {it.details}
              </p>
            </details>
          </li>
        ) : (
          <li key={it.name} className="p-5 sm:p-6">
            <div className="font-medium text-foreground">{it.name}</div>
            {it.desc && <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>}
          </li>
        ),
      )}
    </ul>
  );
}


export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold">{eyebrow}</div>
      )}
      <h2 className="font-display text-3xl text-emerald-deep sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
