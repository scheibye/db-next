// components/CtaProductsSection.tsx
type CtaProductItem = {
  title: string
  description?: string
  href?: string
  badge?: string
}

type CtaProductsSectionProps = {
  title?: string
  subtitle?: string
  items?: CtaProductItem[]
}

export function CtaProductsSection({ title, subtitle, items = [] }: CtaProductsSectionProps) {
  if (!items.length) return null

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        {title && <h2 className="mb-2 text-2xl font-semibold md:text-3xl">{title}</h2>}
        {subtitle && <p className="text-brand-text/80 mb-6 text-sm md:text-base">{subtitle}</p>}

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => {
            const content = (
              <div className="border-brand-dark/10 bg-brand-card flex h-full flex-col gap-2 rounded-2xl border px-6 py-5">
                {item.badge && (
                  <span className="bg-brand-spring/20 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                {item.description && (
                  <p className="text-brand-text/80 text-sm">{item.description}</p>
                )}
              </div>
            )

            return item.href ? (
              <a key={idx} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={idx}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
