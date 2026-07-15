import type { BaseSectionContent } from '../types';

export interface AboutHeroContent extends BaseSectionContent {
  heading: string;
  description: string;
  btn1_label: string;
  btn1_url: string;
  btn2_label: string;
  btn2_url: string;
  image1_url: string; // Left Image
  image2_url: string; // Center Image (Largest & Mobile)
  image3_url: string; // Right Image
}

export interface AboutStatCard {
    number: string;
    label: string;
  }
  
  export interface AboutWhoWeAreContent extends BaseSectionContent {
    heading: string;
    description: string;
    stats: AboutStatCard[]; // Fixed array of 4 stats
  }

  // --- Leadership Types ---
export interface AboutLeader {
    name: string;
    role: string;
    image_url: string;
  }
  
  export interface AboutLeadershipContent extends BaseSectionContent {
    heading: string;
    leaders: AboutLeader[]; // Array of 3 leaders
  }
  
  // --- Testimonials Types ---
  export interface AboutTestimonial {
    text: string;
    name: string;
    role: string;
    image_url: string;
  }
  
  export interface AboutTestimonialsContent extends BaseSectionContent {
    heading: string;
    subheading: string;
    testimonials: AboutTestimonial[]; // Array of 5 testimonials
  }