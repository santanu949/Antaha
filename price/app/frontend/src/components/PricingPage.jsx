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
        <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-20">
        {/* Top row: back button + step indicator */}
        <div className="flex items-center justify-between mb-12">
          <button className="w-11 h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center hover:shadow-md transition-shadow">
            <ArrowLeft className="w-5 h-5 text-[#0F0F10]" />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-[3px] rounded-full bg-[#0F0F10]" />
            <span className="w-6 h-[3px] rounded-full bg-[#0F0F10]" />
            <span className="w-6 h-[3px] rounded-full bg-[#FCC419]" />
          </div>
        </div>

        {/* Header + toggle */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h1
              key={theme.key + "-title"}
              className="text-[44px] md:text-[52px] font-semibold tracking-tight text-white leading-[1.1] mb-4 animate-[fadeUp_300ms_ease-out]"
            >
              {theme.title}
            </h1>
            <p className="text-[17px] text-gray-500 max-w-xl">{theme.subtitle}</p>
          </div>
          <div className="lg:pt-4">
            <SegmentedToggle active={active} onChange={setActive} />
          </div>
        </div>

        {/* Pricing cards */}
        <div
          key={theme.key}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-start animate-[fadeUp_350ms_ease-out]"
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
