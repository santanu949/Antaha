import React from "react";
import { pricingData, tabOrder } from "../mock";

export default function SegmentedToggle({ active, onChange }) {
  return (
    <div
      className="inline-flex items-center bg-white rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100"
      role="tablist"
    >
      {tabOrder.map((key) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(key)}
            className={`relative px-4 md:px-5 py-1.5 text-[11px] md:text-[12px] font-medium rounded-full whitespace-nowrap transition-all duration-300 ease-out ${
              isActive
                ? "bg-[#0F0F10] text-white shadow-md"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {pricingData[key].label}
          </button>
        );
      })}
    </div>
  );
}
