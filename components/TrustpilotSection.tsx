// components/TrustpilotSection.tsx
type TrustpilotSectionProps = {
  title?: string;
  ratingText?: string;
  stars?: number;
};

export function TrustpilotSection({
  title,
  ratingText,
  stars = 5,
}: TrustpilotSectionProps) {
  const clampedStars = Math.max(0, Math.min(5, stars));
  const fullStars = "★".repeat(clampedStars);
  const emptyStars = "☆".repeat(5 - clampedStars);

  return (
    <section className="py-8 px-4 bg-brand-card">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl bg-brand-dark px-6 py-4 text-brand-card shadow-sm">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-spring">
              Trustpilot
            </p>
            {title && (
              <h2 className="mt-1 text-base md:text-lg font-semibold">
                {title}
              </h2>
            )}
            {ratingText && (
              <p className="mt-1 text-xs md:text-sm text-brand-card/80">
                {ratingText}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="text-lg leading-none">
              <span className="text-brand-spring">{fullStars}</span>
              <span className="text-brand-card/30">{emptyStars}</span>
            </div>
            {typeof stars === "number" && (
              <p className="text-xs text-brand-card/70">
                {stars.toFixed(1).replace(".", ",")} / 5
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
