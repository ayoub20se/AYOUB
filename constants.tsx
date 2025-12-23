
import React from 'react';
import { Facebook, Instagram, Send, MessageCircle, Mail } from 'lucide-react';
import { SocialLink, Language, Translations, GalleryImage } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook size={28} />,
    url: 'https://facebook.com/ay.oub.851191',
    color: '#1877F2',
    gradient: 'from-[#1877F2] to-[#0a5ed0]'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram size={28} />,
    url: 'https://instagram.com',
    color: '#E4405F',
    gradient: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: <Send size={28} />,
    url: 'https://t.me',
    color: '#24A1DE',
    gradient: 'from-[#24A1DE] to-[#1d82b3]'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <MessageCircle size={28} />,
    url: 'https://wa.me',
    color: '#25D366',
    gradient: 'from-[#25D366] to-[#128C7E]'
  },
  {
    id: 'email',
    name: 'Email',
    icon: <Mail size={28} />,
    url: 'mailto:ayoub2002se@gmail.com',
    color: '#D44638',
    gradient: 'from-[#D44638] to-[#ae3226]'
  }
];

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  { code: 'fr', label: 'Français', flag: '🇫ⵔ' },
  { code: 'tzm', label: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', flag: 'ⵣ' }
];

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    welcome: "Welcome",
    connectWithMe: "Connect with",
    me: "Me.",
    description: "",
    home: "Home",
    portfolio: "Portfolio",
    contact: "Contact",
    rights: "ALL RIGHTS RESERVED"
  },
  ar: {
    welcome: "مرحباً بك",
    connectWithMe: "تواصل",
    me: "معي.",
    description: "",
    home: "الرئيسية",
    portfolio: "أعمالي",
    contact: "اتصل بي",
    rights: "جميع الحقوق محفوظة"
  },
  fr: {
    welcome: "Bienvenue",
    connectWithMe: "Contactez",
    me: "Moi.",
    description: "",
    home: "Accueil",
    portfolio: "Portfolio",
    contact: "Contact",
    rights: "TOUS DROITS RÉSERVÉS"
  },
  tzm: {
    welcome: "ⵎⵔⵃⴱⴰ",
    connectWithMe: "ⵙⵉⵡⵍ",
    me: "ⴷⵉⵢⵉ.",
    description: "",
    home: "ⴰⴼⵔⴰⴳ",
    portfolio: "ⵉⵙⵏⴼⴰⵔⵏ",
    contact: "ⴰⵣⵏ",
    rights: "ⵉⵣⵔⴼⴰⵏ ⵎⵎⵓⵔⵜⵏ"
  }
};

// Added GALLERY_IMAGES to fix the import error in components/ImageGallery.tsx
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    title: 'Abstract Flow'
  },
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    title: 'Neural Networks'
  },
  {
    url: 'https://images.unsplash.com/photo-1614850523296-e8c041de83a4?q=80&w=1000&auto=format&fit=crop',
    title: 'Digital Horizon'
  }
];
