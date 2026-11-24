import React, { useState } from 'react';
import { salonData } from '../data/salonData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-secondary" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-ink-muted mt-2">
            Clear answers about appointment bookings, L'Oréal products, bridal consultations, and salon policies.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {salonData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface rounded-2xl border border-edge overflow-hidden shadow-soft transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-ink hover:text-primary transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-bg text-ink transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-accent-soft text-primary' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-edge/40 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
