import { cn } from '@/lib/utils'

export function LoanFormHeader({
  className,
  title,
  description,
}: {
  className?: string
  title: string
  description: string
}) {
  return (
    <div className={cn('mb-8 text-left md:mb-12', className)}>
      <h2 className="mb-5 text-4xl xl:text-5xl">{title}</h2>
      <p className="text-xl md:text-2xl">{description}</p>
    </div>
  )
}
