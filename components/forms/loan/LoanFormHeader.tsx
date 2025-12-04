import { cn } from '@/lib/utils'

export function LoanFormHeader({
  className,
  title,
  description,
  isOptional = false,
}: {
  className?: string
  title: string
  description: string
  isOptional?: boolean
}) {
  return (
    <div className={cn('mb-8 text-left md:mb-12', className)}>
      <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 className="text-4xl leading-tight xl:text-5xl">{title}</h2>
        {isOptional && (
          <span className="text-brand-dark bg-brand-spring rounded-full px-4 py-1.5 font-medium sm:py-2.5">
            Valgfrit
          </span>
        )}
      </div>

      <p className="text-xl md:text-2xl">{description}</p>
    </div>
  )
}
