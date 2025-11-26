"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroCalculatorCard } from "@/components/HeroCalculatorCard";

type Purpose = "boligkob" | "frivaerdi";

type HeroProps = {
  title: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

export function HeroSection(props: HeroProps) {
  const { title, primaryCtaLabel, primaryCtaHref } = props;

  const [purpose, setPurpose] = useState<Purpose>("boligkob");
  const [loanAmount, setLoanAmount] = useState<number>(1_000_000);
  const [secondaryAmount, setSecondaryAmount] = useState<number>(100_000);

  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-card h-[900px]">
  {/* Billede + gradients i ét lag */}
  <div className="absolute inset-0">
    <Image
      src="/hero-image.png"
      alt="Dansk Boliglån"
      fill
      priority
      className="object-cover"
    />

    {/* Lodret gradient (top -> bund) */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/45 via-brand-dark/20 to-brand-dark/0 pointer-events-none" />

    {/* Vandret gradient (venstre -> højre) */}
    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/45 to-transparent pointer-events-none" />
  </div>

      {/* Indhold ovenpå */}
      <div className="relative z-10 h-full flex items-center">
    <div className="mx-auto max-w-[1900px] px-[10px] w-full">
      {/* venstre = form, højre = tekst */}
      <div className="grid grid-cols-1 lg:grid-cols-[420px,1fr] gap-16 h-full">
        {/* Venstre: kalkulator, forankret nede */}
        <div className="flex items-end pb-24">
          <div className="max-w-[420px] w-full">
            <HeroCalculatorCard
              purpose={purpose}
              onPurposeChange={setPurpose}
              loanAmount={loanAmount}
              onLoanAmountChange={setLoanAmount}
              secondaryAmount={secondaryAmount}
              onSecondaryAmountChange={setSecondaryAmount}
              secondaryLabelForBoligkob="Din udbetaling til boligkøb"
              secondaryLabelForFrivaerdi="Ejendommens værdi (anslået)"
              onStart={() => {
                const el = document.getElementById("loan-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        {/* Højre: tekstmodul */}
        <div className="flex flex-col justify-center items-start space-y-4">
          

          <h1 className="text-5xl font-bold leading-tight">
            {title}
          </h1>

         

          {primaryCtaLabel && primaryCtaHref && (
            <a
              href={primaryCtaHref}
              className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary text-white font-medium text-base hover:bg-brand-primary-soft transition"
            >
              {primaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
