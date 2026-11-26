import React, { useState } from 'react';
import { Phone, Navigation, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function StickyEmergencyBar({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { brand } = siteConfig;
  const [isLocating, setIsLocating] = useState(false);

  // Auto-detect GPS and open WhatsApp seamlessly without popup blocker
  const handleSendGPSLocation = (e) => {
    e.preventDefault();
    setIsLocating(true);

    const openWhatsApp = (mapUrl = null) => {
      setIsLocating(false);
      const message = mapUrl
        ? (lang === 'gu'
            ? `🚨 *ઇમરજન્સી એમ્બ્યુલન્સ જરૂરિયાત!* 🚨
કૃપા કરીને તાત્કાલિક એમ્બ્યુલન્સ મોકલો.
📍 *મારું લાઈવ GPS લોકેશન:*
${mapUrl}

(ગોંડલ / નજીકના વિસ્તારમાંથી તાત્કાલિક આવો)`
            : `🚨 *EMERGENCY AMBULANCE REQUIRED!* 🚨
Please dispatch an ambulance immediately.
📍 *My Live GPS Location:*
${mapUrl}

(Please arrive at this location urgently)`)
        : (lang === 'gu'
            ? `🚨 *ઇમરજન્સી એમ્બ્યુલન્સ જરૂરિયાત!* 🚨
મારે ગોંડલ / આસપાસના વિસ્તારમાં તાત્કાલિક એમ્બ્યુલન્સની જરૂર છે.
(કૃપા કરીને આ ચેટમાં તમારું લોકેશન પણ શેર કરો)
તાત્કાલિક સંપર્ક કરો!`
            : `🚨 *EMERGENCY AMBULANCE REQUIRED!* 🚨
I need an ambulance immediately in Gondal or nearby area.
Please respond urgently!`);

      const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Use window.location.href to launch WhatsApp app natively on 1st click (no popup blocker!)
      window.location.href = whatsappUrl;
    };

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      // 3.5s timeout with cellular/wifi instant fallback (enableHighAccuracy: false)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          openWhatsApp(mapUrl);
        },
        (error) => {
          // If location is OFF or denied, immediately open WhatsApp anyway with emergency text!
          openWhatsApp(null);
        },
        { enableHighAccuracy: false, timeout: 3500, maximumAge: 60000 }
      );
    } else {
      openWhatsApp(null);
    }
  };

  return (
    <aside
      aria-label="Mobile Floating Emergency Bar"
      className="lg:hidden fixed bottom-2.5 left-2.5 right-2.5 z-50 pointer-events-none"
    >
      <div className="max-w-lg mx-auto pointer-events-auto bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-2 border border-red-500/40 shadow-[0_12px_40px_rgba(220,38,38,0.45)]">
        
        {/* Micro Status & Secondary Helpline Pill */}
        <div className="flex items-center justify-between px-2 py-1 mb-1.5 bg-slate-900/90 rounded-xl text-[11px] border border-slate-800">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400">{t('૨૪x૭ સ્ટેન્ડબાય', '24x7 Standby')}</span>
          </div>

          <a
            href={`tel:${brand.secondaryPhone}`}
            className="flex items-center gap-1 text-slate-300 hover:text-white font-bold transition"
            title="Call Secondary Helpline"
          >
            <Phone className="w-3 h-3 text-blue-400" />
            <span className="text-slate-400 font-normal">{t('લાઇન ૨:', 'Line 2:')}</span>
            <span className="text-yellow-300 font-extrabold underline">{brand.secondaryPhone}</span>
          </a>
        </div>

        {/* 2 Big Ergonomic Action Buttons */}
        <div className="grid grid-cols-12 gap-2 items-stretch">
          
          {/* Button 1: 🔴 PRIMARY EMERGENCY CALL (60% width) */}
          <a
            href={`tel:${brand.primaryPhone}`}
            className="col-span-7 relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white py-3 px-3 rounded-xl shadow-lg shadow-red-600/50 active:scale-95 transition border border-red-400/50 overflow-hidden group select-none"
          >
            {/* Ambient Pulse Ripple */}
            <span className="absolute inset-0 bg-white/20 rounded-xl animate-ping opacity-25 pointer-events-none"></span>

            <span className="p-1.5 bg-white/20 rounded-lg group-hover:rotate-12 transition flex-shrink-0">
              <Phone className="w-5 h-5 fill-white animate-bounce" />
            </span>
            <div className="text-left min-w-0">
              <span className="text-[10px] block font-black uppercase tracking-wider text-red-100 leading-tight truncate">
                {t('🚨 ૧-ટેપ SOS કૉલ', '🚨 1-Tap SOS Call')}
              </span>
              <span className="text-sm sm:text-base font-black tracking-tight text-white block leading-none mt-0.5">
                {brand.primaryPhone}
              </span>
            </div>
          </a>

          {/* Button 2: 🟢 WHATSAPP LIVE GPS (40% width) */}
          <button
            onClick={handleSendGPSLocation}
            disabled={isLocating}
            className="col-span-5 relative flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white py-3 px-2 rounded-xl shadow-lg shadow-emerald-600/40 border border-emerald-400/40 active:scale-95 transition select-none disabled:opacity-75"
            title="Send WhatsApp Location"
          >
            <div className="p-1.5 bg-white/20 rounded-lg flex-shrink-0">
              <Navigation className={`w-4 h-4 text-white ${isLocating ? 'animate-spin' : ''}`} />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] block font-bold text-emerald-100 uppercase tracking-tight truncate leading-tight">
                {isLocating ? t('શોધે છે...', 'Locating...') : t('લોકેશન મોકલો', 'Send Location')}
              </span>
              <span className="text-xs sm:text-sm font-black text-white block leading-none mt-0.5 truncate">
                WhatsApp
              </span>
            </div>
          </button>

        </div>

      </div>
    </aside>
  );
}
