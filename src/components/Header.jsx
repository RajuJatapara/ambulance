import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Globe, Menu, X, ChevronRight, Ambulance, Camera, HeartPulse, Navigation, HelpCircle, Users } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onOpenBooking, onOpenVisitingCard }) {
  const { lang, toggleLanguage, t } = useLanguage();
  const { brand } = siteConfig;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* 💻 Desktop Quick Nav & Action - 100% UNCHANGED AND ORIGINAL */}
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

        {/* 📱 Mobile Actions: Call Icon Button & Hamburger Drawer Button */}
        <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
          {/* Mobile Direct Call (Icon Only) */}
          <a
            href={`tel:${brand.primaryPhone}`}
            aria-label="Emergency Call"
            className="w-9 h-9 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-md active:scale-95 transition border border-red-400/40"
            title={`Call: ${brand.primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-white" />
          </a>

          {/* Hamburger Menu Toggle Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-red-600" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Slide-Down Menu Drawer (Mobile Only - lg:hidden) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-slate-900/95 backdrop-blur-2xl text-white border-b-2 border-red-600 shadow-2xl z-50 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="p-4 space-y-4">
            
            {/* Quick Helpline Header */}
            <div className="bg-red-600/20 border border-red-500/40 rounded-2xl p-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-red-300 uppercase font-black tracking-wider block">
                  {t('૨૪ કલાક ઇમરજન્સી હેલ્પલાઇન', '24x7 Emergency Helpline')}
                </span>
                <span className="text-base font-black text-white">{brand.primaryPhone}</span>
              </div>
              <a
                href={`tel:${brand.primaryPhone}`}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t('કૉલ કરો', 'Call')}</span>
              </a>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider px-2 block mb-1">
                {t('વિભાગો (Navigation)', 'Navigation')}
              </span>
              
              <a
                href="#vehicles"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>🚑 {t('એમ્બ્યુલન્સ ગાડીઓ', 'Our Fleet')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>📸 {t('ઇન્ટિરિયર ગેલેરી', 'Interior')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>🩺 {t('સેવાઓ', 'Services')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#routes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>🗺️ {t('રૂટ્સ & અંતર', 'Routes')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>⭐ {t('અમારા વિશે', 'About Us')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-100 font-bold text-sm transition border border-slate-800/80"
              >
                <span>❓ {t('પ્રશ્નોત્તરી', 'FAQ')}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </nav>

            {/* Mobile Actions: Book Ambulance & Secondary Hotline */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-black py-3 px-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('તાત્કાલિક બુક કરો', 'Book Ambulance')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${brand.secondaryPhone}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2.5 rounded-xl text-center font-bold border border-slate-700 flex items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t('લાઇન ૨', 'Line 2')}</span>
                </a>

                <a
                  href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'gu' ? 'નમસ્તે, મારે એમ્બ્યુલન્સ વિશે માહિતી જોઈએ છે.' : 'Hello, I need information about ambulance service.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/80 hover:bg-emerald-600 text-white p-2.5 rounded-xl text-center font-bold border border-emerald-600 flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Owner & City Info */}
            <div className="text-center pt-2 text-[11px] text-slate-400">
              <span>{t('સંચાલક:', 'Owner:')} </span>
              <span className="text-white font-bold">{t(brand.ownerGu, brand.ownerEn)}</span> • {t(brand.cityGu, brand.cityEn)}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
