import { CtaImagePatternSection } from '@/components/sections/CtaImagePatternSection'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'

export default function AboutPage() {
  return (
    <>
      <SimpleHero label="Om os" title="Et enkelt og gennemsigtigt alternativ til bankens nej" />
      <CtaImagePatternSection />
    </>
  )
}
