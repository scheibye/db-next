"use client";

import { useMemo } from "react";

type Purpose = "boligkob" | "frivaerdi";

// Props giver dig frihed til at navngive slider 2 efter behov
type HeroCalculatorCardProps = {
  purpose: Purpose;
  onPurposeChange: (p: Purpose) => void;

  loanAmount: number;
  onLoanAmountChange: (value: number) => void;

  secondaryAmount: number;
  onSecondaryAmountChange: (value: number) => void;

  secondaryLabelForBoligkob?: string;   // fx "Din udbetaling"
  secondaryLabelForFrivaerdi?: string;  // fx "Ejendommens værdi"

  onStart?: () => void;
};

// Globale minimum/maximum for loan og secondary
const LOAN_MIN = 200_000;
const LOAN_MAX = 5_000_000;

const SECONDARY_MIN = 0;
const SECONDARY_MAX = 1_250_000;

export function HeroCalculatorCard({
  purpose,
  onPurposeChange,
  loanAmount,
  onLoanAmountChange,
  secondaryAmount,
  onSecondaryAmountChange,
  secondaryLabelForBoligkob = "Din udbetaling",
  secondaryLabelForFrivaerdi = "Værdi (anslået)",
  onStart,
}: HeroCalculatorCardProps) {
  const loanPosition = useMemo(
    () => calculateSliderPosition(loanAmount, LOAN_MIN, LOAN_MAX),
    [loanAmount]
  );

  const secondaryPosition = useMemo(
    () => calculateSliderPosition(secondaryAmount, SECONDARY_MIN, SECONDARY_MAX),
    [secondaryAmount]
  );

  const secondaryLabel =
    purpose === "boligkob"
      ? secondaryLabelForBoligkob
      : secondaryLabelForFrivaerdi;

  const secondaryMinLabel =
    purpose === "boligkob" ? "0 kr." : "0 kr.";

  const secondaryMaxLabel =
    purpose === "boligkob" ? "1.250.000 kr." : "1.250.000 kr.";

  return (
    <div className="w-full max-w-md rounded-[30px] bg-[#FDFFE6] shadow-lg border border-[#E1E4C5] overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-2 h-[70px]">
        <button
          type="button"
          onClick={() => onPurposeChange("boligkob")}
          className={`flex items-center justify-center text-sm md:text-base font-medium rounded-tl-[30px] ${
            purpose === "boligkob"
              ? "bg-[#00382D] text-[#FDFFE6]"
              : "bg-transparent text-[#00382D80]"
          }`}
        >
          Lån til boligkøb
        </button>

        <button
          type="button"
          onClick={() => onPurposeChange("frivaerdi")}
          className={`flex items-center justify-center text-sm md:text-base font-medium rounded-tr-[30px] ${
            purpose === "frivaerdi"
              ? "bg-[#96FAB9] text-[#00382D]"
              : "bg-transparent text-[#00382D80]"
          }`}
        >
          Lån i friværdi
        </button>
      </div>

      <div className="px-6 pb-6 pt-4 space-y-8">
        {/* Loan slider */}
        <SliderBlock
          label="Lånebeløb"
          value={loanAmount}
          minLabel={`${LOAN_MIN.toLocaleString("da-DK")} kr.`}
          maxLabel={`${LOAN_MAX.toLocaleString("da-DK")} kr.`}
          position={loanPosition}
          onChange={onLoanAmountChange}
          min={LOAN_MIN}
          max={LOAN_MAX}
        />

        {/* Secondary slider — label afhænger af formål */}
        <SliderBlock
          label={secondaryLabel}
          value={secondaryAmount}
          minLabel={secondaryMinLabel}
          maxLabel={secondaryMaxLabel}
          position={secondaryPosition}
          onChange={onSecondaryAmountChange}
          min={SECONDARY_MIN}
          max={SECONDARY_MAX}
        />

        {/* CTA-knap */}
        <button
          type="button"
          onClick={onStart}
          className="mt-4 w-full h-[70px] rounded-full overflow-hidden flex text-white text-sm md:text-base font-medium"
        >
          <div className="flex-1 bg-[#0272DB] flex items-center justify-center px-4">
            Start låneansøgning
          </div>
          <div className="w-[18%] bg-[#0B3C45]" />
        </button>
      </div>
    </div>
  );
}

// Component for each slider
type SliderBlockProps = {
  label: string;
  value: number;
  minLabel: string;
  maxLabel: string;
  position: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
};

function SliderBlock({
  label,
  value,
  minLabel,
  maxLabel,
  position,
  onChange,
  min,
  max,
}: SliderBlockProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <label className="font-medium text-[#00382D]">{label}</label>
        <div className="font-bold text-[#00382D] text-lg">
          {formatCurrency(value)}
        </div>
      </div>

      {/* Slider */}
      <div className="relative h-8 flex items-center">
        {/* Track */}
        <div className="absolute inset-x-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#0272DB]" />

        {/* Native slider — hidden thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={10_000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="db-slider relative z-10 w-full h-8 cursor-pointer"
        />

        {/* Custom pill-thumb */}
        <div
          className="absolute top-1/2 h-8 w-10 -translate-y-1/2 rounded-[20px] border-[3px] border-[#0272DB] bg-[#FDFFE6] pointer-events-none"
          style={{ left: `calc(${position}% - 20px)` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-[#00382D80]">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("da-DK").format(value) + " kr.";
}

function calculateSliderPosition(value: number, min: number, max: number) {
  return ((value - min) / (max - min)) * 100;
}
