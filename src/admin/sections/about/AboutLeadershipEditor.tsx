import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { AboutLeadershipContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";

const AboutLeadershipEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving,  dirty, save } =
    useBilingualSectionContent<AboutLeadershipContent>('about_leadership');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Error loading section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof AboutLeadershipContent, value: string) => setActive((prev) => (prev ? { ...prev, [field]: value } : prev));
  
  const setLeaderField = (index: number, field: 'name' | 'role', value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const leaders = prev.leaders ? [...prev.leaders] : [];
      while (leaders.length <= index) leaders.push({ name: '', role: '', image_url: '' });
      leaders[index] = { ...leaders[index], [field]: value };
      return { ...prev, leaders };
    });

  const setSharedImage = (index: number, url: string) => {
    const updateLang = (prev: AboutLeadershipContent | null) => {
      if (!prev) return prev;
      const leaders = prev.leaders ? [...prev.leaders] : [];
      while (leaders.length <= index) leaders.push({ name: '', role: '', image_url: '' });
      leaders[index] = { ...leaders[index], image_url: url };
      return { ...prev, leaders };
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
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 mb-6">
          <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Main Heading</label>
          <textarea value={active.heading || ''} onChange={(e) => setField('heading', e.target.value)} rows={3} className={`${inputClass} resize-none`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider border-b border-[#E8E7E2] pb-2">Leader {i + 1}</p>
              <div dir="ltr">
                <ImageUploader label="Profile Image" currentUrl={active.leaders?.[i]?.image_url} folder="about" onUploaded={(url) => setSharedImage(i, url)} previewClassName="h-32 w-full object-cover rounded-lg mb-3 border border-[#E8E7E2]" />
              </div>
              <div>
                <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Name</label>
                <input type="text" value={active.leaders?.[i]?.name || ''} onChange={(e) => setLeaderField(i, 'name', e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-[13px] font-normal text-gray-500 mb-1.5">Role / Title</label>
                <input type="text" value={active.leaders?.[i]?.role || ''} onChange={(e) => setLeaderField(i, 'role', e.target.value)} className={inputClass} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default AboutLeadershipEditor;