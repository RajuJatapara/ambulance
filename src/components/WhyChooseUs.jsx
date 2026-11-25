import React from 'react';
import { Clock, ShieldCheck, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

const icons = [Clock, ShieldCheck, Sparkles, HeartHandshake];

export default function WhyChooseUs() {
  const { lang, t } = useLanguage();
  const { whyChooseUs, brand } = siteConfig;

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              {t('અમારી પ્રતિબદ્ધતા', 'Our Commitment')}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {t('મુશ્કેલીના સમયે સાચો સાથ અને ઝડપી સેવા', 'Reliable Support When Every Second Counts')}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t(
                'ગોંડલમાં શ્રી જતાપરા ભાવેશભાઈ દ્વારા સંચાલિત આરવ એમ્બ્યુલન્સ સર્વિસ માત્ર વાહન સેવા નથી પરંતુ દર્દી અને પરિવારજનો માટે એક માનવતાભરી મદદ છે.',
                'Managed by Jatapara Bhavesh in Gondal, Aarav Ambulance Service is committed to providing compassionate, immediate, and reliable care to patients and families.'
              )}
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase">{t('સંચાલક / Owner', 'Owner Information')}</div>
              <div className="text-lg font-black text-slate-800">{t(brand.ownerGu, brand.ownerEn)}</div>
              <div className="text-xs text-slate-600 flex items-center gap-2">
                <span>📍 {t('ગોંડલ, ગુજરાત', 'Gondal, Gujarat')}</span>
                <span>•</span>
                <span>📞 {brand.primaryPhone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item, idx) => {
              const Icon = icons[idx] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:bg-white hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {lang === 'gu' ? item.titleGu : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'gu' ? item.descGu : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

