import { CtaImagePatternSection } from '@/components/sections/CtaImagePatternSection'
import { CtaImageSection } from '@/components/sections/CtaImageSection'
import { CtaSmallSection } from '@/components/sections/CtaSmallSection'
import { CtaTelSection } from '@/components/sections/CtaTelSection'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'
import { MissionSection } from '@/components/sections/MissionSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { TextWithVideoSection } from '@/components/sections/TextWithVideoSection'

const breadcrumbs = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Om os',
    href: '/om-os',
  },
]

export default function AboutPage() {
  return (
    <>
      <SimpleHero
        breadcrumbs={breadcrumbs}
        label="Om os"
        title="Et enkelt og gennemsigtigt alternativ til bankens nej"
      />
      <TextWithVideoSection />
      <MissionSection className="py-16 lg:py-32" />
      <CtaSmallSection className="bg-brand-spring" />
      <CtaImagePatternSection imageSrc="/sections/cta-image-pattern/cta-image-pattern-bg-2.jpg" />
      <CtaImageSection imageSrc="/sections/cta-image/cta-image-bg.jpg" />
      <CtaTelSection />
      <TeamSection />
    </>
  )
}
