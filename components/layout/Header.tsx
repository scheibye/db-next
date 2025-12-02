'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { XIcon } from 'lucide-react'
import { IconCustomMenu } from '@/components/icons/IconCustomMenu'
import { SectionContainer } from '@/components/layout/containers/SectionContainer'
import { BaseLogo } from '@/components/ui/BaseLogo'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/laan-til-boligkoeb', label: 'Lån til boligkøb' },
  { href: '/laan-i-frivaerdi', label: 'Lån i friværdi' },
  { href: '/artikler', label: 'Artikler' },
  { href: '/om-os', label: 'Om Os' },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-brand-dark -mt-global-padding -mx-global-padding xl:z-header xl:inset-x-global-padding xl:top-global-padding lg:mx-0 lg:mt-0 xl:absolute xl:h-25 xl:bg-transparent 2xl:h-37.5">
      <SectionContainer className="xl:h-full" noPadding={true}>
        <div className="relative xl:flex xl:h-full xl:items-center xl:justify-end xl:px-(--container-padding) 2xl:justify-center">
          {/* Logo */}
          <Link
            className="absolute bottom-9 left-7.5 xl:top-0 xl:bottom-auto xl:left-0 xl:h-full"
            href="/"
          >
            <Image
              className="hidden size-full object-cover transition-all duration-200 xl:block"
              src="/layout/header-logo.svg"
              preload={true}
              width={428}
              height={150}
              alt="Dansk Boliglån"
            />

            <BaseLogo className="fill-brand-spring block h-17 w-34 xl:hidden" />
          </Link>

          {/* Mobile pattern */}
          <Image
            className="ml-auto xl:hidden"
            src="/layout/header-mobile-pattern.svg"
            preload={true}
            width={174}
            height={174}
            alt=""
          />

          {/* Mobile menu button */}
          <button
            className="bg-brand-dark absolute right-3.5 bottom-3 rounded-full px-5 py-2.5 xl:hidden"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <IconCustomMenu className="fill-brand-spring h-4.75 w-5.5" />
          </button>

          {/* Navigation */}
          <div
            className={cn(
              'bg-brand-dark invisible fixed inset-0 z-[calc(var(--z-index-header)+1)] flex h-dvh flex-col items-center justify-center gap-10 opacity-0 xl:visible! xl:static xl:h-auto xl:flex-row xl:bg-transparent xl:opacity-100!',
              isMenuOpen && 'visible opacity-100 transition-all duration-200'
            )}
          >
            <nav className="3xl:gap-20 3xl:text-[1.375rem] flex flex-col items-center gap-6 text-center text-xl whitespace-nowrap xl:flex-row xl:gap-14">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    'hover:border-b-brand-spring text-brand-card border-y-3 border-transparent pb-1 transition-colors',
                    pathname === item.href && 'border-b-brand-spring'
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center 2xl:absolute 2xl:right-(--container-padding)">
              <Link
                className="border-brand-spring text-brand-card hover:bg-brand-spring hover:text-brand-dark 3xl:text-[1.375rem] rounded-full border-3 bg-transparent px-9 py-4 text-xl whitespace-nowrap transition-colors"
                href="/form"
              >
                Start låneansøgning
              </Link>
            </div>

            {/* Mobile menu close button */}
            <button
              className="absolute top-2 right-2 p-2 xl:hidden"
              type="button"
              onClick={() => setIsMenuOpen(false)}
            >
              <XIcon className="text-brand-spring size-8" />
            </button>
          </div>
        </div>
      </SectionContainer>
    </header>
  )
}
