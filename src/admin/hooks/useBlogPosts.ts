import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabase';
import type { BlogPostRow } from '../sections/blog/types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) setError(error.message);
    else setPosts(data as BlogPostRow[]);
    setLoading(false);
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const createPost = useCallback(async (slug: string) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({ slug, content_en: {}, content_ar: {} })
      .select()
      .single();
    if (error) throw error;
    await fetchPosts();
    return data as BlogPostRow;
  }, [fetchPosts]);

  const deletePost = useCallback(async (id: string) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) throw error;
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return { posts, loading, error, refetch: fetchPosts, createPost, deletePost };
}