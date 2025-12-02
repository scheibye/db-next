import { Fragment } from 'react'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
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
    label: 'Om os',
    href: '/om-os',
  },
]

export function SimpleHero({ label, title }: { label: string; title: string }) {
  return (
    <div className="bg-brand-dark relative -mx-(--spacing-global-padding) max-h-175 pt-12 pb-24 lg:mx-0 xl:h-[calc(100dvh-var(--spacing-global-padding)*2)] xl:pt-0 xl:pb-44">
      <SectionContainer className="xl:h-full" noPadding={true}>
        <SectionContainerInner className="xl:h-full">
          <div className="lg:col-start-2 lg:col-end-11 lg:self-end">
            <div className="text-brand-primary-soft mb-6 text-lg font-semibold sm:text-2xl">
              {label}
            </div>

            <h1 className="text-brand-card text-4xl leading-tight font-medium text-balance md:text-5xl xl:text-[70px] xl:leading-[80px]">
              {title}
            </h1>
          </div>
        </SectionContainerInner>
      </SectionContainer>

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
    </div>
  )
}
