import * as React from 'react'
import { cn } from '@/lib/utils'

export function BaseTextarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'placeholder:text-brand-dark/50 border-brand-border disabled:bg-brand-border min-h-28 w-full min-w-0 resize-none rounded-xl border bg-transparent px-5 py-2 text-base font-medium transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
        'focus-visible:border-brand-dark focus-visible:ring-brand-dark/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-brand-destructive/20 aria-invalid:border-brand-destructive',
        className
      )}
      data-slot="textarea"
      {...props}
    />
  )
}
