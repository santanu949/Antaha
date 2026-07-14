import React from "react";
import { Check, X } from "lucide-react";

function CheckDot() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center w-[9.5px] h-[9.5px] md:w-[14px] md:h-[14px] rounded-full bg-[#22C55E] mt-[2px]">
      <Check className="w-[6.5px] h-[6.5px] md:w-2.5 md:h-2.5 text-white" strokeWidth={3} />
    </span>
  );
}

function CrossDot({ dark }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center w-[9.5px] h-[9.5px] md:w-[14px] md:h-[14px] mt-[2px]`}>
      <X className={`w-[9.5px] h-[9.5px] md:w-[14px] md:h-[14px] ${dark ? "text-gray-300" : "text-gray-400"}`} strokeWidth={2.5} />
    </span>
  );
}

export default function PricingCard({ plan, theme, isCenter }) {
  // Center popular card (dark theme)
  if (isCenter) {
    const isYellow = theme.key === "gbp";
    // Determine dark card colors per category
    const darkBg = theme.key === "gbp"
      ? "#0F0F10"
      : theme.key === "web"
      ? "#0E2A5E"
      : "#3B1668";
    const popularBg = theme.accent;
    const popularText = theme.key === "gbp" ? "#0F0F10" : theme.key === "web" ? "#0E2A5E" : "#3B1668";
    const priceColor = theme.key === "gbp" ? "#FCC419" : theme.key === "web" ? "#9CC3FF" : "#E9D8FB";
    const borderRing = theme.key === "gbp" ? "ring-2 ring-[#FCC419]" : "";

    return (
      <div className="relative w-full max-w-[270px] mx-auto mt-0 md:-mt-1.5">
        <div className={`relative rounded-[21px] ${borderRing} px-2 pt-[3.5px] pb-1.5 md:p-5 md:pb-6 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.35)] text-white md:min-h-[510px]`} style={{ backgroundColor: darkBg }}>
          {/* Most Popular badge */}
          <div
            className="absolute top-0 right-0 rounded-tr-[21px] rounded-bl-[16px] px-2 py-[3px] md:px-4 md:py-1.5 text-[10px] font-semibold"
            style={{ backgroundColor: popularBg, color: popularText }}
          >
            Most Popular
          </div>

          <div className="text-[10px] font-medium opacity-90 mb-[3px] md:mb-4">{plan.tier}</div>
          <h3 className="text-[18px] md:text-[26px] font-semibold leading-none mb-[1px] md:mb-2">{plan.name}</h3>
          
          <div className="flex flex-row items-center justify-between mb-1 md:mb-0 md:block">
            <p className="text-[9px] md:text-[11px] opacity-80 max-w-[60%] md:max-w-none mb-0 md:mb-5">{plan.desc}</p>

            <div className="flex items-baseline shrink-0 mb-0 md:mb-2">
              <span className="text-[23px] md:text-[39px] font-bold tracking-tight leading-none" style={{ color: priceColor }}>
                {plan.price}
              </span>
              {plan.priceSuffix && (
                <span className="ml-[2px] md:ml-1 text-[9px] md:text-[15px] font-medium" style={{ color: priceColor }}>
                  {plan.priceSuffix}
                </span>
              )}
            </div>
          </div>
          
          <p className="text-[7px] md:text-[10px] opacity-70 mb-1 md:mb-5">{plan.meta}</p>

          <div className="border-t border-dashed border-white/20 mb-1 md:mb-4" />

          <ul className="max-md:grid max-md:grid-cols-2 max-md:gap-x-1.5 max-md:gap-y-[2px] md:space-y-2.5 mb-1.5 md:mb-6">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-1 md:gap-2.5 text-[7.5px] md:text-[11px]">
                {f.ok ? <CheckDot /> : <CrossDot dark />}
                <span className={f.ok ? "opacity-95" : "opacity-50"}>{f.t}</span>
              </li>
            ))}
          </ul>

          <button
            className="w-full rounded-full bg-white text-[#0F0F10] py-[3px] md:py-2.5 font-semibold text-[11px] hover:bg-gray-100 transition-colors"
          >
            {plan.cta}
          </button>
        </div>
      </div>
    );
  }

  // Side cards (light theme)
  const sideBg = theme.cardSoft;
  const dotColor = plan.dot || theme.dotColor;
  const buttonBg = theme.sideCardButton;
  const buttonText = theme.sideCardButtonText;

  return (
    <div className="w-full max-w-[270px] mx-auto">
      <div
        className="relative rounded-[21px] px-2 pt-[3.5px] pb-1.5 md:p-5 md:pb-6 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.15)] md:min-h-[480px]"
        style={{ backgroundColor: sideBg }}
      >
        {/* Tier label + dot */}
        <div className="flex items-center justify-between mb-[3px] md:mb-4">
          <div className="text-[10px] font-medium text-gray-700">{plan.tier}</div>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        </div>

        <h3 className="text-[18px] md:text-[26px] font-semibold leading-none mb-[1px] md:mb-2 text-[#0F0F10]">
          {plan.name}
        </h3>
        
        <div className="flex flex-row items-center justify-between mb-1 md:mb-0 md:block">
          <p className="text-[9px] md:text-[11px] text-gray-600 max-w-[60%] md:max-w-none mb-0 md:mb-5">{plan.desc}</p>

          <div className="flex items-baseline shrink-0 mb-0 md:mb-2">
            <span className="text-[23px] md:text-[39px] font-bold tracking-tight leading-none text-[#0F0F10]">
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="ml-[2px] md:ml-1 text-[9px] md:text-[15px] font-medium text-[#0F0F10]">
                {plan.priceSuffix}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-[7px] md:text-[10px] text-gray-500 mb-1 md:mb-5">{plan.meta}</p>

        <div className="border-t border-dashed border-gray-300 mb-1 md:mb-4" />

        <ul className="max-md:grid max-md:grid-cols-2 max-md:gap-x-1.5 max-md:gap-y-[2px] md:space-y-2.5 mb-1.5 md:mb-6">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-1 md:gap-2.5 text-[7.5px] md:text-[11px]">
              {f.ok ? <CheckDot /> : <CrossDot />}
              <span className={f.ok ? "text-gray-800" : "text-gray-400"}>
                {f.t}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="w-full rounded-full py-[3px] md:py-2.5 font-semibold text-[11px] transition-opacity hover:opacity-90"
          style={{
            backgroundColor: buttonBg,
            color: buttonText,
            border: buttonBg === "white" ? "1px solid #E5E7EB" : "none",
          }}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}
