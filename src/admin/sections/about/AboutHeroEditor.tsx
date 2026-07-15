import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { AboutHeroContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const AboutHeroEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<AboutHeroContent>('about_hero');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof AboutHeroContent, value: string) =>
    setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setSharedField = (field: keyof AboutHeroContent, value: string) => {
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
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm font-normal hover:bg-[#073A1D] transition-colors disabled:opacity-40">
            {saving ? 'Publishing…' : 'Publish Changes'}
          </button>
        </div>
      </div>

      {!enabled && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-light rounded-xl px-4 py-2.5">
          This section is currently hidden on the live site.
        </div>
      )}

      {/* Media (Shared between En & Ar) */}
      <section>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">Images <span className="normal-case text-gray-300">— shared</span></h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImageUploader label="Left Image" currentUrl={contentEn.image1_url} folder="about" onUploaded={(url) => setSharedField('image1_url', url)} previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]" />
          <ImageUploader label="Center Image (Mobile Default)" currentUrl={contentEn.image2_url} folder="about" onUploaded={(url) => setSharedField('image2_url', url)} previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]" />
          <ImageUploader label="Right Image" currentUrl={contentEn.image3_url} folder="about" onUploaded={(url) => setSharedField('image3_url', url)} previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]" />
        </div>
      </section>

      {/* Text Content */}
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">Content <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span></h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
          <div>
            <label className={labelClass}>Heading</label>
            <textarea value={active.heading || ''} onChange={(e) => setField('heading', e.target.value)} rows={2} className={`${inputClass} resize-none text-base`} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={active.description || ''} onChange={(e) => setField('description', e.target.value)} rows={3} className={`${inputClass} resize-none`} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Button 1 Label</label>
              <input type="text" value={active.btn1_label || ''} onChange={(e) => setField('btn1_label', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Button 1 Link (PDF or URL)</label>
              <input type="text" value={active.btn1_url || ''} onChange={(e) => setField('btn1_url', e.target.value)} className={inputClass} dir="ltr" />
            </div>
            <div>
              <label className={labelClass}>Button 2 Label</label>
              <input type="text" value={active.btn2_label || ''} onChange={(e) => setField('btn2_label', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Button 2 Link</label>
              <input type="text" value={active.btn2_url || ''} onChange={(e) => setField('btn2_url', e.target.value)} className={inputClass} dir="ltr" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroEditor;