type UspItem = {
  title: string
  description?: string
  icon?: string
}

type UspSectionProps = {
  title?: string
  items: UspItem[]
}

export function UspSection({ title, items }: UspSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <section className="bg-brand-paper px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="text-brand-dark mb-10 text-2xl font-bold md:text-3xl">{title}</h2>}

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-card border-brand-dark/10 rounded-2xl border p-6 shadow-sm transition hover:shadow-lg"
            >
              {item.icon && (
                <div
                  className="text-brand-primary mb-4 flex items-center text-3xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
              )}

              <h3 className="text-brand-dark mb-2 text-lg font-semibold">{item.title}</h3>

              {item.description && (
                <p className="text-brand-text/80 text-sm leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
