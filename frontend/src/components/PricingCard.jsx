import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PricingCard = ({ plan, billingCycle }) => {
  const { name, description, priceMonthly, priceYearly, isPopular, features, buttonText } = plan;
  
  const price = billingCycle === 'monthly' ? priceMonthly : priceYearly;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex flex-col p-8 rounded-3xl bg-white border transition-all duration-300 float-card h-full",
        isPopular ? "border-blue-600 shadow-xl shadow-blue-900/10 z-10" : "border-gray-200 shadow-sm"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-2 h-10">{description}</p>
      </div>

      <div className="mb-6 flex items-baseline">
        <span className="text-5xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-500 ml-2 font-medium">/mo</span>
      </div>

      <button
        className={cn(
          "w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200",
          isPopular 
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
            : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
        )}
      >
        {buttonText}
      </button>

      <div className="mt-8 space-y-4 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <Check className="h-5 w-5 text-blue-500" />
            </div>
            <p className="ml-3 text-sm text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
