import type { BaseSectionContent } from '../types';

export interface CareersHeroContent extends BaseSectionContent {
  title: string;
  description: string;
  buttonLabel: string;
  image_url: string;
}

export interface CareersValueCard {
  title: string;
  desc: string;
}

export interface CareersValuesContent extends BaseSectionContent {
  heading: string;
  description: string;
  values: CareersValueCard[]; // fixed length of 6, order matches icons in frontend
}

export const emptyCareersValueCard: CareersValueCard = {
  title: '',
  desc: '',
};

export interface LifeAtZajelContent extends BaseSectionContent {
  heading: string;
  description: string;
  image1_url: string; // Top Right Main Image
  image2_url: string; // Bottom Left Image
  image3_url: string; // Bottom Middle Image
  image4_url: string; // Bottom Right Image
}

export interface CareersBenefitCard {
  title: string;
  desc: string;
  icon_url: string; // <-- New field for the uploaded icon
}

export interface CareersBenefitsContent extends BaseSectionContent {
  heading: string;
  description: string;
  benefits: CareersBenefitCard[]; 
}

export const emptyCareersBenefitCard: CareersBenefitCard = {
  title: '',
  desc: '',
  icon_url: '',
};

export interface AboutSmartLogisticsContent extends BaseSectionContent {
  heading: string;
  description: string;
  app_image_url: string;
  // Card 1: IMS Policy
  card1_title: string;
  card1_description: string;
  card1_btn_label: string;
  card1_btn_url: string;
  // Card 2: Company Profile
  card2_title: string;
  card2_description: string;
  card2_btn_label: string;
  card2_btn_url: string;
}