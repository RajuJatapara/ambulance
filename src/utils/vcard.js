/**
 * Helper to generate and download a standard vCard (.vcf)
 * Works seamlessly on Android, iOS, and Desktop contacts
 */
export function downloadVCard(brand) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Aarav Ambulance Gondal
N:Gondal;Aarav;Ambulance;;
NICKNAME:આરવ એમ્બ્યુલન્સ ગોંડલ
ORG:Aarav Ambulance Service
TITLE:24x7 Emergency Ambulance
TEL;TYPE=CELL,VOICE,PREF:${brand.primaryPhone}
TEL;TYPE=WORK,VOICE:${brand.secondaryPhone}
ADR;TYPE=WORK,POSTAL,PARCEL:;;College Chowkadi / Hospital Area;Gondal;Gujarat;360311;India
EMAIL:info@aaravambulance.com
URL:https://rajujatapara.github.io/ambulance/
NOTE:24x7 Emergency ICU & Oxygen Ambulance in Gondal. Managed by Jatapara Bhavesh (જતાપરા ભાવેશભાઈ). Fleet: Mahindra Xylo (ICU) & Maruti Eeco.
CATEGORIES:Emergency,Ambulance,Medical,Healthcare
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Aarav-Ambulance-Gondal-9316777108.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
