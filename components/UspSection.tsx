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
    <section className="py-12 px-4 md:py-16 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">
            {title}
          </h2>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50"
            >
              {item.icon && (
                <div className="text-2xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-slate-700">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
