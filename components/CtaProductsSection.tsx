// components/CtaProductsSection.tsx
type CtaProductItem = {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
};

type CtaProductsSectionProps = {
  title?: string;
  subtitle?: string;
  items?: CtaProductItem[];
};

export function CtaProductsSection({
  title,
  subtitle,
  items = [],
}: CtaProductsSectionProps) {
  if (!items.length) return null;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm md:text-base text-brand-text/80 mb-6">
            {subtitle}
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => {
            const content = (
              <div className="h-full rounded-2xl border border-brand-dark/10 bg-brand-card px-6 py-5 flex flex-col gap-2">
                {item.badge && (
                  <span className="inline-flex items-center rounded-full bg-brand-spring/20 text-brand-dark text-[11px] px-3 py-1 font-medium">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-base md:text-lg font-semibold text-brand-dark">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-brand-text/80">
                    {item.description}
                  </p>
                )}
              </div>
            );

            return item.href ? (
              <a key={idx} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={idx}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
