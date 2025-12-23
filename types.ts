
export type Language = 'en' | 'ar' | 'fr' | 'tzm';

export interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  gradient: string;
}

export interface Translations {
  welcome: string;
  connectWithMe: string;
  me: string;
  description: string;
  home: string;
  portfolio: string;
  contact: string;
  rights: string;
}

// Added GalleryImage interface to fix missing type reference
export interface GalleryImage {
  url: string;
  title: string;
}
