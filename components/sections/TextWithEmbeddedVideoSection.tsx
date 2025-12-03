import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'

export function TextWithEmbeddedVideoSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={className} noPadding={true}>
      <SectionContainerInner>
        <div className="text-brand-dark space-y-8 self-center pt-12 lg:col-span-6 lg:py-24 lg:pr-8 xl:space-y-10 2xl:col-span-5 2xl:col-start-2">
          <h2 className="text-4xl leading-tight font-medium text-balance lg:text-5xl">
            Hvilket lån passer til dig?
          </h2>

          <div className="text-lg leading-relaxed sm:text-xl">
            <p>
              Vi har lavet en kort video, der giver dig overblik og måske bringer dig tættere på den
              løsning, der passer til dig - og din økonomi.
            </p>
          </div>

          <p className="text-lg font-medium underline md:text-xl">
            Se den her og find ud af, hvilke muligheder du har
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <iframe
            className="relative -inset-x-(--container-padding) aspect-video w-[calc(100%+var(--container-padding)*2)] lg:h-full xl:left-0 xl:w-[calc(100%+var(--container-padding))]"
            src="https://www.youtube.com/embed/XHOmBV4js_E?si=zddh57z9TlPWPupn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
