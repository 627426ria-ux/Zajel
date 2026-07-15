import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase'; // adjust path to your client

interface FullPost {
  id: string;
  slug: string;
  category: string;
  featured_image: string | null;
  author_name: string;
  author_role: string;
  author_image: string | null;
  publish_date: string | null;
  created_at: string;
  title: string;
  bodyHtml: string;
  seo: { metaTitle?: string; metaDescription?: string; ogImage?: string; canonicalUrl?: string; noindex?: boolean };
}

interface RelatedPost {
  id: string;
  slug: string;
  category: string;
  featured_image: string | null;
  publish_date: string | null;
  created_at: string;
  title: string;
}

interface TocItem { id: string; label: string; level: 2 | 3; }

// Scoped styles for the rendered blog body — embedded here so it doesn't
// depend on a global CSS file being correctly imported anywhere else.
const BLOG_CONTENT_STYLES = `
  .blog-content h2 {
    color: #064423;
    font-size: 22px;
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 1.35;
  }
  .blog-content h3 {
    color: #064423;
    font-size: 18px;
    font-weight: 500;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.35;
  }
  .blog-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  .blog-content p:empty {
    display: none;
  }
  .blog-content blockquote {
    margin: 2.5rem 0;
    padding: 2rem;
    border-radius: 1rem;
    background: rgba(234, 241, 231, 0.5);
    border-left: 4px solid #36B936;
    color: #064423;
    font-weight: 500;
    font-style: italic;
  }
  .blog-content blockquote p {
    margin-bottom: 0;
  }
  .blog-content img {
    width: 100%;
    border-radius: 1rem;
    margin: 3rem 0;
    display: block;
  }
  .blog-content ul {
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .blog-content ul li {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }
  .blog-content ol {
    list-style: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .blog-content ol li {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }
  .blog-content a {
    color: #36B936;
    text-decoration: underline;
  }
  .blog-content strong {
    font-weight: 600;
    color: #064423;
  }
  .blog-content code {
    background: #F0F0EC;
    color: #0A4D26;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.85em;
  }
`;

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<FullPost | null>(null);
  const [related, setRelated] = useState<RelatedPost[]>([]);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [bodyHtml, setBodyHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(async ({ data, error }) => {
        if (error || !data) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const c = data.content_en;
        const fullPost: FullPost = {
          id: data.id,
          slug: data.slug,
          category: data.category,
          featured_image: data.featured_image,
          author_name: data.author_name,
          author_role: data.author_role,
          author_image: data.author_image,
          publish_date: data.publish_date,
          created_at: data.created_at,
          title: c?.title || 'Untitled',
          bodyHtml: c?.bodyHtml || '',
          seo: c?.seo || {},
        };
        setPost(fullPost);

        // Build TOC by scanning h2/h3 tags and injecting ids for anchor links
        const parser = new DOMParser();
        const doc = parser.parseFromString(fullPost.bodyHtml, 'text/html');
        const headings = Array.from(doc.querySelectorAll('h2, h3'));
        const items: TocItem[] = headings.map((h, i) => {
          const id = `section-${i}`;
          h.setAttribute('id', id);
          return { id, label: h.textContent || '', level: h.tagName === 'H2' ? 2 : 3 };
        });
        setToc(items);
        setBodyHtml(doc.body.innerHTML);

        // SEO meta tags
        document.title = fullPost.seo.metaTitle || fullPost.title;
        setMetaTag('description', fullPost.seo.metaDescription);
        setMetaTag('og:title', fullPost.seo.metaTitle || fullPost.title, 'property');
        setMetaTag('og:description', fullPost.seo.metaDescription, 'property');
        if (fullPost.seo.ogImage) setMetaTag('og:image', fullPost.seo.ogImage, 'property');
        setCanonical(fullPost.seo.canonicalUrl);
        setRobots(fullPost.seo.noindex ? 'noindex, nofollow' : 'index, follow');

        // Related posts — same category, published, excluding current
        const { data: rel } = await supabase
          .from('blog_posts')
          .select('id, slug, category, featured_image, publish_date, created_at, content_en')
          .eq('category', data.category)
          .neq('id', data.id)
          .eq('status', 'published')
          .limit(3);

        if (rel) {
          setRelated(
            rel.map((r: any) => ({
              id: r.id,
              slug: r.slug,
              category: r.category,
              featured_image: r.featured_image,
              publish_date: r.publish_date,
              created_at: r.created_at,
              title: r.content_en?.title || 'Untitled',
            }))
          );
        }

        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-[#064423]/50 text-sm">Loading...</div>;
  }
  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-[#064423]/50 text-sm">
        <p>Post not found.</p>
        <Link to="/blog" className="text-[#36B936] font-medium">← Back to Blog</Link>
      </div>
    );
  }

  const dateStr = new Date(post.publish_date || post.created_at).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      {/* Scoped styles for the rendered rich-text body — self-contained, no external CSS file needed */}
      <style>{BLOG_CONTENT_STYLES}</style>

      <div className="max-w-[1200px] mx-auto">

        <header className="mb-12">
          <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight max-w-[1000px] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EAF1E7]">
              {post.author_image && (
                <img src={post.author_image} alt={post.author_name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              )}
            </div>
            <div>
              <h4 className="text-[#064423] text-[14px] font-medium">{post.author_name}</h4>
              <p className="text-[#064423]/50 text-[12px] font-light">{post.author_role}</p>
            </div>
          </div>
        </header>

        {post.featured_image && (
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden mb-16 bg-[#F9FBF9] border border-[#064423]/5">
            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <aside className="w-full lg:w-[300px] shrink-0 lg:sticky lg:top-10">
            <h3 className="text-[#064423] text-[18px] font-medium mb-1 leading-snug">{post.title}</h3>
            <p className="text-[#064423]/40 text-[11px] font-light mb-8">{dateStr}</p>

            {toc.length > 0 && (
              <nav className="space-y-4 mb-10 border-l border-[#064423]/10 pl-4">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-[13px] transition-colors leading-relaxed text-[#064423]/50 font-light hover:text-[#36B936] ${item.level === 3 ? 'ml-3' : ''}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-4 text-[#064423]/40">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#064423]/10 flex items-center justify-center hover:bg-[#EAF1E7] hover:text-[#36B936] hover:border-[#EAF1E7] transition-all text-[10px] font-bold">in</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#064423]/10 flex items-center justify-center hover:bg-[#EAF1E7] hover:text-[#36B936] hover:border-[#EAF1E7] transition-all text-[10px] font-bold">f</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#064423]/10 flex items-center justify-center hover:bg-[#EAF1E7] hover:text-[#36B936] hover:border-[#EAF1E7] transition-all text-[10px] font-bold">x</a>
            </div>
          </aside>

          <div
            className="flex-1 max-w-[800px] text-[#064423]/80 text-[15px] font-light leading-[1.8] blog-content"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>

        {related.length > 0 && (
          <div className="mt-32 pt-16 border-t border-[#064423]/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <RelatedCard
                  key={r.id}
                  slug={r.slug}
                  category={r.category}
                  date={new Date(r.publish_date || r.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  title={r.title}
                  image={r.featured_image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

const RelatedCard = ({ slug, category, date, title, image }: any) => (
  <Link to={`/blog/${slug}`} className="group flex flex-col bg-white rounded-[1.5rem] border border-[#064423]/5 overflow-hidden hover:shadow-[0_10px_40px_rgba(6,68,35,0.06)] hover:border-[#064423]/15 transition-all duration-500 cursor-pointer">
    <div className="w-full h-[180px] overflow-hidden bg-[#F9FBF9]">
      {image && <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-4">
        <span className="border border-[#064423]/10 text-[#064423]/70 text-[10px] px-3 py-1 rounded-full font-light tracking-wide">{category}</span>
        <span className="text-[#064423]/50 text-[10px] font-light">{date}</span>
      </div>
      <h3 className="text-[#064423] text-[15px] font-medium leading-[1.35] mb-6 flex-grow group-hover:text-[#36B936] transition-colors">{title}</h3>
      <div className="text-[#064423] text-[12px] font-medium flex items-center gap-2 mt-auto group-hover:text-[#36B936] transition-colors">
        Read More <span className="font-light text-lg mb-[2px] group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </Link>
);

// --- SEO helper functions ---
function setMetaTag(name: string, content: string | undefined, attr: 'name' | 'property' = 'name') {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string | undefined) {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setRobots(content: string) {
  let tag = document.querySelector('meta[name="robots"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'robots');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default BlogDetail;