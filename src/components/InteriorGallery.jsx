import React, { useState } from 'react';
import { Camera, CheckCircle2, Shield, HeartPulse, Eye, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function InteriorGallery({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { interiorGallery } = siteConfig;
  const [activePhoto, setActivePhoto] = useState(interiorGallery[0] || null);

  return (
    <section id="gallery" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            {t('અંદરની સુવિધાઓનો ફોટો દર્શન', 'Interior Facility Tour')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t('ગાડીઓની અંદર કેવી સુવિધાઓ ઉપલબ્ધ છે?', 'Inspect Our Life-Saving Ambulance Interior')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'દર્દીની સલામતી, ૧૦૦% સ્વચ્છતા અને આરામદાયક મુસાફરી માટે અંદરથી ખાસ સજ્જ કરેલું કેબિન.',
              'Designed for utmost patient safety, hospital-grade hygiene, and life-critical support equipment.'
            )}
          </p>
        </div>

        {/* Featured Big Showcase & Thumbnails Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Active Image Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 group">
              <img
                src={activePhoto?.image}
                alt={lang === 'gu' ? activePhoto?.titleGu : activePhoto?.titleEn}
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2">
                <span className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {lang === 'gu' ? activePhoto?.badgeGu : activePhoto?.badgeEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {lang === 'gu' ? activePhoto?.titleGu : activePhoto?.titleEn}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {lang === 'gu' ? activePhoto?.descGu : activePhoto?.descEn}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails & Feature Selector List */}
          <div className="lg:col-span-5 space-y-3.5">
            {interiorGallery.map((item) => {
              const isActive = activePhoto?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className={`p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                    isActive
                      ? 'bg-red-50/80 border-red-500 shadow-md ring-1 ring-red-400'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-20 h-16 sm:w-24 sm:h-18 object-cover rounded-xl shadow-sm flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className={`font-bold text-sm sm:text-base truncate ${isActive ? 'text-red-700 font-black' : 'text-slate-800'}`}>
                        {lang === 'gu' ? item.titleGu : item.titleEn}
                      </h4>
                      {isActive && <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {lang === 'gu' ? item.descGu : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Action under gallery */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md shadow-red-200 transition"
              >
                <span>{t('આ સુવિધાવાળી એમ્બ્યુલન્સ બુક કરો', 'Book Ambulance with These Facilities')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

