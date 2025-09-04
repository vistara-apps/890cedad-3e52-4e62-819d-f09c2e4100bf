'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image, Loader2 } from 'lucide-react';

interface UploadZoneProps {
  onImageUpload: (file: File) => void;
  isGenerating: boolean;
}

export function UploadZone({ onImageUpload, isGenerating }: UploadZoneProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp']
    },
    multiple: false,
    disabled: isGenerating
  });

  if (isGenerating) {
    return (
      <div className="card text-center py-16 bg-purple-900/20 border-purple-400/30">
        <Loader2 className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-spin" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Generating AI Ad Variations
        </h3>
        <p className="text-purple-200">
          Our AI is creating multiple ad creatives optimized for different platforms...
        </p>
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-headline text-white mb-4">
          Upload Your Product Image
        </h2>
        <p className="text-purple-200">
          Upload a product image and let our AI generate multiple ad variations for TikTok and Instagram
        </p>
      </div>
      
      <div
        {...getRootProps()}
        className={`card border-2 border-dashed cursor-pointer transition-all ${
          isDragActive
            ? 'border-purple-400 bg-purple-600/10'
            : 'border-purple-300/50 hover:border-purple-400 bg-purple-900/10'
        }`}
      >
        <input {...getInputProps()} />
        
        <div className="text-center py-12">
          {uploadedImage ? (
            <div className="space-y-4">
              <img
                src={uploadedImage}
                alt="Uploaded product"
                className="max-w-xs max-h-48 mx-auto rounded-lg shadow-lg"
              />
              <p className="text-purple-200">
                Image uploaded successfully! Click to change or drag another image.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isDragActive ? 'Drop your image here' : 'Upload Product Image'}
                </h3>
                <p className="text-purple-200 mb-4">
                  Drag and drop your product image or click to browse
                </p>
                <p className="text-sm text-purple-300">
                  Supports JPG, PNG, WebP up to 10MB
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
