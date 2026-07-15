import type { BaseSectionContent} from '../types';

export interface SecureDocsHeroContent extends BaseSectionContent {
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

export interface SecureDocsComplianceContent extends BaseSectionContent {
  title1: string;
  title2: string;
  description: string;
  features: { title: string; desc: string }[]; // exactly 4
}

export interface SecureDocsProtocolContent extends BaseSectionContent {
  title: string;
  subtitle: string;
  cards: { title: string; content: string }[]; // exactly 3, icons: Gavel, Landmark, FileText
}