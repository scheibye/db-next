"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export function FaqSection({ title, items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 px-4 md:py-16 md:px-8 bg-brand-paper">
      <div className="max-w-3xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark">
            {title}
          </h2>
        )}

        <div className="border border-brand-dark/10 rounded-2xl bg-white divide-y divide-brand-dark/10 shadow-sm">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-4 md:px-6 py-3 md:py-4 hover:bg-brand-card/50 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-sm md:text-base text-brand-dark">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-dark/20 text-[11px] text-brand-text/70">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <p className="mt-2 text-xs md:text-sm text-brand-text/80 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
