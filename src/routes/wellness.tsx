// ============================================================
// Aurea Wellness (/wellness)
// Service list sourced from the Aurea brochure. Pricing is
// shared via the downloadable brochure rather than on-page.
// Service descriptions are collapsible (see PriceList).
// ============================================================
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, PriceList, SectionTitle } from "@/components/Layout";
import { BrochureButton } from "@/components/BrochureButton";
import { ArrowRight } from "lucide-react";

// --- Treatment photography ---
import ivImg from "@/assets/services/IV_Drip_Therapy.jpeg.asset.json";

export const Route = createFileRoute("/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness Clinic Nairobi | Healthy Ageing & Longevity Assessment" },
      {
        name: "description",
        content:
          "Improve energy, recovery, metabolic health and overall wellbeing through evidence-based wellness and longevity systems.",
      },
    ],
  }),
  component: Wellness,
});

// --- Healthy ageing assessment (anchor service) ---
const healthyAgeing = [
  {
    name: "Healthy Ageing Assessment",
    desc: "Functional Consultation · Wellness Metrics · Blood Pressure · Body Composition · Stress Analysis · Metabolic Screening Review",
    details:
      "Your wellness baseline — a functional consultation with body composition, blood pressure, stress and metabolic screening review, translated into a personalised longevity plan.",
  },
];

// --- Functional & longevity consultations (descriptions from brochure) ---
const consultations = [
  {
    name: "Functional Wellness Consultation",
    details:
      "A comprehensive consultation to evaluate your overall health, lifestyle, and wellness goals, creating a personalised plan for optimal wellbeing.",
  },
  {
    name: "Longevity Assessment",
    details:
      "An in-depth assessment of health markers, lifestyle factors, and risk profiles to support healthy ageing and long-term vitality.",
  },
  {
    name: "Hormonal Wellness Review",
    details:
      "A detailed review of symptoms and hormonal health to identify imbalances and recommend targeted wellness strategies.",
  },
  {
    name: "Bio-Age Assessment",
    details:
      "Measures biological age using health and lifestyle indicators to provide insights into your current health status and ageing trajectory.",
  },
  {
    name: "Wellness Lab Review",
    details:
      "Professional interpretation of laboratory results with personalised recommendations to improve overall health and performance.",
  },
  {
    name: "Hormonal Lab Review",
    details:
      "A focused analysis of hormone-related laboratory tests to help optimise hormonal balance and wellbeing.",
  },
  {
    name: "Hair Loss Investigation Review",
    details:
      "A comprehensive evaluation of potential causes of hair thinning or hair loss, including lifestyle, nutritional, and hormonal factors.",
  },
  {
    name: "Advanced Longevity Review",
    details:
      "A detailed longevity-focused consultation combining advanced health metrics and personalised strategies to enhance healthy ageing.",
  },
  {
    name: "Cellular Rejuvenation Consultation",
    details:
      "A consultation exploring evidence-based approaches that support cellular health, recovery, and overall vitality.",
  },
];

// --- IV nutrition therapy (descriptions from brochure) ---
const iv = [
  {
    name: "Hydration IV",
    details:
      "A replenishing infusion of fluids and electrolytes designed to restore hydration and support overall wellness.",
  },
  {
    name: "Glow IV",
    details:
      "A nutrient-rich IV blend formulated to support skin health, radiance, and overall vitality.",
  },
  {
    name: "Energy IV",
    details:
      "An infusion containing vitamins and nutrients aimed at supporting energy levels, focus, and daily performance.",
  },
  {
    name: "Immunity IV",
    details:
      "A targeted IV therapy designed to provide key nutrients that help support normal immune function.",
  },
  {
    name: "Recovery IV",
    details:
      "A restorative infusion formulated to aid recovery from physical exertion, fatigue, or demanding lifestyles.",
  },
  {
    name: "Longevity IV",
    details:
      "An advanced nutrient infusion focused on supporting healthy ageing, cellular health, and long-term wellness.",
  },
];

function Wellness() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Aurea Wellness"
        title="Wellness Optimisation & Healthy Ageing"
        subtitle="Evidence-based wellness, IV nutrition and longevity systems designed to optimise how you feel, perform and age."
      />

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 lg:px-8 lg:py-28">
        <section>
          <SectionTitle eyebrow="Begin Here" title="Healthy Ageing Assessment" />
          <div className="mt-8">
            <PriceList items={healthyAgeing} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Consultations" title="Functional & Longevity Reviews" />
          <p className="mt-3 text-sm text-muted-foreground">Tap any service for details.</p>
          <div className="mt-8">
            <PriceList items={consultations} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="IV Therapy" title="Clinical IV Nutrition" />
          <img
            src={ivImg.url}
            alt="IV Drip Therapy"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <p className="mt-6 text-sm text-muted-foreground">Tap any infusion for details.</p>
          <div className="mt-4">
            <PriceList items={iv} />
          </div>
        </section>

        {/* Closing CTA */}
        <div className="rounded-2xl bg-hero-gradient p-8 text-center text-cream sm:p-12">
          <h3 className="font-display text-2xl sm:text-3xl">
            Start with the Healthy Ageing Assessment.
          </h3>
          <p className="mt-3 text-cream/85">
            Your wellness baseline informs every subsequent recommendation.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3 text-sm font-medium text-emerald-deep shadow-gold"
            >
              Book now <ArrowRight className="h-4 w-4" />
            </Link>
            <BrochureButton variant="outline-cream" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
