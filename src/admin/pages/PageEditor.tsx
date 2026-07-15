import React from 'react';
import { CMS_SECTIONS } from '../config/sections';
import type { CmsSection } from '../config/sections';
import CollapsibleSection from '../components/CollapsibleSection';
import PageSeoPanel from '../components/PageSeoPanel';
import { usePageMeta } from '../hooks/usePageMeta';

interface Props {
  pageGroup: CmsSection['group'];
  pageTitle: string;
  onBack: () => void;
}

const PageEditor: React.FC<Props> = ({ pageGroup, pageTitle, onBack }) => {
  const sections = CMS_SECTIONS.filter((s) => s.group === pageGroup);

  const { meta, setSeo, setStatus, setPublishDate, loading, saving, error, dirty, save } =
    usePageMeta(pageGroup);

  return (
    <div className="pb-20 w-full px-6 sm:px-10">
      <div className="flex items-center justify-between mb-8 pt-2">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-3"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pages
          </button>
          <h1 className="text-2xl text-gray-900 tracking-tight">{pageTitle}</h1>
          <p className="text-sm text-gray-400 mt-1">Configure content and SEO settings</p>
        </div>

        <div className="flex items-center gap-3">
          {dirty && !saving && <span className="text-xs text-amber-500">SEO unsaved</span>}
          <button
            onClick={save}
            disabled={saving || !dirty}
            className="bg-[#36B936] text-[#05361A] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2fa62f] transition-colors disabled:opacity-40"
          >
            {saving ? 'Saving…' : 'Save SEO & Publishing'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8 items-start">
        {/* LEFT: sections — fills all remaining width */}
        <div className="min-w-0">
          {sections.length === 0 ? (
            <p className="text-sm text-gray-400">No sections have been configured for this page yet.</p>
          ) : (
            sections.map((section, index) => {
              const SectionEditor = section.Editor;
              return (
                <CollapsibleSection key={section.id} title={section.label} defaultOpen={index === 0}>
                  <SectionEditor />
                </CollapsibleSection>
              );
            })
          )}
        </div>

        {/* RIGHT: SEO panel, pinned to far right edge */}
        <div className="xl:sticky xl:top-6">
          {loading ? (
            <div className="text-sm text-gray-400 py-6">Loading page settings…</div>
          ) : !meta ? (
            <div className="text-sm text-red-500 py-6">
              Could not load page settings.
              {error && <div className="text-xs text-gray-400 mt-1">{error}</div>}
            </div>
          ) : (
            <PageSeoPanel
              lang="en"
              seo={meta.seo_en}
              onSeoChange={(field, value) => setSeo('en', field, value)}
              status={meta.status}
              onStatusChange={setStatus}
              publishDate={meta.publish_date}
              onPublishDateChange={setPublishDate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageEditor;