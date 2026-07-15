// src/admin/sections/blog/types.ts

import type { SeoFields } from '../types';
import { emptySeo } from '../types';

export interface BlogPostLangContent {
  title: string;
  excerpt: string;
  bodyHtml: string;
  seo: SeoFields;
}

export type BlogPostStatus = 'draft' | 'published' | 'scheduled';

export interface BlogPostRow {
  id: string;
  slug: string;
  category: string;
  featured_image: string | null;
  author_name: string;
  author_role: string;
  author_image: string | null;
  status: BlogPostStatus;
  publish_date: string | null;
  content_en: BlogPostLangContent;
  content_ar: BlogPostLangContent;
  created_at: string;
  updated_at: string;
}

export const emptyBlogPostLangContent: BlogPostLangContent = {
  title: '',
  excerpt: '',
  bodyHtml: '',
  seo: emptySeo,
};