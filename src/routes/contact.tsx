import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Phone, MapPin, Mail, MessageCircle, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book | Aurea Skin & Wellness Nairobi" },
      { name: "description", content: "Book a Skin Discovery Assessment or Healthy Ageing Assessment. Visit Aurea at West Park Suites, Ojijo Close, Nairobi." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Start your transformation."
        subtitle="Book a consultation or send us a message — our client care team will respond within one business day."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium text-emerald-deep">Visit</div>
                  <p className="mt-1 text-sm text-muted-foreground">1st Floor, West Park Suites, Ojijo Close, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium text-emerald-deep">Call</div>
                  <a href="tel:+254117145500" className="mt-1 block text-sm text-muted-foreground hover:text-emerald">0117 145 500</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium text-emerald-deep">WhatsApp</div>
                  <a href="https://wa.me/254117145500" target="_blank" rel="noreferrer" className="mt-1 block text-sm text-muted-foreground hover:text-emerald">Chat with our team</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium text-emerald-deep">Email</div>
                  <a href="mailto:aureaskin006@gmail.com" className="mt-1 block break-all text-sm text-muted-foreground hover:text-emerald">aureaskin006@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium text-emerald-deep">Hours</div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Mon – Thur · 10:00 – 17:00</li>
                    <li>Saturday · 10:00 – 17:00</li>
                    <li>Friday . By appointment</li>
                    <li>Sunday · By appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-deep text-cream">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-emerald-deep">Request received</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you. Our client care coordinator will reach out within one business day to confirm your appointment.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-emerald-deep sm:text-3xl">Request a consultation</h2>
                <p className="mt-2 text-sm text-muted-foreground">Tell us a little about your goals.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <div className="mt-4">
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-emerald-deep">Service of interest</label>
                  <select className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40">
                    <option>Skin Discovery Assessment</option>
                    <option>Healthy Ageing Assessment</option>
                    <option>Facial Therapy</option>
                    <option>IV Therapy</option>
                    <option>Physiotherapy / Recovery</option>
                    <option>Aurea Program / Membership</option>
                    <option>Other — please describe</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-emerald-deep">Message</label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                    placeholder="Share your goals or questions"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-emerald-deep px-7 py-3.5 text-sm font-medium text-cream shadow-elegant transition hover:bg-emerald"
                >
                  Submit request
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  By submitting you agree to be contacted about your enquiry.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-emerald-deep">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
    </div>
  );
}
