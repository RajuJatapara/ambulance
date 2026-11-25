import React from 'react';
import { Phone, MessageCircle, MapPin, Globe, CreditCard } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onOpenBooking, onOpenVisitingCard }) {
  const { lang, toggleLanguage, t } = useLanguage();
  const { brand } = siteConfig;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* 🚨 Top Emergency Hotline Bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-700 text-white py-1.5 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-300"></span>
            </span>
            <span>🚨 {t('૨૪ કલાક ઇમરજન્સી હેલ્પલાઇન:', '24x7 Emergency Helpline:')}</span>
            <a href={`tel:${brand.primaryPhone}`} className="underline font-black hover:text-yellow-200 tracking-wider">
              {brand.primaryPhone}
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`tel:${brand.secondaryPhone}`} className="hidden sm:inline underline font-black hover:text-yellow-200 tracking-wider">
              {brand.secondaryPhone}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-white text-slate-800 hover:bg-slate-100 px-2.5 py-0.5 rounded-full font-bold text-xs shadow-sm transition"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'gu' ? 'English' : 'ગુજરાતી'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 sm:gap-4 group">
          <img
            src={brand.logo}
            alt={brand.nameEn}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-slate-900 group-hover:text-red-600 transition">
                {t(brand.nameGu, brand.nameEn)}
              </span>
              <span className="bg-red-600 text-white text-[10px] sm:text-xs uppercase font-black px-2 py-0.5 rounded-md tracking-wider shadow-sm">
                {t(brand.cityGu, brand.cityEn)}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {t(brand.taglineGu, brand.taglineEn)}
            </p>
          </div>
        </a>

        {/* Desktop Quick Nav & Action */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-semibold text-slate-600">
            <a href="#vehicles" className="hover:text-red-600 transition">{t('એમ્બ્યુલન્સ ગાડીઓ', 'Our Fleet')}</a>
            <a href="#gallery" className="hover:text-red-600 transition">{t('ઇન્ટિરિયર ગેલેરી', 'Interior')}</a>
            <a href="#services" className="hover:text-red-600 transition">{t('સેવાઓ', 'Services')}</a>
            <a href="#routes" className="hover:text-red-600 transition">{t('રૂટ્સ & અંતર', 'Routes')}</a>
            <a href="#why-us" className="hover:text-red-600 transition">{t('અમારા વિશે', 'About Us')}</a>
            <a href="#faq" className="hover:text-red-600 transition">{t('પ્રશ્નોત્તરી', 'FAQ')}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-red-200 transition emergency-pulse-btn"
            >
              <Phone className="w-4 h-4" />
              <span>{t('તાત્કાલિક બુક કરો', 'Book Ambulance')}</span>
            </button>
          </div>
        </div>

        {/* Mobile Header Call Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${brand.primaryPhone}`}
            className="flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t('કૉલ કરો', 'Call')}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
