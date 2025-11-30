import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

function BaseBreadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BaseBreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      className={cn(
        'text-brand-dark bg-brand-spring flex flex-wrap items-center gap-1.5 px-(--container-padding) py-2 text-sm wrap-break-word',
        className
      )}
      data-slot="breadcrumb-list"
      {...props}
    />
  )
}

function BaseBreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5 underline underline-offset-2 hover:no-underline', className)}
      {...props}
    />
  )
}

function BaseBreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

function BaseBreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-foreground font-normal', className)}
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...props}
    />
  )
}

function BaseBreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('[&>svg]:size-3.5', className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BaseBreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('flex size-9 items-center justify-center', className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  BaseBreadcrumb,
  BaseBreadcrumbList,
  BaseBreadcrumbItem,
  BaseBreadcrumbLink,
  BaseBreadcrumbPage,
  BaseBreadcrumbSeparator,
  BaseBreadcrumbEllipsis,
}
