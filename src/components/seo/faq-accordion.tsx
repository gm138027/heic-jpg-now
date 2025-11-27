"use client";

import { useMemo, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  title: string;
  items: FAQItem[];
};

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = useMemo(() => {
    const entries = items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entries,
    };
  }, [items]);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors hover:border-emerald-500"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-lg font-semibold text-slate-900 pr-4">
                {item.question}
              </h3>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-slate-200 p-6 pt-4">
                <p className="text-base leading-relaxed text-slate-700">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
