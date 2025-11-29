import { cn } from '@/lib/utils'

export function SectionContainer({
  children,
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={cn('max-w-container mx-auto py-8 md:py-18', className)} {...props}>
      {children}
    </section>
  )
}

export function SectionContainerInner({
  children,
  className,
  withImage,
  ...props
}: React.ComponentProps<'div'> & {
  withImage?: 'left' | 'right' | 'center'
}) {
  return (
    <div
      className={cn(
        'relative grid gap-10 px-(--container-padding) lg:grid-cols-12 lg:gap-6',
        '**:bg-image:max-w-none',
        '**:bg-image:-inset-x-(--container-padding)! **:bg-image:w-[calc(100%+var(--container-padding)*2)]!',

        // Content
        !withImage && '**:lg:bg-image:inset-x-auto! **:lg:bg-image:w-full!',

        // Image
        (withImage === 'left' || withImage === 'right') &&
          '**:bg-image:xl:w-[calc(100%+var(--container-padding))]!',

        withImage === 'left' && '**:bg-image:xl:right-0!',
        withImage === 'right' && '**:bg-image:xl:left-0!',

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
