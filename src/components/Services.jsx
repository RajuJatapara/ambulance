import React from 'react';
import { Activity, Bed, HeartPulse, Zap, Wind, Navigation, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Activity: Activity,
  Bed: Bed,
  HeartPulse: HeartPulse,
  Zap: Zap,
  Wind: Wind,
  Navigation: Navigation
};

export default function Services({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { services } = siteConfig;

  return (
    <section id="services" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5" />
            {t('અમારી સેવાઓ', 'Our Medical Services')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t('દર્દીની સ્થિતિ મુજબ દરેક પ્રકારની સેવા', 'Comprehensive Care for Every Situation')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'ઇમરજન્સી અને નોન-ઇમરજન્સી દરેક સમયે સમયસર, સુરક્ષિત અને સંવેદનશીલ સેવા આપવા અમે કટિબદ્ધ છીએ.',
              'Committed to timely, safe, and compassionate transport in both emergency and non-emergency moments.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = iconMap[item.icon] || HeartPulse;
            return (
              <div
                key={item.id}
                className="group relative p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-200 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                      {lang === 'gu' ? item.titleGu : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {lang === 'gu' ? item.descGu : item.descEn}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 24x7 Available
                  </span>
                  <button
                    onClick={() => onOpenBooking(item.id)}
                    className="text-red-600 hover:text-red-700 underline font-semibold"
                  >
                    {t('પૂછપરછ કરો →', 'Inquire →')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

