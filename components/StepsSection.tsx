type Step = {
  label: string
  description?: string
}

type StepsSectionProps = {
  title?: string
  subtitle?: string
  steps: Step[]
}

export function StepsSection({ title, subtitle, steps }: StepsSectionProps) {
  if (!steps || steps.length === 0) return null

  return (
    <section className="bg-brand-card/50 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        {title && <h2 className="mb-8 text-2xl font-bold md:text-3xl">{title}</h2>}
        {subtitle && <h3 className="text-brand-text/80 mt-2 text-sm md:text-base">{subtitle}</h3>}

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className="border-brand-dark/10 relative rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-brand-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-semibold md:text-base">{step.label}</h3>
              </div>

              {step.description && (
                <p className="text-brand-text/80 text-xs leading-relaxed md:text-sm">
                  {step.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
