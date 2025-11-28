import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

const linkVariants = cva(
  'border-b-[5px] pb-1.5 text-base transition-all sm:text-xl hover:border-brand-primary-soft',
  {
    variants: {
      variant: {
        default: 'border-brand-text',
        light: 'border-brand-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export function BaseLinkUnderline({
  children,
  className,
  href,
  variant,
}: VariantProps<typeof linkVariants> & {
  className?: string
  href: string
  children: React.ReactNode
}) {
  return (
    <Link className={cn(linkVariants({ variant, className }))} href={href as any}>
      {children}
    </Link>
  )
}
