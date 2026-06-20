import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SegmentedToggle from './SegmentedToggle';
import PricingCard from './PricingCard';
import { pricingPlans } from '../mock';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-[#fafafa] dotted-bg pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 mb-10"
          >
            No hidden fees. No surprise charges. Choose the plan that best fits your needs and scale as you grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SegmentedToggle value={billingCycle} onChange={setBillingCycle} />
            <p className="mt-4 text-sm font-medium text-green-600 h-5">
              {billingCycle === 'yearly' && "You are saving up to 20% with annual billing!"}
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants} className="h-full">
              <PricingCard plan={plan} billingCycle={billingCycle} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
