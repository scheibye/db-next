import * as React from 'react'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { IconCustomArrowRight } from '@/components/icons/IconCustomArrowRight'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'group overflow-hidden inline-flex items-center font-medium rounded-full cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          '[&>[data-slot="text"]]:group-disabled:bg-brand-primary [&>[data-slot="text"]]:group-disabled:text-brand-card [&>[data-slot="text"]]:group-hover:bg-brand-primary-soft [&>[data-slot="text"]]:group-hover:text-brand-dark [&>[data-slot="text"]]:text-brand-card [&>[data-slot="text"]]:bg-brand-primary [&>[data-slot="icon"]]:bg-brand-dusk [&>[data-slot="icon"]>svg]:fill-brand-primary',
        light:
          '[&>[data-slot="text"]]:group-disabled:bg-brand-primary [&>[data-slot="text"]]:group-disabled:text-brand-card [&>[data-slot="text"]]:group-hover:bg-brand-primary-soft [&>[data-slot="text"]]:group-hover:text-brand-dark [&>[data-slot="text"]]:text-brand-card [&>[data-slot="text"]]:bg-brand-primary [&>[data-slot="icon"]]:bg-brand-card [&>[data-slot="icon"]>svg]:fill-brand-dark',
        ghost:
          '[&>[data-slot="text"]]:text-brand-dark [&>[data-slot="text"]]:bg-transparent [&>[data-slot="icon"]]:bg-transparent [&>[data-slot="icon"]>svg]:fill-brand-primary',
      },
      size: {
        md: 'h-14 sm:h-17.5 text-lg sm:text-xl 2xl:text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export function BaseCtaButton({
  className,
  children,
  variant,
  href,
  size,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    href?: string
  }) {
  if (href) {
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }))}
        href={href as any}
        data-slot="button"
      >
        <BaseCtaButtonText>{children}</BaseCtaButtonText>
        <BaseCtaButtonIcon />
      </Link>
    )
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    >
      <BaseCtaButtonText>{children}</BaseCtaButtonText>
      <BaseCtaButtonIcon />
    </button>
  )
}

function BaseCtaButtonText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex h-full grow items-center justify-center px-6 text-center transition-all xl:px-8 2xl:px-12"
      data-slot="text"
    >
      {children}
    </span>
  )
}

function BaseCtaButtonIcon() {
  return (
    <span className="inline-flex h-full w-16 shrink-0 items-center sm:w-17.5" data-slot="icon">
      <IconCustomArrowRight className="group-hover:fill-brand-primary-soft! group-disabled:fill-brand-primary! size-10 shrink-0 transition-all group-hover:translate-x-3 group-disabled:translate-x-0" />
    </span>
  )
}
