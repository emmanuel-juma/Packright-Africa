import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Packright Africa" },
      { name: "description", content: "Talk to Packright Africa about export-grade corrugated packaging. Based in Kikuyu Township, Kiambu County, Kenya." },
      { property: "og:title", content: "Contact — Packright Africa" },
      { property: "og:description", content: "Get in touch with the Packright Africa team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Toaster position="top-center" />

      <section className="container-edge py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Contact</div>
            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]">
              Let&rsquo;s package <span className="italic text-primary">your next export.</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Tell us about your product, volume, and timeline. Our team responds within one
              business day with specifications and pricing.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { Icon: MapPin, l: "Off Airport Road, Nairobi County, Kenya" },
                { Icon: Mail, l: "packrightafrica@gmail.com" },
                { Icon: Phone, l: "+254 (0) 722 112 040"},
                { Icon: Mail, l: "PO BOX 17952-00500, Nairobi,Kenya"}
              ].map(({ Icon, l }) => (
                <div key={l} className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 rounded-sm border border-border bg-card p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>
            <div className="mt-6">
              <Field label="Product / volume / destination" name="message" textarea required />
            </div>
            <button disabled={sending} className="btn-primary mt-8 disabled:opacity-60">
              {sending ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea }: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean;
}) {
  const base = "w-full rounded-sm border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-primary";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</span>
      <div className="mt-2">
        {textarea ? (
          <textarea name={name} required={required} rows={5} className={base} />
        ) : (
          <input name={name} type={type} required={required} className={base} />
        )}
      </div>
    </label>
  );
}