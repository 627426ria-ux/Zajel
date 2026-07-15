import React from 'react';
import type { PageSeoFields, PageStatus } from '../hooks/usePageMeta';

interface Props {
  lang: 'en' | 'ar';
  seo: PageSeoFields;
  onSeoChange: (field: keyof PageSeoFields, value: string | boolean) => void;
  status: PageStatus;
  onStatusChange: (status: PageStatus) => void;
  publishDate: string | null;
  onPublishDateChange: (date: string | null) => void;
  siteUrl?: string;
}

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const PageSeoPanel: React.FC<Props> = ({
  lang, seo, onSeoChange, status, onStatusChange, publishDate, onPublishDateChange, siteUrl = 'zajel.com',
}) => {
  const titleLen = seo.metaTitle?.length || 0;
  const descLen = seo.metaDescription?.length || 0;

  return (
    <div className="space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
        <h3 className="text-[15px] font-normal text-[#1C2620]">SEO Settings</h3>

        <div>
          <label className="flex items-center gap-2 text-[13px] font-normal text-gray-500 mb-1.5">
            Meta Title <span className={titleLen > 60 ? 'text-red-500' : 'text-gray-400'}>({titleLen}/60)</span>
          </label>
          <input type="text" value={seo.metaTitle || ''} onChange={(e) => onSeoChange('metaTitle', e.target.value)} placeholder="Page title" className={inputClass} />
        </div>

        <div>
          <label className="flex items-center gap-2 text-[13px] font-normal text-gray-500 mb-1.5">
            Meta Description <span className={descLen > 160 ? 'text-red-500' : 'text-gray-400'}>({descLen}/160)</span>
          </label>
          <textarea value={seo.metaDescription || ''} onChange={(e) => onSeoChange('metaDescription', e.target.value)} placeholder="Page meta description" className={`${inputClass} h-20 resize-none`} />
        </div>

        <div>
          <label className={labelClass}>Canonical URL</label>
          <input type="text" value={seo.canonicalUrl || ''} onChange={(e) => onSeoChange('canonicalUrl', e.target.value)} placeholder={`https://${siteUrl}/`} className={inputClass} />
        </div>

        <label className="flex items-center justify-between pt-1">
          <span className="text-[13px] font-normal text-gray-600">Allow Search Indexing</span>
          <span
            onClick={() => onSeoChange('noindex', !seo.noindex)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full cursor-pointer transition-colors ${!seo.noindex ? 'bg-[#0A4D26]' : 'bg-gray-300'}`}
          >
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${!seo.noindex ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
          </span>
        </label>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-2">
        <h3 className="text-[15px] font-normal text-[#1C2620] mb-1">SERP Preview</h3>
        <p className="text-[11px] text-gray-400 font-light">{siteUrl} › {lang === 'ar' ? 'الصفحة' : 'page'}</p>
        <p className="text-[#1a0dab] text-base font-normal leading-snug">{seo.metaTitle || 'Page title will appear here'}</p>
        <p className="text-xs text-gray-500 font-light leading-relaxed">{seo.metaDescription || 'Meta description will appear here, describing the page for search engines.'}</p>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-3">
        <h3 className="text-[15px] font-normal text-[#1C2620]">Social Media (Open Graph)</h3>
        <div>
          <label className={labelClass}>OG Title</label>
          <input type="text" value={seo.ogTitle || ''} onChange={(e) => onSeoChange('ogTitle', e.target.value)} placeholder="Social media title" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>OG Description</label>
          <textarea value={seo.ogDescription || ''} onChange={(e) => onSeoChange('ogDescription', e.target.value)} placeholder="Social media description" className={`${inputClass} h-16 resize-none`} />
        </div>
        <div>
          <label className={labelClass}>OG Image</label>
          {seo.ogImage ? (
            <img src={seo.ogImage} alt="OG preview" className="h-20 w-full object-cover rounded-lg border border-[#E8E7E2] mb-2" />
          ) : (
            <div className="h-20 w-full rounded-lg border border-dashed border-[#E8E7E2] flex items-center justify-center text-xs text-gray-400 font-light mb-2">
              No image set
            </div>
          )}
          <input type="text" value={seo.ogImage || ''} onChange={(e) => onSeoChange('ogImage', e.target.value)} placeholder="Paste image URL" className={`${inputClass} text-xs`} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-3">
        <h3 className="text-[15px] font-normal text-[#1C2620]">Publishing</h3>
        <div>
          <label className={labelClass}>Status</label>
          <select value={status} onChange={(e) => onStatusChange(e.target.value as PageStatus)} className={inputClass}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
        {status === 'scheduled' && (
          <div>
            <label className={labelClass}>Publish Date</label>
            <input type="datetime-local" value={publishDate ? publishDate.slice(0, 16) : ''} onChange={(e) => onPublishDateChange(e.target.value ? new Date(e.target.value).toISOString() : null)} className={inputClass} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSeoPanel;