import React, { useState } from 'react';
import { supabase } from '../../supabase'; // src/admin/components -> src/supabase.ts

const MAX_SIZE_MB = 3;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

interface Props {
  label: string;
  currentUrl?: string;
  folder: string;
  onUploaded: (publicUrl: string) => void;
  previewClassName?: string;
}

const ImageUploader: React.FC<Props> = ({ label, currentUrl, folder, onUploaded, previewClassName }) => {
  const [uploading, setUploading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setLocalError('Unsupported file type. Use JPG, PNG, WEBP or SVG.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setLocalError(`File too large. Max ${MAX_SIZE_MB}MB.`);
      return;
    }

    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const filePath = `${folder}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('cms-uploads')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('cms-uploads')
        .getPublicUrl(filePath);

      onUploaded(publicUrl);
    } catch (err) {
      console.error('Upload failed:', err);
      setLocalError('Upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-xs text-gray-500 mb-2">{label}</label>
      {currentUrl && (
        <img src={currentUrl} alt="preview" className={previewClassName || 'h-16 w-16 object-contain bg-gray-50 rounded border mb-3'} />
      )}
      <input
        type="file"
        accept={ALLOWED_TYPES.join(',')}
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-xs text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer transition-colors"
      />
      {uploading && <p className="text-xs text-gray-400 mt-1">Uploading...</p>}
      {localError && <p className="text-xs text-red-500 mt-1">{localError}</p>}
    </div>
  );
};

export default ImageUploader;