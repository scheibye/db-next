'use client'

import { useState } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title?: string
  items: FaqItem[]
}

export function FaqSection({ title, items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items || items.length === 0) return null

  return (
    <section className="bg-brand-paper px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        {title && <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>}

        <div className="border-brand-dark/10 divide-brand-dark/10 divide-y rounded-2xl border bg-white shadow-sm">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="hover:bg-brand-card/50 w-full px-4 py-3 text-left transition md:px-6 md:py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium md:text-base">{item.question}</span>
                  <span className="border-brand-dark/20 text-brand-text/70 flex h-6 w-6 items-center justify-center rounded-full border text-[11px]">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-brand-text/80 mt-2 text-xs leading-relaxed md:text-sm">
                    {item.answer}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
