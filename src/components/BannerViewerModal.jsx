import React from 'react';
import { X, Download, Phone, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function BannerViewerModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const { brand } = siteConfig;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 bg-slate-800 text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base">
                {t('આરવ એમ્બ્યુલન્સ સર્વિસ - ગોંડલ (ઓફિશિયલ બેનર)', 'Aarav Ambulance Service Gondal - Official Poster')}
              </h3>
              <p className="text-xs text-slate-400">Jatapara Bhavesh | 9316777108 / 6351478080</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={brand.bannerImage}
              download="aarav-ambulance-poster.jpg"
              className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
              title="Download Poster"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Image Area */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950">
          <img
            src={brand.bannerImage}
            alt="Aarav Ambulance Gondal Poster"
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-slate-800"
          />
        </div>

        {/* Modal Footer Call CTA */}
        <div className="p-3 sm:p-4 bg-slate-800 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3 text-white text-xs">
          <span>{t('૨૪ કલાક ઇમરજન્સી સંપર્ક:', '24x7 Emergency Contact:')}</span>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${brand.primaryPhone}`}
              className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{brand.primaryPhone}</span>
            </a>
            <a
              href={`tel:${brand.secondaryPhone}`}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{brand.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

