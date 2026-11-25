import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Zap, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function StickyEmergencyBar({ onOpenBooking }) {
  const { t } = useLanguage();
  const { brand } = siteConfig;
  const [isLocating, setIsLocating] = useState(false);

  // Auto-detect GPS and open WhatsApp with Google Map Link
  const handleSendGPSLocation = (e) => {
    e.preventDefault();
    setIsLocating(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          const { latitude, longitude } = position.coords;
          const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          const message = `🚨 *ઇમરજન્સી એમ્બ્યુલન્સ જરૂરિયાત!* 🚨
કૃપા કરીને તાત્કાલિક એમ્બ્યુલન્સ મોકલો.
📍 *મારું લાઈવ GPS લોકેશન:*
${mapUrl}

(આ લોકેશન પર તાત્કાલિક પહોંચો)`;
          window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
        },
        (error) => {
          setIsLocating(false);
          // Fallback if user denies permission
          const fallbackMsg = `🚨 *ઇમરજન્સી એમ્બ્યુલન્સ જરૂરિયાત!* 🚨
મારે ગોંડલ / આસપાસના વિસ્તારમાં તાત્કાલિક એમ્બ્યુલન્સની જરૂર છે.
કૃપા કરીને તાત્કાલિક સંપર્ક કરો!`;
          window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(fallbackMsg)}`, '_blank');
        },
        { enableHighAccuracy: true, timeout: 6000 }
      );
    } else {
      setIsLocating(false);
      window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent('ઇમરજન્સી એમ્બ્યુલન્સ જરૂરિયાત!')}`, '_blank');
    }
  };

  return (
    <aside
      aria-label="3D Floating Emergency Command Dock"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-none"
    >
      <div className="max-w-md mx-auto pointer-events-auto bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-2 border-2 border-red-500/50 shadow-[0_12px_40px_rgba(220,38,38,0.45)]">
        
        {/* Floating Dock Grid */}
        <div className="grid grid-cols-12 gap-1.5 items-center">
          
          {/* Secondary Hotline (Small Compact Pill) */}
          <a
            href={`tel:${brand.secondaryPhone}`}
            className="col-span-3 flex flex-col items-center justify-center bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 py-2.5 px-1 rounded-2xl border border-slate-700/80 active:scale-95 transition"
            title="Secondary Helpline"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400 mb-0.5" />
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">લાઇન ૨</span>
            <span className="text-[10px] font-black text-white">{brand.secondaryPhone.slice(-5)}</span>
          </a>

          {/* 🔴 BIG 3D PULSING PRIMARY SOS BUTTON (CENTERPIECE) */}
          <a
            href={`tel:${brand.primaryPhone}`}
            className="col-span-6 relative flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white py-3 px-2 rounded-2xl shadow-lg shadow-red-600/60 active:scale-95 transition border border-red-400/50 overflow-hidden group"
          >
            {/* Ambient Pulse Ripple */}
            <span className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-25 pointer-events-none"></span>

            <span className="p-1.5 bg-white/20 rounded-xl group-hover:rotate-12 transition">
              <Phone className="w-4 h-4 fill-white animate-bounce" />
            </span>
            <div className="text-left">
              <span className="text-[9px] block font-black uppercase tracking-wider text-red-100">
                🚨 1-ટેપ SOS કૉલ
              </span>
              <span className="text-sm font-black tracking-tight text-white block -mt-0.5">
                {brand.primaryPhone}
              </span>
            </div>
          </a>

          {/* WhatsApp GPS Live Location Button */}
          <button
            onClick={handleSendGPSLocation}
            disabled={isLocating}
            className="col-span-3 flex flex-col items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-1 rounded-2xl shadow-md border border-emerald-400/40 active:scale-95 transition"
            title="WhatsApp Live Location"
          >
            <Navigation className={`w-3.5 h-3.5 text-white mb-0.5 ${isLocating ? 'animate-spin' : ''}`} />
            <span className="text-[9px] font-bold text-emerald-100 uppercase tracking-tighter">
              {isLocating ? 'શોધે છે...' : 'જીપીએસ'}
            </span>
            <span className="text-[10px] font-black text-white">WhatsApp</span>
          </button>

        </div>

      </div>
    </aside>
  );
}
