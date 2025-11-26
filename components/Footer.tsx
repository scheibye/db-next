import Link from "next/link";
import type { Settings } from "@/lib/settings";

type FooterProps = {
  settings: Settings | null;
};

export function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear();

  const footerLinks =
    (settings?.footerLinks || []).filter(
      (item): item is { label: string; href: string } =>
        !!item &&
        typeof item.label === "string" &&
        typeof item.href === "string"
    );

  return (
    <footer className="mt-20 bg-brand-paper border-t border-brand-dark/10">
      {/* Øverste del */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:px-6 grid gap-10 md:grid-cols-3 text-sm text-brand-text">
        
        {/* Kolonne 1 – Firma info */}
        <div>
          <p className="font-bold text-brand-dark text-base mb-2">
            {settings?.siteTitle || "Dansk Boliglån"}
          </p>

          {settings?.address && (
            <p className="text-brand-text/80 leading-relaxed">
              {settings.address}
            </p>
          )}
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-bold text-brand-dark text-base mb-2">
            Kontakt
          </p>

          {settings?.phone && (
            <p className="text-brand-text/80">
              Telefon: {settings.phone}
            </p>
          )}

          {settings?.email && (
            <p className="text-brand-text/80">
              Email: {settings.email}
            </p>
          )}
        </div>

        {/* Links */}
        <div>
          <p className="font-bold text-brand-dark text-base mb-2">
            Links
          </p>

          <ul className="space-y-1">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-brand-primary hover:text-brand-primary-soft transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bundbjælke */}
      <div className="bg-brand-dark text-brand-card text-center py-4 text-xs">
        © {year} {settings?.siteTitle || "Dansk Boliglån"}. Alle rettigheder forbeholdes.
      </div>
    </footer>
  );
}
