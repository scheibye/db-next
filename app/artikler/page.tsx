import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BlogCard } from '@/components/sections/blog/BlogCard'
import { CtaImagePatternSection } from '@/components/sections/CtaImagePatternSection'
import { ImageHero } from '@/components/sections/heros/ImageHero'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

const items = [
  {
    category: 'Boliglån',
    title: 'Gæld til Gældsstyrelsen? Her er dine muligheder',
    author: 'Af Søren Scheibye, CFO @ Dansk Boliglån',
    href: '/boliglån',
    variant: 'dark',
  },
  {
    category: 'Boliglån',
    title: 'Forståelse af forskellen mellem fast og variabel rente',
    author: 'Af Lars Madsen, Økonom @ Dansk Boliglån Af Lars',
    href: '/boliglån',
    variant: 'spring',
  },
  {
    category: 'Boliglån',
    title: 'Forklaring på friværdi og hvordan du låner op i den',
    author: 'Af Lars Madsen, Økonom @ Dansk Boliglån',
    href: '/boliglån',
    variant: 'primary',
  },
  {
    category: 'Boliglån',
    title: 'Indsigt i forskellen mellem fast og justerbar rente',
    author: 'Af Lars Madsen, Økonom @ Dansk Boliglån',
    href: '/boliglån',
    variant: 'primary-soft',
  },
  {
    category: 'Boliglån',
    title: 'Skyld til Skyldstyrelsen? Her er dine valgmuligheder',
    author: 'Af Lars Madsen, Økonom @ Dansk Boliglån',
    href: '/boliglån',
    variant: 'dusk',
  },
  {
    category: 'Boliglån',
    title: 'Beskrivelse af friværdi og hvordan du kan låne mod den',
    author: 'Af Lars Madsen, Økonom @ Dansk Boliglån',
    href: '/boliglån',
    variant: 'white',
  },
]

export default function BlogPage() {
  return (
    <>
      <ImageHero />

      <SectionContainer>
        <SectionContainerInner noColumns={true}>
          <div className="text-center lg:mb-8 lg:flex lg:items-end lg:justify-between lg:text-left">
            <div className="mb-8 text-balance lg:mb-0">
              <h2 className="mb-4 text-4xl font-medium md:text-5xl xl:mb-10 xl:text-6xl">
                Dansk Boliglån Blog
              </h2>
              <p className="text-lg sm:text-2xl">Vi blogger om boliglån og privatøkonomi.</p>
            </div>

            <BaseCtaButton className="xs:min-w-96 xs:w-auto w-full" href="/artikler">
              Start låneansøgning
            </BaseCtaButton>
          </div>

          <div className="gap-gutter grid md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <BlogCard key={item.title} {...item} />
            ))}
          </div>
        </SectionContainerInner>
      </SectionContainer>

      <CtaImagePatternSection imageSrc="/sections/cta-image-pattern/cta-image-pattern-bg-1.jpg" />

      <SectionContainer className="lg:pb-0">
        <SectionContainerInner
          className="gap-gutter pb-16 md:grid-cols-2 lg:grid-cols-3 lg:pb-25"
          noColumns={true}
        >
          <div
            className="absolute inset-x-0 bottom-0 px-(--container-padding)"
            role="presentation"
            aria-hidden="true"
          >
            <div className="bg-brand-dark/50 h-[1.5px]" />
          </div>

          {items.map((item) => (
            <BlogCard key={item.title} {...item} />
          ))}
        </SectionContainerInner>
      </SectionContainer>
    </>
  )
}
