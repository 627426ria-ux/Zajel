import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // adjust path to your client

interface PostSummary {
  id: string;
  slug: string;
  category: string;
  featured_image: string | null;
  publish_date: string | null;
  created_at: string;
  title: string;
  excerpt: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('id, slug, category, featured_image, publish_date, created_at, content_en')
      .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
      .order('publish_date', { ascending: false, nullsFirst: false })
      .then(({ data, error }) => {
        if (!error && data) {
          setPosts(
            data.map((p: any) => ({
              id: p.id,
              slug: p.slug,
              category: p.category,
              featured_image: p.featured_image,
              publish_date: p.publish_date,
              created_at: p.created_at,
              title: p.content_en?.title || 'Untitled',
              excerpt: p.content_en?.excerpt || '',
            }))
          );
        }
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="max-w-2xl">
            <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight mb-8">
              Insights, Guides & Stories <br className="hidden md:block" />
              from the World of Logistics
            </h1>
          </div>
          <div className="md:w-[350px] lg:w-[400px] pt-2">
            <p className="text-[#064423]/60 text-[13px] lg:text-[14px] leading-relaxed font-light">
              Stay updated with expert advice, trends, and case studies on how Zajel powers smarter deliveries for individuals and businesses across the UAE.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[2rem] border border-[#064423]/5 overflow-hidden animate-pulse">
                <div className="w-full h-[240px] bg-[#F0F0EC]" />
                <div className="p-8 space-y-3">
                  <div className="h-4 bg-[#F0F0EC] rounded w-1/3" />
                  <div className="h-5 bg-[#F0F0EC] rounded w-full" />
                  <div className="h-5 bg-[#F0F0EC] rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-[#064423]/50 text-sm">No posts published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: PostSummary }) => {
  const dateStr = new Date(post.publish_date || post.created_at).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-[2rem] border border-[#064423]/5 overflow-hidden hover:shadow-[0_10px_40px_rgba(6,68,35,0.06)] hover:border-[#064423]/15 transition-all duration-500 cursor-pointer block"
    >
      <div className="w-full h-[240px] overflow-hidden bg-[#F9FBF9]">
        <img
          src={post.featured_image || ''}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-6">
          <span className="border border-[#064423]/10 text-[#064423]/70 text-[11px] px-3.5 py-1.5 rounded-full font-light tracking-wide">
            {post.category}
          </span>
          <span className="text-[#064423]/50 text-[11px] font-light flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#064423]/20"></span>
            {dateStr}
          </span>
        </div>
        <h3 className="text-[#064423] text-[18px] lg:text-[19px] font-medium leading-[1.35] mb-8 flex-grow group-hover:text-[#36B936] transition-colors">
          {post.title}
        </h3>
        <div className="text-[#064423] text-[13px] font-medium flex items-center gap-2 mt-auto group-hover:text-[#36B936] transition-colors">
          Read More
          <span className="font-light text-lg mb-[2px] group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPage;