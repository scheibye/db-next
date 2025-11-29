import { cn } from '@/lib/utils'

export function ScrollSnapContainer({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        '-mx-padding-x flex w-[calc(100%+var(--spacing-padding-x)*2)] snap-x snap-mandatory gap-2.5 overflow-x-auto px-7 py-6 lg:mx-0 lg:grid lg:w-full lg:snap-none lg:grid-cols-2 lg:gap-6 lg:px-0',
        '*:w-full *:shrink-0 *:snap-center *:md:w-3/4 *:lg:w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 
