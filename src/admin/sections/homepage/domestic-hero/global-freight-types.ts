import type { BaseSectionContent } from '../../types'; // src/admin/sections/homepage/domestic-hero -> src/admin/sections/types.ts

export interface GlobalFreightCard {
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonLabel: string;
}

export interface GlobalFreightContent extends BaseSectionContent {
  heading: string;
  cards: [GlobalFreightCard, GlobalFreightCard];
}

export const emptyGlobalFreightCard: GlobalFreightCard = {
  titleLine1: '',
  titleLine2: '',
  description: '',
  buttonLabel: '',
};