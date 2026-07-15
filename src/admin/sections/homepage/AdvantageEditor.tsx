import React from 'react';
import { useSectionContent } from '../../hooks/useSectionContent';
import ImageUploader from '../../components/ImageUploader';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { AdvantageContent, AdvantageCard } from './types';

const AdvantageEditor: React.FC = () => {
  const { content, setContent, enabled, setEnabled, loading, saving, error, dirty, save } =
    useSectionContent<AdvantageContent>('advantage_section');

  if (loading) return <p className="text-sm text-gray-400">Loading section...</p>;
  if (!content) return <p className="text-sm text-red-500">Could not load this section.</p>;

  const setField = (field: keyof AdvantageContent, value: string) =>
    setContent((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setCard = (key: keyof AdvantageContent['cards'], field: keyof AdvantageCard, value: string) =>
    setContent((prev) =>
      prev ? { ...prev, cards: { ...prev.cards, [key]: { ...prev.cards[key], [field]: value } } } : prev
    );

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="flex items-center justify-end gap-4">
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

      {!enabled && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-xl px-4 py-3">
          This section is currently hidden on the live site. Toggle it on and publish to show it again.
        </div>
      )}

      <section>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Header</h4>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Heading</label>
            <input
              type="text"
              value={content.heading}
              onChange={(e) => setField('heading', e.target.value)}
              className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-[#0A4D26] outline-none transition-colors text-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Subtext</label>
            <textarea
              value={content.subtext}
              onChange={(e) => setField('subtext', e.target.value)}
              className="w-full border border-gray-200 rounded-xl p-3 bg-transparent focus:border-[#0A4D26] outline-none transition-colors min-h-[90px] resize-none text-sm"
            />
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Grid Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(['coverage', 'handling', 'tracking', 'pricing'] as const).map((key) => (
            <div key={key} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                <span className="font-medium text-gray-900 capitalize text-sm">{key}</span>
              </div>
              <input
                type="text"
                value={content.cards[key]?.title || ''}
                onChange={(e) => setCard(key, 'title', e.target.value)}
                placeholder="Card Title"
                className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
              />
              <textarea
                value={content.cards[key]?.desc || ''}
                onChange={(e) => setCard(key, 'desc', e.target.value)}
                placeholder="Card Description"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm h-20 focus:border-[#0A4D26] outline-none resize-none"
              />
              {(key === 'coverage' || key === 'handling') && (
                <ImageUploader
                  label={key === 'coverage' ? 'Globe Image' : 'Background Image'}
                  currentUrl={content.cards[key]?.image_url}
                  folder={`advantage-section/${key}`}
                  onUploaded={(url) => setCard(key, 'image_url', url)}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdvantageEditor;