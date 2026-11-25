/**
 * =============================================================================
 * 🚑 AARAV AMBULANCE SERVICE - CENTRAL DATA CONFIGURATION FILE
 * =============================================================================
 * 
 * 👉 અહીંથી તમે વેબસાઇટની કોઈપણ વિગત ફક્ત ૧ જગ્યાએથી બદલી શકો છો!
 * (Edit all numbers, vehicles, texts, routes, services from this single file!)
 * 
 * =============================================================================
 */

export const siteConfig = {
  // 📞 મુખ્ય સંપર્ક વિગતો (Main Contact Details)
  brand: {
    nameEn: "Aarav Ambulance Service",
    nameGu: "આરવ એમ્બ્યુલન્સ સર્વિસ",
    cityEn: "Gondal",
    cityGu: "ગોંડલ",
    districtEn: "Rajkot, Gujarat",
    districtGu: "રાજકોટ જિલ્લો, ગુજરાત",
    ownerEn: "Jatapara Bhavesh",
    ownerGu: "જતાપરા ભાવેશભાઈ",
    primaryPhone: "9316777108",
    secondaryPhone: "6351478080",
    whatsappNumber: "919316777108",
    logo: "/images/logo.png",
    logoDark: "/images/logo-dark.png",
    favicon: "/images/favicon.png",
    visitingCardImage: "/images/visiting-card.png",
    taglineEn: "Your Health... Our Priority...",
    taglineGu: "સત્ય પ્રેમ ને કરુણા... સ્વાસ્થ્ય આપનું, પ્રાથમિકતા અમારી...",
    subTaglineEn: "Always Ready... For Your Care...",
    subTaglineGu: "તમારી સેવામાં હંમેશા તત્પર...",
    emergencyAvailabilityEn: "24x7 Immediate Emergency Response",
    emergencyAvailabilityGu: "૨૪ કલાક તાત્કાલિક ઇમરજન્સી સેવા",
    responseTimingEn: "10-15 Min Reach in Gondal",
    responseTimingGu: "ગોંડલમાં ૧૦-૧૫ મિનિટમાં હાજર",
    baseLocationEn: "College Chowkadi / Hospital Area, Gondal",
    baseLocationGu: "કોલેજ ચોકડી / હોસ્પિટલ વિસ્તાર, ગોંડલ"
  },

  // 🚑 ગાડીઓની વિગતો (Exact 2 Vehicles from Client's Fleet)
  vehicles: [
    {
      id: "xylo",
      nameEn: "Mahindra Xylo Ambulance",
      nameGu: "મહિન્દ્રા ઝાયલો (Mahindra Xylo)",
      typeEn: "Advanced ICU / Long Distance Transit",
      typeGu: "એડવાન્સ ICU & લાંબી મુસાફરી માટે શ્રેષ્ઠ",
      badgeEn: "ICU & AC Facility",
      badgeGu: "ICU & AC સુવિધા",
      realImage: "/images/xylo-real.jpg",
      interiorImage: "/images/icu-interior.jpg",
      descriptionEn: "High-comfort SUV platform equipped with complete ICU apparatus, dual oxygen cylinders, and smooth hydraulic suspension for critical patient transfers to Rajkot or Ahmedabad.",
      descriptionGu: "વિશાળ અને આરામદાયક એસયુવી, જેમાં સંપૂર્ણ ICU સેટઅપ, ડબલ ઓક્સિજન, અને દર્દીને આંચકા ન લાગે તેવા સ્મૂથ સસ્પેન્શન સાથે રાજકોટ કે અમદાવાદ માટે સૌથી આદર્શ.",
      spaceDimensions: {
        length: "14.5 Feet Long SUV",
        cabinHeight: "High Roof Cabin",
        patientBed: "Full Flat Reclining ICU Stretcher",
        seating: "2 Relatives + 1 Doctor / Paramedic",
        luggageSpace: "Ample Bag & Cylinder Storage"
      },
      hotspots: [
        {
          id: "stretcher",
          x: "42%",
          y: "65%",
          titleGu: "હાઇડ્રોલિક ઓટો-લોડિંગ સ્ટ્રેચર",
          descGu: "આંચકા-મુક્ત ગાદીવાળો બેડ, જેથી દર્દીને લાંબી મુસાફરીમાં પીડા ન થાય."
        },
        {
          id: "ventilator",
          x: "68%",
          y: "32%",
          titleGu: "કાર્ડિયાક મોનિટર & વેન્ટિલેટર",
          descGu: "હૃદયના ધબકારા, બીપી અને ઓક્સિજન લેવલ સતત મોનિટર કરતી અદ્યતન સિસ્ટમ."
        },
        {
          id: "oxygen",
          x: "24%",
          y: "40%",
          titleGu: "ડબલ જમ્બો ઓક્સિજન સિલિન્ડર",
          descGu: "અમદાવાદ સુધી ૪-૫ કલાક નોન-સ્ટોપ હાઈ-ફ્લો ઓક્સિજન સપ્લાય."
        },
        {
          id: "seating",
          x: "82%",
          y: "55%",
          titleGu: "સગા-સંબંધીઓ માટે બેઠક",
          descGu: "દર્દીની બરાબર બાજુમાં ૨ સગા અને ડોક્ટર આરામથી બેસી શકે તેવી સ્પેસ."
        }
      ],
      keySpecs: [
        { labelEn: "ICU Ventilator Support", labelGu: "વેન્ટિલેટર સપોર્ટ", available: true },
        { labelEn: "Dual Oxygen Manifold", labelGu: "ડબલ ઓક્સિજન સિલિન્ડર", available: true },
        { labelEn: "Multi-Position Stretcher", labelGu: "ઓટો-લોડિંગ સ્ટ્રેચર", available: true },
        { labelEn: "High-Cooling AC", labelGu: "ચિલ્ડ એર કન્ડિશનર (AC)", available: true },
        { labelEn: "Attendant Space (2+Doc)", labelGu: "૨ સગા + ડોક્ટર સ્પેસ", available: true },
        { labelEn: "Emergency Siren & Beacon", labelGu: "ઇમરજન્સી સાયરન & લાઈટ", available: true }
      ],
      suitableForEn: "Heart Attack, Critical Trauma, Brain Stroke, Ventilator Shifting to Rajkot / Ahmedabad",
      suitableForGu: "હૃદયરોગ, ગંભીર ઇજા, બ્રેઈન સ્ટ્રોક, વેન્ટિલેટર દર્દીને બહારગામ શિફ્ટ કરવા માટે"
    },
    {
      id: "eeco",
      nameEn: "Maruti EECO Ambulance",
      nameGu: "મારુતિ ઈકો (Maruti EECO)",
      typeEn: "Rapid City Response / Economical",
      typeGu: "ઝડપી સિટી રિસ્પોન્સ & વ્યાજબી દર",
      badgeEn: "AC / Non-AC Available",
      badgeGu: "AC / Non-AC ઉપલબ્ધ",
      realImage: "/images/eeco-real.jpg",
      interiorImage: "/images/eeco-interior.jpg",
      descriptionEn: "Highly agile ambulance engineered to navigate Gondal's bustling streets and narrow alleys swiftly. Best for quick local hospital admissions, dialysis trips, and checkups.",
      descriptionGu: "ગોંડલ શહેર અને આસપાસના ગામડાઓના રસ્તાઓમાં તાબડતોબ પહોંચવા માટે સૌથી ચપળ અને આર્થિક રીતે દરેક પરિવારને પરવડે તેવી ઝડપી એમ્બ્યુલન્સ.",
      spaceDimensions: {
        length: "Compact City Transit",
        cabinHeight: "Comfortable Seating",
        patientBed: "Foldable Smooth Wheel Stretcher",
        seating: "1-2 Relatives Comfortably",
        luggageSpace: "Standard Patient Kit Storage"
      },
      hotspots: [
        {
          id: "stretcher-eeco",
          x: "48%",
          y: "68%",
          titleGu: "ફોલ્ડેબલ રોલિંગ સ્ટ્રેચર બેડ",
          descGu: "દર્દીને ઘરના રૂમમાંથી સીધા ગાડીમાં ચડાવી શકાય તેવો સ્મૂથ વ્હીલ બેડ."
        },
        {
          id: "oxygen-eeco",
          x: "22%",
          y: "45%",
          titleGu: "મેડિકલ ઓક્સિજન સિલિન્ડર સેટઅપ",
          descGu: "ગોંડલ લોકલ હોસ્પિટલ શિફ્ટિંગ દરમિયાન સતત ઓક્સિજન ફ્લો."
        },
        {
          id: "space-eeco",
          x: "80%",
          y: "62%",
          titleGu: "સગા-સંબંધી માટે બેઠક બેંચ",
          descGu: "દર્દીની પડખે ૧-૨ સગા આરામથી બેસી શકે તેવી રેક્ઝિન સીટિંગ સ્પેસ."
        },
        {
          id: "firstaid-eeco",
          x: "65%",
          y: "35%",
          titleGu: "પ્રાથમિક સારવાર (First Aid) બોક્સ",
          descGu: "બીપી મોનિટર, પાટા-પીંડી અને ઇમરજન્સી દવાઓની કિટ."
        }
      ],
      keySpecs: [
        { labelEn: "10-15 Min City Reach", labelGu: "ગોંડલમાં અતિ ઝડપી પહોંચ", available: true },
        { labelEn: "Oxygen Delivery System", labelGu: "ઓક્સિજન સિલિન્ડર કનેક્શન", available: true },
        { labelEn: "Foldable Stretcher Bed", labelGu: "ફોલ્ડેબલ સ્ટ્રેચર બેડ", available: true },
        { labelEn: "AC / Non-AC Choice", labelGu: "AC અને Non-AC વિકલ્પ", available: true },
        { labelEn: "First Aid & BP Kit", labelGu: "પ્રાથમિક સારવાર કિટ", available: true },
        { labelEn: "Pocket-Friendly Fare", labelGu: "સૌથી વ્યાજબી દર", available: true }
      ],
      suitableForEn: "Local Gondal Hospital Transfers, Dialysis Patients, Fracture/Routine Transport",
      suitableForGu: "ગોંડલ લોકલ હોસ્પિટલ શિફ્ટિંગ, ડાયાલિસિસ, ફેક્ચર અને રૂટિન પેશન્ટ ટ્રાન્સપોર્ટ"
    }
  ],

  // 📸 એમ્બ્યુલન્સ ઇન્ટિરિયર ગેલેરી (Interior Facility Gallery)
  interiorGallery: [
    {
      id: "icu-setup",
      titleEn: "Advanced ICU & Ventilator Setup",
      titleGu: "એડવાન્સ ICU & વેન્ટિલેટર સેટઅપ",
      descEn: "Clean, sterilized life-support cabin with cardiac monitor, suction machine, and automated ventilator in Mahindra Xylo.",
      descGu: "મહિન્દ્રા ઝાયલોમાં કાર્ડિયાક મોનિટર, સક્શન મશીન અને ઓટોમેટિક વેન્ટિલેટર સાથે સંપૂર્ણ ICU કેબિન.",
      image: "/images/icu-interior.jpg",
      badgeEn: "Critical ICU",
      badgeGu: "ક્રિટિકલ ICU"
    },
    {
      id: "oxygen-system",
      titleEn: "High-Capacity Dual Oxygen Supply",
      titleGu: "હાઈ-કેપેસિટી ડબલ ઓક્સિજન સપ્લાય",
      descEn: "Continuous un-interrupted high-flow medical oxygen manifold with backup cylinder for long trips to Ahmedabad & Rajkot.",
      descGu: "રાજકોટ અને અમદાવાદ સુધી અવિરત ઓક્સિજન પ્રવાહ માટે ડબલ મેડિકલ ઓક્સિજન સિલિન્ડર કનેક્શન.",
      image: "/images/oxygen-equipment.jpg",
      badgeEn: "Pure Medical O2",
      badgeGu: "મેડિકલ ઓક્સિજન"
    },
    {
      id: "stretcher-comfort",
      titleEn: "Shock-Absorbing Auto Stretcher",
      titleGu: "શોક-એબ્સોર્બિંગ ઓટો લોડિંગ સ્ટ્રેચર",
      descEn: "Comfortable ergonomic patient bed with smooth hydraulic loading system minimizing road bumps during transit.",
      descGu: "મુસાફરી દરમિયાન દર્દીને જરાય આંચકા ન લાગે તેવું અત્યાધુનિક હાઇડ્રોલિક ઓટો-લોડિંગ સ્ટ્રેચર બેડ.",
      image: "/images/emergency-stretcher.jpg",
      badgeEn: "Patient Comfort",
      badgeGu: "આરામદાયક બેડ"
    },
    {
      id: "paramedic-hygiene",
      titleEn: "Sterilized Cabin & Attendant Seating",
      titleGu: "સેનિટાઇઝ્ડ કેબિન & સગાઓ માટે બેઠક",
      descEn: "100% sanitized interior after every patient shift, with dedicated seating for relatives and paramedic attendant.",
      descGu: "દરેક શિફ્ટિંગ બાદ ૧૦૦% સેનિટાઈઝ થતી કેબિન અને દર્દીના સગા-સંબંધીઓ માટે આરામદાયક સીટિંગ સ્પેસ.",
      image: "/images/paramedic-care.jpg",
      badgeEn: "100% Sanitized",
      badgeGu: "૧૦૦% સેનિટાઈઝ્ડ"
    }
  ],

  // 🩺 સેવાઓની યાદી
  services: [
    {
      id: "icu",
      icon: "Activity",
      badge: "Critical Care",
      titleEn: "ICU Facility Ambulance",
      titleGu: "ICU સુવિધાવાળી એમ્બ્યુલન્સ",
      descEn: "Outfitted with life-saving equipment including ventilator, cardiac monitor, suction machine, and emergency resuscitation kit.",
      descGu: "વેન્ટિલેટર, કાર્ડિયાક મોનિટર, સક્શન મશીન અને જીવનરક્ષક કટોકટી કિટ સાથે ગંભીર દર્દીઓ માટે સજ્જ."
    },
    {
      id: "patient-transport",
      icon: "Bed",
      badge: "Comfort Transport",
      titleEn: "Patient Transport Service",
      titleGu: "પેશન્ટ ટ્રાન્સપોર્ટ સર્વિસ",
      descEn: "Careful, shock-free transport from home to hospital and post-discharge return journey with compassionate care.",
      descGu: "ઘરેથી હોસ્પિટલ અને રજા મળ્યા પછી હોસ્પિટલથી ઘરે દર્દીને આરામદાયક રીતે લાવવા-લઈ જવાની વ્યવસ્થા."
    },
    {
      id: "life-support",
      icon: "HeartPulse",
      badge: "Oxygen Support",
      titleEn: "Life Support Service",
      titleGu: "લાઈફ સપોર્ટ (ઓક્સિજન) સેવા",
      descEn: "Continuous high-flow oxygen supply during the entire journey for patients experiencing breathlessness.",
      descGu: "શ્વાસ લેવામાં તકલીફ અનુભવતા દર્દીઓ માટે મુસાફરી દરમિયાન અવિરત ઓક્સિજન સપ્લાય."
    },
    {
      id: "emergency-response",
      icon: "Zap",
      badge: "24x7 Ready",
      titleEn: "24x7 Emergency Response",
      titleGu: "૨૪x૭ ઇમરજન્સી રિસ્પોન્સ",
      descEn: "One call dispatch with dedicated drivers on standby across Gondal day and night.",
      descGu: "માત્ર એક ફોન કોલ પર તુરંત રવાના. ગોંડલમાં દિવસ-રાત સ્ટેન્ડબાય રહેતા નિષ્ઠાવાન ડ્રાઇવરો."
    },
    {
      id: "ac-nonac",
      icon: "Wind",
      badge: "Flexible Budget",
      titleEn: "AC / Non-AC Options",
      titleGu: "AC / Non-AC વિકલ્પ",
      descEn: "Flexible choices to match medical requirements and budget for short and long hauls.",
      descGu: "તમારા બજેટ અને દર્દીની તબિયત મુજબ AC અથવા સાદી નોન-AC ગાડી પસંદ કરવાની છૂટ."
    },
    {
      id: "outstation",
      icon: "Navigation",
      badge: "Inter-City Expert",
      titleEn: "Inter-City Highway Transit",
      titleGu: "બહારગામ હાઇવે શિફ્ટિંગ",
      descEn: "Direct express transfer to Rajkot AIIMS, Civil, Sterling, Synergy, and top Ahmedabad hospitals.",
      descGu: "રાજકોટ AIIMS, સિવિલ, સ્ટર્લિંગ તેમજ અમદાવાદની મલ્ટી-સ્પેશિયાલિટી હોસ્પિટલોમાં ઝડપી પહોંચ."
    }
  ],

  // 🏥 સામાન્ય રૂટ્સ
  routes: [
    {
      from: "Gondal",
      to: "Rajkot (AIIMS / Civil / Private Hospitals)",
      distance: "~40 KM",
      time: "35-45 Min",
      en: "Gondal to Rajkot",
      gu: "ગોંડલ થી રાજકોટ",
      priority: "Highest Demand",
      highlights: "Direct 4-Lane Highway Route"
    },
    {
      from: "Gondal",
      to: "Ahmedabad (Civil / CIMS / Zydus / Apollo)",
      distance: "~250 KM",
      time: "4.5 Hours",
      en: "Gondal to Ahmedabad",
      gu: "ગોંડલ થી અમદાવાદ",
      priority: "ICU Long Transit",
      highlights: "Xylo ICU Equipped Recommended"
    },
    {
      from: "Gondal",
      to: "Junagadh (Civil & Multi-Speciality)",
      distance: "~65 KM",
      time: "1 Hour",
      en: "Gondal to Junagadh",
      gu: "ગોંડલ થી જુનાગઢ",
      priority: "Express Route",
      highlights: "Smooth Highway"
    },
    {
      from: "Gondal",
      to: "Jamnagar (G.G. Hospital)",
      distance: "~130 KM",
      time: "2.5 Hours",
      en: "Gondal to Jamnagar",
      gu: "ગોંડલ થી જામનગર",
      priority: "Specialist Care",
      highlights: "Oxygen Monitored Transit"
    }
  ],

  // 🚑 ઇમરજન્સી વખતે ધ્યાનમાં રાખવા જેવી બાબતો
  emergencyTips: [
    {
      step: 1,
      titleGu: "શાંત રહો અને ૧ કૉલ કરો",
      titleEn: "Stay Calm & Call 9316777108",
      descGu: "સૌપ્રથમ ગભરાયા વગર અમને ફોન કરો અને તમારું ચોક્કસ સરનામું અથવા લાઈવ લોકેશન વોટ્સએપ કરો.",
      descEn: "Take a deep breath, call our hotline immediately, and WhatsApp your live GPS location."
    },
    {
      step: 2,
      titleGu: "દરવાજા અને શેરી ખુલ્લી રાખો",
      titleEn: "Clear Entry & Keep Lights On",
      descGu: "એમ્બ્યુલન્સ સરળતાથી આવી શકે તે માટે ઘરનો મુખ્ય દરવાજો ખુલ્લો રાખો અને બહારની લાઈટ ચાલુ કરો.",
      descEn: "Keep the main entrance open and outside lights on so the ambulance spots your house instantly."
    },
    {
      step: 3,
      titleGu: "દર્દીના જૂના કાગળો તૈયાર રાખો",
      titleEn: "Keep Medical Files Ready",
      descGu: "દર્દીની જૂની ફાઈલ, દવાઓ અને આધારકાર્ડ એક થેલીમાં સાથે રાખી લો જેથી હોસ્પિટલમાં સમય ન બગડે.",
      descEn: "Keep patient's previous prescriptions, IDs, and ongoing medications ready in a bag."
    },
    {
      step: 4,
      titleGu: "દર્દીને હવા-ઉજાસમાં રાખો",
      titleEn: "Ensure Fresh Air Flow",
      descGu: "દર્દીની આસપાસ ભીડ ન કરો, બારીઓ ખુલ્લી રાખો અને કપડાં ઢીલા કરો.",
      descEn: "Avoid crowding around the patient, loosen tight clothing, and maintain fresh airflow."
    }
  ],

  // ⭐ શા માટે Aarav Ambulance પસંદ કરવી?
  whyChooseUs: [
    {
      titleEn: "10-15 Min Reach in Gondal",
      titleGu: "૧૦ થી ૧૫ મિનિટમાં પહોંચ",
      descEn: "Fastest local dispatch across all areas of Gondal city.",
      descGu: "ગોંડલ શહેરના તમામ વિસ્તારોમાં કોલ કર્યા બાદ સૌથી ઝડપી પહોંચ."
    },
    {
      titleEn: "2 Specialized Ambulances",
      titleGu: "૨ ખાસ સજ્જ એમ્બ્યુલન્સ",
      descEn: "Mahindra Xylo for critical ICU & Maruti Eeco for prompt city transit.",
      descGu: "ગંભીર દર્દીઓ માટે મહિન્દ્રા ઝાયલો (ICU) અને લોકલ માટે મારુતિ ઈકો."
    },
    {
      titleEn: "Experienced Patient Drivers",
      titleGu: "અનુભવી & સંવેદનશીલ સારથી",
      descEn: "Patient-first driving ethics with maximum safety and care.",
      descGu: "દર્દીની સલામતીને પ્રાથમિકતા આપતી કાળજીપૂર્વકની ડ્રાઈવિંગ."
    },
    {
      titleEn: "Transparent & Honest Rates",
      titleGu: "પ્રમાણિક અને વ્યાજબી દર",
      descEn: "Dedicated service inspired by 'Satya Prem ne Karuna' with zero exploitation.",
      descGu: "સત્ય, પ્રેમ અને કરુણાના ભાવ સાથે વ્યાજબી અને પારદર્શક સેવા."
    }
  ],

  // ❓ વારંવાર પૂછાતા પ્રશ્નો
  faq: [
    {
      qEn: "How quickly can the ambulance reach my home in Gondal?",
      qGu: "ગોંડલમાં મારા ઘરે એમ્બ્યુલન્સ કેટલી વારમાં પહોંચી જશે?",
      aEn: "Our ambulances are stationed centrally in Gondal, allowing us to arrive within 10 to 15 minutes in most city locations upon your call.",
      aGu: "અમારી ગાડીઓ ગોંડલમાં સેન્ટ્રલી સ્ટેન્ડબાય હોય છે, તેથી ફોન આવતાની સાથે મોટાભાગના વિસ્તારોમાં ૧૦ થી ૧૫ મિનિટમાં પહોંચી જાય છે."
    },
    {
      qEn: "Which ambulance should I choose: Xylo or EECO?",
      qGu: "મારે ઝાયલો પસંદ કરવી કે ઈકો?",
      aEn: "For critical patients, ICU ventilator needs, or long distance trips to Rajkot/Ahmedabad, choose Mahindra Xylo. For local Gondal hospital transfers, choose Maruti EECO.",
      aGu: "જો દર્દી ગંભીર હોય, વેન્ટિલેટર કે ICU ની જરૂર હોય, અથવા રાજકોટ/અમદાવાદ જવું હોય તો મહિન્દ્રા ઝાયલો પસંદ કરો. ગોંડલ લોકલ હોસ્પિટલ માટે મારુતિ ઈકો શ્રેષ્ઠ રહેશે."
    },
    {
      qEn: "Can I get an ambulance late at night?",
      qGu: "શું મોડી રાત્રે પણ એમ્બ્યુલન્સ મળી રહેશે?",
      aEn: "Yes, our service operates 24 hours a day, 7 days a week, 365 days a year without any interruption.",
      aGu: "હા, અમારી સેવા વર્ષના ૩૬૫ દિવસ, ૨૪ કલાક દિવસ-રાત સતત કાર્યરત છે."
    }
  ]
};
