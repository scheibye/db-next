type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

export function HeroSection(props: HeroProps) {
  const { eyebrow, title, subtitle, primaryCtaHref, primaryCtaLabel } = props;

  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {eyebrow && (
          <p className="text-sm font-semibold text-sky-700 mb-2 uppercase tracking-wide">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-slate-700 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}
        {primaryCtaLabel && primaryCtaHref && (
          <a
            href={primaryCtaHref}
            className="inline-flex items-center px-6 py-3 rounded-full border border-transparent text-base font-medium bg-sky-600 text-white hover:bg-sky-700"
          >
            {primaryCtaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
