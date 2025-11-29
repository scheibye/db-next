'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { PlusIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function FaqAccordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function FaqAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item className={cn('', className)} data-slot="accordion-item" {...props} />
  )
}

function FaqAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-lg transition-all outline-none hover:underline',
          className
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <div className="bg-brand-spring grid size-10 shrink-0 place-items-center rounded-xl">
          <PlusIcon className="text-brand-dark pointer-events-none size-7 stroke-[1.25px] transition-transform group-data-[state=open]:rotate-45" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function FaqAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { FaqAccordion, FaqAccordionItem, FaqAccordionTrigger, FaqAccordionContent }
