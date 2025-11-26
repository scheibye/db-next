type UspItem = {
  title: string;
  description?: string;
  icon?: string;
};

type UspSectionProps = {
  title?: string;
  items: UspItem[];
};

export function UspSection({ title, items }: UspSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 px-4 md:py-16 md:px-8 bg-brand-paper">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-brand-dark">
            {title}
          </h2>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card border border-brand-dark/10 shadow-sm transition hover:shadow-lg"
            >
              {item.icon && (
                <div
                  className="text-3xl mb-4 text-brand-primary flex items-center"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
              )}

              <h3 className="font-semibold text-lg text-brand-dark mb-2">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-sm text-brand-text/80 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
