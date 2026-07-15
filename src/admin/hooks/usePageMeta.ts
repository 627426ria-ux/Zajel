import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabase';

export interface PageSeoFields {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

export type PageStatus = 'draft' | 'published' | 'scheduled';

interface PageMetaRow {
  title: string;
  slug: string;
  seo_en: PageSeoFields;
  seo_ar: PageSeoFields;
  status: PageStatus;
  publish_date: string | null;
}

interface UsePageMetaResult {
  meta: PageMetaRow | null;
  setSeo: (lang: 'en' | 'ar', field: keyof PageSeoFields, value: string | boolean) => void;
  setStatus: (status: PageStatus) => void;
  setPublishDate: (date: string | null) => void;
  loading: boolean;
  saving: boolean;
  error: string | null;
  dirty: boolean;
  save: () => Promise<void>;
}

export function usePageMeta(pageId: string): UsePageMetaResult {
  const [meta, setMeta] = useState<PageMetaRow | null>(null);
  const [initial, setInitial] = useState<PageMetaRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    supabase
      .from('pages')
      .select('title, slug, seo_en, seo_ar, status, publish_date')
      .eq('id', pageId)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setError(error.message);
        } else if (data) {
          setMeta(data as PageMetaRow);
          setInitial(data as PageMetaRow);
        }
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [pageId]);

  const setSeo = (lang: 'en' | 'ar', field: keyof PageSeoFields, value: string | boolean) =>
    setMeta((prev) => {
      if (!prev) return prev;
      const key = lang === 'en' ? 'seo_en' : 'seo_ar';
      return { ...prev, [key]: { ...prev[key], [field]: value } };
    });

  const setStatus = (status: PageStatus) =>
    setMeta((prev) => (prev ? { ...prev, status } : prev));

  const setPublishDate = (publish_date: string | null) =>
    setMeta((prev) => (prev ? { ...prev, publish_date } : prev));

  const save = useCallback(async () => {
    if (!meta) return;
    setSaving(true);
    setError(null);

    const { error } = await supabase
      .from('pages')
      .update({
        seo_en: meta.seo_en,
        seo_ar: meta.seo_ar,
        status: meta.status,
        publish_date: meta.publish_date,
      })
      .eq('id', pageId);

    setSaving(false);
    if (error) {
      setError(error.message);
    } else {
      setInitial(meta);
    }
  }, [meta, pageId]);

  const dirty = JSON.stringify(meta) !== JSON.stringify(initial);

  return { meta, setSeo, setStatus, setPublishDate, loading, saving, error, dirty, save };
}