export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects just getting started.',
    priceMonthly: 15,
    priceYearly: 12,
    isPopular: false,
    features: [
      'Up to 3 projects',
      'Basic analytics',
      '24-hour support response time',
      'Community access',
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Ideal for growing teams needing more power and flexibility.',
    priceMonthly: 49,
    priceYearly: 39,
    isPopular: true,
    features: [
      'Unlimited projects',
      'Advanced analytics dashboard',
      '1-hour support response time',
      'Custom domain support',
      'Team collaboration tools'
    ],
    buttonText: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Advanced features and dedicated support for large-scale operations.',
    priceMonthly: 199,
    priceYearly: 159,
    isPopular: false,
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone & email support',
      'SLA guarantee',
      'Advanced security & SSO'
    ],
    buttonText: 'Contact Sales'
  }
];
