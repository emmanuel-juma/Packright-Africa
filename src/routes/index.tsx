import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Leaf, Globe2, Factory } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import hero from "@/assets/hero-cartons.jpg";
import flowers from "@/assets/flowers-packing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Packright Africa — Export-grade corrugated packaging" },
      { name: "description", content: "Durable, quality-assured corrugated carton packaging built in Kikuyu, Kenya for fresh produce and floriculture exporters." },
      { property: "og:title", content: "Packright Africa — Export-grade corrugated packaging" },
      { property: "og:description", content: "Durable, quality-assured corrugated carton packaging from Kikuyu, Kenya." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container-edge grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <div className="eyebrow">Est. 2000 · Kikuyu, Kenya</div>
            <h1 className="display mt-6 text-[clamp(3rem,8vw,7rem)] text-foreground">
              Packaging<br />
              <span className="italic text-primary">excellence</span><br />
              beyond borders.
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Packright Africa converts, customizes, and supplies export-grade corrugated carton
              packaging for Kenya&rsquo;s floriculture and fresh-produce exporters — engineered to
              EU standards, shipped daily through JKIA.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn-ghost">Explore products</Link>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { k: "25+", v: "Years in market" },
                { k: "EU", v: "Quality compliant" },
                { k: "JKIA", v: "Daily despatch" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
              <img src={hero} alt="Stack of kraft corrugated export cartons" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-card p-5 shadow-sm sm:block">
              <div className="eyebrow">Tagline</div>
              <div className="mt-2 font-display text-xl">Beyond Borders.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">What we do</div>
            <h2 className="display mt-4 text-5xl">A converter built for exporters.</h2>
          </div>
          <div className="grid gap-px bg-border lg:col-span-8 lg:grid-cols-2">
            {[
              { Icon: Factory, t: "Carton conversion", d: "Resizing and converting corrugated sheets into precision-cut export packaging." },
              { Icon: ShieldCheck, t: "Quality assurance", d: "Strict QA processes aligned with EU compliance and exporter audits." },
              { Icon: Leaf, t: "Floriculture-ready", d: "Specialist cartons for fresh-cut flowers, vegetables and perishables." },
              { Icon: Globe2, t: "JKIA logistics", d: "Daily supply windows tuned to airfreight cycles out of Nairobi." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="bg-background p-8">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/50">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src={flowers} alt="Fresh roses being packed into export cartons" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">From the CEO</div>
            <blockquote className="display mt-6 text-3xl leading-tight md:text-4xl">
              &ldquo;Packaging is more than protection — it is a representation of quality, trust,
              and professionalism. We are building a modern African packaging brand that competes
              <span className="italic text-primary"> beyond borders.</span>&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <div className="h-10 w-10 rounded-full bg-primary/15 grid place-items-center font-display text-primary">O</div>
              <div>
                <div className="font-medium">Eng. Okumbe</div>
                <div className="text-muted-foreground">Founder &amp; CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="eyebrow">Get in touch</div>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Let&rsquo;s build your next <span className="italic text-accent">export run.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="btn-primary">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}