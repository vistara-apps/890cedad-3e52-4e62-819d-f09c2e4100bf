'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Eye, MousePointer, Activity, X } from 'lucide-react';
import { StatsCard } from './StatsCard';
import type { AdVariation } from '../types';

interface PerformanceDashboardProps {
  variations: AdVariation[];
}

export function PerformanceDashboard({ variations }: PerformanceDashboardProps) {
  const [selectedMetric, setSelectedMetric] = useState<'views' | 'clicks' | 'engagement'>('views');

  // Mock engagement data over time
  const engagementData = [
    { name: 'Mon', engagement: 2.1 },
    { name: 'Tue', engagement: 2.3 },
    { name: 'Wed', engagement: 1.8 },
    { name: 'Thu', engagement: 2.7 },
    { name: 'Fri', engagement: 2.4 },
    { name: 'Sat', engagement: 3.1 },
    { name: 'Sun', engagement: 2.9 },
  ];

  // Calculate totals
  const totalViews = variations.reduce((sum, v) => sum + (v.performanceMetrics?.views || 0), 0);
  const totalClicks = variations.reduce((sum, v) => sum + (v.performanceMetrics?.clicks || 0), 0);
  const avgEngagement = variations.reduce((sum, v) => sum + (v.performanceMetrics?.engagement || 0), 0) / variations.length;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-headline text-white mb-4">
          Performance Dashboard
        </h2>
        <p className="text-purple-200">
          Monitor the performance of your deployed ad variations
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Views"
          value={totalViews.toLocaleString()}
          icon={<Eye className="w-6 h-6" />}
          variant="views"
          trend="+12.5%"
        />
        <StatsCard
          title="Total Clicks"
          value={totalClicks.toLocaleString()}
          icon={<MousePointer className="w-6 h-6" />}
          variant="clicks"
          trend="+8.3%"
        />
        <StatsCard
          title="Avg Engagement"
          value={`${avgEngagement.toFixed(1)}%`}
          icon={<Activity className="w-6 h-6" />}
          variant="engagementRate"
          trend="+5.2%"
        />
      </div>

      {/* Performance Chart */}
      <div className="card bg-purple-900/20 border-purple-400/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Engagement Trends</h3>
          <button className="text-purple-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis dataKey="name" stroke="#c4b5fd" />
              <YAxis stroke="#c4b5fd" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(139, 92, 246, 0.1)', 
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Individual Variation Performance */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Individual Variation Performance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Views and Clicks */}
          <div className="card bg-blue-600/10 border-blue-400/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Growth Hack Views</h4>
                <p className="text-blue-200 text-sm">x</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">1,371.6.5</p>
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="card bg-purple-700/20 border-purple-500/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Views/HR</h4>
                <p className="text-purple-200 text-sm">2x</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">1.9%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <button className="btn-primary inline-flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Generate More Variations
        </button>
        
        <p className="text-purple-200 text-sm">
          Ready to create more high-performing ad variations?
        </p>
      </div>
    </div>
  );
}
