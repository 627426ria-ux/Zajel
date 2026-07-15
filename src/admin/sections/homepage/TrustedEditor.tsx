import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { HomeTrustedContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";

const EMPTY_STAT = { value: 0, suffix: '', label: '' };

const TrustedEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<HomeTrustedContent>('home_trusted');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof HomeTrustedContent, value: string) => 
    setActive(prev => prev ? { ...prev, [field]: value } : prev);

  const setStatField = (index: number, key: 'value' | 'suffix' | 'label', value: string | number) => {
    setActive(prev => {
      if (!prev) return prev;
      const stats = [...(prev.stats || [])];
      stats[index] = { ...(stats[index] || EMPTY_STAT), [key]: value };
      return { ...prev, stats };
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
        <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Header Content</h4>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Heading Part 1</label>
          <input type="text" value={active.heading1 || ''} onChange={e => setField('heading1', e.target.value)} className={inputClass} placeholder="Trusted by thousands," />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Heading Highlight (Green)</label>
          <input type="text" value={active.headingHighlight || ''} onChange={e => setField('headingHighlight', e.target.value)} className={inputClass} placeholder="delivering millions" />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Heading Part 2</label>
          <input type="text" value={active.heading2 || ''} onChange={e => setField('heading2', e.target.value)} className={inputClass} placeholder="of shipments worldwide." />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Subtext</label>
          <textarea value={active.subtext || ''} onChange={e => setField('subtext', e.target.value)} rows={2} className={inputClass} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-bold text-gray-400 uppercase">Statistics (4)</h4>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#E8E7E2] last:border-0 last:pb-0">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Target Number</label>
              <input 
                type="number" 
                value={active.stats?.[i]?.value || 0} 
                onChange={e => setStatField(i, 'value', parseInt(e.target.value) || 0)} 
                className={inputClass} 
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Suffix (e.g. M+, +)</label>
              <input 
                type="text" 
                value={active.stats?.[i]?.suffix || ''} 
                onChange={e => setStatField(i, 'suffix', e.target.value)} 
                className={inputClass} 
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Label</label>
              <input 
                type="text" 
                value={active.stats?.[i]?.label || ''} 
                onChange={e => setStatField(i, 'label', e.target.value)} 
                className={inputClass} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedEditor;