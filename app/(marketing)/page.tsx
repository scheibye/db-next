/* eslint-disable @typescript-eslint/no-explicit-any */

import { groq } from 'next-sanity'
import { AboutSection } from '@/components/sections/AboutSection'
import { BlogSection } from '@/components/sections/blog/BlogSection'
import { CtaSmallSection } from '@/components/sections/CtaSmallSection'
import { CtaVideoSection } from '@/components/sections/CtaVideoSection'
import { FaqSection } from '@/components/sections/faq/FaqSection'
import { HelpCardsSection } from '@/components/sections/HelpCardsSection'
import { MainHeroSection } from '@/components/sections/heros/MainHeroSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { StepCardsSection } from '@/components/sections/StepCardsSection'
import { sanityClient } from '@/lib/sanity.client'

type HeroSectionData = {
  _type: 'heroSection'
  eyebrow?: string
  title: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
}

type UspItemData = {
  title: string
  description?: string
  icon?: string
}

type UspSectionData = {
  _type: 'uspSection'
  title?: string
  items: UspItemData[]
}

type StepsSectionData = {
  _type: 'stepsSection'
  title?: string
  subtitle?: string
  steps: { label: string; description?: string }[]
}

type FaqSectionData = {
  _type: 'faqSection'
  title?: string
  items: { question: string; answer: string }[]
}

type TrustpilotSectionData = {
  _type: 'trustpilotSection'
  title?: string
  ratingText?: string
  stars?: number
}

type ApplyNowSectionData = {
  _type: 'applyNowSection'
  title?: string
  subtitle?: string
  bulletPoints?: string[]
  primaryCtaLabel?: string
  primaryCtaHref?: string
  phone?: string
}

type AboutUsSectionData = {
  _type: 'aboutUsSection'
  title?: string
  subtitle?: string
  body?: any
  imageUrl?: string
}

type CtaProductsSectionData = {
  _type: 'ctaProductsSection'
  title?: string
  subtitle?: string
  items?: { title: string; description?: string; href?: string; badge?: string }[]
}

type BlogPostSectionData = {
  _type: 'blogPostSection'
  title?: string
  posts?: { title: string; excerpt?: string; href?: string; imageUrl?: string }[]
}

type VideoSectionData = {
  _type: 'videoSection'
  title?: string
  lead?: string
  body?: string
  ctaLabel?: string
  ctaHref?: string
  videoUrl?: string
}

type PageData = {
  title: string
  sections: (
    | HeroSectionData
    | UspSectionData
    | StepsSectionData
    | FaqSectionData
    | TrustpilotSectionData
    | ApplyNowSectionData
    | AboutUsSectionData
    | CtaProductsSectionData
    | BlogPostSectionData
    | VideoSectionData
  )[]
}

const homePageQuery = groq`
  *[_type == "page" && slug.current == "forside"][0]{
    title,
    sections[]{
      ...,
      // uspSection
      items[]{title, description, icon, question, answer, href, badge},
      // stepsSection
      steps[]{label, title, description},
      // blogPostSection
      posts[]{
        title,
        excerpt,
        href,
        "imageUrl": image.asset->url
      },
      // aboutUsSection
      "imageUrl": image.asset->url
    }
  }
`

async function getHomePage(): Promise<PageData | null> {
  return sanityClient.fetch(homePageQuery)
}

export default async function Home() {
  const page = await getHomePage()

  if (!page) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Ingen forside fundet</h1>
        <p className="mt-2 text-slate-700">
          Opret en “Side” med slug <code>forside</code> i Sanity.
        </p>
      </main>
    )
  }

  return (
    <>
      {/* {page.sections?.map((section: any, idx: number) => {
        if (section._type === 'heroSection') {
          return <HeroSection key={idx} {...section} />
        }

        if (section._type === 'stepsSection') {
          return (
            <StepsSection
              key={idx}
              title={section.title ?? undefined}
              subtitle={section.subtitle ?? undefined}
              steps={(section.steps || []).map((step: any) => ({
                label: step.label ?? step.title,
                description: step.description,
              }))}
            />
          )
        }

        if (section._type === 'uspSection') {
          return <UspSection key={idx} title={section.title} items={section.items || []} />
        }

        if (section._type === 'faqSection') {
          return <FaqSection key={idx} title={section.title} items={section.items || []} />
        }

        if (section._type === 'trustpilotSection') {
          return (
            <TrustpilotSection
              key={idx}
              title={section.title}
              ratingText={section.ratingText}
              stars={section.stars}
            />
          )
        }

        if (section._type === 'applyNowSection') {
          return (
            <ApplyNowSection
              key={idx}
              title={section.title}
              subtitle={section.subtitle}
              bulletPoints={section.bulletPoints || []}
              primaryCtaLabel={section.primaryCtaLabel}
              primaryCtaHref={section.primaryCtaHref}
              phone={section.phone}
            />
          )
        }

        if (section._type === 'aboutUsSection') {
          return (
            <AboutUsSection
              key={idx}
              title={section.title}
              subtitle={section.subtitle}
              body={section.body}
              imageUrl={section.imageUrl}
            />
          )
        }

        if (section._type === 'ctaProductsSection') {
          return (
            <CtaProductsSection
              key={idx}
              title={section.title}
              subtitle={section.subtitle}
              items={section.items || []}
            />
          )
        }

        if (section._type === 'blogPostSection') {
          return <BlogPostSection key={idx} title={section.title} posts={section.posts || []} />
        }

        if (section._type === 'videoSection') {
          return (
            <VideoSection
              key={idx}
              title={section.title}
              lead={section.lead}
              body={section.body}
              ctaLabel={section.ctaLabel}
              ctaHref={section.ctaHref}
              videoUrl={section.videoUrl}
            />
          )
        }

        return null
      })} */}

      {/* Formularen til sidst på siden */}
      {/* <section className="mt-8 mb-16 px-4 md:px-0">
        <LoanApplicationForm />
      </section> */}

      <MainHeroSection />
      <StepCardsSection />
      <FaqSection />
      <CtaSmallSection />
      <SocialProofSection className="pt-0!" />
      <AboutSection />
      <HelpCardsSection />
      <BlogSection />
      <CtaVideoSection />
    </>
  )
}
