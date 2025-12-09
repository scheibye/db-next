import * as React from 'react'
import { cn } from '@/lib/utils'

export function BaseInput({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'placeholder:text-brand-dark/50 border-brand-border h-14 w-full min-w-0 rounded-xl border bg-transparent px-5 py-1 text-base font-medium transition-all outline-none',
        'disabled:bg-brand-border disabled:pointer-events-none disabled:cursor-not-allowed',
        'focus-visible:border-brand-dark focus-visible:ring-brand-dark/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-brand-destructive/20 aria-invalid:border-brand-destructive',
        className
      )}
      type={type}
      data-slot="input"
      {...props}
    />
  )
}
