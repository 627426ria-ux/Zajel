import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { EcommerceCardsContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal outline-none focus:border-[#0A4D26]";

const EcommerceCardsEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<EcommerceCardsContent>('ecommerce_cards');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;
  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof EcommerceCardsContent, value: string) => setActive(prev => prev ? { ...prev, [field]: value } : prev);
  const setSharedField = (field: keyof EcommerceCardsContent, value: string) => {
    setContentEn(prev => prev ? { ...prev, [field]: value } : prev);
    setContentAr(prev => prev ? { ...prev, [field]: value } : prev);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E8E7E2]">
        <div className="flex gap-2">
          {(['en', 'ar'] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1.5 rounded-full text-xs font-medium ${lang === l ? 'bg-[#0A4D26] text-white' : 'bg-gray-100 text-gray-500'}`}>{l === 'en' ? 'English' : 'العربية'}</button>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label="Enabled" />
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm disabled:opacity-40">Publish</button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <label className="text-xs text-gray-500 block mb-1">Main Heading</label>
        <textarea value={active.heading || ''} onChange={e => setField('heading', e.target.value)} rows={2} className={inputClass} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {(['card1', 'card2'] as const).map((c, idx) => (
          <div key={c} className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase">Card {idx + 1}</h4>
            <div><label className="text-xs text-gray-500 block mb-1">Title</label><input type="text" value={active[`${c}_title`] || ''} onChange={e => setField(`${c}_title`, e.target.value)} className={inputClass} /></div>
            <div><label className="text-xs text-gray-500 block mb-1">Description</label><textarea value={active[`${c}_description`] || ''} onChange={e => setField(`${c}_description`, e.target.value)} rows={4} className={inputClass} /></div>
            <div><label className="text-xs text-gray-500 block mb-1">Button Label</label><input type="text" value={active[`${c}_buttonLabel`] || ''} onChange={e => setField(`${c}_buttonLabel`, e.target.value)} className={inputClass} /></div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase">Button Links</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label className="text-xs text-gray-500 block mb-1">Card 1 Button Link</label><input type="text" value={contentEn.card1_buttonUrl || ''} onChange={e => setSharedField('card1_buttonUrl', e.target.value)} className={inputClass} placeholder="/quotation" /></div>
          <div><label className="text-xs text-gray-500 block mb-1">Card 2 Button Link</label><input type="text" value={contentEn.card2_buttonUrl || ''} onChange={e => setSharedField('card2_buttonUrl', e.target.value)} className={inputClass} placeholder="/contact" /></div>
        </div>
      </div>
    </div>
  );
};
export default EcommerceCardsEditor;