'use client'

import { useMemo } from 'react'
import { BaseLabel } from '@/components/ui/BaseLabel'
import { cn } from '@/lib/utils'

export function BaseField({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group/field data-[invalid=true]:text-brand-destructive flex w-full flex-col gap-2',
        className
      )}
      role="group"
      data-slot="field"
      {...props}
    />
  )
}

export function BaseFieldLabel({ className, ...props }: React.ComponentProps<typeof BaseLabel>) {
  return (
    <BaseLabel
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
        className
      )}
      data-slot="field-label"
      {...props}
    />
  )
}

export function BaseFieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      className={cn('text-brand-destructive text-base font-medium', className)}
      role="alert"
      data-slot="field-error"
      {...props}
    >
      {content}
    </div>
  )
}
