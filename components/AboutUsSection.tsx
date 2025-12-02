/* eslint-disable @typescript-eslint/no-explicit-any */

// components/AboutUsSection.tsx
import Image from 'next/image'

type AboutUsSectionProps = {
  title?: string
  subtitle?: string
  body?: any
  imageUrl?: string
}

export function AboutUsSection({ title, subtitle, body, imageUrl }: AboutUsSectionProps) {
  return (
    <section className="bg-brand-card/60 px-4 py-12">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        <div className="grid items-center gap-10 rounded-[30px] bg-white px-8 py-10 shadow-sm md:grid-cols-2">
          <div className="space-y-4">
            {title && <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>}
            {subtitle && <p className="text-brand-text/80 text-sm md:text-base">{subtitle}</p>}
            {body && (
              <div className="prose prose-sm md:prose-base max-w-none">
                {/* simpelt render af Portable Text */}
                {(body as any[])?.map((block, idx) => {
                  if (block._type === 'block') {
                    return (
                      <p key={idx}>{block.children?.map((child: any) => child.text).join('')}</p>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </div>

          {imageUrl && (
            <div className="relative h-64 w-full overflow-hidden rounded-[24px] md:h-80 lg:h-96">
              <Image src={imageUrl} alt={title || 'Om os'} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
