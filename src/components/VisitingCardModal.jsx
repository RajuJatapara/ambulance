import React, { useState } from 'react';
import { X, Phone, Download, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function VisitingCardModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const { brand } = siteConfig;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Handle Download Real Visiting Card Image (.png)
  const handleDownloadCardImage = () => {
    const cardSrc = brand.visitingCardImage || '/images/visiting-card.png';
    const link = document.createElement('a');
    link.href = cardSrc;
    link.download = 'Aarav-Ambulance-Gondal-Visiting-Card.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Download vCard (.vcf)
  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${brand.nameEn} Gondal (${brand.ownerEn})
ORG:${brand.nameEn}
TITLE:24x7 Emergency Ambulance Service
TEL;TYPE=CELL,VOICE:${brand.primaryPhone}
TEL;TYPE=WORK,VOICE:${brand.secondaryPhone}
ADR;TYPE=WORK:;;${brand.baseLocationEn};${brand.cityEn};Gujarat;;India
NOTE:24x7 Emergency Ambulance Service in Gondal. ICU, Oxygen, Patient Shifting (Mahindra Xylo & Maruti Eeco).
URL:https://aaravambulance.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aarav-Ambulance-Gondal.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Copy to clipboard
  const handleCopyNumbers = () => {
    const text = `Aarav Ambulance Service Gondal\n24x7 Helpline: ${brand.primaryPhone} / ${brand.secondaryPhone}\nOwner: ${brand.ownerEn} (${brand.ownerGu})\nLocation: Gondal, Gujarat`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Handle WhatsApp Share
  const handleShareWhatsApp = () => {
    const shareText = `🚨 *Aarav Ambulance Service - Gondal* 🚨
૨૪ કલાક ઇમરજન્સી એમ્બ્યુલન્સ સેવા
સંચાલક: ${brand.ownerGu} (${brand.ownerEn})

📞 હેલ્પલાઇન ૧: ${brand.primaryPhone}
📞 હેલ્પલાઇન ૨: ${brand.secondaryPhone}

🚑 સુવિધાઓ: ICU સેટઅપ, વેન્ટિલેટર, ઓક્સિજન, AC/Non-AC (ઝાયલો & ઈકો)
📍 ગોંડલ અને સમગ્ર સૌરાષ્ટ્ર/ગુજરાત

આ નંબર તમારા ફોનમાં સેવ કરી રાખો, જરૂરિયાતના સમયે કામ આવશે!`;

    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-white">
        
        {/* Top Header */}
        <div className="p-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-red-600/20 text-red-500 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </span>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                {t('ઓફિશિયલ વિઝિટિંગ કાર્ડ', 'Official Visiting Card')}
              </h3>
              <p className="text-[11px] text-slate-400">
                {t('માર્કેટ સ્ટાન્ડર્ડ પ્રિન્ટ વિઝિટિંગ કાર્ડ', 'Print-ready standard business card')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Physical Card Preview */}
        <div className="p-4 sm:p-6 flex flex-col items-center">
          
          {/* Real Card Visual Container */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-white">
            <img
              src={brand.visitingCardImage || "/images/visiting-card.png"}
              alt="Aarav Ambulance Service Gondal Visiting Card"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Action Buttons Below Card */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-6">
            
            {/* 1. Download Card Image */}
            <button
              onClick={handleDownloadCardImage}
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-md shadow-red-900/40 transition active:scale-95"
            >
              <Download className="w-4 h-4 text-yellow-300" />
              <span>{t('કાર્ડ ડાઉનલોડ (HD)', 'Download Card')}</span>
            </button>

            {/* 2. Save Contact to Phone (vCard) */}
            <button
              onClick={handleDownloadVCard}
              className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-md shadow-blue-900/40 transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-blue-200" />
              <span>{t('કોન્ટેક્ટ સેવ', 'Save Contact')}</span>
            </button>

            {/* 3. Share on WhatsApp */}
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-md shadow-emerald-900/40 transition active:scale-95"
            >
              <Share2 className="w-4 h-4 text-emerald-200" />
              <span>{t('WhatsApp શેર', 'Share WhatsApp')}</span>
            </button>

            {/* 4. Copy Numbers */}
            <button
              onClick={handleCopyNumbers}
              className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-700 transition active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t('કોપી થયું!', 'Copied!') : t('નંબર કોપી', 'Copy Info')}</span>
            </button>

          </div>

          {/* Quick Notice */}
          <p className="text-[11px] text-slate-400 text-center mt-4">
            💡 {t('આ વિઝિટિંગ કાર્ડ તમે તમારા મોબાઈલ કે કમ્પ્યુટરમાં HD ક્વોલિટીમાં ડાઉનલોડ કરી શકો છો.', 'Download this HD visiting card image to keep emergency contacts handy.')}
          </p>

        </div>

      </div>
    </div>
  );
}
