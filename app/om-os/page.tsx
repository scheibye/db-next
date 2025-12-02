import { CtaImagePatternSection } from '@/components/sections/CtaImagePatternSection'
import { CtaImageSection } from '@/components/sections/CtaImageSection'
import { CtaSmallSection } from '@/components/sections/CtaSmallSection'
import { CtaSmallTelSection } from '@/components/sections/CtaSmallTelSection'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'
import { MissionSection } from '@/components/sections/MissionSection'
import { TextWithEmbeddedVideoSection } from '@/components/sections/TextWithEmbeddedVideoSection'

export default function AboutPage() {
  return (
    <>
      <SimpleHero label="Om os" title="Et enkelt og gennemsigtigt alternativ til bankens nej" />
      <TextWithEmbeddedVideoSection />
      <MissionSection className="py-16 lg:py-32" />
      <CtaSmallSection className="bg-brand-spring" />
      <CtaImagePatternSection imageSrc="/sections/cta-image-pattern/cta-image-pattern-bg-2.jpg" />
      <CtaImageSection imageSrc="/sections/cta-image/cta-image-bg.jpg" />
      <CtaSmallTelSection />
    </>
  )
}
