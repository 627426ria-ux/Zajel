import type { ComponentType } from 'react';

import ServicesEditor from '../sections/homepage/ServicesEditor';
import AdvantageEditor from '../sections/homepage/AdvantageEditor';
import TrustedEditor from '../sections/homepage/TrustedEditor';


import CareersHeroEditor from '../sections/careers/CareersHeroEditor';
import CareersValuesEditor from '../sections/careers/CareersValuesEditor';
import LifeAtZajelEditor from '../sections/careers/LifeAtZajelEditor';
import CareersBenefitsEditor from '../sections/careers/CareerBenefitsEditor';

import AboutHeroEditor from '../sections/about/AboutHeroEditor';
import AboutWhoWeAreEditor from '../sections/about/AboutWhoWeAreEditor';
import AboutSmartLogisticsEditor from '../sections/about/AboutSmartLogisticsEditor';
import AboutLeadershipEditor from '../sections/about/AboutLeadershipEditor';
import AboutTestimonialsEditor from '../sections/about/AboutTestimonialsEditor';

import FaqAccordionEditor from '../sections/faqs/FaqAccordionEditor';

import IntlHeroEditor from '../sections/services-intl/IntlHeroEditor';
import IntlDetailsEditor from '../sections/services-intl/IntlDetailsEditor';
import IntlFreightEditor from '../sections/services-intl/IntlFreightEditor';

import EcommerceHeroEditor from '../sections/services-ecommerce/EcommerceHeroEditor';
import EcommerceDetailsEditor from '../sections/services-ecommerce/EcommerceDetailsEditor';
import EcommerceCardsEditor from '../sections/services-ecommerce/EcommerceCardsEditor';

import FreightHeroEditor from '../sections/services-freight/FreightHeroEditor';
import FreightDetailsEditor from '../sections/services-freight/FreightDetailsEditor';
import FreightCardsEditor from '../sections/services-freight/FreightCardsEditor';

import GovHeroEditor from '../sections/services-government/GovHeroEditor';
import GovComplianceEditor from '../sections/services-government/GovComplianceEditor';
import GovProtocolEditor from '../sections/services-government/GovProtocolEditor';

import SecureIdHeroEditor from '../sections/services-secure-id/SecureIdHeroEditor';
import SecureIdVerificationEditor from '../sections/services-secure-id/SecureIdVerificationEditor';
import SecureIdProtocolEditor from '../sections/services-secure-id/SecureIdProtocolEditor';

import SecureDocsHeroEditor from '../sections/services-secure-docs/SecureDocsHeroEditor';
import SecureDocsComplianceEditor from '../sections/services-secure-docs/SecureDocsComplianceEditor';
import SecureDocsProtocolEditor from '../sections/services-secure-docs/SecureDocsProtocolEditor';

import SecureMailHeroEditor from '../sections/services-secure-mail/SecureMailHeroEditor';
import SecureMailDetailsEditor from '../sections/services-secure-mail/SecureMailDetailsEditor';
import SecureMailProtocolEditor from '../sections/services-secure-mail/SecureMailProtocolEditor';

// import MarqueeEditor from '../sections/homepage/MarqueeEditor';

// import StoryEditor from '../sections/homepage/StoryEditor';

// 1. Defined as a separate type to keep it clean and readable
export type SectionGroup =
  // | 'Homepage'
  | 'Domestic Courier'
  | 'About'
  | 'Careers'
  | 'FAQs'
  | 'Blog'
  | 'International'
  | 'E-commerce'
  | 'Freight'
  | 'Secure Mail'
  | 'Secure Docs'
  | 'Secure ID'
  | 'Government';

export interface CmsSection {
  id: string;
  label: string;
  group: SectionGroup;
  Editor: ComponentType;
}

