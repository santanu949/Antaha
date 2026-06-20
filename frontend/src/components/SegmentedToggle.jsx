import React from 'react';
import { motion } from 'framer-motion';

const SegmentedToggle = ({ value, onChange }) => {
  return (
    <div className="relative flex items-center p-1 bg-white rounded-full w-fit mx-auto border border-gray-200 shadow-sm">
      <div className="flex relative z-10">
        <button
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
            value === 'monthly' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
            value === 'yearly' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => onChange('yearly')}
        >
          Annually
        </button>
      </div>
      
      {/* Animated Background Pill */}
      <div className="absolute inset-0 p-1 flex">
        <motion.div
          className="bg-blue-600 rounded-full h-full shadow-sm"
          initial={false}
          animate={{
            width: '50%',
            x: value === 'monthly' ? '0%' : '100%',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default SegmentedToggle;
