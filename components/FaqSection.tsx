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
    <section className="py-12 px-4 md:py-16 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            {title}
          </h2>
        )}
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-slate-50">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-4 md:px-6 py-3 md:py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-sm md:text-base text-slate-900">
                    {item.question}
                  </span>
                  <span className="text-xs text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-2 text-xs md:text-sm text-slate-700">
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
