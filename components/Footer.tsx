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
      !!item && typeof item.label === "string" && typeof item.href === "string"
  );

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-10 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
        <div>
          <p className="font-semibold mb-2">{settings?.siteTitle || "Dansk Boliglån"}</p>
          {settings?.address && <p>{settings.address}</p>}
        </div>
        <div>
          <p className="font-semibold mb-2">Kontakt</p>
          {settings?.phone && <p>Telefon: {settings.phone}</p>}
          {settings?.email && <p>Email: {settings.email}</p>}
        </div>
        <div>
          <p className="font-semibold mb-2">Links</p>
          <ul className="space-y-1">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-xs text-center text-slate-500">
        © {year} {settings?.siteTitle || "Dansk Boliglån"}
      </div>
    </footer>
  );
}
