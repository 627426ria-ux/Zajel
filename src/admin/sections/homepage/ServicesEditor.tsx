import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import ImageUploader from '../../components/ImageUploader';
import type { ServicesContent } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all";
const EMPTY_CARD: ServicesContent['cards'][number] = { title: '', desc: '', image_url: '', path: '' };
const ICON_LABELS = ['Truck', 'Plane', 'Ship', 'Box'];

const ServicesEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, dirty, save } =
    useBilingualSectionContent<ServicesContent>('home_services');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading || !contentEn || !contentAr) return <p className="text-sm text-gray-400">Loading...</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  const setField = (field: keyof ServicesContent, value: string) =>
    setActive(prev => prev ? { ...prev, [field]: value } : prev);

  // title/desc are per-language; image_url/path are shared (same image & link regardless of language)
  const setCardTextField = (index: number, key: 'title' | 'desc', value: string) => {
    setActive(prev => {
      if (!prev) return prev;
      const cards = [...(prev.cards || [])];
      cards[index] = { ...(cards[index] || EMPTY_CARD), [key]: value };
      return { ...prev, cards };
    });
  };

  const setCardSharedField = (index: number, key: 'image_url' | 'path', value: string) => {
    const apply = (prev: ServicesContent | null) => {
      if (!prev) return prev;
      const cards = [...(prev.cards || [])];
      cards[index] = { ...(cards[index] || EMPTY_CARD), [key]: value };
      return { ...prev, cards };
    };
    setContentEn(apply);
    setContentAr(apply);
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

      <div className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div><label className="text-xs text-gray-500 block mb-1">Eyebrow</label><input type="text" value={active.eyebrow || ''} onChange={e => setField('eyebrow', e.target.value)} className={inputClass} /></div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Heading (HTML allowed, e.g. for colored word)</label>
          <textarea value={active.heading || ''} onChange={e => setField('heading', e.target.value)} rows={2} className={inputClass} />
        </div>
        <div><label className="text-xs text-gray-500 block mb-1">Description</label><textarea value={active.description || ''} onChange={e => setField('description', e.target.value)} rows={3} className={inputClass} /></div>
      </div>

      <div className="space-y-5">
        <h4 className="text-xs font-bold text-gray-400 uppercase px-1">Service Cards (4) — icons fixed in code</h4>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-[#E8E7E2] space-y-4">
            <p className="text-xs font-semibold text-gray-400">Card {i + 1} — {ICON_LABELS[i]} icon</p>

            <ImageUploader
              label="Card Image"
              currentUrl={contentEn.cards?.[i]?.image_url}
              folder="home-services"
              onUploaded={(url) => setCardSharedField(i, 'image_url', url)}
            />

            <div>
              <label className="text-xs text-gray-500 block mb-1">Link URL</label>
              <input type="text" value={contentEn.cards?.[i]?.path || ''} onChange={e => setCardSharedField(i, 'path', e.target.value)} className={inputClass} placeholder="/domestic-courier" />
            </div>

            <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <label className="text-xs text-gray-500 block mb-1">Title</label>
              <input type="text" value={active.cards?.[i]?.title || ''} onChange={e => setCardTextField(i, 'title', e.target.value)} className={inputClass} />
              <label className="text-xs text-gray-500 block mb-1 mt-2">Description</label>
              <textarea value={active.cards?.[i]?.desc || ''} onChange={e => setCardTextField(i, 'desc', e.target.value)} rows={2} className={inputClass} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesEditor;