import React, { useState } from 'react';
import { Building2, Navigation, Clock, Phone, MessageCircle, ShieldCheck, HeartPulse, Sparkles, ArrowUpRight, Ambulance } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function HospitalDirectory({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { hospitals, brand } = siteConfig;
  const [activeCity, setActiveCity] = useState('all');

  const filteredHospitals = activeCity === 'all'
    ? hospitals
    : hospitals.filter((h) => h.city.toLowerCase() === activeCity.toLowerCase());

  const handleWhatsAppDispatch = (hospital) => {
    const hospitalName = lang === 'gu' ? hospital.nameGu : hospital.nameEn;
    const msg = lang === 'gu'
      ? `🚨 *ઇમરજન્સી એમ્બ્યુલન્સ બુકિંગ* 🚨
મારે ગોંડલથી *${hospitalName} (${hospital.cityGu})* દર્દીને શિફ્ટ કરવા માટે તાત્કાલિક એમ્બ્યુલન્સ મોકલવાની જરૂર છે.
કૃપા કરીને તાત્કાલિક કૉલ કરો!`
      : `🚨 *EMERGENCY AMBULANCE DISPATCH* 🚨
I need an ambulance from Gondal to *${hospitalName} (${hospital.city})* immediately.
Please respond urgently!`;

    window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="hospitals" className="py-16 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            {t('મુખ્ય હોસ્પિટલ ડિરેક્ટરી', 'Major Hospital Referral Network')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('ગોંડલથી રાજકોટ & અમદાવાદની મુખ્ય હોસ્પિટલો', 'Direct Emergency Shifting to Leading Hospitals')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'ગંભીર દર્દીઓને સમયસર સુપરસ્પેશિયાલિટી સારવાર મળી રહે તે માટે અમારા ડ્રાઈવરો તમામ હાઇવે અને મુખ્ય હોસ્પિટલોથી સંપૂર્ણ વાકેફ છે.',
              'Rapid express transfer with trained paramedics to AIIMS, Civil, and top cardiology/trauma centers.'
            )}
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCity('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              activeCity === 'all'
                ? 'bg-red-600 text-white shadow-md shadow-red-200 font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <span>{t('બધી મુખ્ય હોસ્પિટલો', 'All Major Hospitals')}</span>
            <span className="text-[11px] opacity-80">({hospitals.length})</span>
          </button>

          <button
            onClick={() => setActiveCity('rajkot')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              activeCity === 'rajkot'
                ? 'bg-red-600 text-white shadow-md shadow-red-200 font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <span>📍 {t('રાજકોટ હોસ્પિટલ્સ (૩૫ મિનિટ)', 'Rajkot (35 Min)')}</span>
          </button>

          <button
            onClick={() => setActiveCity('ahmedabad')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              activeCity === 'ahmedabad'
                ? 'bg-red-600 text-white shadow-md shadow-red-200 font-black'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <span>🏙️ {t('અમદાવાદ સુપરસ્પેશિયાલિટી (ICU ઝાયલો)', 'Ahmedabad Super-ICU')}</span>
          </button>
        </div>

        {/* Hospitals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((h) => {
            const isAhmedabad = h.city.toLowerCase() === 'ahmedabad';
            return (
              <div
                key={h.id}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-red-400 p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-slate-900 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-lg">
                      {lang === 'gu' ? h.cityGu : h.city}
                    </span>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                      isAhmedabad
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    }`}>
                      {h.badge}
                    </span>
                  </div>

                  {/* Hospital Name & Area */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition">
                      {lang === 'gu' ? h.nameGu : h.nameEn}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{lang === 'gu' ? h.areaGu : h.areaEn}</span>
                    </p>
                  </div>

                  {/* Specialty Box */}
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      {t('મુખ્ય વિભાગ / સુવિધા:', 'Medical Speciality:')}
                    </span>
                    <p className="line-clamp-2 font-bold text-slate-800">
                      {lang === 'gu' ? h.specialtyGu : h.specialtyEn}
                    </p>
                  </div>

                  {/* Distance & ETA Row */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">{t('અંતર', 'Distance')}</span>
                      <span className="font-black text-slate-900 text-sm">{h.distance}</span>
                    </div>

                    <div className="bg-red-50 p-2 rounded-xl border border-red-200">
                      <span className="text-[10px] text-red-500 block font-bold">{t('પહોંચવાનો સમય', 'Reach ETA')}</span>
                      <span className="font-black text-red-700 text-sm flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{h.eta}</span>
                      </span>
                    </div>
                  </div>

                  {/* Recommended Vehicle */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold bg-amber-50/80 border border-amber-200 p-2 rounded-xl">
                    <Ambulance className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{t('ભલામણ:', 'Recommended:')} </span>
                    <span className="text-amber-900 font-black truncate">{lang === 'gu' ? h.recommendedVehicleGu : h.recommendedVehicle}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-slate-100">
                  <a
                    href={`tel:${brand.primaryPhone}`}
                    className="flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow transition active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>{t('કૉલ કરો', 'Call Now')}</span>
                  </a>

                  <button
                    onClick={() => handleWhatsAppDispatch(h)}
                    className="flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow transition active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>{t('વોટ્સએપ બુક', 'WhatsApp')}</span>
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
