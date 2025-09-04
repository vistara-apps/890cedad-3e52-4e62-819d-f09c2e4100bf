'use client';

import { useState } from 'react';
import { AdPreviewCard } from './AdPreviewCard';
import { Rocket, CheckCircle } from 'lucide-react';
import type { AdVariation } from '../types';

interface AdVariationsDisplayProps {
  variations: AdVariation[];
  onDeploy: (selectedVariations: AdVariation[]) => void;
  isDeploying: boolean;
}

export function AdVariationsDisplay({ variations, onDeploy, isDeploying }: AdVariationsDisplayProps) {
  const [selectedVariations, setSelectedVariations] = useState<string[]>(
    variations.map(v => v.variationId)
  );

  const handleVariationToggle = (variationId: string) => {
    setSelectedVariations(prev =>
      prev.includes(variationId)
        ? prev.filter(id => id !== variationId)
        : [...prev, variationId]
    );
  };

  const handleDeploy = () => {
    const selected = variations.filter(v => selectedVariations.includes(v.variationId));
    onDeploy(selected);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-headline text-white mb-4">
          Review Generated Ad Variations
        </h2>
        <p className="text-purple-200 mb-6">
          Select the variations you want to deploy to your test accounts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variations.map((variation) => (
          <div key={variation.variationId} className="relative">
            <AdPreviewCard
              variation={variation}
              isSelected={selectedVariations.includes(variation.variationId)}
              onToggle={() => handleVariationToggle(variation.variationId)}
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleDeploy}
          disabled={selectedVariations.length === 0 || isDeploying}
          className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeploying ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Deploying to Test Accounts...
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5" />
              Deploy {selectedVariations.length} Variation{selectedVariations.length !== 1 ? 's' : ''}
            </>
          )}
        </button>
        
        <p className="text-purple-200 text-sm mt-4">
          Selected variations will be posted to your connected test accounts
        </p>
      </div>
    </div>
  );
}
