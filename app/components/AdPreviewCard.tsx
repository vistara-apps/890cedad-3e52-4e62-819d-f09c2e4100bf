'use client';

import { useState } from 'react';
import { CheckCircle, Circle, Instagram, Music } from 'lucide-react';
import type { AdVariation } from '../types';

interface AdPreviewCardProps {
  variation: AdVariation;
  isSelected: boolean;
  onToggle: () => void;
}

export function AdPreviewCard({ variation, isSelected, onToggle }: AdPreviewCardProps) {
  const [imageError, setImageError] = useState(false);

  const getPlatformIcon = () => {
    switch (variation.platformTarget) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'tiktok':
        return <Music className="w-4 h-4" />;
      default:
        return <Instagram className="w-4 h-4" />;
    }
  };

  const getPlatformColor = () => {
    switch (variation.platformTarget) {
      case 'instagram':
        return 'bg-pink-600 text-white';
      case 'tiktok':
        return 'bg-black text-white';
      default:
        return 'bg-purple-600 text-white';
    }
  };

  return (
    <div
      className={`card cursor-pointer transition-all transform hover:scale-105 ${
        isSelected
          ? 'border-purple-400 bg-purple-600/10'
          : 'border-purple-300/30 hover:border-purple-400/50'
      }`}
      onClick={onToggle}
    >
      {/* Selection indicator */}
      <div className="absolute top-4 right-4 z-10">
        {isSelected ? (
          <CheckCircle className="w-6 h-6 text-purple-400" />
        ) : (
          <Circle className="w-6 h-6 text-purple-300/50" />
        )}
      </div>

      {/* Platform badge */}
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-4 ${getPlatformColor()}`}>
        {getPlatformIcon()}
        <span className="capitalize">{variation.platformTarget}</span>
      </div>

      {/* Image preview */}
      <div className="relative mb-4 rounded-lg overflow-hidden">
        {!imageError && variation.imageUrl ? (
          <img
            src={variation.imageUrl}
            alt={`Ad variation ${variation.variationId}`}
            className="w-full h-48 object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-purple-900/20 flex items-center justify-center">
            <div className="text-purple-400">
              <Instagram className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Image Preview</p>
            </div>
          </div>
        )}
      </div>

      {/* Copy preview */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-sm">Ad Copy:</h4>
        <p className="text-purple-100 text-sm leading-relaxed line-clamp-4">
          {variation.copy}
        </p>
      </div>

      {/* Performance metrics preview */}
      {variation.performanceMetrics && (
        <div className="mt-4 pt-4 border-t border-purple-300/20">
          <div className="flex justify-between text-xs text-purple-200">
            <span>Projected Performance</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-center">
              <p className="text-white font-semibold">{(variation.performanceMetrics.views / 1000).toFixed(1)}K</p>
              <p className="text-purple-300 text-xs">Views</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">{variation.performanceMetrics.clicks}</p>
              <p className="text-purple-300 text-xs">Clicks</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">{variation.performanceMetrics.engagement}%</p>
              <p className="text-purple-300 text-xs">Engagement</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
