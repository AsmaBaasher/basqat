export interface ExpertConsultant {
  id: string;
  initials: string;
  name: string;
  rating: number;
  title: string;
  category: 'management' | 'finance' | 'marketing' | 'business_dev' | 'investment' | 'operations' | 'all';
  categoryLabel: string;
  bio: string;
  experience: string;
  specialties: string[];
  rate: string;
  image?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  duration: string;
  mode: string;
  category: string;
}

export interface SpaceItem {
  id: string;
  title: string;
  description: string;
  suitableFor: string[];
  ctaText: string;
  iconName: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle?: string;
  category: 'incubation' | 'acceleration' | 'consulting' | 'training';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  duration: string;
  mode: string;
  suitableIf: string[];
  targetAudience?: string[];
  features?: string[];
  ctaText?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  iconName: string;
  summary: string;
  fullDescription: string;
  features: string[];
  deliverables?: string[];
  isHighlighted?: boolean;
  ctaText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  fullStory?: string;
  image?: string;
  sector: string;
  growthMetric: string;
  rating: number;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'PDF' | 'Excel' | 'Word' | 'Infographic';
  size: string;
  downloads: number;
  featured?: boolean;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    label: string;
    description?: string;
    score: number;
    recommendedPath?: string;
    recommendedProgramId?: string;
  }[];
}

export interface ConsultantApplicationData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  specialty: string;
  yearsOfExperience: string;
  linkedinUrl: string;
  bio: string;
  resumeFile?: string;
  availableHours?: string;
}
