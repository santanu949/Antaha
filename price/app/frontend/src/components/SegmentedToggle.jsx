import React from "react";
import { pricingData, tabOrder } from "../mock";

export default function SegmentedToggle({ active, onChange }) {
  return (
    <div
      className="inline-flex max-md:flex max-md:w-full max-md:p-1 max-md:items-stretch items-center bg-white rounded-full p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100"
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
            className={`relative px-6 md:px-7 py-2.5 max-md:py-2 max-md:px-2 max-md:flex-1 max-md:text-[11px] max-md:leading-tight text-[14px] md:text-[15px] font-medium rounded-full whitespace-nowrap max-md:whitespace-normal transition-all duration-300 ease-out flex flex-col justify-center items-center text-center ${
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
