import type { BaseSectionContent } from '../types';

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  questions: FaqQuestion[];
}

export interface FaqAccordionContent extends BaseSectionContent {
  heading: string;
  description: string;
  categories: FaqCategory[];
}