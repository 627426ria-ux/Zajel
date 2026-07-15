import React, { useState } from 'react';
import { useBilingualSectionContent } from '../../hooks/useBilingualSectionContent';
import ToggleSwitch from '../../components/ToggleSwitch';
import type { FaqAccordionContent, FaqCategory, FaqQuestion } from './types';

const inputClass = "w-full bg-[#FAFAF8] border border-[#E8E7E2] rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#1C2620] outline-none focus:bg-white focus:border-[#0A4D26] focus:ring-1 focus:ring-[#0A4D26]/15 transition-all placeholder:text-gray-400 placeholder:font-light";
const labelClass = "block text-[13px] font-normal text-gray-500 mb-1.5";

const FaqAccordionEditor: React.FC = () => {
  const { contentEn, contentAr, setContentEn, setContentAr, enabled, setEnabled, loading, saving, error, dirty, save } =
    useBilingualSectionContent<FaqAccordionContent>('faqs_accordion');

  const [lang, setLang] = useState<'en' | 'ar'>('en');

  if (loading) return <p className="text-sm text-gray-400 font-light">Loading section...</p>;
  if (!contentEn || !contentAr) return <p className="text-sm text-red-500 font-light">Could not load this section.</p>;

  const active = lang === 'en' ? contentEn : contentAr;
  const setActive = lang === 'en' ? setContentEn : setContentAr;

  // Sync array structure changes (adds/removes) across both languages
  const syncStructure = (updater: (prev: FaqAccordionContent | null) => FaqAccordionContent | null) => {
    setContentEn(updater);
    setContentAr(updater);
  };

  // --- Field Updaters (Updates only active language) ---
  const setField = (field: keyof FaqAccordionContent, value: string) => setActive(prev => (prev ? { ...prev, [field]: value } : prev));
  
  const updateCategoryTitle = (catIdx: number, title: string) => {
    setActive(prev => {
      if (!prev) return prev;
      const cats = JSON.parse(JSON.stringify(prev.categories || []));
      cats[catIdx].title = title;
      return { ...prev, categories: cats };
    });
  };

  const updateQuestion = (catIdx: number, qIdx: number, field: keyof FaqQuestion, value: string) => {
    setActive(prev => {
      if (!prev) return prev;
      const cats = JSON.parse(JSON.stringify(prev.categories || []));
      cats[catIdx].questions[qIdx][field] = value;
      return { ...prev, categories: cats };
    });
  };

  // --- Structural Updaters (Updates BOTH languages so they don't break) ---
  const addCategory = () => syncStructure(prev => {
    if (!prev) return prev;
    return { ...prev, categories: [...(prev.categories || []), { title: '', questions: [{ question: '', answer: '' }] }] };
  });

  const removeCategory = (catIdx: number) => syncStructure(prev => {
    if (!prev) return prev;
    const cats = [...(prev.categories || [])];
    cats.splice(catIdx, 1);
    return { ...prev, categories: cats };
  });

  const addQuestion = (catIdx: number) => syncStructure(prev => {
    if (!prev) return prev;
    const cats = JSON.parse(JSON.stringify(prev.categories || []));
    cats[catIdx].questions.push({ question: '', answer: '' });
    return { ...prev, categories: cats };
  });

  const removeQuestion = (catIdx: number, qIdx: number) => syncStructure(prev => {
    if (!prev) return prev;
    const cats = JSON.parse(JSON.stringify(prev.categories || []));
    cats[catIdx].questions.splice(qIdx, 1);
    return { ...prev, categories: cats };
  });

  return (
    <div className="space-y-6">
      {/* HEADER CONTROLS */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 rounded-full p-1 bg-[#F0F5F1]">
          {(['en', 'ar'] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${lang === l ? 'bg-[#0A4D26] text-white' : 'text-gray-500'}`}>
              {l === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ToggleSwitch checked={enabled} onChange={setEnabled} label={enabled ? 'Enabled' : 'Disabled'} />
          {error && <span className="text-xs text-red-500">{error}</span>}
          {dirty && !saving && <span className="text-xs text-amber-600">Unsaved changes</span>}
          <button onClick={save} disabled={saving || !dirty} className="bg-[#0A4D26] text-white px-5 py-2 rounded-full text-sm hover:bg-[#073A1D] disabled:opacity-40">
            {saving ? 'Publishing…' : 'Publish Changes'}
          </button>
        </div>
      </div>

      {/* HEADER TEXT */}
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="bg-white rounded-xl border border-[#E8E7E2] p-5 space-y-4">
          <div>
            <label className={labelClass}>Main Heading</label>
            <textarea value={active.heading || ''} onChange={(e) => setField('heading', e.target.value)} rows={2} className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={active.description || ''} onChange={(e) => setField('description', e.target.value)} rows={3} className={`${inputClass} resize-none`} />
          </div>
        </div>
      </section>

      {/* FAQ REPEATER */}
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className="space-y-6">
        <div className="flex justify-between items-end">
          <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider">FAQ Categories <span className="normal-case text-gray-300">— {lang === 'en' ? 'English' : 'Arabic'}</span></h4>
          <button onClick={addCategory} className="text-xs font-medium text-[#0A4D26] bg-[#0A4D26]/10 px-3 py-1.5 rounded-md hover:bg-[#0A4D26]/20 transition-colors">
            + Add Category
          </button>
        </div>

        {active.categories?.map((category: FaqCategory, catIdx: number) => (
          <div key={catIdx} className="bg-white rounded-xl border border-gray-300 p-5 shadow-sm">
            
            {/* Category Header */}
            <div className="flex justify-between items-start gap-4 mb-4 border-b border-gray-100 pb-4">
              <div className="flex-1">
                <label className={labelClass}>Category Title</label>
                <input type="text" value={category.title || ''} onChange={(e) => updateCategoryTitle(catIdx, e.target.value)} className={inputClass} placeholder="e.g. SHIPMENT & TRACKING" />
              </div>
              <button onClick={() => removeCategory(catIdx)} className="mt-7 text-xs text-red-500 hover:text-red-700">Delete Category</button>
            </div>

            {/* Questions Array */}
            <div className="space-y-4 pl-4 border-l-2 border-gray-100">
              {category.questions?.map((q: FaqQuestion, qIdx: number) => (
                <div key={qIdx} className="relative bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <button onClick={() => removeQuestion(catIdx, qIdx)} className="absolute top-3 right-3 text-[10px] uppercase font-bold text-red-400 hover:text-red-600">Remove</button>
                  <div className="space-y-3 mt-2">
                    <div>
                      <label className="block text-[11px] font-medium text-gray-500 mb-1">Question {qIdx + 1}</label>
                      <input type="text" value={q.question || ''} onChange={(e) => updateQuestion(catIdx, qIdx, 'question', e.target.value)} className={`${inputClass} text-sm`} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-gray-500 mb-1">Answer</label>
                      <textarea value={q.answer || ''} onChange={(e) => updateQuestion(catIdx, qIdx, 'answer', e.target.value)} rows={2} className={`${inputClass} text-sm resize-none`} />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={() => addQuestion(catIdx)} className="text-xs text-gray-500 hover:text-[#0A4D26] font-medium py-2">
                + Add Question to {category.title || 'this category'}
              </button>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqAccordionEditor;