import React, { useState } from 'react';
import { Navigation, Clock, MapPin, ArrowRight, ShieldCheck, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function RouteEstimator({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { routes, brand } = siteConfig;
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);

  const currentRoute = routes[selectedRouteIndex];

  return (
    <section id="routes" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            {t('ગોંડલ થી મુખ્ય હોસ્પિટલ રૂટ્સ', 'Express Hospital Routes')}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('રાજકોટ, અમદાવાદ અને અન્ય શહેરો માટે તાત્કાલિક શિફ્ટિંગ', 'Direct Highway Dispatch from Gondal')}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'સૌરાષ્ટ્ર અને ગુજરાતની કોઈપણ મોટી હોસ્પિટલમાં દર્દીને સમયસર પહોંચાડવા માટે અમારા અનુભવી ડ્રાઈવરો સજ્જ છે.',
              'Experienced drivers on round-the-clock standby to shift patients swiftly to major multi-speciality hospitals.'
            )}
          </p>
        </div>

        {/* Interactive Route Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {routes.map((r, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedRouteIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                selectedRouteIndex === idx
                  ? 'bg-red-600 text-white shadow-md shadow-red-200'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'gu' ? r.gu : r.en}</span>
            </button>
          ))}
        </div>

        {/* Selected Route Spotlight Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Route Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentRoute.priority}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {lang === 'gu' ? currentRoute.gu : currentRoute.en}
              </h3>

              <p className="text-sm text-slate-600 font-medium">
                {currentRoute.to} • {currentRoute.highlights}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">{t('અંદાજિત અંતર', 'Estimated Distance')}</span>
                  <span className="text-xl font-black text-slate-800">{currentRoute.distance}</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">{t('મુસાફરી સમય', 'Travel Duration')}</span>
                  <span className="text-xl font-black text-red-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {currentRoute.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Side */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl text-white space-y-4">
              <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                {t('ત્વરિત પૂછપરછ & ભાડું', 'Instant Quote')}
              </span>
              <p className="text-xs text-slate-300">
                {t('આ રૂટ માટે કિલોમીટર અને ઓક્સિજન/ICU સુવિધા મુજબ વ્યાજબી દર જાણવા સીધો સંપર્ક કરો.', 'Contact us for exact reasonable fare with oxygen and ICU support.')}
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${brand.primaryPhone}`}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('કૉલ કરો: 9316777108', 'Call: 9316777108')}</span>
                </a>

                <a
                  href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(`નમસ્તે, મારે ${currentRoute.en} માટે એમ્બ્યુલન્સ ના ભાડા ની વિગત જાણવી છે.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t('વોટ્સએપ પર ભાવ પૂછો', 'WhatsApp Quote')}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Village Notice */}
        <div className="mt-8 text-center text-xs text-slate-500 font-medium">
          <span>{t('ગોંડલ તાલુકાના તમામ ગ્રામ્ય વિસ્તારો (કોટડા સાંગાણી, ગોમટા, વાસાવાડ, વીરપુર, ભોજરાજપરા) માં પણ તાત્કાલિક સેવા પ્રાપ્ય છે.', 'Service available across all Gondal rural taluka villages including Virpur, Gomta, Vasavad, Bhojrajpara.')}</span>
        </div>

      </div>
    </section>
  );
}

