// ============================================================
// BrochureButton
// Anchor link that downloads the official Aurea brochure PDF.
// File served from /public/Aurea-Brochure.pdf.
// ============================================================
import { Download } from "lucide-react";

type Variant = "gold" | "outline-cream" | "outline-emerald";

const styles: Record<Variant, string> = {
  gold:
    "bg-gradient-to-r from-gold-soft to-gold text-emerald-deep shadow-gold hover:opacity-95",
  "outline-cream":
    "border border-gold/60 text-cream hover:bg-cream/5",
  "outline-emerald":
    "border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-cream",
};

export function BrochureButton({
  variant = "gold",
  label = "Download Brochure",
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="/Aurea-Brochure.pdf"
      download
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition ${styles[variant]} ${className}`}
    >
      <Download className="h-4 w-4" /> {label}
    </a>
  );
}
