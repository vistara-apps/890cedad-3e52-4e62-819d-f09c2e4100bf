export interface User {
  userId: string;
  email: string;
  subscriptionTier: 'basic' | 'pro' | 'enterprise';
  createdAt: Date;
  updatedAt: Date;
  socialAccountConnections: string[];
}

export interface Project {
  projectId: string;
  userId: string;
  productImageURL: string;
  generatedVariations: AdVariation[];
  testAccountDetails: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdVariation {
  variationId: string;
  projectId: string;
  creativeType: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  copy: string;
  platformTarget: 'tiktok' | 'instagram' | 'facebook';
  performanceMetrics?: {
    views: number;
    clicks: number;
    engagement: number;
  };
  postedAt: Date;
}

export interface PerformanceMetrics {
  views: number;
  clicks: number;
  engagement: number;
  ctr: number;
  reach: number;
}
