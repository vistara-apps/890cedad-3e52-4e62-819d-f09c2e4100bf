'use client';

import { Check, Zap, Crown, Rocket } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Perfect for getting started with AI ad variations',
      features: [
        '50 ad generations per month',
        '1 test social account',
        'Basic analytics dashboard',
        '2 platforms (TikTok + Instagram)',
        'Email support',
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Scale your ad testing with advanced features',
      features: [
        '200 ad generations per month',
        '3 test social accounts',
        'Advanced analytics & insights',
        'All platforms supported',
        'Priority support',
        'A/B testing tools',
        'Custom brand templates',
      ],
      icon: <Crown className="w-6 h-6" />,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For agencies and large businesses',
      features: [
        'Unlimited ad generations',
        'Unlimited test accounts',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting',
        'API access',
      ],
      icon: <Rocket className="w-6 h-6" />,
      popular: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-headline text-white mb-4">
          Choose Your Growth Plan
        </h2>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Start generating high-performing ad variations and scaling your marketing efforts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card relative transition-all hover:scale-105 ${
              plan.popular
                ? 'border-purple-400 bg-purple-600/10 shadow-2xl'
                : 'border-purple-300/30 bg-purple-900/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                plan.popular ? 'bg-purple-600' : 'bg-purple-600/20'
              }`}>
                <div className={plan.popular ? 'text-white' : 'text-purple-400'}>
                  {plan.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-purple-200 text-sm mb-4">{plan.description}</p>
              
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-purple-200 ml-1">{plan.period}</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-purple-100 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                plan.popular
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 border border-purple-400/30'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-purple-300 text-sm">
          All plans include 7-day free trial • No setup fees • Cancel anytime
        </p>
      </div>
    </section>
  );
}
