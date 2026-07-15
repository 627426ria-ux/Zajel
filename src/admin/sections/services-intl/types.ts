import type { BaseSectionContent } from '../types';

export interface IntlHeroContent extends BaseSectionContent {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string; // NEW - shared across languages
  desktop_image_url: string;
  mobile_image_url: string;
}

export interface IntlDetailsContent extends BaseSectionContent {
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

export interface IntlFreightContent extends BaseSectionContent {
  heading: string;
  // Card 1 (Bullets)
  card1_title: string;
  card1_bullets: string[]; // Array of 3 bullets
  card1_buttonLabel: string;
  card1_buttonUrl: string; // NEW - shared across languages
  // Card 2 (Description)
  card2_title: string;
  card2_description: string;
  card2_buttonLabel: string;
  card2_buttonUrl: string; // NEW - shared across languages
}