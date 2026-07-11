// ============================================================
// Aurea Programs (/programs)
// Featured transformation programs and ongoing memberships.
// Program names + headline pricing from the AUREA Website
// Blueprint. Membership tiers retained as ongoing-care plans.
// ============================================================
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, SectionTitle } from "@/components/Layout";
import { BrochureButton } from "@/components/BrochureButton";
import { ArrowRight, Check, Crown, Star, Sparkles } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Healthy Ageing Programs Nairobi | Skin & Longevity Transformation" },
      {
        name: "description",
        content:
          "Structured transformation programs combining treatments, wellness support, homecare, supplements and progress tracking.",
      },
    ],
  }),
  component: Programs,
});

// --- Featured transformation programs ---
const programs: {
  name: string;
  tag: string;
  featured?: boolean;
  items: string[];
}[] = [
  {
    name: "90-Day Age Well Program",
    tag: "Foundation",
    items: [
      "Healthy Ageing Assessment",
      "Clinical Reviews",
      "Treatment Pathway",
      "Homecare Prescription",
      "Supplement Plan",
      "Progress Monitoring",
    ],
  },
  {
    name: "12-Week Longevity Optimisation Program",
    tag: "Advanced",
    featured: true,
    items: [
      "Advanced Diagnostics Review",
      "Longevity Assessment",
      "IV Support",
      "Supplement Protocol",
      "Skin Rejuvenation",
      "Recovery Therapy",
      "Progress Tracking",
    ],
  },
  {
    name: "Elite Bio-Optimization Program",
    tag: "Elite",
    items: [
      "Advanced Testing & DNA Insights",
      "Precision Protocols",
      "Personalised Optimisation",
      "Priority Access",
      "Quarterly Reviews",
    ],
  },
];

// --- Membership tiers (ongoing care) ---
const memberships: {
  name: string;
  icon: typeof Sparkles;
  featured?: boolean;
  items: string[];
}[] = [
  {
    name: "Essential",
    icon: Sparkles,
    items: ["Monthly Discovery Facial", "Priority Booking", "Quarterly Skin Review"],
  },
  {
    name: "Advanced",
    icon: Star,
    featured: true,
    items: ["Monthly Advanced Skin Treatment", "Recovery Session", "Wellness Review"],
  },
  {
    name: "Elite",
    icon: Crown,
    items: [
      "Monthly IV Therapy",
      "Monthly Treatment",
      "Quarterly Longevity Review",
      "Priority Scheduling",
    ],
  },
];

// --- Seven-step client journey (Discovery → Membership) ---
const journey = ["Discovery", "Mapping", "Pathway", "Treatment", "Homecare", "Program", "Membership"];

function Programs() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Aurea Programs"
        title="Structured transformation, measured progress."
        subtitle="Multi-week programs and memberships that combine treatments, wellness support, homecare, supplements and progress tracking."
      />

      {/* PROGRAMS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Programs" title="Three pathways to transformation." center />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-gold bg-emerald-deep text-cream shadow-elegant lg:scale-[1.03]"
                    : "border-border bg-card"
                }`}
              >
                <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">{p.tag}</div>
                <h3
                  className={`mt-3 font-display text-2xl ${
                    p.featured ? "text-cream" : "text-emerald-deep"
                  }`}
                >
                  {p.name}
                </h3>
                <ul className="mt-6 space-y-3">
                  {p.items.map((i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm ${
                        p.featured ? "text-cream/85" : "text-foreground/85"
                      }`}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                    p.featured
                      ? "bg-gradient-to-r from-gold-soft to-gold text-emerald-deep shadow-gold"
                      : "border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-cream"
                  }`}
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Memberships"
            title="Ongoing care, prioritised access."
            center
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {memberships.map((m) => (
              <div
                key={m.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  m.featured ? "border-gold bg-card shadow-elegant" : "border-border bg-card"
                }`}
              >
                <m.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-display text-2xl text-emerald-deep">{m.name}</h3>
                <ul className="mt-6 space-y-3">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Client Journey"
            title="Seven steps from assessment to maintenance."
            center
          />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {journey.map((s, i) => (
              <li
                key={s}
                className="rounded-xl border border-border bg-card p-5 text-center"
              >
                <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">
                  Step {i + 1}
                </div>
                <div className="mt-2 font-display text-lg text-emerald-deep">{s}</div>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <BrochureButton variant="outline-emerald" label="Download programs brochure" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
