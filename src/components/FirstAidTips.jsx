import React from 'react';
import { Phone, ShieldAlert, HeartPulse, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function FirstAidTips() {
  const { lang, t } = useLanguage();
  const { emergencyTips, brand } = siteConfig;

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambulance Beacon Lighting Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            {t('જીવન રક્ષક માર્ગદર્શન', 'Life Saving Guidance')}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('એમ્બ્યુલન્સ આવે ત્યાં સુધી શું કરવું?', 'What to Do While Waiting for the Ambulance?')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              'ઇમરજન્સીમાં દરેક સેકન્ડ કિંમતી હોય છે. અમારા ડ્રાઈવર તમારા સરનામે પહોંચે તે ૧૦-૧૫ મિનિટમાં આ ૪ વાતોનું ખાસ ધ્યાન રાખો.',
              'Every second is vital during emergencies. Follow these 4 essential steps during the 10-15 minutes our ambulance is on its way.'
            )}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {emergencyTips.map((tip) => (
            <div
              key={tip.step}
              className="relative p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-red-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform">
                  0{tip.step}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Step 0{tip.step}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-red-400 transition">
                  {lang === 'gu' ? tip.titleGu : tip.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {lang === 'gu' ? tip.descGu : tip.descEn}
                </p>
              </div>

              {/* Bottom Checklist indicator */}
              <div className="mt-5 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t('અત્યંત જરૂરી', 'Critical Step')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Action Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-red-900/70 via-red-950 to-slate-900 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
              <Phone className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {t('ઇમરજન્સી નંબર તમારા મોબાઇલમાં સેવ રાખો', 'Save Emergency Numbers in Your Contacts')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {brand.ownerEn} ({brand.ownerGu}) • 9316777108 / 6351478080
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${brand.primaryPhone}`}
              className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3 rounded-2xl text-sm shadow-lg shadow-red-600/30 transition text-center"
            >
              {t('કૉલ કરો: 9316777108', 'Call: 9316777108')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

