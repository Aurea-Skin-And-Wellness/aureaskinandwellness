import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Instagram } from "lucide-react";
import logo from "@/assets/aurea-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-emerald-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img decoding="async" src={logo.url} alt="" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-display text-xl">Aurea</div>
                <div className="text-[10px] tracking-[0.2em] text-gold/90 uppercase">Skin · Wellness · Longevity</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-cream/75 leading-relaxed">
              A science-led institute delivering measurable transformation through structured healthy-ageing systems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold uppercase">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li><Link to="/about" className="hover:text-gold">About Aurea</Link></li>
              <li><Link to="/programs" className="hover:text-gold">Programs</Link></li>
              <li><Link to="/skin" className="hover:text-gold">Aurea Skin</Link></li>
              <li><Link to="/wellness" className="hover:text-gold">Aurea Wellness</Link></li>
              <li><Link to="/recovery" className="hover:text-gold">Aurea Recovery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold uppercase">Visit</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold" /><span>1st Floor, West Park Suites, Ojijo Close, Nairobi</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-gold" /><a href="tel:+254117145500" className="hover:text-gold">0117 145 500</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-gold" /><a href="mailto:aureaskin006@gmail.com" className="hover:text-gold break-all">aureaskin006@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest text-gold uppercase">Hours</h4>
            <ul className="mt-5 space-y-2 text-sm text-cream/80">
              <li className="flex justify-between"><span>Mon – Fri</span><span>9:00 – 19:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 – 17:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>By appointment</span></li>
            </ul>
            <a href="https://www.instagram.com/aureaskin_ke?igsh=ZGR1ZGZydmlodDF0" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-gold">
              <Instagram className="h-4 w-4" /> @aureaskin_ke
            </a>
          </div>
        </div>

        <div className="gold-divider mt-12" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-cream/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Aurea Skin & Wellness Studio. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
