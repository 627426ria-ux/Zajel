import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { IntlDetailsContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal outline-none focus:border-[#0A4D26]";

const IntlDetailsEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<IntlDetailsContent>('intl_service_details');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;
  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof IntlDetailsContent, value: string) => setActive(prev => prev ? { ...prev, [field]: value } : prev);
  const setSharedField = (field: keyof IntlDetailsContent, value: string) => {
    setContentEn(prev => prev ? { ...prev, [field]: value } : prev);
    setContentAr(prev => prev ? { ...prev, [field]: value } : prev);
  };
  const setBullet = (index: number, value: string) => setActive(prev => {
    if (!prev) return prev;
    const arr = [...(prev.benefits || ['', '', '', '', '', ''])];
    arr[index] = value;
    return { ...prev, benefits: arr };
  });

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

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2]">
        <ImageUploader label="Section Image" currentUrl={contentEn.image_url} folder="intl" onUploaded={(url) => {
          setContentEn(prev => prev ? { ...prev, image_url: url } : prev);
          setContentAr(prev => prev ? { ...prev, image_url: url } : prev);
        }} />
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-bold text-gray-400 uppercase">Benefits List</h4>
        <div><label className="text-xs text-gray-500 block mb-1">Heading</label><input type="text" value={active.benefitsHeading || ''} onChange={e => setField('benefitsHeading', e.target.value)} className={inputClass} /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i}><label className="text-xs text-gray-500 block mb-1">Bullet {i + 1}</label><input type="text" value={active.benefits?.[i] || ''} onChange={e => setBullet(i, e.target.value)} className={inputClass} /></div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-bold text-gray-400 uppercase">Call to Action Area</h4>
        <div><label className="text-xs text-gray-500 block mb-1">CTA Heading</label><input type="text" value={active.ctaHeading || ''} onChange={e => setField('ctaHeading', e.target.value)} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">CTA Subtext</label><textarea value={active.ctaSubtext || ''} onChange={e => setField('ctaSubtext', e.target.value)} rows={2} className={inputClass} /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-xs text-gray-500 block mb-1">Quote Button Label</label><input type="text" value={active.btnQuote || ''} onChange={e => setField('btnQuote', e.target.value)} className={inputClass} /></div>
          <div><label className="text-xs text-gray-500 block mb-1">Track Button Label</label><input type="text" value={active.btnTrack || ''} onChange={e => setField('btnTrack', e.target.value)} className={inputClass} /></div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase">Button Links</h4>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Quote Button Link</label>
            <input type="text" value={contentEn.btnQuoteUrl || ''} onChange={e => setSharedField('btnQuoteUrl', e.target.value)} className={inputClass} placeholder="/quotation" />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Track Button Link</label>
            <input type="text" value={contentEn.btnTrackUrl || ''} onChange={e => setSharedField('btnTrackUrl', e.target.value)} className={inputClass} placeholder="/track-shipment" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntlDetailsEditor;