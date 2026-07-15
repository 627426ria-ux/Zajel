import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { HomeMarqueeContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";

const EMPTY_LOGO = { image_url: '', altText: '' };

const MarqueeEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<HomeMarqueeContent>('home_marquee');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof HomeMarqueeContent, value: string) => 
    setActive(prev => prev ? { ...prev, [field]: value } : prev);

  const setLogoAlt = (index: number, value: string) => {
    setActive(prev => {
      if (!prev) return prev;
      const logos = [...(prev.logos || [])];
      logos[index] = { ...(logos[index] || EMPTY_LOGO), altText: value };
      return { ...prev, logos };
    });
  };

  // Updates the image URL in BOTH English and Arabic simultaneously
  const setSharedLogoImage = (index: number, url: string) => {
    setContentEn(prev => {
      if (!prev) return prev;
      const logos = [...(prev.logos || [])];
      logos[index] = { ...(logos[index] || EMPTY_LOGO), image_url: url };
      return { ...prev, logos };
    });
    setContentAr(prev => {
      if (!prev) return prev;
      const logos = [...(prev.logos || [])];
      logos[index] = { ...(logos[index] || EMPTY_LOGO), image_url: url };
      return { ...prev, logos };
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E8E7E2]">
        <div className="flex gap-2">
          {(['en', 'ar'] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1.5 rounded-full text-xs font-medium ${lang === l ? 'bg-[#0A4D26] text-white' : 'bg-gray-100 text-gray-500'}`}>
              {l === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label="Enabled" />
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm disabled:opacity-40">
            Publish
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Section Heading</label>
          <input type="text" value={active.heading || ''} onChange={e => setField('heading', e.target.value)} className={inputClass} placeholder="Trusted by Contractors" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-bold text-gray-400 uppercase">Logos (6)</h4>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#E8E7E2] last:border-0 last:pb-0">
            <div>
              <ImageUploader 
                label={`Logo ${i + 1} Image`} 
                currentUrl={contentEn.logos?.[i]?.image_url || ''} 
                folder="home-logos" 
                onUploaded={(url) => setSharedLogoImage(i, url)} 
              />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-xs text-gray-500 block mb-1">Alt Text (Company Name)</label>
              <input 
                type="text" 
                value={active.logos?.[i]?.altText || ''} 
                onChange={e => setLogoAlt(i, e.target.value)} 
                className={inputClass} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeEditor;