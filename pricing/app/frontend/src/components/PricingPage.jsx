import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import SegmentedToggle from "./SegmentedToggle";
import PricingCard from "./PricingCard";
import { pricingData } from "../mock";
import AnimatedGradientBackground from "./ui/animated-gradient-background";

export default function PricingPage() {
  const [active, setActive] = useState("gbp");
  const theme = pricingData[active];

  return (
    <div className="relative min-h-screen bg-[#F4F2FA] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <AnimatedGradientBackground Breathing={true} />
      <div className="relative z-10">
        <div className="max-w-[1050px] mx-auto px-6 pt-2 md:pt-8 pb-8 md:pb-16">
        {/* Top row: back button + step indicator */}
        <div className="hidden md:flex items-center justify-between md:mb-9">
          <button className="w-[22px] h-[22px] md:w-8 md:h-8 -mt-2 md:mt-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center hover:shadow-md transition-shadow">
            <ArrowLeft className="w-[11px] h-[11px] md:w-4 md:h-4 text-[#0F0F10]" />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="w-[18px] h-[2px] rounded-full bg-[#0F0F10]" />
            <span className="w-[18px] h-[2px] rounded-full bg-[#0F0F10]" />
            <span className="w-[18px] h-[2px] rounded-full bg-[#FCC419]" />
          </div>
        </div>

        {/* Header + toggle */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-6 mb-5 md:mb-10">
          <div className="max-w-[500px]">
            <h1
              key={theme.key + "-title"}
              className="text-[16.5px] md:text-[39px] font-semibold tracking-tight text-white leading-[1.1] mb-1.5 md:mb-3 animate-[fadeUp_300ms_ease-out]"
            >
              {theme.title}
            </h1>
            <p className="text-[9.1px] md:text-[13px] text-gray-500 max-w-[430px]">{theme.subtitle}</p>
          </div>
          <div className="lg:pt-3">
            <SegmentedToggle active={active} onChange={setActive} />
          </div>
        </div>

        {/* Pricing cards */}
        <div
          key={theme.key}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 lg:gap-5 items-start animate-[fadeUp_350ms_ease-out]"
        >
          {theme.plans.map((plan, idx) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              theme={theme}
              isCenter={idx === 1}
            />
          ))}
        </div>
      </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
