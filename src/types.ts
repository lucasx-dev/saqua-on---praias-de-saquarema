export type SafetyFlag = 'verde' | 'amarela' | 'vermelha';

export interface BeachCondition {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  image: string;
  swellHeight: string;
  swellPeriod: string;
  swellDirection: string;
  windSpeed: string;
  windDirection: string;
  waterTemp: string;
  tide: 'Baixa' | 'Enchendo' | 'Alta' | 'Vazando' | 'Estável';
  tideLevel: string;
  crowdLevel: 'Tranquilo' | 'Moderado' | 'Movimentado' | 'Lotado';
  safetyFlag: SafetyFlag;
  safetyMessage: string;
  idealFor: string[];
  features: string[];
}

export interface KioskMerchant {
  id: string;
  name: string;
  category: 'Quiosque' | 'Restaurante' | 'Escola de Surf' | 'Pousada' | 'Ambulante';
  beach: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  image: string;
  specialty: string;
  priceRange: '$' | '$$' | '$$$';
  amenities: string[];
  whatsAppNumber: string;
  instagram?: string;
  featuredDish: string;
  featuredPrice: string;
  distanceOrAddress: string;
  promo?: string;
  lat?: number;
  lng?: number;
}

export interface LocalEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Surf & Esporte' | 'Música & Cultura' | 'Gastronomia' | 'Sustentabilidade';
  image: string;
  description: string;
  badge: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}
