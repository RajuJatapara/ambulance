import React from 'react';
import { Navigation, Clock, MapPin, ArrowRight, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function RoutesPricing({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { routes, brand } = siteConfig;

  return (
    <section id="routes" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            {t('ગોંડલ થી મુખ્ય હોસ્પિટલ રૂટ્સ', 'Major Hospital Routes from Gondal')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t('રાજકોટ, અમદાવાદ અને અન્ય શહેરો માટે તાત્કાલિક શિફ્ટિંગ', 'Fast Highway Transit to Major Multi-Speciality Centers')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              'સૌરાષ્ટ્ર અને ગુજરાતની કોઈપણ મોટી હોસ્પિટલમાં દર્દીને સમયસર પહોંચાડવા માટે અમારા અનુભવી ડ્રાઈવરો સજ્જ છે.',
              'Experienced highway drivers ready to shift patients safely to major tertiary care centers round the clock.'
            )}
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {routes.map((r, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase">
                <span className="flex items-center gap-1 text-emerald-700 font-extrabold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Gondal
                </span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">{r.distance}</span>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  {lang === 'gu' ? r.gu : r.en}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{r.to}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{r.time}</span>
                </span>
                <a
                  href={`tel:${brand.primaryPhone}`}
                  className="font-bold text-red-600 hover:text-red-700 flex items-center gap-0.5"
                >
                  <span>{t('દર પૂછો', 'Get Quote')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Route Note */}
        <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 text-red-600 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                {t('અન્ય કોઈ ગામ કે શહેર જવું છે?', 'Need ambulance for another town or village?')}
              </h4>
              <p className="text-xs text-slate-500">
                {t('ગોંડલ તાલુકાના તમામ ગામડાઓ તેમજ સુરત, વડોદરા સુધીની સેવા ઉપલબ્ધ.', 'Service available to all Gondal villages, Surat, Vadodara, and throughout Gujarat.')}
              </p>
            </div>
          </div>

          <a
            href={`tel:${brand.primaryPhone}`}
            className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition"
          >
            {t('હમણાં વાત કરો: 9316777108', 'Call Now: 9316777108')}
          </a>
        </div>
      </div>
    </section>
  );
}

