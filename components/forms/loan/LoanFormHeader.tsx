import { cn } from '@/lib/utils'

export function LoanFormHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mb-8 text-left md:mb-12', className)}>{children}</div>
}

export function LoanFormHeaderTitle({
  className,
  children,
  isOptional = false,
}: {
  isOptional?: boolean
} & React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'mb-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-4xl leading-tight xl:text-5xl',
        className
      )}
    >
      <span>{children}</span>
      {isOptional && (
        <span className="text-brand-dark bg-brand-spring rounded-full px-4 py-1.5 text-base font-medium sm:py-2.5">
          Valgfrit
        </span>
      )}
    </h2>
  )
}

export function LoanFormHeaderDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={cn('text-xl duration-500 md:text-2xl', className)}>{children}</p>
}
