import Link from 'next/link'
import type { Settings } from '@/lib/settings'

type FooterProps = {
  settings: Settings | null
}

export function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear()

  const footerLinks = (settings?.footerLinks || []).filter(
    (item): item is { label: string; href: string } =>
      !!item && typeof item.label === 'string' && typeof item.href === 'string'
  )

  return (
    <footer className="bg-brand-paper border-brand-dark/10 mt-20 border-t">
      {/* Øverste del */}
      <div className="text-brand-text mx-auto grid max-w-6xl gap-10 px-4 py-10 text-sm md:grid-cols-3 md:px-6">
        {/* Kolonne 1 – Firma info */}
        <div>
          <p className="mb-2 text-base font-bold">{settings?.siteTitle || 'Dansk Boliglån'}</p>

          {settings?.address && (
            <p className="text-brand-text/80 leading-relaxed">{settings.address}</p>
          )}
        </div>

        {/* Kontakt */}
        <div>
          <p className="mb-2 text-base font-bold">Kontakt</p>

          {settings?.phone && <p className="text-brand-text/80">Telefon: {settings.phone}</p>}

          {settings?.email && <p className="text-brand-text/80">Email: {settings.email}</p>}
        </div>

        {/* Links */}
        <div>
          <p className="mb-2 text-base font-bold">Links</p>

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
      <div className="bg-brand-dark text-brand-card py-4 text-center text-xs">
        © {year} {settings?.siteTitle || 'Dansk Boliglån'}. Alle rettigheder forbeholdes.
      </div>
    </footer>
  )
}
