// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/laan-til-boligkoeb", label: "Lån til boligkøb" },
  { href: "/laan-i-frivaerdi", label: "Lån i friværdi" },
  { href: "/artikler", label: "Artikler" },
  { href: "/om-os", label: "Om Os" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      {/* 1900 + 10px margins matcher hero */}
      <div className="mx-auto max-w-[1900px] px-[10px] w-full">
        <div className="flex h-[150px] items-center justify-between">
          {/* Logo-blok (samlet SVG med grøn baggrund i filen) */}
          <Link href="/" className="block">
            <Image
              src="/logo-container.svg"
              alt="Dansk Boliglån"
              width={310}
              height={150}
              priority
              className="block w-[310px] h-[150px] object-contain"
            />
          </Link>

          {/* Navigation – hvid tekst, lidt tracking */}
          <nav className="flex items-center gap-16 text-[15px] font-medium text-brand-card">
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
            className="flex items-center justify-center w-[274px] h-[70px]
                       rounded-[96px] border-[3px] border-brand-spring
                       text-[15px] font-medium text-brand-card
                       bg-transparent hover:bg-brand-dark/40 transition-colors"
          >
            Start låneansøgning
          </a>
        </div>
      </div>
    </header>
  );
}
