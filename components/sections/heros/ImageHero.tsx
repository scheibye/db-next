import { Fragment } from 'react'
import Image from 'next/image'
import {
  BaseBreadcrumb,
  BaseBreadcrumbItem,
  BaseBreadcrumbLink,
  BaseBreadcrumbList,
  BaseBreadcrumbSeparator,
} from '@/components/ui/BaseBreadcrumb'

const breadcrumbItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Artikler',
    href: '/artikler',
  },
]

export function ImageHero() {
  return (
    <section className="relative -mx-(--spacing-global-padding) max-h-175 pb-[80%] sm:pb-[50%] lg:mx-0 xl:h-[calc(100dvh-var(--spacing-global-padding)*2)] xl:min-h-128 xl:pb-0">
      <Image className="z-1 object-cover" src="/sections/hero/image-hero-1.jpg" fill alt="" />

      {/* Gradient overlay */}
      <div
        className="after:to-brand-dark before:bg-brand-dark/30 absolute inset-0 z-2 before:absolute before:inset-0 before:z-2 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:opacity-60"
        role="presentation"
        aria-hidden="true"
      />

      {/* Breadcrumbs */}
      <BaseBreadcrumb className="absolute bottom-0 left-0 z-3">
        <BaseBreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <Fragment key={item.label}>
              <BaseBreadcrumbItem>
                <BaseBreadcrumbLink href={item.href}>{item.label}</BaseBreadcrumbLink>
              </BaseBreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BaseBreadcrumbSeparator />}
            </Fragment>
          ))}
        </BaseBreadcrumbList>
      </BaseBreadcrumb>
    </section>
  )
}
