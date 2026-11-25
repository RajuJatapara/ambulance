import React, { useState } from 'react';
import { Phone, CheckCircle, ShieldCheck, Zap, ArrowRight, Bed, Wind, Sparkles, Navigation, Eye, Layers, Info, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Vehicles({ onSelectVehicle }) {
  const { lang, t } = useLanguage();
  const { vehicles, brand } = siteConfig;

  // View Mode for each vehicle: 'exterior' or 'interior'
  const [viewModes, setViewModes] = useState({
    xylo: 'exterior',
    eeco: 'exterior'
  });

  // Active Hotspot tooltip state
  const [activeHotspot, setActiveHotspot] = useState(null);

  const toggleViewMode = (vehicleId, mode) => {
    setViewModes((prev) => ({ ...prev, [vehicleId]: mode }));
    setActiveHotspot(null);
  };

  return (
    <section id="vehicles" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            {t('અમારી એમ્બ્યુલન્સ ગાડીઓ', 'Our Dedicated Fleet')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('તમારી જરૂરિયાત મુજબ ખાસ સજ્જ વાહનો', 'Two Specialized Ambulances for Every Emergency')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'ગાડી બહારથી કેવી દેખાય છે અને અંદર પેશન્ટ કેબિનમાં કેવી સુવિધા & જગ્યા છે તે જાતે ચેક કરો:',
              'Inspect both exterior look and inside patient cabin space with interactive 3D hotspot controls:'
            )}
          </p>
        </div>

        {/* 2 Vehicles Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vehicles.map((v) => {
            const isXylo = v.id === 'xylo';
            const currentMode = viewModes[v.id] || 'exterior';
            const isInterior = currentMode === 'interior';

            return (
              <div
                key={v.id}
                className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between ${isXylo ? 'border-red-300 ring-1 ring-red-100' : 'border-blue-300 ring-1 ring-blue-100'
                  }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className={`p-4 sm:p-5 text-white flex items-center justify-between ${isXylo ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-blue-700 to-blue-800'
                    }`}>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                        {lang === 'gu' ? v.typeGu : v.typeEn}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black">{lang === 'gu' ? v.nameGu : v.nameEn}</h3>
                    </div>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black">
                      {lang === 'gu' ? v.badgeGu : v.badgeEn}
                    </span>
                  </div>

                  {/* 🔄 EXTERIOR vs INTERIOR LIVE TOGGLE BAR */}
                  <div className="bg-slate-900 p-2 flex items-center justify-between px-4 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-bold hidden sm:inline">
                      {isInterior ? '🛏️ અંદરની કેબિન સ્પેસ વ્યુ' : '🚗 બહારનો વાસ્તવિક લૂક'}
                    </span>

                    <div className="inline-flex p-1 bg-slate-800 rounded-xl border border-slate-700 w-full sm:w-auto justify-center">
                      <button
                        onClick={() => toggleViewMode(v.id, 'exterior')}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${!isInterior
                          ? 'bg-red-600 text-white shadow font-black'
                          : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        🚗 {t('બહારનો લૂક', 'Exterior Look')}
                      </button>

                      <button
                        onClick={() => toggleViewMode(v.id, 'interior')}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 ${isInterior
                          ? 'bg-amber-400 text-slate-950 shadow font-black'
                          : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>🛏️ {t('અંદરની જગ્યા (Cabin Space)', 'Inside Cabin')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Vehicle Image Stage (Exterior OR Interior with Hotspots) */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950 group select-none">
                    <img
                      src={isInterior ? v.interiorImage : v.realImage}
                      alt={v.nameEn}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                    {/* Mode Status Pill */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 shadow-lg flex items-center gap-1.5">
                      {isInterior ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                          <span className="text-amber-300 font-extrabold">{t('કેબિન સુવિધા હોટસ્પોટ્સ (ટચ કરો)', 'Touch Points to Inspect')}</span>
                        </>
                      ) : (
                        <>
                          <Bed className="w-3.5 h-3.5 text-yellow-400" />
                          <span>{isXylo ? 'ICU Stretcher + 2 Attendants + Doctor' : 'Stretcher Bed + 1 Attendant'}</span>
                        </>
                      )}
                    </div>

                    {/* 📍 3D HOTSPOT PINS (Only when Interior Mode is Active!) */}
                    {isInterior && v.hotspots && v.hotspots.map((spot) => (
                      <div
                        key={spot.id}
                        style={{ top: spot.y, left: spot.x }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        <button
                          onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-black text-xs shadow-[0_0_15px_rgba(220,38,38,0.9)] border-2 border-white animate-bounce focus:outline-none"
                          title={spot.titleGu}
                        >
                          <span>+</span>
                          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></span>
                        </button>
                      </div>
                    ))}

                    {/* Active Hotspot Info Overlay Card */}
                    {activeHotspot && isInterior && (
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur-xl p-3 rounded-2xl border-2 border-amber-400 text-white shadow-2xl animate-fadeIn z-30">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <span className="p-1 bg-amber-400/20 text-amber-300 rounded-lg">
                              <Info className="w-4 h-4 text-amber-400" />
                            </span>
                            <h4 className="font-black text-amber-300 text-sm">{activeHotspot.titleGu}</h4>
                          </div>
                          <button
                            onClick={() => setActiveHotspot(null)}
                            className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 mt-1 pl-6 leading-relaxed">
                          {activeHotspot.descGu}
                        </p>
                      </div>
                    )}

                    {/* Bottom Right Route Specialist Tag */}
                    <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow">
                      {isXylo ? 'Long Route Specialist' : 'City 10-15 Min Reach'}
                    </div>
                  </div>

                  {/* 📐 Space Dimensions & Seating Grid */}
                  <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                      📐 {t('અંદરની સ્પેસ & બેઠક વ્યવસ્થા (Space Dimensions):', 'Inside Cabin Space & Capacity:')}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-700 font-bold">
                      <div className="bg-white p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-normal">સગા માટે બેઠક:</span>
                        <span className="text-slate-900">{v.spaceDimensions?.seating}</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-normal">દર્દી બેડ:</span>
                        <span className="text-slate-900">{v.spaceDimensions?.patientBed}</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-200 col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-slate-400 block font-normal">કેબિન ઊંચાઈ:</span>
                        <span className="text-slate-900">{v.spaceDimensions?.cabinHeight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'gu' ? v.descriptionGu : v.descriptionEn}
                    </p>

                    {/* Suitable For Notice */}
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                        {t('ક્યારે બોલાવવી સૌથી યોગ્ય:', 'Best Suited For:')}
                      </span>
                      <span className="text-xs font-extrabold text-slate-800">
                        {lang === 'gu' ? v.suitableForGu : v.suitableForEn}
                      </span>
                    </div>

                    {/* Key Specs Pills Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {v.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 p-2 rounded-lg">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          <span className="truncate">{lang === 'gu' ? spec.labelGu : spec.labelEn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onSelectVehicle(v)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{t('આ ગાડી બુક કરો', 'Book This Ambulance')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${brand.primaryPhone}`}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{t('કૉલ કરો', 'Call')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
