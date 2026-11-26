import React, { useState } from 'react';
import { X, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function QuickBookingModal({ isOpen, onClose, preselectedVehicle }) {
  const { lang, t } = useLanguage();
  const { brand } = siteConfig;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: 'ગોંડલ (Gondal)',
    dropHospital: '',
    vehicle: preselectedVehicle ? preselectedVehicle.nameEn : 'Mahindra Xylo Ambulance',
    emergencyType: 'Critical / તાત્કાલિક',
    patientCondition: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Validate fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = t('કૃપા કરીને દર્દી અથવા સગાનું નામ દાખલ કરો (આ વિગત ફરજિયાત છે).', 'Please enter patient or relative name (Required).');
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = t('કૃપા કરીને મોબાઇલ નંબર દાખલ કરો (આ વિગત ફરજિયાત છે).', 'Please enter mobile number (Required).');
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = t('કૃપા કરીને માન્ય ૧૦ આંકડાનો મોબાઇલ નંબર દાખલ કરો.', 'Please enter a valid 10-digit mobile number.');
    }

    if (!formData.pickupLocation || !formData.pickupLocation.trim()) {
      newErrors.pickupLocation = t('કૃપા કરીને પીકઅપ એડ્રેસ / ગામ દાખલ કરો (આ વિગત ફરજિયાત છે).', 'Please enter pickup location (Required).');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validate();
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      phone: true,
      pickupLocation: true
    });

    if (!validate()) {
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    const message = lang === 'gu'
      ? `🚨 *નવી એમ્બ્યુલન્સ બુકિંગ વિનંતી* 🚨
-------------------------------------
👤 દર્દી/સગાનું નામ: ${formData.name.trim()}
📞 સંપર્ક નંબર: ${formData.phone.trim()}
📍 પીકઅપ લોકેશન: ${formData.pickupLocation.trim()}
🏥 હોસ્પિટલ: ${formData.dropHospital.trim() || 'નક્કી કરવાની બાકી'}
🚑 પસંદ કરેલ ગાડી: ${formData.vehicle}
⚠️ ઇમરજન્સી લેવલ: ${formData.emergencyType}
📝 નોંધ: ${formData.patientCondition.trim() || 'સામાન્ય'}
-------------------------------------
કૃપા કરીને તાત્કાલિક સંપર્ક કરો!`
      : `🚨 *NEW AMBULANCE BOOKING REQUEST* 🚨
-------------------------------------
👤 Patient / Relative: ${formData.name.trim()}
📞 Contact Number: ${formData.phone.trim()}
📍 Pickup Address: ${formData.pickupLocation.trim()}
🏥 Destination Hospital: ${formData.dropHospital.trim() || 'To be decided'}
🚑 Selected Fleet: ${formData.vehicle}
⚠️ Urgency Level: ${formData.emergencyType}
📝 Special Notes: ${formData.patientCondition.trim() || 'Standard'}
-------------------------------------
Please respond immediately!`;

    const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
              {t('ઓનલાઇન બુકિંગ & પૂછપરછ', 'Online Booking & Inquiry')}
            </span>
            <h3 className="text-xl font-black mt-1">
              {t('એમ્બ્યુલન્સ તાત્કાલિક બુક કરો', 'Book Ambulance Immediately')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        <form onSubmit={handleSubmitWhatsApp} noValidate className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">
                {t('વિનંતી મોકલાઈ ગઈ છે!', 'Request Sent on WhatsApp!')}
              </h4>
              <p className="text-sm text-slate-600">
                {t('અમે તરત જ તમને કોલ કરી રહ્યા છીએ.', 'We are calling you back immediately.')}
              </p>
            </div>
          ) : (
            <>
              {/* Emergency Call Notice */}
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-center justify-between">
                <span>⚠️ {t('જો અત્યંત ગંભીર ઇમરજન્સી હોય તો સીધો ફોન કરો:', 'For extreme emergency, directly call:')}</span>
                <a href={`tel:${brand.primaryPhone}`} className="font-extrabold underline text-red-700">
                  {brand.primaryPhone}
                </a>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('દર્દી અથવા સગાનું નામ', 'Name')} <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('દા.ત. રમેશભાઈ', 'e.g. Ramesh Patel')}
                    value={formData.name}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) {
                        setErrors({ ...errors, name: null });
                      }
                    }}
                    className={`w-full px-3 py-2 text-base sm:text-sm border rounded-xl focus:outline-none transition ${
                      touched.name && errors.name
                        ? 'border-red-500 bg-red-50/40 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-2 focus:ring-red-500'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-xs text-red-600 font-bold flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* 2. Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('સંપર્ક નંબર (મોબાઇલ)', 'Mobile Number')} <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder={t('દા.ત. 9898XXXXXX', 'e.g. 9898XXXXXX')}
                    value={formData.phone}
                    onBlur={() => handleBlur('phone')}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) {
                        setErrors({ ...errors, phone: null });
                      }
                    }}
                    className={`w-full px-3 py-2 text-base sm:text-sm border rounded-xl focus:outline-none transition ${
                      touched.phone && errors.phone
                        ? 'border-red-500 bg-red-50/40 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-2 focus:ring-red-500'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-600 font-bold flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Pickup & Drop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 3. Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('પીકઅપ એડ્રેસ / ગામ', 'Pickup Location')} <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('ગોંડલ, કોલેજ ચોકડી...', 'Gondal, College Chowkadi...')}
                    value={formData.pickupLocation}
                    onBlur={() => handleBlur('pickupLocation')}
                    onChange={(e) => {
                      setFormData({ ...formData, pickupLocation: e.target.value });
                      if (errors.pickupLocation) {
                        setErrors({ ...errors, pickupLocation: null });
                      }
                    }}
                    className={`w-full px-3 py-2 text-base sm:text-sm border rounded-xl focus:outline-none transition ${
                      touched.pickupLocation && errors.pickupLocation
                        ? 'border-red-500 bg-red-50/40 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-2 focus:ring-red-500'
                    }`}
                  />
                  {touched.pickupLocation && errors.pickupLocation && (
                    <p className="mt-1 text-xs text-red-600 font-bold flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.pickupLocation}</span>
                    </p>
                  )}
                </div>

                {/* 4. Drop Hospital (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('કઈ હોસ્પિટલ જવું છે? (ઓપ્શનલ)', 'Drop Hospital (Optional)')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('દા.ત. રાજકોટ AIIMS / સિવિલ', 'e.g. Rajkot AIIMS / Civil')}
                    value={formData.dropHospital}
                    onChange={(e) => setFormData({ ...formData, dropHospital: e.target.value })}
                    className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Vehicle Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('એમ્બ્યુલન્સ પસંદ કરો', 'Select Ambulance')}
                </label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-white font-medium"
                >
                  <option value="Mahindra Xylo Ambulance">
                    {t('મહિન્દ્રા ઝાયલો (ICU + AC સેટઅપ / લાંબી મુસાફરી)', 'Mahindra Xylo (ICU + AC Setup / Long Transit)')}
                  </option>
                  <option value="Maruti EECO Ambulance">
                    {t('મારુતિ ઈકો (ઝડપી લોકલ ઇમરજન્સી)', 'Maruti EECO (Rapid Local Emergency)')}
                  </option>
                  <option value="Any Available">
                    {t('સૌથી પહેલા મળે તે એમ્બ્યુલન્સ', 'First Available Ambulance')}
                  </option>
                </select>
              </div>

              {/* Patient Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('દર્દીની સ્થિતિ / ખાસ જરૂરિયાત (ઓપ્શનલ)', 'Special Note / Condition (Optional)')}
                </label>
                <textarea
                  rows="2"
                  placeholder={t('દા.ત. ઓક્સિજનની જરૂર છે, સ્ટ્રેચરની જરૂર છે...', 'e.g. Oxygen cylinder required, stretcher needed...')}
                  value={formData.patientCondition}
                  onChange={(e) => setFormData({ ...formData, patientCondition: e.target.value })}
                  className="w-full px-3 py-2 text-base sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t('WhatsApp પર બુકિંગ મોકલો', 'Send Booking on WhatsApp')}</span>
                </button>

                <a
                  href={`tel:${brand.primaryPhone}`}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('સીધો ફોન કરો', 'Direct Call')}</span>
                </a>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
