import React from 'react';
import { Phone, MessageCircle, MapPin, Zap, CheckCircle2, Shield, HeartPulse, Clock, Sparkles, Navigation, ArrowRight, Bed, Wind, Activity } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenBooking }) {
  const { lang, t } = useLanguage();
  const { brand } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-6 pb-16 lg:pt-10 lg:pb-20 border-b border-slate-800">
      {/* 3D Medical High-Tech Background Glow */}
      <div className="absolute top-0 right-1/4 -mt-20 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none"></div>
      
      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Top Floating Command Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2.5 sm:p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2.5 text-xs font-bold">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 uppercase tracking-wider">{t('લાઈવ કમાન્ડ સેન્ટર:', 'Live Command:')}</span>
            <span className="text-slate-200">{t('૨ એમ્બ્યુલન્સ ગોંડલ સ્ટેન્ડબાય પર તૈયાર', '2 Ambulances Ready on Gondal Standby')}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{t('ગોંડલ શહેર: ૧૦-૧૫ મિનિટમાં હાજર', '10-15 Min Reach in Gondal')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text & Headlines */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950 to-red-900 border border-red-500/40 text-red-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t('ગોંડલ & સૌરાષ્ટ્રની #1 ઇમરજન્સી લાઈફલાઈન', '#1 Emergency Lifeline in Gondal')}</span>
            </div>

            {/* Main Punch Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t('જીવન રક્ષા અમારી પ્રાથમિકતા', 'Saving Lives is Our Top Priority')}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 font-extrabold">
                {t('આરવ એમ્બ્યુલન્સ સર્વિસ', 'Aarav Ambulance Service')}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t(
                'સંચાલક: જતાપરા ભાવેશભાઈ. મહિન્દ્રા ઝાયલો (ICU સેટઅપ) અને મારુતિ ઈકો (ઝડપી લોકલ) સાથે ગોંડલ, રાજકોટ, અમદાવાદ અને સમગ્ર ગુજરાતમાં ૨૪ કલાક હાજર.',
                'Managed by Jatapara Bhavesh: Equipped with Mahindra Xylo (ICU setup) and Maruti EECO (Fast city response) for 24/7 service across Gondal, Rajkot, Ahmedabad, and Gujarat.'
              )}
            </p>

            {/* 🔴 BIG 3D DUAL EMERGENCY CALL HOTLINES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${brand.primaryPhone}`}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-lg py-3.5 px-5 rounded-2xl shadow-xl shadow-red-600/40 transition transform active:scale-95 border border-red-400/40"
              >
                <span className="p-2 bg-white/20 rounded-xl group-hover:rotate-12 transition">
                  <Phone className="w-5 h-5 fill-white animate-bounce" />
                </span>
                <div className="text-left">
                  <span className="text-[10px] block text-red-200 font-bold uppercase tracking-wide">
                    {t('પ્રાથમિક નંબર (ડાયરેક્ટ કૉલ)', 'Primary Hotline')}
                  </span>
                  <span className="text-xl font-black">{brand.primaryPhone}</span>
                </div>
              </a>

              <a
                href={`tel:${brand.secondaryPhone}`}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 text-white font-black text-lg py-3.5 px-5 rounded-2xl shadow-lg border border-slate-700 transition transform active:scale-95"
              >
                <span className="p-2 bg-blue-500/20 text-blue-400 rounded-xl group-hover:rotate-12 transition">
                  <Phone className="w-5 h-5 fill-blue-400" />
                </span>
                <div className="text-left">
                  <span className="text-[10px] block text-slate-400 font-bold uppercase tracking-wide">
                    {t('બીજો નંબર (૨૪ કલાક)', 'Secondary Hotline')}
                  </span>
                  <span className="text-xl font-black text-slate-100">{brand.secondaryPhone}</span>
                </div>
              </a>
            </div>

            {/* Live Impact Counters (4 Big Stats) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-2xl text-center">
                <div className="text-xl sm:text-2xl font-black text-red-500">24/7</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('કટોકટી સેવા', 'Emergency')}</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-2xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">10-15 Min</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('ગોંડલમાં સમય', 'Reach Time')}</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-2xl text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100% ICU</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('ઓક્સિજન સજ્જ', 'Equipped')}</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-2xl text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-400">2 Fleet</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('ઝાયલો & ઈકો', 'Vehicles')}</div>
              </div>
            </div>

          </div>

          {/* Right Area: 🚑 OPTION A - 3D REALISTIC VEHICLE COMMAND SHOWCASE */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Vehicle 1 Card: Mahindra Xylo (ICU Leader) */}
            <div className="group relative rounded-3xl overflow-hidden border-2 border-red-500/50 bg-slate-900/90 shadow-[0_12px_40px_rgba(220,38,38,0.25)] hover:border-red-400 transition-all duration-300">
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={siteConfig.vehicles[0].realImage}
                  alt="Mahindra Xylo ICU Ambulance Gondal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Status Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-red-600 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                    🚑 Mahindra Xylo (ICU Fleet)
                  </span>
                  <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>સ્ટેન્ડબાય તૈયાર</span>
                  </span>
                </div>

                {/* Bottom Route Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-extrabold bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-amber-300">
                    🏥 રાજકોટ • અમદાવાદ • સુરત • લાંબી મુસાફરી
                  </span>
                </div>
              </div>

              {/* Card Bottom CTA Strip */}
              <div className="p-3.5 bg-slate-900 flex items-center justify-between gap-3 border-t border-slate-800">
                <div className="text-xs">
                  <span className="text-slate-400 block font-bold">સુવિધા: વેન્ટિલેટર + ડબલ ઓક્સિજન + AC</span>
                  <span className="text-white font-black text-sm">મહિન્દ્રા ઝાયલો ICU એમ્બ્યુલન્સ</span>
                </div>

                <a
                  href={`tel:${brand.primaryPhone}`}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-red-600/40 transition active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>{t('આ ગાડી બોલાવો', 'Call Xylo')}</span>
                </a>
              </div>
            </div>

            {/* Vehicle 2 Card: Maruti EECO (Fast City Response) */}
            <div className="group relative rounded-3xl overflow-hidden border-2 border-blue-500/50 bg-slate-900/90 shadow-[0_12px_40px_rgba(37,99,235,0.2)] hover:border-blue-400 transition-all duration-300">
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={siteConfig.vehicles[1].realImage}
                  alt="Maruti Eeco Ambulance Gondal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Status Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-blue-600 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                    🚑 Maruti EECO (Rapid City)
                  </span>
                  <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>૧૦ મિનિટ પહોંચ</span>
                  </span>
                </div>

                {/* Bottom Route Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-extrabold bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-blue-300">
                    📍 ગોંડલ શહેર & આસપાસના ગ્રામ્ય વિસ્તારો
                  </span>
                </div>
              </div>

              {/* Card Bottom CTA Strip */}
              <div className="p-3.5 bg-slate-900 flex items-center justify-between gap-3 border-t border-slate-800">
                <div className="text-xs">
                  <span className="text-slate-400 block font-bold">સુવિધા: ઓક્સિજન સિલિન્ડર + સ્ટ્રેચર + વ્યાજબી દર</span>
                  <span className="text-white font-black text-sm">મારુતિ ઈકો સિટી એમ્બ્યુલન્સ</span>
                </div>

                <a
                  href={`tel:${brand.secondaryPhone}`}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-blue-700/40 transition active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>{t('આ ગાડી બોલાવો', 'Call Eeco')}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
