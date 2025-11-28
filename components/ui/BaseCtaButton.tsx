import * as React from 'react'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { LinkProps } from 'next/link'
import type { VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'group overflow-hidden inline-flex items-center font-medium rounded-full cursor-pointer text-brand-card',
  {
    variants: {
      variant: {
        default:
          '[&>[data-slot="icon"]]:bg-brand-dusk [&>[data-slot="icon"]>svg]:fill-brand-primary',
        light: '[&>[data-slot="icon"]]:bg-brand-card [&>[data-slot="icon"]>svg]:fill-brand-dark',
      },
      size: {
        md: 'h-16 sm:h-17.5 text-lg sm:text-xl md:text-2xl',
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
    href?: LinkProps['href']
  }) {
  if (href) {
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }))}
        href={href}
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
      className="bg-brand-primary group-hover:bg-brand-primary-soft group-hover:text-brand-dark inline-flex h-full grow items-center px-10 transition-all duration-300 xl:px-12"
      data-slot="text"
    >
      {children}
    </span>
  )
}

function BaseCtaButtonIcon() {
  return (
    <span className="inline-flex h-full w-16 shrink-0 items-center sm:w-17.5" data-slot="icon">
      <svg
        className="group-hover:fill-brand-primary-soft! size-10 shrink-0 transition-all duration-300 group-hover:translate-x-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 38"
      >
        <path d="M41.262 19.764 25.05 36.95c-.293.391-.782.489-1.172.489s-.781-.098-1.074-.391a1.453 1.453 0 0 1-.098-2.148l13.672-14.649H0v-3.125h36.379L22.707 2.577a1.453 1.453 0 0 1 .098-2.149c.683-.586 1.66-.586 2.246.098l16.21 17.187c.587.586.587 1.465 0 2.05" />
      </svg>
    </span>
  )
}
