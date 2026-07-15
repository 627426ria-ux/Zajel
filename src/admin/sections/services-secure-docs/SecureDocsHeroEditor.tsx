import React, { useState, useEffect } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { SecureDocsHeroContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";

const GovHeroEditor: React.FC = () => {
  console.log('[GovHeroEditor] RENDER'); // temp debug

  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<SecureDocsHeroContent>('securedocs_hero');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    console.log('[GovHeroEditor] MOUNTED'); // temp debug
    return () => console.log('[GovHeroEditor] UNMOUNTED'); // temp debug
  }, []);

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof SecureDocsHeroContent, value: string) => {
    console.log('[setField]', field, value); // temp debug
    setActive(prev => {
      console.log('[setField] prev was', prev?.[field], '-> new', value); // temp debug
      return prev ? { ...prev, [field]: value } : prev;
    });
  };

  const setSharedField = (field: keyof SecureDocsHeroContent, value: string) => {
    setContentEn(prev => prev ? { ...prev, [field]: value } : prev);
    setContentAr(prev => prev ? { ...prev, [field]: value } : prev);
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
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm disabled:opacity-40">Publish</button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2]">
        <ImageUploader label="Hero Image" currentUrl={contentEn.image_url} folder="secure-docs" onUploaded={(url) => setSharedField('image_url', url)} />
        <div className="mt-4">
          <label className="text-xs text-gray-500 block mb-1">Image Alt Text</label>
          <input type="text" value={contentEn.imgAlt || ''} onChange={e => setSharedField('imgAlt', e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div><label className="text-xs text-gray-500 block mb-1">Eyebrow</label><input type="text" value={active.eyebrow || ''} onChange={e => setField('eyebrow', e.target.value)} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Heading</label><textarea value={active.title || ''} onChange={e => setField('title', e.target.value)} rows={2} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Description</label><textarea value={active.description || ''} onChange={e => setField('description', e.target.value)} rows={3} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Primary Button Label</label><input type="text" value={active.btnPrimaryLabel || ''} onChange={e => setField('btnPrimaryLabel', e.target.value)} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Secondary Button Label</label><input type="text" value={active.btnSecondaryLabel || ''} onChange={e => setField('btnSecondaryLabel', e.target.value)} className={inputClass} /></div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase">Button Links</h4>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Primary Button URL</label>
          <input type="text" value={contentEn.btnPrimaryUrl || ''} onChange={e => setSharedField('btnPrimaryUrl', e.target.value)} className={inputClass} placeholder="/quotation" />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Secondary Button URL</label>
          <input type="text" value={contentEn.btnSecondaryUrl || ''} onChange={e => setSharedField('btnSecondaryUrl', e.target.value)} className={inputClass} placeholder="/contact" />
        </div>
      </div>
    </div>
  );
};
export default GovHeroEditor;