import type { BaseSectionContent } from '../types';

export interface EcommerceHeroContent extends BaseSectionContent {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string; // NEW - shared across languages
  desktop_image_url: string;
  mobile_image_url: string;
}

export interface EcommerceDetailsContent extends BaseSectionContent {
  benefitsHeading: string;
  benefits: string[]; // Array of 6 bullet points
  ctaHeading: string;
  ctaSubtext: string;
  btnQuote: string;
  btnQuoteUrl: string; // NEW - shared across languages
  btnContact: string;
  btnContactUrl: string; // NEW - shared across languages
  image_url: string;
  imgAlt: string;
}

export interface EcommerceCardsContent extends BaseSectionContent {
  heading: string;
  card1_title: string;
  card1_description: string;
  card1_buttonLabel: string;
  card1_buttonUrl: string; // NEW - shared across languages
  card2_title: string;
  card2_description: string;
  card2_buttonLabel: string;
  card2_buttonUrl: string; // NEW - shared across languages
}