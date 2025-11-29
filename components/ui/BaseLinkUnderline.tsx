import Link from 'next/link'
import { cn } from '@/lib/utils'

export function BaseLinkUnderline({
  children,
  className,
  href,
  ...props
}: {
  className?: string
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      className={cn('border-b-[5px] pb-1.5 text-base sm:text-xl', className)}
      href={href as any}
      {...props}
    >
      {children}
    </Link>
  )
}
