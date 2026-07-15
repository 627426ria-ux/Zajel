import type { BaseSectionContent } from '../types';
export interface ServiceCard {
  title: string;
  desc: string;
  image_url: string; // shared across en/ar
  path: string;       // shared across en/ar
}

export interface ServicesContent extends BaseSectionContent {
  eyebrow: string;
  heading: string; // supports simple inline HTML, e.g. "What We <span class='text-[#36B936]'>Do</span>"
  description: string;
  cards: ServiceCard[]; // exactly 4, icons fixed in code: Truck, Plane, Ship, Box
}

export interface AdvantageCard {
  title: string;
  desc: string;
  image_url?: string;
}

export interface AdvantageContent extends BaseSectionContent {
  heading: string;
  subtext: string;
  cards: {
    coverage: AdvantageCard;
    handling: AdvantageCard;
    tracking: AdvantageCard;
    pricing: AdvantageCard;
  };
}


export interface TrustedStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HomeTrustedContent extends BaseSectionContent {
  heading1: string;
  headingHighlight: string;
  heading2: string;
  subtext: string;
  stats: TrustedStat[]; // Array of exactly 4 items
}

export interface MarqueeLogo {
  image_url: string;
  altText: string;
}

export interface HomeMarqueeContent extends BaseSectionContent {
  heading: string;
  logos: MarqueeLogo[]; // We'll set this to handle 6 logos
}

export interface HomeStoryContent extends BaseSectionContent {
  heading: string;
  ctaLabel: string;
  ctaUrl: string;
  image_url: string;
  imgAlt: string;
}