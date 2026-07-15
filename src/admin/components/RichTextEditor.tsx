import React, { useRef, useState } from 'react';
import { useEditor, EditorContent, ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { supabase } from '../../supabase'; // adjust path if needed

interface Props {
  value: string;
  onChange: (html: string) => void;
}

// ---- Custom image node with hover delete button ----
const ImageWithDelete = Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});

function ImageNodeView({ node, deleteNode }: any) {
  return (
    <NodeViewWrapper className="relative inline-block group/img my-3 max-w-full">
      <img
        src={node.attrs.src}
        alt={node.attrs.alt || ''}
        className="rounded-xl max-w-full block"
      />
      <button
        type="button"
        onClick={deleteNode}
        title="Remove image"
        className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-red-500"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </NodeViewWrapper>
  );
}

// ---- Icons ----
const Ic = {
  Bold: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z"/></svg>,
  Italic: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>,
  Underline: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 4v6a6 6 0 0012 0V4"/><line x1="4" y1="21" x2="20" y2="21"/></svg>,
  Strike: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M16 4.5c-.7-1-2-1.7-4-1.7-3 0-4.5 1.5-4.5 3.2 0 4 9 2 9 6.3 0 2-2 3.2-4.5 3.2-2.5 0-3.7-1-4.3-2"/><line x1="4" y1="12" x2="20" y2="12"/></svg>,
  Link: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07L11.5 4.5"/><path d="M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 007.07 7.07L12.5 19.5"/></svg>,
  Quote: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 7a4 4 0 00-4 4v6h6v-6H6a2 2 0 012-2zM17 7a4 4 0 00-4 4v6h6v-6h-3a2 2 0 012-2z"/></svg>,
  Code: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Bullet: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.2" fill="currentColor" stroke="none"/></svg>,
  Numbered: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><text x="2" y="8.5" fontSize="7.5" fill="currentColor" stroke="none">1</text><text x="2" y="14.5" fontSize="7.5" fill="currentColor" stroke="none">2</text><text x="2" y="20.5" fontSize="7.5" fill="currentColor" stroke="none">3</text></svg>,
  Image: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
};

const ToolBtn: React.FC<{ active?: boolean; onClick: () => void; title: string; children: React.ReactNode }> = ({ active, onClick, title, children }) => (
  <button
    type="button"
    title={title}
    onClick={onClick}
    className={`h-8 w-8 flex items-center justify-center rounded-md transition-colors ${
      active ? 'bg-[#EAF1E7] text-[#0A4D26]' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
    }`}
  >
    {children}
  </button>
);

const ToolTextBtn: React.FC<{ active?: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`h-8 px-2.5 flex items-center justify-center rounded-md text-[13px] font-medium transition-colors ${
      active ? 'bg-[#EAF1E7] text-[#0A4D26]' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {children}
  </button>
);

const Sep = () => <div className="w-px h-5 bg-gray-200 mx-1 self-center shrink-0" />;

const RichTextEditor: React.FC<Props> = ({ value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      ImageWithDelete.configure({ HTMLAttributes: { class: 'rounded-xl' } }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[#0A4D26] underline' } }),
      Placeholder.configure({ placeholder: 'Write your post content here…' }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[220px] px-4 py-3.5',
      },
    },
  });

  const handleImagePick = () => fileInputRef.current?.click();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
      alert('Unsupported file type. Use JPG, PNG, WEBP or GIF.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File too large. Max 5MB.');
      return;
    }
    try {
      setUploading(true);
      const ext = file.name.split('.').pop();
      const path = `blog/content/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from('cms-uploads').upload(path, file);
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from('cms-uploads').getPublicUrl(path);
      editor.chain().focus().setImage({ src: publicUrl, alt: file.name }).run();
    } catch (err) {
      console.error(err);
      alert('Image upload failed. Try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const openLinkDialog = () => {
    if (!editor) return;
    setLinkUrl(editor.getAttributes('link').href || '');
    setLinkOpen(true);
  };

  const applyLink = () => {
    if (!editor) return;
    if (!linkUrl.trim()) editor.chain().focus().unsetLink().run();
    else editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.trim() }).run();
    setLinkOpen(false);
    setLinkUrl('');
  };

  if (!editor) return null;

  return (
    <div className="border border-[#E5E5E0] rounded-xl overflow-hidden bg-white">
      <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleFileChange} className="hidden" />

      <div className="flex flex-wrap items-center gap-0.5 border-b border-[#E5E5E0] bg-[#FAFAF8] px-3 py-2">
        <ToolBtn title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><Ic.Bold /></ToolBtn>
        <ToolBtn title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><Ic.Italic /></ToolBtn>
        <ToolBtn title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><Ic.Underline /></ToolBtn>
        <ToolBtn title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><Ic.Strike /></ToolBtn>
        <ToolBtn title="Insert link" active={editor.isActive('link')} onClick={openLinkDialog}><Ic.Link /></ToolBtn>

        <Sep />

        <ToolTextBtn active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Heading</ToolTextBtn>
        <ToolTextBtn active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>Subheading</ToolTextBtn>

        <Sep />

        <ToolBtn title="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Ic.Quote /></ToolBtn>
        <ToolBtn title="Code" active={editor.isActive('code')} onClick={() => editor.chain().focus().toggleCode().run()}><Ic.Code /></ToolBtn>
        <ToolBtn title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}><Ic.Bullet /></ToolBtn>
        <ToolBtn title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}><Ic.Numbered /></ToolBtn>

        <Sep />

        <ToolBtn title="Insert image" onClick={handleImagePick}>
          {uploading ? <span className="text-[9px] font-semibold">…</span> : <Ic.Image />}
        </ToolBtn>
      </div>

      {linkOpen && (
        <div className="border-b border-[#E5E5E0] bg-[#FAFAF8] px-3 py-2 flex items-center gap-2">
          <input
            type="text"
            autoFocus
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') applyLink(); if (e.key === 'Escape') setLinkOpen(false); }}
            placeholder="https://example.com"
            className="flex-1 text-sm bg-white border border-[#E5E5E0] rounded-md px-3 py-1.5 outline-none focus:border-[#0A4D26]"
          />
          <button onClick={applyLink} className="text-xs font-semibold bg-[#0A4D26] text-white px-3.5 py-1.5 rounded-md hover:bg-[#0A4D26]/90">
            {linkUrl.trim() ? 'Apply' : 'Remove'}
          </button>
          <button onClick={() => setLinkOpen(false)} className="text-xs text-gray-400 hover:text-gray-600 px-1.5">Cancel</button>
        </div>
      )}

      <EditorContent editor={editor} />

      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #B8B8B0;
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror h2 { font-size: 1.25rem; font-weight: 600; color: #064423; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .ProseMirror h3 { font-size: 1.05rem; font-weight: 600; color: #064423; margin-top: 1rem; margin-bottom: 0.4rem; }
        .ProseMirror blockquote { border-left: 3px solid #36B936; background: #EAF1E7; padding: 0.65rem 1rem; border-radius: 0.5rem; font-style: italic; margin: 0.75rem 0; color: #064423; }
        .ProseMirror code { background: #F0F0EC; color: #0A4D26; padding: 0.15rem 0.4rem; border-radius: 0.3rem; font-size: 0.85em; }
        .ProseMirror ul { list-style: disc; padding-left: 1.25rem; }
        .ProseMirror ol { list-style: decimal; padding-left: 1.25rem; }
        .ProseMirror a { color: #0A4D26; text-decoration: underline; }
        .ProseMirror p { margin-bottom: 0.75rem; line-height: 1.7; }
      `}</style>
    </div>
  );
};

export default RichTextEditor;