// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/laan-til-boligkoeb', label: 'Lån til boligkøb' },
  { href: '/laan-i-frivaerdi', label: 'Lån i friværdi' },
  { href: '/artikler', label: 'Artikler' },
  { href: '/om-os', label: 'Om Os' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      {/* 1900 + 10px margins matcher hero */}
      <div className="mx-auto w-full max-w-[1900px] px-[10px]">
        <div className="flex h-[150px] items-center justify-between">
          {/* Logo-blok (samlet SVG med grøn baggrund i filen) */}
          <Link href="/" className="block">
            <Image
              src="/logo-container.svg"
              alt="Dansk Boliglån"
              width={310}
              height={150}
              priority
              className="block h-[150px] w-[310px] object-contain"
            />
          </Link>

          {/* Navigation – hvid tekst, lidt tracking */}
          <nav className="text-brand-card flex items-center gap-16 text-[15px] font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-spring transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA – 274x70, radius 96, 3px kant, tekst FDFFE6 */}
          <a
            href="#loan-form"
            className="border-brand-spring text-brand-card hover:bg-brand-dark/40 flex h-[70px] w-[274px] items-center justify-center rounded-[96px] border-[3px] bg-transparent text-[15px] font-medium transition-colors"
          >
            Start låneansøgning
          </a>
        </div>
      </div>
    </header>
  )
}
