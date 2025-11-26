import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { HeroSection } from "@/components/HeroSection";
import { UspSection } from "@/components/UspSection";
import { LoanApplicationForm } from "@/components/LoanApplicationForm";
import { StepsSection } from "@/components/StepsSection";
import { FaqSection } from "@/components/FaqSection";

type HeroSectionData = {
  _type: "heroSection";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

type UspItemData = {
  title: string;
  description?: string;
  icon?: string;
};

type UspSectionData = {
  _type: "uspSection";
  title?: string;
  items: UspItemData[];
};

type StepsSectionData = {
  _type: "stepsSection";
  title?: string;
  subtitle?: string;
  steps: { label: string; description?: string }[];
};

type FaqSectionData = {
  _type: "faqSection";
  title?: string;
  items: { question: string; answer: string }[];
};

type PageData = {
  title: string;
  sections: (
    | HeroSectionData
    | StepsSectionData
    | UspSectionData    
    | FaqSectionData
  )[];
};

const homePageQuery = groq`
  *[_type == "page" && slug.current == "forside"][0]{
    title,
    sections[]{
      ...,
      // for uspSection
      items[]{title, description, icon, question, answer},
      // for stepsSection
      steps[]{label, description}
    }
  }
`;


async function getHomePage(): Promise<PageData | null> {
  return sanityClient.fetch(homePageQuery);
}

export default async function Home() {
  const page = await getHomePage();

  if (!page) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Ingen forside fundet</h1>
        <p className="mt-2 text-slate-700">
          Opret en “Side” med slug <code>forside</code> i Sanity.
        </p>
      </main>
    );
  }

  return (
  <main>
    {page.sections?.map((section, idx) => {
      if (section._type === "heroSection") {
        return <HeroSection key={idx} {...section} />;
      }
      if (section._type === "stepsSection") {
  return (
    <StepsSection
      key={idx}
      title={section.title ?? undefined}
      subtitle={section.subtitle ?? undefined}
      steps={(section.steps || []).map((step: any) => ({
        label: step.label,
        description: step.description,
      }))}
    />
  );
}
      if (section._type === "uspSection") {
        return (
          <UspSection
            key={idx}
            title={section.title}
            items={section.items || []}
          />
        );
      }
      if (section._type === "faqSection") {
        return (
          <FaqSection
            key={idx}
            title={section.title}
            items={section.items || []}
          />
        );
      }
      return null;
    })}

    <section className="mt-8 mb-16 px-4 md:px-0">
      <LoanApplicationForm />
    </section>
  </main>
);

}
