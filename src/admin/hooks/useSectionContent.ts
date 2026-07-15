import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabase'; // src/admin/hooks -> src/supabase.ts
import { emptySeo } from '../sections/types';
import type { BaseSectionContent } from '../sections/types';

interface UseSectionContentResult<T> {
  content: T | null;
  setContent: React.Dispatch<React.SetStateAction<T | null>>;
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  saving: boolean;
  error: string | null;
  dirty: boolean;
  save: () => Promise<void>;
}

export function useSectionContent<T extends BaseSectionContent>(
  dbId: string
): UseSectionContentResult<T> {
  const [content, setContent] = useState<T | null>(null);
  const [initial, setInitial] = useState<T | null>(null);
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
      .select('content_en, enabled')
      .eq('id', dbId)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setError(error.message);
        } else if (data) {
          const fetched: T = { ...data.content_en, seo: { ...emptySeo, ...data.content_en?.seo } };
          const isEnabled = data.enabled ?? true;
          setContent(fetched);
          setInitial(fetched);
          setEnabled(isEnabled);
          setInitialEnabled(isEnabled);
        }
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [dbId]);

  const save = useCallback(async () => {
    if (!content) return;
    setSaving(true);
    setError(null);

    const { error } = await supabase
      .from('page_sections')
      .update({ content_en: content, enabled })
      .eq('id', dbId);

    setSaving(false);
    if (error) {
      setError(error.message);
    } else {
      setInitial(content);
      setInitialEnabled(enabled);
    }
  }, [content, enabled, dbId]);

  const dirty = JSON.stringify(content) !== JSON.stringify(initial) || enabled !== initialEnabled;

  return { content, setContent, enabled, setEnabled, loading, saving, error, dirty, save };
}