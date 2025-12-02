import { BlogArticle } from '@/components/sections/blog/BlogArticle'
import { BlogSection } from '@/components/sections/blog/BlogSection'
import { ImageHero } from '@/components/sections/heros/ImageHero'
import { SocialProofSection } from '@/components/sections/SocialProofSection'

export default function BlogPage() {
  return (
    <>
      <ImageHero />
      <BlogArticle />
      <BlogSection />
      <SocialProofSection className="pb-0!" withUnderline={true} />
    </>
  )
}
