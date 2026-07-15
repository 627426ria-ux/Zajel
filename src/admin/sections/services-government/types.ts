import type { BaseSectionContent } from '../types';

export interface GovHeroContent extends BaseSectionContent {
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

export interface GovComplianceContent extends BaseSectionContent {
  title1: string;
  title2: string;
  description: string;
  features: { title: string; desc: string }[];
}

export interface GovProtocolContent extends BaseSectionContent {
  title: string;
  subtitle: string;
  cards: { title: string; content: string }[];
}