import { ScrollSnapContainer } from '@/components/layout/containers/ScrollSnapContainer'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BlogCard } from '@/components/sections/blog/BlogCard'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

type BlogCardVariant = 'dark' | 'spring' | 'primary' | 'primary-soft' | 'dusk' | 'white'

type BlogItem = {
  category: string
  title: string
  author: string
  href: string
  variant: BlogCardVariant
}

const items: BlogItem[] = [
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

export function BlogSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={className}>
      <SectionContainerInner className="gap-6" noColumns={true}>
        <div className="text-center text-balance">
          <h2 className="mb-4 text-4xl font-medium md:mb-10 md:text-5xl lg:text-6xl">
            Dansk Boliglån Blog
          </h2>

          <div className="text-lg sm:text-2xl">
            <p>Vi blogger om boliglån og privatøkonomi.</p>
          </div>
        </div>

        <div className="-mx-[calc(var(--container-padding)+var(--spacing-global-padding))] overflow-x-hidden lg:mx-0">
          <ScrollSnapContainer className="xl:grid-cols-3">
            {items.map((item) => (
              <BlogCard
                key={item.title}
                category={item.category}
                title={item.title}
                author={item.author}
                href={item.href}
                variant={item.variant as BlogCardVariant}
              />
            ))}
          </ScrollSnapContainer>
        </div>

        <div className="text-center">
          <BaseCtaButton className="xs:min-w-96 xs:w-auto w-full" href="/artikler">
            Læs flere artikler
          </BaseCtaButton>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
