// components/TrustpilotSection.tsx
type TrustpilotSectionProps = {
  title?: string
  ratingText?: string
  stars?: number
}

export function TrustpilotSection({ title, ratingText, stars = 5 }: TrustpilotSectionProps) {
  const clampedStars = Math.max(0, Math.min(5, stars))
  const fullStars = '★'.repeat(clampedStars)
  const emptyStars = '☆'.repeat(5 - clampedStars)

  return (
    <section className="bg-brand-card px-4 py-8">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="bg-brand-dark text-brand-card flex flex-col items-center justify-between gap-4 rounded-3xl px-6 py-4 shadow-sm md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-brand-spring text-xs font-semibold tracking-wide uppercase">
              Trustpilot
            </p>
            {title && <h2 className="mt-1 text-base font-semibold md:text-lg">{title}</h2>}
            {ratingText && (
              <p className="text-brand-card/80 mt-1 text-xs md:text-sm">{ratingText}</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-1 md:items-end">
            <div className="text-lg leading-none">
              <span className="text-brand-spring">{fullStars}</span>
              <span className="text-brand-card/30">{emptyStars}</span>
            </div>
            {typeof stars === 'number' && (
              <p className="text-brand-card/70 text-xs">{stars.toFixed(1).replace('.', ',')} / 5</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
