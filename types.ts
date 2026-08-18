export interface LeadFormData {
  fullName: string;
  businessName: string;
  whatsappNumber: string;
  email: string;
  businessCategory: string;
  currentWebsite?: string;
  businessDescription: string;
  websiteType: string;
  approximateBudget: string;
  additionalRequirements?: string;
  createdAt?: string;
}

export interface WebsiteShowcaseItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  accentColor: string;
  gradient: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  previewUrl?: string;
  desktopMockup: {
    heroTitle: string;
    heroSubtitle: string;
    badge: string;
    navItems: string[];
    ctaText: string;
    heroBg: string;
    cards: {
      title: string;
      desc: string;
      icon: string;
      meta?: string;
    }[];
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
  timeline: string;
}

export interface WhyChoosePillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  points: string[];
}
