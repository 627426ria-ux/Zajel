import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../../hooks/useBilingualSectionContent';
import ImageUploader from '../../../components/ImageUploader';
import ToggleSwitch from '../../../components/ToggleSwitch';
import type { ServiceDetailsContent } from './service-details-types';

type Lang = 'en' | 'ar';

const ServiceDetailsEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<ServiceDetailsContent>('service_details_section');

  const [lang, setLang] = useState<Lang>('en');

  if (loading) return <p className="text-sm text-gray-400">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof ServiceDetailsContent, value: string) =>
    setActive((prev) => (prev ? { ...prev, [field]: value } : prev));

  const setSharedField = (field: keyof ServiceDetailsContent, value: string) => {
    setContentEn((prev) => (prev ? { ...prev, [field]: value } : prev));
    setContentAr((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const setListItem = (index: number, value: string) =>
    setActive((prev) => {
      if (!prev) return prev;
      const listItems = [...prev.listItems];
      listItems[index] = value;
      return { ...prev, listItems };
    });

  const addListItem = () =>
    setActive((prev) => (prev ? { ...prev, listItems: [...prev.listItems, ''] } : prev));

  const removeListItem = (index: number) =>
    setActive((prev) =>
      prev ? { ...prev, listItems: prev.listItems.filter((_, i) => i !== index) } : prev
    );

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

      <section>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4 flex items-center gap-2">
          Image <span className="text-gray-300 font-normal lowercase">(shared across languages)</span>
        </h4>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <ImageUploader
            label="Handover / Service Image"
            currentUrl={contentEn.image_url}
            folder="service-details"
            onUploaded={(url) => setSharedField('image_url', url)}
            previewClassName="h-28 w-full max-w-sm object-cover rounded-xl mb-2 border"
          />
        </div>
      </section>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Call to Action</h4>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Heading</label>
            <input
              type="text"
              value={active.ctaHeading}
              onChange={(e) => setField('ctaHeading', e.target.value)}
              className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-[#0A4D26] outline-none text-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Description</label>
            <textarea
              value={active.ctaDescription}
              onChange={(e) => setField('ctaDescription', e.target.value)}
              className="w-full border border-gray-200 rounded-xl p-3 bg-transparent focus:border-[#0A4D26] outline-none min-h-[80px] resize-none text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Button 1 Label</label>
              <input
                type="text"
                value={active.ctaButton1Label}
                onChange={(e) => setField('ctaButton1Label', e.target.value)}
                className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
              />
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 mt-3">Button 1 Link</label>
              <input
                type="text"
                value={active.ctaButton1Link}
                onChange={(e) => setField('ctaButton1Link', e.target.value)}
                placeholder="/quotation"
                className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Button 2 Label</label>
              <input
                type="text"
                value={active.ctaButton2Label}
                onChange={(e) => setField('ctaButton2Label', e.target.value)}
                className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
              />
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 mt-3">Button 2 Link</label>
              <input
                type="text"
                value={active.ctaButton2Link}
                onChange={(e) => setField('ctaButton2Link', e.target.value)}
                placeholder="/tracking"
                className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Benefits List</h4>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">List Heading</label>
            <input
              type="text"
              value={active.listHeading}
              onChange={(e) => setField('listHeading', e.target.value)}
              className="w-full border-b border-gray-200 py-2 bg-transparent focus:border-[#0A4D26] outline-none text-lg"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">List Items</label>
            {active.listItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-[#36B936] text-lg leading-none shrink-0">•</span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setListItem(index, e.target.value)}
                  className="w-full border-b border-gray-200 py-2 text-sm focus:border-[#0A4D26] outline-none"
                />
                <button
                  onClick={() => removeListItem(index)}
                  className="text-xs text-gray-400 hover:text-red-500 shrink-0 px-2"
                  title="Remove item"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={addListItem}
              className="text-xs text-[#0A4D26] hover:text-[#083a1d] font-medium mt-1"
            >
              + Add item
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsEditor;