import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, CreditCard } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenBooking, onOpenVisitingCard }) {
  const { lang, t } = useLanguage();
  const { brand } = siteConfig;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-28 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={brand.logo}
                alt={brand.nameEn}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full shadow-lg flex-shrink-0 bg-white/10 p-0.5 backdrop-blur-sm"
              />
              <div>
                <h3 className="font-black text-white text-lg sm:text-xl">
                  {t(brand.nameGu, brand.nameEn)}
                </h3>
                <span className="text-xs text-red-400 font-bold">{t('ગોંડલ, ગુજરાત', 'Gondal, Gujarat')}</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {t(
                'ગોંડલ અને સમગ્ર સૌરાષ્ટ્રમાં ૨૪ કલાક ઝડપી, વિશ્વસનીય અને જીવનરક્ષક એમ્બ્યુલન્સ સેવા.',
                '24/7 dedicated, prompt and compassionate ambulance service across Gondal and Saurashtra.'
              )}
            </p>

            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">{t('સંચાલક:', 'Owner:')}</span> {t(brand.ownerGu, brand.ownerEn)}
            </div>
          </div>

          {/* Col 2: Ambulances & Services */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {t('અમારી ગાડીઓ & સુવિધાઓ', 'Fleet & Facilities')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition">🚑 Mahindra Xylo (ICU & AC)</li>
              <li className="hover:text-white transition">🚑 Maruti EECO (Fast City Response)</li>
              <li className="hover:text-white transition">💨 Oxygen & Ventilator Setup</li>
              <li className="hover:text-white transition">🏥 Patient Hospital Shifting</li>
              <li className="hover:text-white transition">❄️ AC / Non-AC Options</li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {t('ક્વિક લિંક્સ', 'Quick Links')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#vehicles" className="hover:text-white transition">{t('એમ્બ્યુલન્સ ગાડીઓ', 'Our Fleet')}</a></li>
              <li><a href="#services" className="hover:text-white transition">{t('સેવાઓ', 'Services')}</a></li>
              <li><a href="#routes" className="hover:text-white transition">{t('રૂટ્સ & અંતર', 'Routes')}</a></li>
              <li><a href="#why-us" className="hover:text-white transition">{t('અમારા વિશે', 'About Us')}</a></li>
              <li><a href="#faq" className="hover:text-white transition">{t('પ્રશ્નોત્તરી', 'FAQ')}</a></li>
            </ul>
          </div>

          {/* Col 4: 24/7 Helpline */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              {t('૨૪x૭ હેલ્પલાઇન', '24x7 Helpline')}
            </h4>
            
            <div className="space-y-2">
              <a
                href={`tel:${brand.primaryPhone}`}
                className="flex items-center gap-2 p-2.5 bg-red-600/20 border border-red-500/30 rounded-xl text-white font-extrabold text-sm hover:bg-red-600 transition"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>{brand.primaryPhone}</span>
              </a>

              <a
                href={`tel:${brand.secondaryPhone}`}
                className="flex items-center gap-2 p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-white font-extrabold text-sm hover:bg-blue-600 transition"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{brand.secondaryPhone}</span>
              </a>
            </div>

            <a
              href={`https://wa.me/${brand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-bold text-xs transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {brand.nameEn} Gondal. {t('સર્વ હક સુરક્ષિત.', 'All Rights Reserved.')}</p>
          <p className="flex items-center gap-1">
            <span>{t('માનવ સેવા એ જ પ્રભુ સેવા', 'Dedicated to Health & Human Care')}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
