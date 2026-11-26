import React, { useState, useRef } from 'react';
import { Camera, CheckCircle2, Shield, HeartPulse, Eye, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function InteriorGallery({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { interiorGallery } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = interiorGallery[activeIndex] || interiorGallery[0];

  const viewerRef = useRef(null);
  const touchStartX = useRef(null);

  // Navigate next/prev image
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? interiorGallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === interiorGallery.length - 1 ? 0 : prev + 1));
  };

  // Handle touch swipe on mobile screen
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // swipe left -> next
    } else if (diff < -50) {
      handlePrev(); // swipe right -> prev
    }
    touchStartX.current = null;
  };

  // Select item from list with smooth auto-scroll on mobile
  const handleSelectItem = (index) => {
    setActiveIndex(index);
    // On mobile devices, smoothly scroll up to the photo viewer so user sees the change!
    if (window.innerWidth < 1024 && viewerRef.current) {
      viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            {t('અંદરની સુવિધાઓનો ફોટો દર્શન', 'Interior Facility Tour')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('ગાડીઓની અંદર કેવી સુવિધાઓ ઉપલબ્ધ છે?', 'Inspect Our Life-Saving Ambulance Interior')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'દર્દીની સલામતી, ૧૦૦% સ્વચ્છતા અને આરામદાયક મુસાફરી માટે અંદરથી ખાસ સજ્જ કરેલું કેબિન.',
              'Designed for utmost patient safety, hospital-grade hygiene, and life-critical support equipment.'
            )}
          </p>
        </div>

        {/* 📱 MOBILE QUICK-SWITCHER TABS (Horizontal Scrollable Chips directly above photo) */}
        <div className="lg:hidden mb-4 overflow-x-auto pb-2 flex gap-2 no-scrollbar">
          {interiorGallery.map((item, idx) => {
            const isCurrent = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectItem(idx)}
                className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                  isCurrent
                    ? 'bg-red-600 text-white border-red-600 shadow-md scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <span>{idx + 1}.</span>
                <span>{lang === 'gu' ? item.titleGu.split(' ')[0] + ' ' + (item.titleGu.split(' ')[1] || '') : item.badgeEn}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase & Thumbnails Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Active Image Display Stage */}
          <div className="lg:col-span-7" ref={viewerRef}>
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 group select-none"
            >
              <img
                src={activePhoto?.image}
                alt={lang === 'gu' ? activePhoto?.titleGu : activePhoto?.titleEn}
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* 🔄 Navigation Arrows (< and >) */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Counter Badge & Swipe Hint */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs font-black px-3 py-1 rounded-full shadow">
                  📸 {activeIndex + 1} / {interiorGallery.length}
                </span>

                <span className="text-[11px] text-white/90 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md sm:hidden">
                  👈 {t('સ્વાઇપ કરો', 'Swipe')} 👉
                </span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white space-y-2 z-20">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {lang === 'gu' ? activePhoto?.badgeGu : activePhoto?.badgeEn}
                  </span>
                  
                  {/* Dot Indicators */}
                  <div className="flex gap-1.5 ml-auto">
                    {interiorGallery.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeIndex === i ? 'bg-amber-400 w-5' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-3xl font-black">
                  {lang === 'gu' ? activePhoto?.titleGu : activePhoto?.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  {lang === 'gu' ? activePhoto?.descGu : activePhoto?.descEn}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails & Feature Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
              <span>{t('નીચેની યાદીમાંથી સુવિધા પસંદ કરો:', 'Select Facility to View:')}</span>
              <span className="text-red-600 font-extrabold">{t('ટચ કરીને જુઓ', 'Tap to Inspect')}</span>
            </div>

            {interiorGallery.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectItem(idx)}
                  className={`p-3 sm:p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-red-50/90 border-red-500 shadow-md ring-2 ring-red-400/40 scale-[1.01]'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-16 h-14 sm:w-20 sm:h-16 object-cover rounded-xl shadow-sm flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className={`font-bold text-sm sm:text-base truncate ${isActive ? 'text-red-700 font-black' : 'text-slate-800'}`}>
                        {lang === 'gu' ? item.titleGu : item.titleEn}
                      </h4>
                      {isActive ? (
                        <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex-shrink-0 shadow-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t('જોઈ રહ્યા છો', 'Active')}</span>
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
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
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md shadow-red-200 active:scale-95 transition"
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
