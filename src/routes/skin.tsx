// ============================================================
// Aurea Skin (/skin)
// Pricing and service list mirrors the AUREA Website Blueprint
// (Untitled_document.pdf) verbatim.
// ============================================================
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, PriceList, SectionTitle } from "@/components/Layout";
import { BrochureButton } from "@/components/BrochureButton";
import { ArrowRight } from "lucide-react";

// --- Treatment photography (CDN assets) ---
import barrierImg from "@/assets/services/Barrier_Repair_Facial.jpeg.asset.json";
import dermalImg from "@/assets/services/Dermal_Fillers.jpeg.asset.json";
import hyperpigmentationImg from "@/assets/services/Hyperpigmentation.jpeg.asset.json";
import luxuryImg from "@/assets/services/Luxury_Express_Facial.jpeg.asset.json";
import microneedlingImg from "@/assets/services/Microneedling.jpeg.asset.json";
import oxygenImg from "@/assets/services/Oxygen_Infusion_Facial.jpeg.asset.json";

// --- Treatment photography mapped to respective service sections ---
const sectionImages = {
  discovery: luxuryImg.url,
  facials: oxygenImg.url,
  corrective: hyperpigmentationImg.url,
  regenerative: microneedlingImg.url,
  aesthetic: dermalImg.url,
  barrier: barrierImg.url,
};


export const Route = createFileRoute("/skin")({
  head: () => ({
    meta: [
      { title: "Clinical Skin Health Nairobi | Acne, Pigmentation & Anti-Ageing" },
      {
        name: "description",
        content:
          "Clinical skin treatments for acne, pigmentation, barrier repair, rejuvenation and healthy ageing — optimised for skin of colour.",
      },
    ],
  }),
  component: Skin,
});

// --- Discovery & assessment ---
const discovery = [
  {
    name: "Skin Discovery Assessment",
    desc: "Consultation · Clinical Photography · Skin Analysis · Treatment Mapping · Homecare Prescription",
    details:
      "A full skin analysis with Fitzpatrick mapping and clinical photography, translated into a personalised treatment roadmap and homecare prescription.",
  },
];

// --- Signature facial menu (descriptions drawn from the brochure) ---
const facials = [
  {
    name: "Discovery Facial",
    desc: "60 minutes",
    details:
      "An introductory Aurea facial combining deep cleansing, hydration and barrier support to establish a healthy skin baseline.",
  },
  {
    name: "Hydra Glow Facial",
    desc: "75 minutes",
    details:
      "A radiance-focused facial delivering deep hydration and antioxidant support for a luminous, refreshed finish.",
  },
  {
    name: "Deep Cleanse & Detox Facial",
    desc: "75 minutes",
    details:
      "A clarifying protocol that targets inflammation and congestion — ideal for oily, breakout-prone or dull skin.",
  },
  {
    name: "Brightening Facial",
    desc: "90 minutes",
    details:
      "A pigment-focused brightening protocol formulated to improve tone and clarity in skin of colour.",
  },
  {
    name: "Barrier Repair Facial",
    desc: "75 minutes",
    details:
      "A gentle restorative facial designed to rebuild a compromised skin barrier and calm sensitivity.",
  },
  {
    name: "Collagen Boost Facial",
    desc: "90 minutes",
    details:
      "A firming, collagen-stimulating facial that supports skin density, elasticity and long-term resilience.",
  },
  {
    name: "Oxygen Infusion Facial",
    desc: "90 minutes",
    details:
      "Oxygen infusion therapy delivering hydration, nutrients and radiance at depth for an immediate glow.",
  },
  {
    name: "Signature Longevity Facial",
    desc: "120 minutes — flagship",
    details:
      "Our flagship longevity facial — a layered protocol of cleansing, hydration, oxygen infusion and antioxidant support.",
  },
];

