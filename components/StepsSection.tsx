type Step = {
  label: string;a
  description?: string;
};

type StepsSectionProps = {
  title?: string;
  subtitle?: string;
  steps: Step[];
};

export function StepsSection({ title, steps }: StepsSectionProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-12 px-4 md:py-16 md:px-8 bg-brand-card/50">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand-dark">
            {title}
          </h2>
        )}
         {subtitle && (
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brand-dark">
            {subtitle}
          </h3>
        )}

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className="relative p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-brand-dark text-sm md:text-base">
                  {step.label}
                </h3>
              </div>

              {step.description && (
                <p className="text-xs md:text-sm text-brand-text/80 leading-relaxed">
                  {step.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
