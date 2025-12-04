// Currently this component is unused
// But it will be used in the future when we add one more form to the hero

'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

function HeroFormTabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn('', className)} data-slot="tabs" {...props} />
}

function HeroFormTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn('grid grid-cols-2', className)}
      data-slot="tabs-list"
      {...props}
    />
  )
}

function HeroFormTabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'group data-[state=active]:bg-brand-dark dark:data-[state=active]:text-brand-card text-brand-dark bg-brand-spring relative cursor-pointer px-4 py-4 text-base font-medium first:rounded-tl-3xl last:rounded-tr-3xl md:py-5 md:text-lg md:first:rounded-tl-4xl md:last:rounded-tr-4xl',
        className
      )}
      data-slot="tabs-trigger"
      {...props}
    >
      {/* Arrow icon */}
      <svg
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-data-[state=active]:opacity-100"
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
    </TabsPrimitive.Trigger>
  )
}

function HeroFormTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn('bg-brand-card px-5 py-9 md:px-9 md:py-13', className)}
      data-slot="tabs-content"
      {...props}
    />
  )
}

export { HeroFormTabs, HeroFormTabsList, HeroFormTabsTrigger, HeroFormTabsContent }
