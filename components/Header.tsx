// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/laan-til-boligkoeb", label: "Lån til boligkøb" },
  { href: "/laan-i-frivaerdi", label: "Lån i friværdi" },
  { href: "/artikler", label: "Artikler" },
  { href: "/om-os", label: "Om Os" },
];

export async function Header() {
  return (
    // fuld bredde, transparent, ligger ovenpå hero
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1900px] px-[10px] h-[150px] flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-container.svg"
            alt="Dansk Boliglån"
            width={310}
            height={150}
            className="w-[310px] h-[150px] object-contain"
            priority
          />
        </Link>

        {/* nav */}
        <nav className="flex items-center gap-16 text-brand-card text-base font-medium">
          <Link className="hover:text-brand-spring" href="/laan-til-boligkoeb">
            Lån til boligkøb
          </Link>
          <Link className="hover:text-brand-spring" href="/laan-i-frivaerdi">
            Lån i friværdi
          </Link>
          <Link className="hover:text-brand-spring" href="/artikler">
            Artikler
          </Link>
          <Link className="hover:text-brand-spring" href="/om-os">
            Om Os
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="#loan-form"
          className="flex items-center justify-center w-[274px] h-[70px] rounded-[96px]
                     border-[3px] border-brand-spring text-brand-card bg-transparent
                     hover:bg-brand-dusk/70 transition"
        >
          Start låneansøgning
        </a>
      </div>
    </header>
  );
}