// --- Corrective skin therapy ---
const corrective = [
  {
    name: "Corrective Acne Therapy",
    details:
      "A clinical protocol addressing active acne, congestion and inflammation with targeted extractions and actives.",
  },
  {
    name: "Advanced Acne Therapy",
    details:
      "An intensive acne programme combining exfoliation, peels and clinical actives for stubborn or persistent breakouts.",
  },
  {
    name: "Pigmentation Correction Therapy",
    details:
      "A focused correction protocol for uneven tone, dark spots and post-inflammatory hyperpigmentation.",
  },
  {
    name: "Advanced Pigmentation Therapy",
    details:
      "An advanced pigmentation programme combining clinical peels and targeted actives for deep or resistant pigmentation.",
  },
  {
    name: "Barrier Repair Therapy",
    details:
      "A restorative treatment course for sensitive, reactive or compromised skin barriers.",
  },
  {
    name: "Advanced Barrier Recovery",
    details:
      "An advanced recovery protocol for severely compromised or post-procedure skin requiring intensive repair.",
  },
];

// --- Regenerative skin therapy ---
const regenerative = [
  {
    name: "Microneedling",
    details:
      "Collagen induction therapy that refines texture, softens scars and improves overall skin quality.",
  },
  {
    name: "Microneedling + Growth Factors",
    details:
      "Microneedling paired with growth factor serums to accelerate regeneration and enhance results.",
  },
  {
    name: "PRP Skin Rejuvenation",
    details:
      "Platelet-rich plasma therapy that harnesses your own biology to rejuvenate skin texture and radiance.",
  },
  {
    name: "Advanced Chemical Peel",
    details:
      "A clinical peel that resurfaces the skin, brightens tone and improves overall clarity.",
  },
  {
    name: "Clinical Pigmentation Peel",
    details:
      "A targeted peel formulated to lift stubborn pigmentation while remaining safe for skin of colour.",
  },
  {
    name: "Acne Corrective Peel",
    details:
      "A peel protocol focused on active acne, congestion and post-acne marks.",
  },
];

// --- Advanced aesthetic medicine ---
const aesthetic = [
  {
    name: "Advanced Aesthetic Medicine Consultation",
    desc: "Redeemable against treatment",
    details:
      "An in-depth consultation covering injectables, dermal fillers and advanced aesthetic options. The consultation fee is redeemable against your chosen treatment.",
  },
];


function Skin() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Aurea Skin"
        title="Clinical Skin Health & Regenerative Aesthetics"
        subtitle="Personalised, science-led skin systems for acne, pigmentation, barrier repair, rejuvenation and longevity — optimised for skin of colour."
      />

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 lg:px-8 lg:py-28">
        <section>
          <SectionTitle eyebrow="Begin Here" title="Skin Discovery Assessment" />
          <img
            src={sectionImages.discovery}
            alt="Skin Discovery Assessment"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={discovery} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Signature" title="Facial Therapies" />
          <img
            src={sectionImages.facials}
            alt="Oxygen Infusion Facial"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={facials} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Targeted" title="Corrective Skin Therapy" />
          <img
            src={sectionImages.corrective}
            alt="Pigmentation Correction"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />

          <div className="mt-8">
            <PriceList items={corrective} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Regenerative" title="Microneedling, PRP & Peels" />
          <img
            src={sectionImages.regenerative}
            alt="Microneedling treatment"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={regenerative} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Advanced" title="Aesthetic Medicine" />
          <img
            src={sectionImages.aesthetic}
            alt="Dermal Fillers"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-8">
            <PriceList items={aesthetic} />
          </div>
        </section>


        {/* Closing CTA */}
        <div className="rounded-2xl bg-hero-gradient p-8 text-center text-cream sm:p-12">
          <h3 className="font-display text-2xl sm:text-3xl">
            Not sure where to start?
          </h3>
          <p className="mt-3 text-cream/85">
            A Skin Discovery Assessment is the best first step — or download the brochure for the full menu and current pricing.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3 text-sm font-medium text-emerald-deep shadow-gold"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <BrochureButton variant="outline-cream" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
