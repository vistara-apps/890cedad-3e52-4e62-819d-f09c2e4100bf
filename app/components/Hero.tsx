'use client';

import { TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';

export function Hero() {
  return (
    <section className="text-center py-16 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-display text-white mb-6">
          GH GrowthHacker AI
        </h1>
        
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Generate ad creative variations and optimize short copy. Instant viral variations 
          generated creation assist for omni the growth hackatlonacy.com.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-purple-600/30 text-purple-100 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Growth Ad Creative</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-700/30 text-purple-100 px-4 py-2 rounded-full">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">TikTok & ClickGuru</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/30 text-purple-100 px-4 py-2 rounded-full">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Views and Clicks</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-600/30 text-blue-100 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Engagement Clicks</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card bg-purple-600/20 border-purple-400/30">
            <h3 className="text-xl font-semibold text-white mb-2">Generated Ad Creative</h3>
            <p className="text-3xl font-bold text-white mb-1">$171,358</p>
            <p className="text-purple-200 text-sm">Creations</p>
          </div>
          
          <div className="card bg-purple-700/20 border-purple-500/30">
            <h3 className="text-xl font-semibold text-white mb-2">Generated Ad Creatives</h3>
            <p className="text-3xl font-bold text-white mb-1">$40.95</p>
            <p className="text-purple-200 text-sm">x Icon</p>
          </div>
          
          <div className="card bg-blue-600/20 border-blue-400/30">
            <h3 className="text-xl font-semibold text-white mb-2">TikTok and Instagram</h3>
            <p className="text-3xl font-bold text-white mb-1">$2.59</p>
            <p className="text-blue-200 text-sm">Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}
