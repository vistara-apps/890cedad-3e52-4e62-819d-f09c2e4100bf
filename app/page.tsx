'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UploadZone } from './components/UploadZone';
import { AdVariationsDisplay } from './components/AdVariationsDisplay';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { PricingSection } from './components/PricingSection';
import type { AdVariation, Project } from './types';

export default function Home() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [adVariations, setAdVariations] = useState<AdVariation[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState<'upload' | 'review' | 'deploy' | 'monitor'>('upload');

  const handleImageUpload = async (file: File) => {
    try {
      setIsGenerating(true);
      
      // Create new project
      const project: Project = {
        projectId: Math.random().toString(36).substr(2, 9),
        userId: 'demo-user',
        productImageURL: URL.createObjectURL(file),
        generatedVariations: [],
        testAccountDetails: 'demo-account',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setCurrentProject(project);
      
      // Generate AI variations (simulated for demo)
      const variations = await generateAdVariations(project.productImageURL);
      setAdVariations(variations);
      setCurrentStep('review');
      
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAdVariations = async (imageUrl: string): Promise<AdVariation[]> => {
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockVariations: AdVariation[] = [
      {
        variationId: '1',
        projectId: currentProject?.projectId || '',
        creativeType: 'image',
        imageUrl: imageUrl,
        copy: "🔥 Revolutionary product alert! Transform your daily routine with this game-changing innovation. Limited time offer - don't miss out! #ProductLaunch #Innovation",
        platformTarget: 'instagram',
        performanceMetrics: {
          views: 12450,
          clicks: 324,
          engagement: 2.6,
        },
        postedAt: new Date(),
      },
      {
        variationId: '2',
        projectId: currentProject?.projectId || '',
        creativeType: 'image',
        imageUrl: imageUrl,
        copy: "This changes everything ✨ See why thousands are switching. Your solution is here! Get yours today 👆",
        platformTarget: 'tiktok',
        performanceMetrics: {
          views: 8930,
          clicks: 156,
          engagement: 1.8,
        },
        postedAt: new Date(),
      },
      {
        variationId: '3',
        projectId: currentProject?.projectId || '',
        creativeType: 'image',
        imageUrl: imageUrl,
        copy: "Finally! The product we've all been waiting for. Premium quality meets affordability. Order now while supplies last! 🚀",
        platformTarget: 'instagram',
        performanceMetrics: {
          views: 15670,
          clicks: 445,
          engagement: 2.8,
        },
        postedAt: new Date(),
      },
    ];
    
    return mockVariations;
  };

  const handleDeployVariations = async (selectedVariations: AdVariation[]) => {
    setIsGenerating(true);
    // Simulate deployment
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCurrentStep('monitor');
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-screen-lg">
        {currentStep === 'upload' && (
          <>
            <Hero />
            <UploadZone
              onImageUpload={handleImageUpload}
              isGenerating={isGenerating}
            />
            <PricingSection />
          </>
        )}
        
        {currentStep === 'review' && adVariations.length > 0 && (
          <AdVariationsDisplay
            variations={adVariations}
            onDeploy={handleDeployVariations}
            isDeploying={isGenerating}
          />
        )}
        
        {currentStep === 'monitor' && (
          <PerformanceDashboard variations={adVariations} />
        )}
      </main>
    </div>
  );
}
