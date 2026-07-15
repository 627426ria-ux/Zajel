export interface SeoFields {
    metaTitle: string;
    metaDescription: string;
    ogImage?: string;
    canonicalUrl?: string;
    keywords?: string;
    noindex?: boolean;
  }
  
  export const emptySeo: SeoFields = {
    metaTitle: '',
    metaDescription: '',
    ogImage: '',
    canonicalUrl: '',
    keywords: '',
    noindex: false,
  };
  
  export interface BaseSectionContent {
    seo: SeoFields;
  }