import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Packright Africa" },
      { name: "description", content: "Founded in 2000 by Eng. Okumbe in Kikuyu, Kenya, Packright Africa is a family-led packaging company supplying export-grade corrugated cartons." },
      { property: "og:title", content: "About — Packright Africa" },
      { property: "og:description", content: "A family-led Kenyan packaging company built for export markets." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Eng. Okumbe", role: "Founder & CEO" },
  { name: "Eng. Clarkson Kelvin", role: "Vice Chair & Company Architect" },
  { name: "Ms. Elizabeth", role: "Operations Management" },
  { name: "Eng. Juma", role: "Head of Finance & IT Inventory" },
  { name: "Ms. Honorine Mitchell", role: "Marketing Director" },
];

const timeline = [
  { y: "2000", t: "Founded in Kikuyu Township", d: "Eng. Okumbe establishes Packright Africa as a family-driven corrugated converter." },
  { y: "2008", t: "Architecting growth", d: "Eng. Clarkson Kelvin joins as Vice Chairperson and Company Architect." },
  { y: "2015", t: "Export specialization", d: "Focus on EPZ exporters — fresh-cut flowers and produce destined for EU markets via JKIA." },
  { y: "Today", t: "A new generation", d: "Tech-driven leadership in finance, inventory and marketing accelerates regional expansion." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-edge py-24">
        <div className="eyebrow">About Packright</div>
        <h1 className="display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)]">
          A family foundation. <span className="italic text-primary">An export-grade ambition.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Established in Kikuyu Township, Kiambu County, Packright Africa converts and customizes
          high-quality corrugated carton packaging for Kenya&rsquo;s export-oriented industries —
          built around precision, innovation, and operational excellence.
        </p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-edge grid gap-12 py-20 md:grid-cols-3">
          {[
            { t: "Mission", d: "To deliver innovative, reliable, and quality-assured packaging solutions that empower African exporters through efficiency, sustainability, and world-class service standards." },
            { t: "Vision", d: "To become Eastern Africa's leading packaging and corrugated solutions company, recognized for innovation, quality excellence, and regional industrial impact." },
            { t: "Tagline", d: "Packaging Excellence Beyond Borders." },
          ].map((b) => (
            <div key={b.t}>
              <div className="eyebrow">{b.t}</div>
              <p className="mt-6 font-display text-2xl leading-snug">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">History</div>
            <h2 className="display mt-4 text-5xl">Twenty-five years <span className="italic">in the making.</span></h2>
          </div>
          <ol className="lg:col-span-8 space-y-px bg-border">
            {timeline.map((e) => (
              <li key={e.y} className="grid grid-cols-[7rem_1fr] gap-6 bg-background p-8">
                <div className="font-display text-3xl text-primary">{e.y}</div>
                <div>
                  <div className="text-lg font-medium">{e.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="container-edge py-24">
          <div className="eyebrow">Leadership</div>
          <h2 className="display mt-4 text-5xl">A new generation at the helm.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <div key={p.name} className="bg-background p-8">
                <div className="h-14 w-14 rounded-full bg-primary/15 grid place-items-center font-display text-2xl text-primary">
                  {p.name.split(" ").slice(-1)[0][0]}
                </div>
                <div className="mt-6 text-lg font-medium">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}