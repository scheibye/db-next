import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

const alertVariants = cva(
  'relative w-full rounded-lg px-4 py-4 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-0.5 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-brand-spring text-brand-dark',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export function BaseAlert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

export function BaseAlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight', className)}
      {...props}
    />
  )
}

export function BaseAlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-brand-dark col-start-2 grid justify-items-start gap-1 text-base [&_p]:leading-relaxed [&_strong]:font-semibold',
        className
      )}
      {...props}
    />
  )
}
