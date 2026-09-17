// Configuración pública. Puedes editar aquí o utilizar las variables de .env.
// WhatsApp: número internacional completo, SOLO dígitos, sin +, espacios ni guiones.
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "18096669684";
export const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "";
export const SITE_URL = import.meta.env.VITE_SITE_URL || "";
export const WHATSAPP_MESSAGE =
  "Hola CyberEng Team, estoy interesado/a en sus servicios de marketing.";
export const hasWhatsApp = /^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER);
export const whatsappUrl = (message = WHATSAPP_MESSAGE) =>
  hasWhatsApp
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : "#contacto";
export const socials = [
  {
    name: "Instagram",
    icon: "instagram",
    url: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/reel/Db-jfiCBidG/?stkn=YXZidjBuZjVzbnB0",
  },
  {
    name: "Facebook",
    icon: "facebook",
    url: import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/share/r/19xFLHiZto/?mibextid=wwXIfr",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    url: "https://www.tiktok.com/@gabrielsaturria46/video/7517792224302632197?_r=1&_t=ZS-99orYCVLWS2",
  },
  {
    name: "YouTube",
    icon: "youtube",
    url: import.meta.env.VITE_YOUTUBE_URL || "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: import.meta.env.VITE_LINKEDIN_URL || "",
  },
];
export const navigation = [
  ["Inicio", "inicio"],
  ["Servicios", "servicios"],
  ["Nosotros", "nosotros"],
  ["Portafolio", "portafolio"],
  ["Testimonios", "testimonios"],
  ["Contacto", "contacto"],
];
