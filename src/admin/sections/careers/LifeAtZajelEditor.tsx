import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { LifeAtZajelContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const LifeAtZajelEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<LifeAtZajelContent>('careers_life');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  // For bilingual text fields
  const setField = (field: keyof LifeAtZajelContent, value: string) =>
    setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  // For images (shared across both languages)
  const setSharedField = (field: keyof LifeAtZajelContent, value: string) => {
    setContentEn((prev) => (prev ? { ...prev, [field]: value } : prev));
    setContentAr((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 rounded-full p-1 bg-[#F0F5F1]">
          {(['en', 'ar'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                lang === l ? 'bg-[#0A4D26] text-white' : 'text-gray-500'
              }`}
            >
              {l === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label={enabled ? 'Enabled' : 'Disabled'} />
          {error && <span className="text-xs text-red-500 font-light">{error}</span>}
          {dirty && !saving && <span className="text-xs text-amber-600 font-light">Unsaved changes</span>}
          <button
            onClick={save}
            disabled={saving || !dirty}
            className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm font-normal hover:bg-[#073A1D] transition-colors disabled:opacity-40"
          >
            {saving ? 'Publishing…' : 'Publish Changes'}
          </button>
        </div>
      </div>

      {!enabled && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-light rounded-xl px-4 py-2.5">
          This section is currently hidden on the live site. Toggle it on and publish to show it again.
        </div>
      )}

      {/* Shared Media Section */}
      <section>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">
          Media Gallery <span className="normal-case text-gray-300">— shared across languages</span>
        </h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImageUploader
              label="Top Right Image (Main)"
              currentUrl={contentEn.image1_url}
              folder="careers-life"
              onUploaded={(url) => setSharedField('image1_url', url)}
              previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]"
            />
            <ImageUploader
              label="Bottom Left Image"
              currentUrl={contentEn.image2_url}
              folder="careers-life"
              onUploaded={(url) => setSharedField('image2_url', url)}
              previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]"
            />
            <ImageUploader
              label="Bottom Middle Image"
              currentUrl={contentEn.image3_url}
              folder="careers-life"
              onUploaded={(url) => setSharedField('image3_url', url)}
              previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]"
            />
            <ImageUploader
              label="Bottom Right Image"
              currentUrl={contentEn.image4_url}
              folder="careers-life"
              onUploaded={(url) => setSharedField('image4_url', url)}
              previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]"
            />
          </div>
        </div>
      </section>

      {/* Bilingual Content Section */}
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">
          Text Content <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span>
        </h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
          <div>
            <label className={labelClass}>Heading</label>
            <textarea 
              value={active.heading || ''} 
              onChange={(e) => setField('heading', e.target.value)} 
              rows={2} 
              className={`${inputClass} resize-none text-base font-light`} 
            />
            <p className="text-[11px] text-gray-400 font-light mt-1.5">Note: If you need a line break like in the design, simply press Enter to start a new line.</p>
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea 
              value={active.description || ''} 
              onChange={(e) => setField('description', e.target.value)} 
              className={`${inputClass} min-h-[100px] resize-none`} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtZajelEditor;