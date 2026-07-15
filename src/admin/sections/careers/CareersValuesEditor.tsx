import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { CareersValuesContent } from './types';

const ICON_LABELS = ['Integrity', 'Speed', 'Innovation', 'Customer-First', 'Sustainability', 'People'];
const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const CareersValuesEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<CareersValuesContent>('careers_values');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof CareersValuesContent, value: string) =>
    setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setCardField = (index: number, field: 'title' | 'desc', value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const values = [...prev.values];
      values[index] = { ...values[index], [field]: value };
      return { ...prev, values };
    });

  return (
    <div className="space-y-6">
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

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">
          Section Content <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span>
        </h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
          <div>
            <label className={labelClass}>Heading</label>
            <textarea value={active.heading} onChange={(e) => setField('heading', e.target.value)} rows={2} className={`${inputClass} resize-none text-base font-light`} />
            <p className="text-[11px] text-gray-400 font-light mt-1.5">Use a line break for a two-line headline.</p>
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={active.description} onChange={(e) => setField('description', e.target.value)} className={`${inputClass} min-h-[80px] resize-none`} />
          </div>
        </div>
      </section>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">
          Value Cards <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}, icons fixed</span>
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {ICON_LABELS.map((iconLabel, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E8E7E2] p-4 space-y-3">
              <p className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">{iconLabel}</p>
              <div>
                <label className="block text-xs font-normal text-gray-500 mb-1">Title</label>
                <input type="text" value={active.values[i]?.title || ''} onChange={(e) => setCardField(i, 'title', e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-normal text-gray-500 mb-1">Description</label>
                <textarea value={active.values[i]?.desc || ''} onChange={(e) => setCardField(i, 'desc', e.target.value)} rows={2} className={`${inputClass} resize-none`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersValuesEditor;