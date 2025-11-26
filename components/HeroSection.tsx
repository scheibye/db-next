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
  const { eyebrow, title, subtitle, primaryCtaLabel, primaryCtaHref } = props;

  const [purpose, setPurpose] = useState<Purpose>("boligkob");
  const [loanAmount, setLoanAmount] = useState<number>(1_000_000);
  const [secondaryAmount, setSecondaryAmount] = useState<number>(100_000);

  const handleStart = () => {
    const el = document.getElementById("loan-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-card">
      {/* Background image */}
      <Image
        src="/hero-image.png"
        alt="Dansk Boliglån"
        fill
        priority
        className="object-cover object-center opacity-60"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left column – text */}
          <div className="space-y-4 md:space-y-6 max-w-xl">
            {eyebrow && (
              <p className="text-xs md:text-sm font-semibold text-brand-spring uppercase tracking-wide">
                {eyebrow}
              </p>
            )}

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-brand-card">
              {title}
            </h1>

            {subtitle && (
              <p className="text-sm md:text-lg text-brand-card/80 leading-relaxed">
                {subtitle}
              </p>
            )}

            {primaryCtaLabel && primaryCtaHref && (
              <a
                href={primaryCtaHref}
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary text-white font-medium text-sm md:text-base hover:bg-brand-primary-soft transition"
              >
                {primaryCtaLabel}
              </a>
            )}
          </div>

          {/* Right column – calculator */}
          <div className="flex justify-center md:justify-end">
            <HeroCalculatorCard
              purpose={purpose}
              onPurposeChange={setPurpose}
              loanAmount={loanAmount}
              onLoanAmountChange={setLoanAmount}
              secondaryAmount={secondaryAmount}
              onSecondaryAmountChange={setSecondaryAmount}
              secondaryLabelForBoligkob="Din udbetaling til boligkøb"
              secondaryLabelForFrivaerdi="Ejendommens værdi (anslået)"
              onStart={handleStart}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
