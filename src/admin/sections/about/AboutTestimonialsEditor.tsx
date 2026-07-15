import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { AboutTestimonialsContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";

const AboutTestimonialsEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving,  dirty, save } =
    useBilingualSectionContent<AboutTestimonialsContent>('about_testimonials');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Error loading section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof AboutTestimonialsContent, value: string) => setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setCardField = (index: number, field: 'text' | 'name' | 'role', value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const testimonials = prev.testimonials ? [...prev.testimonials] : [];
      while (testimonials.length <= index) testimonials.push({ text: '', name: '', role: '', image_url: '' });
      testimonials[index] = { ...testimonials[index], [field]: value };
      return { ...prev, testimonials };
    });

  const setSharedImage = (index: number, url: string) => {
    const updateLang = (prev: AboutTestimonialsContent | null) => {
      if (!prev) return prev;
      const testimonials = prev.testimonials ? [...prev.testimonials] : [];
      while (testimonials.length <= index) testimonials.push({ text: '', name: '', role: '', image_url: '' });
      testimonials[index] = { ...testimonials[index], image_url: url };
      return { ...prev, testimonials };
    };
    setContentEn(updateLang);
    setContentAr(updateLang);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 rounded-full p-1 bg-[#F0F5F1]">
          {(['en', 'ar'] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${lang === l ? 'bg-[#0A4D26] text-white' : 'text-gray-500'}`}>
              {l === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label={enabled ? 'Enabled' : 'Disabled'} />
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm font-normal hover:bg-[#073A1D] transition-colors disabled:opacity-40">
            {saving ? 'Publishing…' : 'Publish Changes'}
          </button>
        </div>
      </div>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 mb-6 space-y-4">
          <div>
            <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Heading</label>
            <input type="text" value={active.heading || ''} onChange={(e) => setField('heading', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Subheading</label>
            <input type="text" value={active.subheading || ''} onChange={(e) => setField('subheading', e.target.value)} className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider border-b border-[#E8E7E2] pb-2">Review {i + 1}</p>
              <div dir="ltr">
                <ImageUploader label="Reviewer Photo" currentUrl={active.testimonials?.[i]?.image_url} folder="about" onUploaded={(url) => setSharedImage(i, url)} previewClassName="h-16 w-16 object-cover rounded-full mb-3 border border-[#E8E7E2]" />
              </div>
              <div>
                <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Review Text</label>
                <textarea value={active.testimonials?.[i]?.text || ''} onChange={(e) => setCardField(i, 'text', e.target.value)} rows={3} className={`${inputClass} resize-none`} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Name</label>
                  <input type="text" value={active.testimonials?.[i]?.name || ''} onChange={(e) => setCardField(i, 'name', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Role</label>
                  <input type="text" value={active.testimonials?.[i]?.role || ''} onChange={(e) => setCardField(i, 'role', e.target.value)} className={inputClass} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default AboutTestimonialsEditor;