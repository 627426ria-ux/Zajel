import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { AboutWhoWeAreContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const AboutWhoWeAreEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<AboutWhoWeAreContent>('about_who_we_are');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof AboutWhoWeAreContent, value: string) =>
    setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setCardField = (index: number, field: 'number' | 'label', value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const stats = prev.stats ? [...prev.stats] : [];
      while (stats.length <= index) stats.push({ number: '', label: '' });
      stats[index] = { ...stats[index], [field]: value };
      return { ...prev, stats };
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

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">Content <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span></h4>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
          <div>
            <label className={labelClass}>Heading</label>
            <input type="text" value={active.heading || ''} onChange={(e) => setField('heading', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={active.description || ''} onChange={(e) => setField('description', e.target.value)} rows={4} className={`${inputClass} resize-none`} />
          </div>
        </div>
      </section>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-3">Statistics <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span></h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E8E7E2] p-4 space-y-3">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider border-b border-[#E8E7E2] pb-1">Stat {i + 1}</p>
              <div>
                <label className="block text-xs font-normal text-gray-500 mb-1">Number / Figure (e.g. 17+)</label>
                <input type="text" value={active.stats?.[i]?.number || ''} onChange={(e) => setCardField(i, 'number', e.target.value)} className={inputClass} dir="ltr" />
              </div>
              <div>
                <label className="block text-xs font-normal text-gray-500 mb-1">Label (e.g. Years of Success)</label>
                <input type="text" value={active.stats?.[i]?.label || ''} onChange={(e) => setCardField(i, 'label', e.target.value)} className={inputClass} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutWhoWeAreEditor;