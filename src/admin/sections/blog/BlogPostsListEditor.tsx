import React, { useState } from 'react';
import { useBlogPosts } from '../../hooks/useBlogPosts';

interface Props {
  onSelectPost: (id: string) => void;
}

const BlogPostsListEditor: React.FC<Props> = ({ onSelectPost }) => {
  const { posts, loading, error, createPost, deletePost } = useBlogPosts();
  const [newSlug, setNewSlug] = useState('');
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    if (!newSlug.trim()) return;
    setCreating(true);
    try {
      const post = await createPost(newSlug.trim().toLowerCase().replace(/\s+/g, '-'));
      setNewSlug('');
      onSelectPost(post.id);
    } catch (e: any) {
      alert(e.message || 'Failed to create post');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Delete "${title || 'Untitled'}"? This can't be undone.`)) return;
    try {
      await deletePost(id);
    } catch (e: any) {
      alert(e.message || 'Failed to delete post');
    }
  };

  if (loading) return <p className="text-sm text-gray-400">Loading posts...</p>;
  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-light text-gray-900 tracking-tight">Blog Posts</h1>
        <p className="text-sm text-gray-400 mt-1">Manage all blog posts</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-3">
        <input
          type="text"
          value={newSlug}
          onChange={(e) => setNewSlug(e.target.value)}
          placeholder="new-post-slug"
          className="flex-1 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#0A4D26]"
        />
        <button
          onClick={handleCreate}
          disabled={creating || !newSlug.trim()}
          className="bg-[#36B936] text-[#05361A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2fa62f] transition-colors disabled:opacity-40"
        >
          {creating ? 'Creating...' : '+ New Post'}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Updated</th>
              <th className="px-6 py-4" />
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-400">No posts yet.</td></tr>
            ) : posts.map((post) => (
              <tr key={post.id} className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 cursor-pointer" onClick={() => onSelectPost(post.id)}>
                  {post.content_en?.title || <span className="text-gray-300 italic">Untitled</span>}
                </td>
                <td className="px-6 py-4 text-gray-500">{post.category}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    post.status === 'published' ? 'bg-green-50 text-green-700' :
                    post.status === 'scheduled' ? 'bg-amber-50 text-amber-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-xs">
                  {new Date(post.updated_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button onClick={() => onSelectPost(post.id)} className="text-xs text-green-700 font-medium hover:underline">Edit</button>
                  <button onClick={() => handleDelete(post.id, post.content_en?.title)} className="text-xs text-red-500 font-medium hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogPostsListEditor;