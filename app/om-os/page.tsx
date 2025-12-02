import { CtaImagePatternSection } from '@/components/sections/CtaImagePatternSection'
import { CtaSmallSection } from '@/components/sections/CtaSmallSection'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'

export default function AboutPage() {
  return (
    <>
      <SimpleHero label="Om os" title="Et enkelt og gennemsigtigt alternativ til bankens nej" />
      <CtaSmallSection className="bg-brand-spring" />
      <CtaImagePatternSection imageSrc="/sections/cta-image-pattern/cta-image-pattern-bg-2.jpg" />
    </>
  )
}
