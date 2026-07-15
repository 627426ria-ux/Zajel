import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabase';
import { emptyBlogPostLangContent } from '../sections/blog/types';
import type { BlogPostRow, BlogPostLangContent } from '../sections/blog/types';

type EditableFields = Pick<BlogPostRow,
  'slug' | 'category' | 'featured_image' | 'author_name' | 'author_role' |
  'author_image' | 'status' | 'publish_date' | 'content_en' | 'content_ar'
>;

export function useBlogPost(id: string) {
  const [post, setPost] = useState<BlogPostRow | null>(null);
  const [initial, setInitial] = useState<BlogPostRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setError(error.message);
        } else if (data) {
          const normalized: BlogPostRow = {
            ...data,
            content_en: { ...emptyBlogPostLangContent, ...data.content_en },
            content_ar: { ...emptyBlogPostLangContent, ...data.content_ar },
          };
          setPost(normalized);
          setInitial(normalized);
        }
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [id]);

  const update = (fields: Partial<EditableFields>) =>
    setPost((prev) => (prev ? { ...prev, ...fields } : prev));

  const updateLangField = (
    lang: 'en' | 'ar',
    field: keyof BlogPostLangContent,
    value: any
  ) =>
    setPost((prev) => {
      if (!prev) return prev;
      const key = lang === 'en' ? 'content_en' : 'content_ar';
      return { ...prev, [key]: { ...prev[key], [field]: value } };
    });

  const updateSeo = (lang: 'en' | 'ar', field: string, value: string | boolean) =>
    setPost((prev) => {
      if (!prev) return prev;
      const key = lang === 'en' ? 'content_en' : 'content_ar';
      return { ...prev, [key]: { ...prev[key], seo: { ...prev[key].seo, [field]: value } } };
    });

  const save = useCallback(async () => {
    if (!post) return;
    setSaving(true);
    setError(null);
    const { id: _id, created_at, updated_at, ...payload } = post;
    const { error } = await supabase.from('blog_posts').update(payload).eq('id', id);
    setSaving(false);
    if (error) setError(error.message);
    else setInitial(post);
  }, [post, id]);

  const dirty = JSON.stringify(post) !== JSON.stringify(initial);

  return { post, update, updateLangField, updateSeo, loading, saving, error, dirty, save };
}