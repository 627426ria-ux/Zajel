import type { BaseSectionContent } from '../types';

export interface SecureIdHeroContent extends BaseSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  btnTrackLabel: string;
  btnTrackUrl: string;
  btnSupportLabel: string;
  btnSupportUrl: string;
  image_url: string;
  imgAlt: string;
}

export interface SecureIdVerificationContent extends BaseSectionContent {
  title1: string;
  title2: string;
  description: string;
  features: { title: string; desc: string }[]; // exactly 4
}

export interface SecureIdProtocolContent extends BaseSectionContent {
  title: string;
  subtitle: string;
  cards: { title: string; content: string }[]; // exactly 3, icons: ShieldCheck, UserCheck, Fingerprint
}