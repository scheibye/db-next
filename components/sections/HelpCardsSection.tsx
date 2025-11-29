import Image from 'next/image'
import { ScrollSnapContainer } from '@/components/layout/containers/ScrollSnapContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseLinkUnderline } from '@/components/ui/BaseLinkUnderline'
import { cn } from '@/lib/utils'

const helpCards = [
  {
    title: 'Lån i din boligkøb',
    imageUrl: '/sections/help-cards/help-cards-1.png',
    href: '#',
  },
  {
    title: 'Lån i din friværdi',
    imageUrl: '/sections/help-cards/help-cards-2.jpg',
    href: '#',
  },
  {
    title: 'Bliv forhåndsgodkendt',
    imageUrl: '/sections/help-cards/help-cards-3.jpg',
    href: '#',
  },
  {
    title: 'Forbrugslån*',
    imageUrl: '/sections/help-cards/help-cards-4.jpg',
    href: '#',
  },
]

export function HelpCardsSection({ className }: { className?: string }) {
  return (
    <section className={cn('max-w-container mx-auto py-8 md:py-18', className)}>
      <div className="max-w-container-inner mx-auto grid gap-6">
        <h2 className="text-center text-2xl font-medium md:text-4xl lg:text-5xl">
          Hvad kan vi hjælpe dig med?
        </h2>

        <ScrollSnapContainer className="xl:grid-cols-4">
          {helpCards.map((card) => (
            <HelpCard key={card.title} {...card} />
          ))}
        </ScrollSnapContainer>

        <div className="flex flex-col items-center gap-6 text-center md:flex-col-reverse md:gap-12">
          <BaseCtaButton className="xxs:w-auto w-full" href="/form">
            Start låneansøgning
          </BaseCtaButton>

          <p className="text-sm">
            <small className="italic">
              * Ved klik på knappen Forbrugslån sendes du til vores partner LendMe. Priseks.: Samlet
              kreditbeløb 130.000 kr. Var. deb. rente 3,60 - 20,95%. ÅOP 4,11 - 21,77%. Etb. omk.
              3.900 kr. Samlet tilbagebetalingsbeløb 167.258 - 260.000 kr. Løbetid 1-15 år.
            </small>
          </p>
        </div>
      </div>
    </section>
  )
}

function HelpCard({
  className,
  title,
  imageUrl,
  href,
}: {
  className?: string
  title: string
  imageUrl: string
  href: string
}) {
  return (
    <div className={cn('group relative grid min-h-138 overflow-hidden rounded-2xl', className)}>
      <Image
        className="object-cover transition-all duration-500 group-hover:scale-105"
        src={imageUrl}
        alt={title}
        fill
      />

      <div className="text-brand-card bg-brand-dark/35 group-hover:bg-brand-dark/20 absolute inset-0 grid size-full p-8 text-center transition-all duration-500">
        <div className="self-end">
          <h3 className="mb-3 text-2xl font-medium">{title}</h3>
          <BaseLinkUnderline className="border-brand-primary" href={href}>
            Læs mere
          </BaseLinkUnderline>
        </div>
      </div>
    </div>
  )
}
