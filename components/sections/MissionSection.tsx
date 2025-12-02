import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'

const missionItems = [
  {
    title: 'Mission',
    description:
      'Gennem vores digitale platform skaber vi et simpelt, gennemsigtigt og konkurrencedygtigt alternativ til traditionel ejendomsfinansiering.',
  },
  {
    title: 'Vision',
    description:
      'Dansk Boliglån ønsker at være det bedste alternativ til de traditionelle pengeinstitutter, når det handler om finansiering af fast ejendom i Danmark.',
  },
]

export function MissionSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={className}>
      <SectionContainerInner>
        <div className="lg:col-start-2 lg:col-end-12">
          <div className="mb-10 xl:mb-20">
            <div className="text-brand-primary mb-4 text-lg font-semibold sm:text-2xl">
              Vores mission og vision
            </div>

            <h2 className="text-4xl font-medium text-balance xl:text-7xl">
              Finansiering med mennesket i centrum
            </h2>
          </div>

          <div className="md:gap-gutter lg: grid gap-10 md:grid-cols-12">
            {missionItems.map((item) => (
              <MissionItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}

function MissionItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="md:col-span-6">
      <h3 className="mb-4 text-xl font-medium md:text-2xl">{title}</h3>
      <div className="text-base leading-relaxed sm:text-lg xl:text-xl">
        <p>{description}</p>
      </div>
    </div>
  )
}
