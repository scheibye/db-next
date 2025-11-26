"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroCalculatorCard } from "@/components/HeroCalculatorCard";

type Purpose = "boligkob" | "frivaerdi";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

export function HeroSection(props: HeroProps) {
  const { eyebrow, title, subtitle, primaryCtaHref, primaryCtaLabel } = props;

  // Lokal state til hero-kalkulatoren (uafhængig af formen længere nede)
  const [purpose, setPurpose] = useState<Purpose>("boligkob");
  const [loanAmount, setLoanAmount] = useState<number>(1_000_000);
  const [secondaryAmount, setSecondaryAmount] = useState<number>(100_000);

  const handleStartFromHero = () => {
    const el = document.getElementById("loan-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#00382D] text-[#FDFFE6] py-16 md:py-24">
      {/* Baggrundsbillede */}
      <Image
        src="/hero-image.png"      // læg billedet i /public/hero-image.png
        alt="Dansk Boliglån"
        fill
        priority
        className="object-cover opacity-80"
      />

      {/* Mørk overlay for læsbarhed */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00382D] via-[#00382D]/85 to-[#00382D]/40" />

      {/* Indhold */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Tekst-side */}
        <div>
          {eyebrow && (
            <p className="text-xs md:text-sm font-semibold text-[#96FAB9] mb-3 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm md:text-lg text-[#FDFFE6CC] mb-8 max-w-xl">
              {subtitle}
            </p>
          )}

          {/* Evt. primær CTA som link – kan stadig pege på fx #loan-form */}
          {primaryCtaLabel && primaryCtaHref && (
            <a
              href={primaryCtaHref}
              className="inline-flex items-center px-6 py-3 rounded-full border border-transparent text-sm md:text-base font-medium bg-[#0272DB] text-white hover:bg-[#025BB0]"
            >
              {primaryCtaLabel}
            </a>
          )}
        </div>

        {/* Kalkulator-kort i højre side */}
        <div className="flex justify-end">
          <HeroCalculatorCard
            purpose={purpose}
            onPurposeChange={setPurpose}
            loanAmount={loanAmount}
            onLoanAmountChange={setLoanAmount}
            secondaryAmount={secondaryAmount}
            onSecondaryAmountChange={setSecondaryAmount}
            secondaryLabelForBoligkob="Din udbetaling til boligkøb"
            secondaryLabelForFrivaerdi="Ejendommens værdi (anslået)"
            onStart={handleStartFromHero}
          />
        </div>
      </div>
    </section>
  );
}
