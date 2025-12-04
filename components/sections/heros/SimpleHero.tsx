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
  BaseBreadcrumbPage,
  BaseBreadcrumbSeparator,
} from '@/components/ui/BaseBreadcrumb'
import { cn } from '@/lib/utils'

export function SimpleHero({
  className,
  breadcrumbs,
  label,
  title,
  withTrustpilot = false,
}: {
  className?: string
  breadcrumbs?: Array<{ label: string; href: string }>
  label: string
  title: string
  withTrustpilot?: boolean
}) {
  return (
    <div
      className={cn(
        'bg-brand-dark relative -mx-(--spacing-global-padding) max-h-175 pt-12 pb-24 lg:mx-0 xl:h-[calc(100dvh-var(--spacing-global-padding)*2)] xl:pt-0 xl:pb-44',
        breadcrumbs ? 'pb-24' : 'pb-12',
        className
      )}
    >
      <SectionContainer className="xl:h-full" noPadding={true}>
        <SectionContainerInner className="xl:h-full">
          <div className="lg:col-start-2 lg:col-end-12 lg:self-end xl:flex xl:items-end xl:justify-between">
            <div>
              <div className="text-brand-primary-soft mb-2.5 text-lg font-semibold sm:text-2xl lg:mb-5">
                {label}
              </div>

              <h1 className="text-brand-card text-4xl leading-tight font-medium text-balance md:text-5xl xl:text-7xl 2xl:text-8xl">
                {title}
              </h1>
            </div>

            {/* Trustpilot widget */}
            {withTrustpilot && (
              <div className="hidden xl:block">
                <div
                  className="trustpilot-widget"
                  data-locale="da-DK"
                  data-template-id="53aa8807dec7e10d38f59f32"
                  data-businessunit-id="5ed6a20389c572000158ee34"
                  data-token="1a6834da-1b77-4f9f-98e8-bac56ad3f87e"
                  data-style-width="255px"
                  data-style-height="120px"
                  data-theme="dark"
                />
              </div>
            )}
          </div>
        </SectionContainerInner>
      </SectionContainer>

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <BaseBreadcrumb className="absolute bottom-0 left-0 z-3">
          <BaseBreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <Fragment key={item.label}>
                <BaseBreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BaseBreadcrumbPage>{item.label}</BaseBreadcrumbPage>
                  ) : (
                    <BaseBreadcrumbLink href={item.href}>{item.label}</BaseBreadcrumbLink>
                  )}
                </BaseBreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BaseBreadcrumbSeparator />}
              </Fragment>
            ))}
          </BaseBreadcrumbList>
        </BaseBreadcrumb>
      )}
    </div>
  )
}
