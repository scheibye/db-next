'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BaseCheckbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer border-brand-border size-4 cursor-pointer rounded-sm border transition-all',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-brand-dark focus-visible:ring-brand-dark/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-brand-destructive/20 aria-invalid:border-brand-destructive',
        'data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary',
        className
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current transition-none"
        data-slot="checkbox-indicator"
      >
        <CheckIcon className="text-brand-card size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
