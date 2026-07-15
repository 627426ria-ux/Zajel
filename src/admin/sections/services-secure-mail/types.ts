import type { BaseSectionContent } from '../types';

export interface SecureMailHeroContent extends BaseSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  btnPrimaryLabel: string;
  btnPrimaryUrl: string;
  btnSecondaryLabel: string;
  btnSecondaryUrl: string;
  image_url: string;
  imgAlt: string;
}

export interface SecureMailDetailsContent extends BaseSectionContent {
  title: string; // single title, no title1/title2 split in this one
  description: string;
  features: { title: string; desc: string }[]; // exactly 4
}

export interface SecureMailProtocolContent extends BaseSectionContent {
  title: string;
  subtitle: string;
  cards: { title: string; content: string }[]; // exactly 3, icons: Mail, Building2, EyeOff
}