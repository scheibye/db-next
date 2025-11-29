import { cn } from '@/lib/utils'

export function SectionContainer({
  children,
  className,
  noPadding,
  ...props
}: React.ComponentProps<'section'> & { noPadding?: boolean }) {
  return (
    <section
      className={cn('max-w-container relative mx-auto', !noPadding && 'py-8 md:py-18', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function SectionContainerInner({
  children,
  className,
  noColumns,
  ...props
}: React.ComponentProps<'div'> & { noColumns?: boolean }) {
  return (
    <div
      className={cn(
        'lg:gap-gutter relative grid gap-10 px-(--container-padding)',
        !noColumns && 'lg:grid-cols-12',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
