import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { HeroSection } from "@/components/HeroSection";
import { UspSection } from "@/components/UspSection";
import { LoanApplicationForm } from "@/components/LoanApplicationForm";

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

type PageData = {
  title: string;
  sections: (HeroSectionData | UspSectionData)[];
};

const homePageQuery = groq`
  *[_type == "page" && slug.current == "forside"][0]{
    title,
    sections[]{
      ...,
      items[]{title, description, icon}
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
        if (section._type === "uspSection") {
          return <UspSection key={idx} title={section.title} items={section.items || []} />;
        }
        return null;
      })}
       {/* Formsektion under CMS-sektionerne */}
      <section className="mt-8 mb-16 px-4 md:px-0">
        <LoanApplicationForm />
      </section>
    </main>
  );
}
