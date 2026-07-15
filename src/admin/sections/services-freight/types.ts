import type { BaseSectionContent } from '../types';

export interface FreightHeroContent extends BaseSectionContent {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string; // NEW - shared across languages
  desktop_image_url: string;
  mobile_image_url: string;
}

export interface FreightDetailsContent extends BaseSectionContent {
  benefitsHeading: string;
  benefits: string[]; // Array of 6 bullet points
  ctaHeading: string;
  ctaSubtext: string;
  btnQuote: string;
  btnQuoteUrl: string; // NEW - shared across languages
  btnTrack: string;
  btnTrackUrl: string; // NEW - shared across languages
  image_url: string;
}

export interface FreightCard {
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string; // NEW - shared across languages
}

export interface FreightCardsContent extends BaseSectionContent {
  heading: string;
  cards: [FreightCard, FreightCard];
}