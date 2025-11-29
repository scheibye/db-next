import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseLinkUnderline } from '@/components/ui/BaseLinkUnderline'
import { cn } from '@/lib/utils'
import { SectionContainer, SectionContainerInner } from '../layout/containers/SectionContainer'

const stepCards = [
  {
    title: 'Ansøg online',
    text: 'Udfyld formularen og angiv låneformålet, så vender vi tilbage for at finde den bedste løsning for dig.',
    href: '#',
  },
  {
    title: 'Bliv godkendt',
    text: 'Indsend dine økonomiske oplysninger og blive kreditvurderet. Vi udarbejder sammen en økonomisk plan og budget. Denne plan giver dig et klart overblik over din økonomi før og efter lånet',
    href: '#',
  },
  {
    title: 'Få dit lån',
    text: 'Selv efter udbetalingen står vi ved din side. Kontakt os for gode råd eller hvis du overvejer at omlægge til et realkreditlån',
    href: '#',
  },
]

export function StepCardsSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={className}>
      <SectionContainerInner className="grid-cols-none! md:gap-12!">
        <div className="text-center text-balance">
          <h2 className="mb-6 text-4xl font-medium md:mb-10 md:text-5xl lg:text-6xl">
            Ansøg i dag, og få svar i morgen
          </h2>

          <p className="text-lg sm:text-2xl">
            Få bedre mulighed for at få boliglån -{' '}
            <strong className="font-semibold">Sådan fungerer det</strong>
          </p>
        </div>

        <div>
          <div className="relative grid lg:grid-cols-3" data-slot="bg-image">
            {stepCards.map((card, index) => (
              <StepCard key={card.title} step={index + 1} {...card} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <BaseCtaButton className="xs:w-auto w-full" href="/form">
            Beregn dit boliglån
          </BaseCtaButton>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}

function StepCard({
  className,
  href,
  step,
  title,
  text,
}: {
  className?: string
  href: string
  step: number
  title: string
  text: string
}) {
  function getRootClasses() {
    switch (step) {
      case 1:
        return 'bg-brand-dark text-brand-card'
      case 2:
        return 'bg-brand-spring text-brand-dark'
      case 3:
        return 'bg-brand-primary text-brand-card'
    }
  }

  function getLinkClasses() {
    switch (step) {
      case 1:
        return 'border-brand-primary'
      case 2:
        return 'border-brand-dark'
      case 3:
        return 'border-brand-card'
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col items-start overflow-hidden px-5 py-12 first:rounded-t-4xl last:rounded-b-4xl sm:px-12 lg:py-18 lg:first:rounded-t-none lg:first:rounded-l-4xl! lg:last:rounded-r-4xl! lg:last:rounded-b-none',
        getRootClasses(),
        className
      )}
    >
      <div className="xxs:gap-8 mb-6 flex items-center gap-4 sm:mb-10 lg:block">
        <div className="text-[100px] leading-none font-medium lg:mb-18">{step}</div>
        <h3 className="text-3xl font-medium sm:text-4xl">{title}</h3>
      </div>

      <p className="mb-6 max-w-md text-lg text-balance sm:mb-12">{text}</p>

      <BaseLinkUnderline className={cn('mt-auto', getLinkClasses())} href={href}>
        Læs mere
      </BaseLinkUnderline>
    </div>
  )
}
