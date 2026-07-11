// ============================================================
// ImagePlaceholder
// Reusable visual placeholder used everywhere a photograph
// would normally appear. Keeps layouts intact while real
// brand photography is being commissioned.
// ============================================================
import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  aspect?: string; // e.g. "aspect-[3/4]", "aspect-[4/3]"
  className?: string;
};

export function ImagePlaceholder({
  label = "Image placeholder",
  aspect = "aspect-[4/3]",
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full overflow-hidden rounded-2xl border border-dashed border-gold/40 bg-gradient-to-br from-emerald-deep/10 via-secondary to-gold/10 shadow-sm ${aspect} ${className}`}
    >
      {/* Subtle decorative gold ring */}
      <div className="absolute inset-4 rounded-xl border border-gold/30" aria-hidden />
      {/* Centered icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-emerald-deep/70">
        <ImageIcon className="h-10 w-10 text-gold/70" aria-hidden />
        <span className="text-xs font-medium tracking-[0.3em] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
