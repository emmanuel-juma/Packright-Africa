import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import texture from "@/assets/corrugated-texture.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Packright Africa" },
      { name: "description", content: "Export-grade corrugated cartons for floriculture, fresh produce, and EPZ exporters. Customized, quality-assured packaging from Kikuyu, Kenya." },
      { property: "og:title", content: "Products — Packright Africa" },
      { property: "og:description", content: "Corrugated packaging solutions engineered for export." },
    ],
  }),
  component: Products,
});

const products = [
  { n: "01", t: "Flower Export Cartons", d: "Telescopic and full-overlap cartons sized for rose, summer flower, and bouquet exports — engineered for cold-chain integrity. Single phased Kraft Rolls (SFK) ranges from 4 inch - 60 inch for both B and E flute with or without lines." },
  { n: "02", t: "Fresh Produce Boxes", d: "Vented and reinforced cartons for vegetables, herbs, avocado and mangoes consignments moving through JKIA cargo and Mombasa Sea port." },
  { n: "03", t: "Custom Die-Cut Packaging", d: "Tailored corrugated designs to client specification — branded, sized, and tested for export handling i.e 100 day-old-chicks, pizza boxes, cake cases and many more card board boxes" },
  { n: "04", t: "EPZ Bulk Supply", d: "Volume supply contracts for Export Processing Zone manufacturers with scheduled, just-in-time despatch. This include Regular Slotted Carton (RSC) meant for both consumer and inter-consumer products." },
];

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="container-edge grid gap-10 py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="eyebrow">Products & solutions</div>
            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,5.5rem)]">
              Corrugated solutions, <span className="italic text-primary">cut to your export.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-muted-foreground">
              Every line is converted, customized, and quality-tested under standards that
              satisfy EU buyers — from a single SKU to a full export programme.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge py-20">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {products.map((p) => (
            <article key={p.n} className="group relative bg-background p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl text-accent">{p.n}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-10 text-3xl">{p.t}</h3>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60">
        <div className="relative overflow-hidden">
          <img src={texture} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="relative container-edge py-24">
            <div className="max-w-3xl">
              <div className="eyebrow">Quality assurance</div>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Built to the standard your buyer audits against.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Every batch is produced under strict QA protocols — material grade, fluting,
                burst strength and dimensional accuracy verified before despatch.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary">Request specifications <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}