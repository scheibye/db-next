import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'

export function BlogArticle() {
  return (
    <SectionContainer className="pt-12 lg:pt-20 lg:pb-8" noPadding={true}>
      <SectionContainerInner>
        <article className="prose prose-custom prose-headings:font-medium prose-headings:leading-tight lg:prose-xl md:gap-gutter max-w-none lg:col-span-12 lg:grid lg:grid-cols-12">
          <div className="-mb-8 lg:col-span-8 lg:col-start-2">
            <h1>Lån til boligkøb og lån i friværdi - hvad er forskellen, og hvad skal du vælge?</h1>

            <p className="text-xl leading-relaxed md:text-2xl">
              Når du står over for en vigtig økonomisk beslutning som boligkøb - eller overvejer at
              bruge værdien i din nuværende bolig til at realisere nye projekter - er det afgørende
              at forstå dine muligheder for boligfinansiering. Her dykker vi ned i forskellen mellem
              lån til boligkøb og lån i friværdi, så du kan træffe et trygt og oplyst valg.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-3">
            <h2>Hvad er et lån til boligkøb?</h2>

            <p>
              Et lån til boligkøb er den finansiering, du har brug for, når du skal købe en bolig –
              uanset om det er en lejlighed, et hus eller et sommerhus. I Danmark består
              boligfinansiering typisk af:
            </p>

            <ul>
              <li>Et realkreditlån (op til 80 % af boligens værdi)</li>
              <li>Et banklån (typisk til resten af finansieringen, fx 15 %)</li>
              <li>Og en egenbetaling (normalt 5 %)</li>
            </ul>

            <p>
              Men hvad gør du, hvis banken siger nej – eller hvis du falder uden for de
              traditionelle rammer?
            </p>

            <p>
              Hos Dansk Boliglån tilbyder vi et alternativ. Vi hjælper både private og
              erhvervskunder, som ikke kan få finansiering gennem banken. Gennem vores digitale
              platform og samarbejde med investorer tilbyder vi skræddersyede løsninger – uden
              unødvendig kompleksitet.
            </p>

            <h3>Hvad er lån i friværdi?</h3>

            <p>
              Et lån til boligkøb er den finansiering, du har brug for, når du skal købe en bolig –
              uanset om det er en lejlighed, et hus eller et sommerhus. I Danmark består
              boligfinansiering typisk af:
            </p>

            <h4>Hvordan fungerer lån i friværdi?</h4>

            <p>
              Et lån til boligkøb er den finansiering, du har brug for, når du skal købe en bolig –
              uanset om det er en lejlighed, et hus eller et sommerhus. I Danmark består
              boligfinansiering typisk af:
            </p>
          </div>
        </article>
      </SectionContainerInner>
    </SectionContainer>
  )
}
