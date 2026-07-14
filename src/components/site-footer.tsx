import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Packright Africa</div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Packaging Excellence Beyond Borders. Export-grade corrugated solutions, engineered in Embakasi, Kenya — trusted from JKIA to the EU.
          </p>
        </div>
        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Off Airport Road</li>
            <li>Nairobi County, Kenya</li>
            <li>packrightafrica@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-edge flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Packright Africa Ltd. All rights reserved.</span>
          <span>Est. 2000 · Kikuyu, Kenya</span>
        </div>
      </div>
    </footer>
  );
}