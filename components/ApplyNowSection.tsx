// components/ApplyNowSection.tsx
type ApplyNowSectionProps = {
  title?: string
  subtitle?: string
  bulletPoints?: string[]
  primaryCtaLabel?: string
  primaryCtaHref?: string
  phone?: string
}

export function ApplyNowSection({
  title,
  subtitle,
  bulletPoints = [],
  primaryCtaLabel = 'Ansøg nu',
  primaryCtaHref = '#loan-form',
  phone,
}: ApplyNowSectionProps) {
  return (
    <section className="bg-brand-card px-4 py-12">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="bg-brand-dark text-brand-card flex flex-col items-start justify-between gap-8 rounded-[30px] px-8 py-10 md:flex-row md:items-center">
          <div className="max-w-xl space-y-3">
            {title && <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>}
            {subtitle && <p className="text-brand-card/80 text-sm md:text-base">{subtitle}</p>}
            {bulletPoints.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm md:text-base">
                {bulletPoints.map((bp, idx) => (
                  <li key={idx}>• {bp}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col items-start gap-3">
            <a
              href={primaryCtaHref}
              className="bg-brand-primary hover:bg-brand-primary-soft inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition md:text-base"
            >
              {primaryCtaLabel}
            </a>
            {phone && (
              <p className="text-brand-card/80 text-xs md:text-sm">
                Eller ring til os på{' '}
                <a href={`tel:${phone}`} className="underline">
                  {phone}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
