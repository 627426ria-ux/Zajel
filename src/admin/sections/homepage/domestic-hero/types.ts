import type { BaseSectionContent } from '../../types';

export interface DomesticHeroContent extends BaseSectionContent {
  title: string;
  description: string;
  button: string;
  ctaLink: string;
  image_url: string;
}