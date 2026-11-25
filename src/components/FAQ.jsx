import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { lang, t } = useLanguage();
  const { faq, brand } = siteConfig;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            {t('વારંવાર પૂછાતા પ્રશ્નો', 'Frequently Asked Questions')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t('એમ્બ્યુલન્સ સેવા વિશે સામાન્ય સવાલો', 'Got Questions? We Have Answers')}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-red-600 transition"
                >
                  <span className="text-base sm:text-lg">
                    {lang === 'gu' ? item.qGu : item.qEn}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {lang === 'gu' ? item.aGu : item.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>{t('બીજો કોઈ પ્રશ્ન છે? સીધો કૉલ કરો:', 'Have another question? Call us directly:')} </span>
          <a href={`tel:${brand.primaryPhone}`} className="text-red-600 font-bold hover:underline">
            {brand.primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
}