export const CMS_SECTIONS: CmsSection[] = [
  // { id: 'home-services', label: 'Services / What We Do', group: 'Homepage', Editor: ServicesEditor },
  // { id: 'home-advantage', label: 'Advantage / Content & SEO', group: 'Homepage', Editor: AdvantageEditor },
  // { id: 'home-trusted', label: 'Trusted By & Stats', group: 'Homepage', Editor: TrustedEditor },
  
  

  { id: 'careers-hero', label: 'Hero / Content & SEO', group: 'Careers', Editor: CareersHeroEditor },
  { id: 'careers-values', label: 'Values / Mission', group: 'Careers', Editor: CareersValuesEditor },
  { id: 'careers-life', label: 'Life at Zajel', group: 'Careers', Editor: LifeAtZajelEditor },
  { id: 'careers-benefits', label: 'Benefits', group: 'Careers', Editor: CareersBenefitsEditor },

  { id: 'about-hero', label: 'Hero / Content & SEO', group: 'About', Editor: AboutHeroEditor },
  { id: 'about-who-we-are', label: 'Who We Are & Stats', group: 'About', Editor: AboutWhoWeAreEditor },
  { id: 'about-smart-logistics', label: 'Smart Logistics (Bento)', group: 'About', Editor: AboutSmartLogisticsEditor },
  { id: 'about-leadership', label: 'Leadership Team', group: 'About', Editor: AboutLeadershipEditor },
  { id: 'about-testimonials', label: 'Testimonials', group: 'About', Editor: AboutTestimonialsEditor },

  { id: 'faqs-accordion', label: 'FAQ Accordion', group: 'FAQs', Editor: FaqAccordionEditor },

  { id: 'intl-hero', label: 'International Hero', group: 'International', Editor: IntlHeroEditor },
  { id: 'intl-details', label: 'Benefits & CTA', group: 'International', Editor: IntlDetailsEditor },
  { id: 'intl-freight', label: 'Freight & E-com Cards', group: 'International', Editor: IntlFreightEditor },

  { id: 'ecommerce-hero', label: 'E-commerce Hero', group: 'E-commerce', Editor: EcommerceHeroEditor },
  { id: 'ecommerce-details', label: 'Benefits & CTA', group: 'E-commerce', Editor: EcommerceDetailsEditor },
  { id: 'ecommerce-cards', label: 'Feature Cards', group: 'E-commerce', Editor: EcommerceCardsEditor },

  { id: 'freight-hero', label: 'Freight Hero', group: 'Freight', Editor: FreightHeroEditor },
  { id: 'freight-details', label: 'Benefits & CTA', group: 'Freight', Editor: FreightDetailsEditor },
  { id: 'freight-cards', label: 'Freight Cards', group: 'Freight', Editor: FreightCardsEditor },

  { id: 'gov-hero', label: 'Hero / Content & SEO', group: 'Government', Editor: GovHeroEditor },
  { id: 'gov-compliance', label: 'Regulatory Adherence', group: 'Government', Editor: GovComplianceEditor },
  { id: 'gov-protocol', label: 'Institutional Protocols', group: 'Government', Editor: GovProtocolEditor },

  { id: 'secureid-hero', label: 'Hero / Content & SEO', group: 'Secure ID', Editor: SecureIdHeroEditor },
  { id: 'secureid-verification', label: 'Verification Details', group: 'Secure ID', Editor: SecureIdVerificationEditor },
  { id: 'secureid-protocol', label: 'Identity Protocols', group: 'Secure ID', Editor: SecureIdProtocolEditor },

  { id: 'securedocs-hero', label: 'Hero / Content & SEO', group: 'Secure Docs', Editor: SecureDocsHeroEditor },
  { id: 'securedocs-compliance', label: 'Compliance Details', group: 'Secure Docs', Editor: SecureDocsComplianceEditor },
  { id: 'securedocs-protocol', label: 'Official Protocols', group: 'Secure Docs', Editor: SecureDocsProtocolEditor },

  { id: 'securemail-hero', label: 'Hero / Content & SEO', group: 'Secure Mail', Editor: SecureMailHeroEditor },
  { id: 'securemail-details', label: 'Mailroom Details', group: 'Secure Mail', Editor: SecureMailDetailsEditor },
  { id: 'securemail-protocol', label: 'Mailroom Protocol', group: 'Secure Mail', Editor: SecureMailProtocolEditor },
  // { id: 'home-marquee', label: 'Trusted Partners Marquee', group: 'Homepage', Editor: MarqueeEditor },
  // { id: 'home-story', label: 'Story & CTA Banner', group: 'Homepage', Editor: StoryEditor },
];

// Categories that live under the "Services" nav tab, not the general "Pages" list.
export const SERVICE_GROUPS: SectionGroup[] = [
  'International',
  'E-commerce',
  'Freight',
  'Secure Mail',
  'Secure Docs',
  'Secure ID',
  'Government',
];

// 'Blog' isn't a singleton content section (it has no page_sections row —
// it's a list of posts in its own table), so it's appended manually here
// rather than derived from CMS_SECTIONS entries.
export const SECTION_GROUPS = [
  ...Array.from(new Set(CMS_SECTIONS.map((s) => s.group))),
  'Blog' as const,
];

// Everything shown under the "Pages" nav tab — i.e. every group EXCEPT
// the service categories, which get their own "Services" tab/list instead.
export const PAGE_GROUPS = SECTION_GROUPS.filter(
  (g) => !SERVICE_GROUPS.includes(g as SectionGroup)
);