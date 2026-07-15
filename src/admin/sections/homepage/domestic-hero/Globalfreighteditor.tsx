import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../../components/ToggleSwitch';
import type { GlobalFreightContent, GlobalFreightCard } from './global-freight-types';

type Lang = 'en' | 'ar';

const GlobalFreightEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<GlobalFreightContent>('global_freight_section');

  const [lang, setLang] = useState<Lang>('en');

  if (loading) return <p className="text-sm text-gray-400">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setHeading = (value: string) =>
    setActive((prev) => (prev ? { ...prev, heading: value } : prev));

  const setCard = (index: 0 | 1, field: keyof GlobalFreightCard, value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const cards = [...prev.cards] as [GlobalFreightCard, GlobalFreightCard];
      cards[index] = { ...cards[index], [field]: value };
      return { ...prev, cards };
    });

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 rounded-full p-1 bg-gray-100">
          {(['en', 'ar'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                lang === l ? 'bg-[#0A4D26] text-white' : 'text-gray-500'
              }`}
            >
              {l === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label={enabled ? 'Enabled' : 'Disabled'} />
          {error && <span className="text-xs text-red-500">{error}</span>}
          {dirty && !saving && <span className="text-xs text-amber-500">Unsaved changes</span>}
          <button
            onClick={save}
            disabled={saving || !dirty}
            className="bg-[#0A4D26] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#083a1d] transition-colors disabled:opacity-40"
          >
            {saving ? 'Publishing…' : 'Publish Changes'}
          </button>
        </div>
      </div>

      {!enabled && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-xl px-4 py-3">
          This section is currently hidden on the live site. Toggle it on and publish to show it again.
        </div>
      )}

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Heading</h4>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <textarea
            value={active.heading}
            onChange={(e) => setHeading(e.target.value)}
            rows={2}
            className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-[#0A4D26] outline-none text-lg resize-none"
          />
          <p className="text-[11px] text-gray-400 mt-1">Use a line break for a two-line headline.</p>
        </div>
      </section>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {([0, 1] as const).map((index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                <span className="font-medium text-gray-900 text-sm">Card {index + 1}</span>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Title — Line 1</label>
                <input
                  type="text"
                  value={active.cards[index]?.titleLine1 || ''}
                  onChange={(e) => setCard(index, 'titleLine1', e.target.value)}
                  className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Title — Line 2</label>
                <input
                  type="text"
                  value={active.cards[index]?.titleLine2 || ''}
                  onChange={(e) => setCard(index, 'titleLine2', e.target.value)}
                  className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Description</label>
                <textarea
                  value={active.cards[index]?.description || ''}
                  onChange={(e) => setCard(index, 'description', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm h-20 focus:border-[#0A4D26] outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Button Label</label>
                <input
                  type="text"
                  value={active.cards[index]?.buttonLabel || ''}
                  onChange={(e) => setCard(index, 'buttonLabel', e.target.value)}
                  className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GlobalFreightEditor;