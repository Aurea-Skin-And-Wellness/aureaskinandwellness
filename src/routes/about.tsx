import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, SectionTitle } from "@/components/Layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aurea | Africa's Healthy Ageing Institution" },
      { name: "description", content: "Learn about Aurea's mission, vision and integrated approach to skin health, wellness, longevity medicine and professional education." },
    ],
  }),
  component: About,
});

const principles = [
  "Assess before treatment",
  "Diagnose before recommendation",
  "Personalise before protocol",
  "Measure before progression",
  "Educate before selling",
  "Document every stage",
];

const team = [
  "Founder & Clinical Director",
  "Medical Doctor",
  "Registered Nurse",
  "Lead Skin Therapist",
  "Skin Therapist",
  "Physiotherapist",
  "Massage Therapist",
  "Wellness Practitioner",
  "Client Care Coordinator",
  "Academy Coordinator",
];

function About() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Aurea"
        title="A new standard for healthy ageing."
        subtitle="Aurea is a multidisciplinary skin, wellness and longevity institute delivering measurable transformation through structured healthy-ageing systems."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">Mission</div>
            <h2 className="mt-3 font-display text-3xl text-emerald-deep sm:text-4xl">
              Measurable transformation through evidence-based systems.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We integrate advanced skin health, wellness optimisation, longevity medicine, IV therapy, physiotherapy, recovery services and professional education under one clinical framework.
            </p>
          </div>
          <div>
            <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold">Vision</div>
            <h2 className="mt-3 font-display text-3xl text-emerald-deep sm:text-4xl">
              Africa's leading healthy-ageing institution.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Bringing together skin science, wellness optimisation, longevity medicine and professional education in one cohesive, science-led practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Core Service Philosophy" title="Every service follows six principles." center />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-foreground/85">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Our Team" title="Multidisciplinary clinicians under one roof." center />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((role) => (
              <div key={role} className="rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground/85">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
