// components/ApplyNowSection.tsx
type ApplyNowSectionProps = {
  title?: string;
  subtitle?: string;
  bulletPoints?: string[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  phone?: string;
};

export function ApplyNowSection({
  title,
  subtitle,
  bulletPoints = [],
  primaryCtaLabel = "Ansøg nu",
  primaryCtaHref = "#loan-form",
  phone,
}: ApplyNowSectionProps) {
  return (
    <section className="py-12 px-4 bg-brand-card">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="rounded-[30px] bg-brand-dark text-brand-card px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm md:text-base text-brand-card/80">
                {subtitle}
              </p>
            )}
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
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-primary text-white text-sm md:text-base font-medium hover:bg-brand-primary-soft transition"
            >
              {primaryCtaLabel}
            </a>
            {phone && (
              <p className="text-xs md:text-sm text-brand-card/80">
                Eller ring til os på{" "}
                <a href={`tel:${phone}`} className="underline">
                  {phone}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
