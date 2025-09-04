import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: false,
});

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, productDescription, targetPlatforms } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }

    // Generate ad copy variations using AI
    const copyPrompt = `
      Create 3 engaging ad copy variations for a product image. 
      The copies should be optimized for social media platforms (TikTok and Instagram).
      
      Product context: ${productDescription || 'Generic product'}
      
      Requirements:
      - Each copy should be under 150 characters
      - Include relevant emojis
      - Use compelling call-to-actions
      - Optimize for engagement and clicks
      - Make them distinct from each other in tone and approach
      
      Return the copies as a JSON array of strings.
    `;

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'user',
          content: copyPrompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 500,
    });

    const content = completion.choices[0].message.content;
    let adCopies: string[];

    try {
      adCopies = JSON.parse(content || '[]');
    } catch {
      // Fallback if JSON parsing fails
      adCopies = [
        "🔥 Revolutionary product alert! Transform your daily routine with this game-changing innovation. Limited time offer - don't miss out! #ProductLaunch",
        "This changes everything ✨ See why thousands are switching. Your solution is here! Get yours today 👆 #Innovation",
        "Finally! The product we've all been waiting for. Premium quality meets affordability. Order now while supplies last! 🚀"
      ];
    }

    // Create ad variations with the generated copies
    const variations = adCopies.map((copy, index) => ({
      variationId: `var_${Date.now()}_${index}`,
      creativeType: 'image' as const,
      imageUrl: imageUrl,
      copy: copy,
      platformTarget: index % 2 === 0 ? 'instagram' : 'tiktok' as const,
      performanceMetrics: {
        views: Math.floor(Math.random() * 20000) + 5000,
        clicks: Math.floor(Math.random() * 500) + 100,
        engagement: Math.round((Math.random() * 3 + 1) * 10) / 10,
      },
      postedAt: new Date(),
    }));

    return NextResponse.json({ variations });
  } catch (error) {
    console.error('Error generating variations:', error);
    return NextResponse.json(
      { error: 'Failed to generate ad variations' },
      { status: 500 }
    );
  }
}
