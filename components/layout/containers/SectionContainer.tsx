import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export function SectionContainer({
  children,
  className,
  noPadding,
  asChild,
  ...props
}: React.ComponentProps<'div'> & { noPadding?: boolean; asChild?: boolean }) {
  const Comp = asChild ? Slot : 'section'

  return (
    <Comp
      className={cn('max-w-container relative mx-auto', !noPadding && 'py-12 md:py-18', className)}
      {...props}
    >
      {children}
    </Comp>
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
