// ============================================================
// Home page (/)
// Hero + Philosophy + Divisions + Pathways + Feature sections.
// Content sourced verbatim from the official AUREA Website
// Blueprint document.
// ============================================================
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, SectionTitle } from "@/components/Layout";
import { BrochureButton } from "@/components/BrochureButton";
import { ArrowRight, Sparkles, Leaf, HeartPulse, GraduationCap, Check } from "lucide-react";

// --- Treatment photography mapped to home page placeholders ---
import boostersImg from "@/assets/services/Skin_Boosters.jpeg.asset.json";
import melaninImg from "@/assets/services/Melanin_Clarity_Facial.jpeg.asset.json";
import fourthImg from "@/assets/services/Fourth_Trimester_Facial.jpeg.asset.json";
import massageImg from "@/assets/services/Massage.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurea Skin, Wellness & Longevity Institute | Nairobi" },
      {
        name: "description",
        content:
          "Look better. Feel better. Age better. Advanced skin health, wellness optimisation, longevity medicine and recovery therapies in Nairobi.",
      },
    ],
    // Preload the LCP hero image so the browser fetches it in parallel with JS/CSS.
    links: [
      { rel: "preload", as: "image", href: "/images/Skin_Boosters.jpeg", fetchpriority: "high" },
    ],
  }),
  component: Home,
});

// Four divisions of the studio (verbatim from blueprint).
const divisions = [
  { icon: Sparkles, title: "Aurea Skin", desc: "Clinical Skin Health", to: "/skin" as const },
  { icon: Leaf, title: "Aurea Wellness", desc: "Internal Optimisation", to: "/wellness" as const },
  { icon: HeartPulse, title: "Aurea Recovery", desc: "Physiotherapy & Recovery", to: "/recovery" as const },
  { icon: GraduationCap, title: "Aurea Academy", desc: "Professional Training", to: "/programs" as const },
] as const;

// Client pathways — CLEAR · BRIGHT · CALM · AGE (verbatim).
const pathways = [
  { title: "Clear", focus: "Acne · Inflammation · Congestion" },
  { title: "Bright", focus: "Pigmentation · Melasma · Uneven Skin Tone" },
  { title: "Calm", focus: "Barrier Repair · Sensitive Skin Recovery" },
  { title: "Age", focus: "Longevity · Anti-Ageing · Regeneration" },
] as const;

// Featured programs strip on home page (titles taken from blueprint divisions).
const featuredPrograms = [
  { eyebrow: "Aurea Skin", title: "Clinical Skin Health", body: "Personalised skin systems for acne, pigmentation, barrier repair, rejuvenation and longevity — optimised for skin of colour.", to: "/skin" as const, bullets: ["Skin Discovery Assessment", "Signature Facial Therapies", "Regenerative Microneedling, PRP & Peels"], image: melaninImg.url },
  { eyebrow: "Aurea Wellness", title: "Internal Optimisation", body: "Healthy Ageing Assessment, functional consultations, IV nutrition therapy and longevity reviews.", to: "/wellness" as const, reverse: true, bullets: ["Healthy Ageing Assessment", "IV Nutrition Therapy", "Longevity & Bio-Age Reviews"], image: fourthImg.url },
  { eyebrow: "Aurea Recovery", title: "Physiotherapy & Recovery", body: "Physiotherapy, rehabilitation, sports recovery, massage therapy and lymphatic therapies.", to: "/recovery" as const, bullets: ["Physiotherapy Programs", "Massage Therapy", "Lymphatic Therapies"], image: massageImg.url },
];


function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-emerald-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">
              Nairobi · Skin, Wellness & Longevity
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              Look better.<br />Feel better.<br />
              <span className="text-gold-gradient">Age better.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg leading-relaxed">
              Advanced Skin Health, Wellness Optimisation, Longevity Medicine and Recovery Therapies delivered through structured healthy-ageing systems.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3.5 text-sm font-medium text-emerald-deep shadow-gold transition hover:opacity-95"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <BrochureButton variant="outline-cream" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" aria-hidden />
            <img
              src={boostersImg.url}
              alt="Aurea Skin Boosters treatment"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={900}
              height={1200}
              className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">Our Philosophy</div>
          <p className="mt-5 font-display text-2xl text-emerald-deep sm:text-3xl lg:text-4xl leading-snug">
            At AUREA we do not sell treatments. We deliver structured transformation through personalised skin, wellness and longevity pathways.
          </p>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Our Divisions" title="Four divisions. One integrated framework." center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => (
              <Link
                key={d.title}
                to={d.to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:border-gold hover:shadow-elegant"
              >
                <d.icon className="h-8 w-8 text-emerald" />
                <h3 className="mt-5 font-display text-xl text-emerald-deep">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-emerald transition group-hover:gap-2">
                  Discover <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PATHWAYS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Client Pathways" title="Clear · Bright · Calm · Age" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">0{i + 1}</div>
                <h3 className="mt-3 font-display text-3xl text-emerald-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS / DIVISION STRIPES */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8 lg:space-y-24">
          {featuredPrograms.map((s) => (
            <div
              key={s.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                s.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.eyebrow}
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
              />
              <div>
                <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">{s.eyebrow}</div>
                <h3 className="mt-3 font-display text-3xl text-emerald-deep sm:text-4xl">{s.title}</h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.to}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald hover:gap-3 transition-all"
                >
                  Explore {s.eyebrow} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Let&rsquo;s start with a conversation.</h2>
          <p className="mt-5 text-cream/85">
            Every plan starts with a consultation so we can understand your goals before recommending anything. Browse the full menu of services in our brochure, or book a chat with our team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-8 py-4 text-sm font-medium text-emerald-deep shadow-gold transition hover:opacity-95"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <BrochureButton variant="outline-cream" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
