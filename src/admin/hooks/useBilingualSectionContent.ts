import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabase';
import { emptySeo } from '../sections/types';
import type { BaseSectionContent } from '../sections/types';

interface UseBilingualSectionContentResult<T> {
  contentEn: T | null;
  contentAr: T | null;
  setContentEn: React.Dispatch<React.SetStateAction<T | null>>;
  setContentAr: React.Dispatch<React.SetStateAction<T | null>>;
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  saving: boolean;
  error: string | null;
  dirty: boolean;
  save: () => Promise<void>;
}

export function useBilingualSectionContent<T extends BaseSectionContent>(
  dbId: string
): UseBilingualSectionContentResult<T> {
  const [contentEn, setContentEn] = useState<T | null>(null);
  const [contentAr, setContentAr] = useState<T | null>(null);
  const [initialEn, setInitialEn] = useState<T | null>(null);
  const [initialAr, setInitialAr] = useState<T | null>(null);
  const [enabled, setEnabled] = useState(true);
  const [initialEnabled, setInitialEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    supabase
      .from('page_sections')
      .select('content_en, content_ar, enabled')
      .eq('id', dbId)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setError(error.message);
        } else if (data) {
          const en: T = { ...data.content_en, seo: { ...emptySeo, ...data.content_en?.seo } };
          const ar: T = { ...data.content_ar, seo: { ...emptySeo, ...data.content_ar?.seo } };
          const isEnabled = data.enabled ?? true;
          setContentEn(en);
          setContentAr(ar);
          setInitialEn(en);
          setInitialAr(ar);
          setEnabled(isEnabled);
          setInitialEnabled(isEnabled);
        }
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [dbId]);

  const save = useCallback(async () => {
    if (!contentEn || !contentAr) return;
    setSaving(true);
    setError(null);

    const { error } = await supabase
      .from('page_sections')
      .update({ content_en: contentEn, content_ar: contentAr, enabled })
      .eq('id', dbId);

    setSaving(false);
    if (error) {
      setError(error.message);
    } else {
      setInitialEn(contentEn);
      setInitialAr(contentAr);
      setInitialEnabled(enabled);
    }
  }, [contentEn, contentAr, enabled, dbId]);

  const dirty =
    JSON.stringify(contentEn) !== JSON.stringify(initialEn) ||
    JSON.stringify(contentAr) !== JSON.stringify(initialAr) ||
    enabled !== initialEnabled;

  return { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save };
}