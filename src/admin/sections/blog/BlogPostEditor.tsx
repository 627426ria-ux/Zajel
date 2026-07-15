import React, { useState } from 'react';
import { useBlogPost } from '../../hooks/useBlogPost';
import RichTextEditor from '../../components/RichTextEditor';
import ImageUploader from '../../components/ImageUploader';
import SeoEditor from '../../components/SeoEditor';

interface Props {
  postId: string;
  onBack: () => void;
}

type Lang = 'en' | 'ar';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const BlogPostEditor: React.FC<Props> = ({ postId, onBack }) => {
  const { post, update, updateLangField, updateSeo, loading, saving, error, dirty, save } = useBlogPost(postId);
  const [lang, setLang] = useState<Lang>('en');

  if (loading) return <p className="text-sm text-gray-400 px-6">Loading post...</p>;
  if (!post) return <p className="text-sm text-red-500 px-6">Could not load post. {error}</p>;

  const langContent = lang === 'en' ? post.content_en : post.content_ar;

  return (
    <div className="pb-20 w-full px-6 sm:px-10">
      <div className="flex items-center justify-between mb-8 pt-2">
        <div>
          <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors mb-3">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Posts
          </button>
          <h1 className="text-2xl font-medium text-gray-900 tracking-tight">
            {langContent.title || 'Untitled Post'}
          </h1>
          <p className="text-sm text-gray-400 mt-1">/blog/{post.slug}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full p-1 bg-gray-100">
            {(['en', 'ar'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${lang === l ? 'bg-[#0A4D26] text-white' : 'text-gray-500'}`}
              >
                {l === 'en' ? 'English' : 'العربية'}
              </button>
            ))}
          </div>
          {dirty && !saving && <span className="text-xs text-amber-500">Unsaved</span>}
          <button
            onClick={save}
            disabled={saving || !dirty}
            className="bg-[#36B936] text-[#05361A] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2fa62f] transition-colors disabled:opacity-40"
          >
            {saving ? 'Saving…' : 'Save Post'}
          </button>
        </div>
      </div>

      {error && <div className="bg-red-50 border border-red-100 text-red-600 text-xs rounded-lg px-4 py-3 mb-6">{error}</div>}

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
        {/* LEFT: content */}
        <div className="space-y-6 min-w-0">

          <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
            <h3 className="text-[15px] font-normal text-[#1C2620]">Post Details</h3>

            <div>
              <label className={labelClass}>Slug (URL)</label>
              <input type="text" value={post.slug} onChange={(e) => update({ slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} className={inputClass} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Category</label>
                <input type="text" value={post.category} onChange={(e) => update({ category: e.target.value })} placeholder="Courier Tips" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Status</label>
                <select value={post.status} onChange={(e) => update({ status: e.target.value as any })} className={inputClass}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
            </div>

            {post.status === 'scheduled' && (
              <div>
                <label className={labelClass}>Publish Date</label>
                <input
                  type="datetime-local"
                  value={post.publish_date ? post.publish_date.slice(0, 16) : ''}
                  onChange={(e) => update({ publish_date: e.target.value ? new Date(e.target.value).toISOString() : null })}
                  className={inputClass}
                />
              </div>
            )}

            <ImageUploader
              label="Featured Image"
              currentUrl={post.featured_image || undefined}
              folder="blog"
              onUploaded={(url) => update({ featured_image: url })}
              previewClassName="h-32 w-full object-cover bg-gray-50 rounded-lg border mb-2"
            />

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#F0F0EC]">
              <div>
                <label className={labelClass}>Author Name</label>
                <input type="text" value={post.author_name} onChange={(e) => update({ author_name: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Author Role</label>
                <input type="text" value={post.author_role} onChange={(e) => update({ author_role: e.target.value })} className={inputClass} />
              </div>
              <div>
                <ImageUploader
                  label="Author Photo"
                  currentUrl={post.author_image || undefined}
                  folder="blog/authors"
                  onUploaded={(url) => update({ author_image: url })}
                  previewClassName="h-12 w-12 rounded-full object-cover bg-gray-50 border mb-2"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-[15px] font-normal text-[#1C2620]">Content ({lang.toUpperCase()})</h3>

            <div>
              <label className={labelClass}>Title</label>
              <input
                type="text"
                value={langContent.title}
                onChange={(e) => updateLangField(lang, 'title', e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Excerpt (used in card preview + fallback meta description)</label>
              <textarea
                value={langContent.excerpt}
                onChange={(e) => updateLangField(lang, 'excerpt', e.target.value)}
                className={`${inputClass} h-20 resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>Body</label>
              <RichTextEditor
                value={langContent.bodyHtml}
                onChange={(html) => updateLangField(lang, 'bodyHtml', html)}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: SEO */}
        <div className="xl:sticky xl:top-6">
          <SeoEditor
            seo={langContent.seo}
            onChange={(field, value) => updateSeo(lang, field, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostEditor;