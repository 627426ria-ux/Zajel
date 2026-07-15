import type { BaseSectionContent } from '../../types'; // src/admin/sections/homepage/domestic-hero -> src/admin/sections/types.ts

export interface ServiceDetailsContent extends BaseSectionContent {
  ctaHeading: string;
  ctaDescription: string;
  ctaButton1Label: string;
  ctaButton1Link: string;
  ctaButton2Label: string;
  ctaButton2Link: string;
  image_url: string;
  listHeading: string;
  listItems: string[];
}