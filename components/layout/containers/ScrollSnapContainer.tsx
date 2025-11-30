import { cn } from '@/lib/utils'

export function ScrollSnapContainer({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'lg:gap-gutter flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-[calc(var(--container-padding)+var(--spacing-global-padding))] py-6 lg:mx-0 lg:grid lg:w-full lg:snap-none lg:grid-cols-2 lg:px-0',
        '*:w-full *:shrink-0 *:snap-center *:md:w-3/4 *:lg:w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
