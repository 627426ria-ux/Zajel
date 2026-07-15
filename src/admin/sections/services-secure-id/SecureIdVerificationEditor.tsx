// SecureIdVerificationEditor.tsx
import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { SecureIdVerificationContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";
const EMPTY_FEATURE = { title: '', desc: '' };

const SecureIdVerificationEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<SecureIdVerificationContent>('secureid_verification');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;
  const setField = (field: keyof SecureIdVerificationContent, value: string) => setActive(prev => prev ? { ...prev, [field]: value } : prev);
  const setFeatureField = (index: number, key: 'title' | 'desc', value: string) => {
    setActive(prev => {
      if (!prev) return prev;
      const features = [...(prev.features || [])];
      features[index] = { ...(features[index] || EMPTY_FEATURE), [key]: value };
      return { ...prev, features };
    });
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

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div><label className="text-xs text-gray-500 block mb-1">Title (part 1)</label><input type="text" value={active.title1 || ''} onChange={e => setField('title1', e.target.value)} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Title (part 2, green)</label><input type="text" value={active.title2 || ''} onChange={e => setField('title2', e.target.value)} className={inputClass} /></div>
        <div><label className="text-xs text-gray-500 block mb-1">Description</label><textarea value={active.description || ''} onChange={e => setField('description', e.target.value)} rows={3} className={inputClass} /></div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-bold text-gray-400 uppercase">Features (4)</h4>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-2 pb-4 border-b border-[#E8E7E2] last:border-0 last:pb-0">
            <label className="text-xs text-gray-500 block">Feature {i + 1} Title</label>
            <input type="text" value={active.features?.[i]?.title || ''} onChange={e => setFeatureField(i, 'title', e.target.value)} className={inputClass} />
            <label className="text-xs text-gray-500 block">Feature {i + 1} Description</label>
            <textarea value={active.features?.[i]?.desc || ''} onChange={e => setFeatureField(i, 'desc', e.target.value)} rows={2} className={inputClass} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SecureIdVerificationEditor;