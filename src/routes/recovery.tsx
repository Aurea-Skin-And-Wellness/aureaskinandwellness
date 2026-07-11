// ============================================================
// Aurea Recovery (/recovery)
// Physiotherapy, massage, lymphatic and hair-removal services.
// Service descriptions sourced from the Aurea brochure and
// rendered as collapsible disclosures via PriceList.
// ============================================================
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, PriceList, SectionTitle } from "@/components/Layout";
import { BrochureButton } from "@/components/BrochureButton";
import { ArrowRight } from "lucide-react";

// --- Treatment photography ---
import physioImg from "@/assets/services/Physiotherapy_Services.jpeg.asset.json";
import massageImg from "@/assets/services/Massage.jpeg.asset.json";
import waxingImg from "@/assets/services/Waxing.jpeg.asset.json";

export const Route = createFileRoute("/recovery")({
  head: () => ({
    meta: [
      { title: "Physiotherapy Nairobi | Recovery & Rehabilitation Services" },
      {
        name: "description",
        content:
          "Physiotherapy, rehabilitation, massage therapy and recovery treatments designed to improve mobility, function and wellbeing.",
      },
    ],
  }),
  component: Recovery,
});

// --- Physiotherapy: assessment & sessions ---
const physio = [
  {
    name: "Physiotherapy Assessment",
    details:
      "A comprehensive evaluation of movement, posture, pain, and function to identify the root cause of musculoskeletal concerns.",
  },
  {
    name: "Physiotherapy Treatment",
    details:
      "A personalised treatment session using hands-on therapy, rehabilitation exercises, and movement strategies to improve recovery.",
  },
  {
    name: "Advanced Rehabilitation Session",
    details:
      "A specialised rehabilitation programme designed to accelerate recovery, restore function, and improve physical performance.",
  },
  {
    name: "Sports Performance Recovery",
    details:
      "Targeted recovery treatments and movement therapies designed to help active individuals optimise performance and reduce injury risk.",
  },
];

// --- Multi-session physiotherapy programs ---
const physioPrograms = [
  {
    name: "Posture Reset Program",
    desc: "6 sessions",
    details:
      "A structured programme focused on improving posture, movement patterns, and musculoskeletal balance.",
  },
  {
    name: "Back Pain Recovery Program",
    desc: "8 sessions",
    details:
      "A progressive rehabilitation plan designed to reduce pain, restore mobility, and strengthen the spine and surrounding muscles.",
  },
  {
    name: "Mobility Optimisation Program",
    desc: "12 sessions",
    details:
      "A comprehensive programme aimed at improving flexibility, joint mobility, movement quality, and overall physical function.",
  },
];

// --- Massage therapy menu ---
const massage = [
  {
    name: "Relaxation Massage",
    details:
      "A gentle, soothing massage designed to reduce stress, promote relaxation, and enhance overall wellbeing.",
  },
  {
    name: "Deep Tissue Massage",
    details:
      "A targeted massage technique that works on deeper muscle layers to relieve tension, stiffness, and chronic discomfort.",
  },
  {
    name: "Aromatherapy Massage",
    details:
      "A relaxing massage incorporating carefully selected essential oils to support physical and emotional wellbeing.",
  },
  {
    name: "Therapeutic Massage",
    details:
      "A treatment-focused massage designed to address muscle tension, discomfort, and movement restrictions.",
  },
  {
    name: "Sports Massage",
    details:
      "A specialised massage that supports athletic performance, recovery, and injury prevention.",
  },
  {
    name: "Hot Stone Massage",
    details:
      "A deeply relaxing massage using warmed stones to ease muscle tension, improve circulation, and promote relaxation.",
  },
];

// --- Lymphatic & detox therapies ---
const lymph = [
  {
    name: "Drainage & Detox Therapy",
    details:
      "A gentle treatment designed to support lymphatic circulation, reduce fluid retention, and promote the body's natural detoxification processes.",
  },
];

// --- Professional waxing / hair removal ---
const hairRemoval = [
  {
    name: "Eyebrows",
    details: "Precision brow shaping using warm wax for a clean, defined finish.",
  },
  {
    name: "Lip",
    details: "Gentle upper-lip hair removal using warm wax.",
  },
  {
    name: "Chin",
    details: "Gentle chin hair removal using warm wax.",
  },
  {
    name: "Full Face",
    details: "Full facial hair removal covering brows, lip, chin and cheeks.",
  },
  {
    name: "Underarms",
    details: "Underarm waxing for smooth, longer-lasting results than shaving.",
  },
  {
    name: "Half Arms",
    details: "Warm wax hair removal from the elbow down (or up).",
  },
  {
    name: "Full Arms",
    details: "Warm wax hair removal covering the full arm.",
  },
  {
    name: "Half Legs",
    details: "Warm wax hair removal from the knee down.",
  },
];


function Recovery() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Aurea Recovery"
        title="Recovery, Physiotherapy & Performance"
        subtitle="Movement, rehabilitation and therapeutic recovery — a clinical sanctuary for mobility, performance and rest."
      />

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 lg:px-8 lg:py-28">
        <section>
          <SectionTitle eyebrow="Physiotherapy" title="Assessment & Treatment" />
          <img
            src={physioImg.url}
            alt="Physiotherapy Services"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <p className="mt-6 text-sm text-muted-foreground">Tap any service for details.</p>
          <div className="mt-4">
            <PriceList items={physio} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Programs" title="Physiotherapy Programs" />
          <div className="mt-8">
            <PriceList items={physioPrograms} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Massage Therapy" title="Therapeutic Massage" />
          <img
            src={massageImg.url}
            alt="Therapeutic Massage"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={massage} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Lymphatic" title="Drainage & Detox Therapy" />
          <div className="mt-8">
            <PriceList items={lymph} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Hair Removal" title="Professional Waxing" />
          <img
            src={waxingImg.url}
            alt="Professional Waxing"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={hairRemoval} />
          </div>
        </section>

        {/* Closing CTA */}
        <div className="rounded-2xl bg-hero-gradient p-8 text-center text-cream sm:p-12">
          <h3 className="font-display text-2xl sm:text-3xl">
            Build a recovery routine that lasts.
          </h3>
          <p className="mt-3 text-cream/85">
            Speak with our physiotherapy team to design a plan that fits your body and your schedule.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3 text-sm font-medium text-emerald-deep shadow-gold"
            >
              Book recovery <ArrowRight className="h-4 w-4" />
            </Link>
            <BrochureButton variant="outline-cream" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
