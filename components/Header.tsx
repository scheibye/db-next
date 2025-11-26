import Link from "next/link";
import type { Settings } from "@/lib/settings";

type HeaderProps = {
  settings: Settings | null;
};

export function Header({ settings }: HeaderProps) {
  const navItems =
  (settings?.navigation || []).filter(
    (item): item is { label: string; href: string } =>
      !!item && typeof item.label === "string" && typeof item.href === "string"
  );
  const logoText = settings?.logoText || settings?.siteTitle || "Dansk Boliglån";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg md:text-xl font-bold text-slate-900">
          {logoText}
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
