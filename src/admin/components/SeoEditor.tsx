import React from 'react';
import type { SeoFields } from '../sections/types';

interface Props {
  seo: SeoFields;
  onChange: (field: keyof SeoFields, value: string | boolean) => void;
}

const SeoEditor: React.FC<Props> = ({ seo, onChange }) => {
  const titleLen = seo.metaTitle?.length || 0;
  const descLen = seo.metaDescription?.length || 0;

  return (
    <section>
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-6 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search Engine Optimization
      </h3>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />

        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Meta Title{' '}
            <span className={`font-normal lowercase ${titleLen > 60 ? 'text-red-500' : 'text-gray-400'}`}>
              ({titleLen}/60)
            </span>
          </label>
          <input
            type="text"
            value={seo.metaTitle || ''}
            onChange={(e) => onChange('metaTitle', e.target.value)}
            placeholder="e.g. Zajel Logistics | Premium Courier Services in UAE"
            className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-blue-500 outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Meta Description{' '}
            <span className={`font-normal lowercase ${descLen > 160 ? 'text-red-500' : 'text-gray-400'}`}>
              ({descLen}/160)
            </span>
          </label>
          <textarea
            value={seo.metaDescription || ''}
            onChange={(e) => onChange('metaDescription', e.target.value)}
            placeholder="e.g. Fast, secure, and reliable international and domestic shipping..."
            className="w-full border border-gray-200 rounded-lg p-4 bg-transparent focus:border-blue-500 outline-none transition-colors h-24 resize-none text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Keywords <span className="text-gray-400 font-normal lowercase">(comma separated, optional)</span>
          </label>
          <input
            type="text"
            value={seo.keywords || ''}
            onChange={(e) => onChange('keywords', e.target.value)}
            placeholder="courier dubai, logistics uae, shipping"
            className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-blue-500 outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Canonical URL <span className="text-gray-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            value={seo.canonicalUrl || ''}
            onChange={(e) => onChange('canonicalUrl', e.target.value)}
            placeholder="https://zajel.com/"
            className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-blue-500 outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Social Share Image (OG Image)
          </label>
          {seo.ogImage && (
            <img src={seo.ogImage} alt="OG preview" className="h-20 w-36 object-cover bg-gray-50 rounded border mb-3" />
          )}
          <input
            type="text"
            value={seo.ogImage || ''}
            onChange={(e) => onChange('ogImage', e.target.value)}
            placeholder="Paste image URL, or upload above and it fills automatically"
            className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-blue-500 outline-none transition-colors text-sm"
          />
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={!!seo.noindex}
            onChange={(e) => onChange('noindex', e.target.checked)}
            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          Hide this page from search engines (noindex)
        </label>
      </div>
    </section>
  );
};

export default SeoEditor;