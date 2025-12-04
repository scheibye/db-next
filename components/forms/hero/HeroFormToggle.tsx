import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cn } from '@/lib/utils'

export function HeroFormToggle({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root className={cn('grid grid-cols-2', className)} {...props}>
      {children}
    </ToggleGroupPrimitive.Root>
  )
}

export function HeroFormToggleItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        'group data-[state=on]:bg-brand-dark data-[state=on]:text-brand-card text-brand-dark bg-brand-spring relative cursor-pointer px-4 py-4 text-base font-medium first:rounded-tl-3xl last:rounded-tr-3xl md:py-5 md:text-lg md:first:rounded-tl-4xl md:last:rounded-tr-4xl',
        className
      )}
      {...props}
    >
      {/* Arrow icon */}
      <svg
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-data-[state=on]:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="26"
        viewBox="0 0 28 26"
      >
        <path
          fill="#00382D"
          d="M17.948 23.048c-1.783 3.09-6.243 3.09-8.027 0L.628 6.952C-1.156 3.862 1.074 0 4.64 0h18.587c3.568 0 5.797 3.862 4.014 6.952z"
        />
      </svg>
      {children}
    </ToggleGroupPrimitive.Item>
  )
}
