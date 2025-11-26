// components/AboutUsSection.tsx
import Image from "next/image";

type AboutUsSectionProps = {
  title?: string;
  subtitle?: string;
  body?: any;
  imageUrl?: string;
};

export function AboutUsSection({
  title,
  subtitle,
  body,
  imageUrl,
}: AboutUsSectionProps) {
  return (
    <section className="py-12 px-4 bg-brand-card/60">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="grid md:grid-cols-2 gap-10 items-center rounded-[30px] bg-white px-8 py-10 shadow-sm">
          <div className="space-y-4">
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm md:text-base text-brand-text/80">
                {subtitle}
              </p>
            )}
            {body && (
              <div className="prose prose-sm md:prose-base max-w-none">
                {/* simpelt render af Portable Text */}
                {(body as any[])?.map((block, idx) => {
                  if (block._type === "block") {
                    return (
                      <p key={idx}>
                        {block.children?.map((child: any) => child.text).join("")}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>

          {imageUrl && (
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-[24px] overflow-hidden">
              <Image
                src={imageUrl}
                alt={title || "Om os"}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
