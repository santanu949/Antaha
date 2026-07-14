import React from "react";
import { Check, X } from "lucide-react";

function CheckDot() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full bg-[#22C55E] mt-[3px]">
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </span>
  );
}

function CrossDot({ dark }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center w-[18px] h-[18px] mt-[3px]`}>
      <X className={`w-[18px] h-[18px] ${dark ? "text-gray-300" : "text-gray-400"}`} strokeWidth={2.5} />
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
      <div className="relative w-full max-w-[360px] max-md:max-w-none mx-auto -mt-2 max-md:mt-0">
        <div className={`relative rounded-[28px] ${borderRing} p-7 pb-8 max-md:p-5 max-md:pb-6 min-h-[680px] max-md:min-h-0 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.35)] text-white`} style={{ backgroundColor: darkBg }}>
          {/* Most Popular badge */}
          <div
            className="absolute top-0 right-0 rounded-tr-[28px] rounded-bl-[22px] px-5 py-2 text-[13px] font-semibold"
            style={{ backgroundColor: popularBg, color: popularText }}
          >
            Most Popular
          </div>

          <div className="text-[13px] font-medium opacity-90 mb-5">{plan.tier}</div>
          <h3 className="text-[34px] max-md:text-[28px] font-semibold leading-none mb-3">{plan.name}</h3>
          <p className="text-[14px] max-md:text-[13px] opacity-80 mb-7 max-md:mb-5">{plan.desc}</p>

          <div className="flex items-baseline mb-3">
            <span className="text-[52px] max-md:text-[42px] font-bold tracking-tight leading-none" style={{ color: priceColor }}>
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="ml-1 text-[20px] font-medium" style={{ color: priceColor }}>
                {plan.priceSuffix}
              </span>
            )}
          </div>
          <p className="text-[13px] opacity-70 mb-6">{plan.meta}</p>

          <div className="border-t border-dashed border-white/20 mb-5" />

          <ul className="space-y-3 mb-8 max-md:space-y-0 max-md:grid max-md:grid-cols-2 max-md:gap-y-3 max-md:gap-x-2">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] max-md:text-[11.5px] max-md:gap-1.5 max-md:leading-snug">
                {f.ok ? <CheckDot /> : <CrossDot dark />}
                <span className={f.ok ? "opacity-95" : "opacity-50"}>{f.t}</span>
              </li>
            ))}
          </ul>

          <button
            className="w-full rounded-full bg-white text-[#0F0F10] py-3.5 font-semibold text-[15px] hover:bg-gray-100 transition-colors"
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
    <div className="w-full max-w-[360px] max-md:max-w-none mx-auto">
      <div
        className="relative rounded-[28px] p-7 pb-8 max-md:p-5 max-md:pb-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] min-h-[640px] max-md:min-h-0"
        style={{ backgroundColor: sideBg }}
      >
        {/* Tier label + dot */}
        <div className="flex items-center justify-between mb-5">
          <div className="text-[13px] font-medium text-gray-700">{plan.tier}</div>
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        </div>

        <h3 className="text-[34px] max-md:text-[28px] font-semibold leading-none mb-3 text-[#0F0F10]">
          {plan.name}
        </h3>
        <p className="text-[14px] max-md:text-[13px] text-gray-600 mb-7 max-md:mb-5">{plan.desc}</p>

        <div className="flex items-baseline mb-3">
          <span className="text-[52px] max-md:text-[42px] font-bold tracking-tight leading-none text-[#0F0F10]">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span className="ml-1 text-[20px] font-medium text-[#0F0F10]">
              {plan.priceSuffix}
            </span>
          )}
        </div>
        <p className="text-[13px] text-gray-500 mb-6">{plan.meta}</p>

        <div className="border-t border-dashed border-gray-300 mb-5" />

        <ul className="space-y-3 mb-8 max-md:space-y-0 max-md:grid max-md:grid-cols-2 max-md:gap-y-3 max-md:gap-x-2">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] max-md:text-[11.5px] max-md:gap-1.5 max-md:leading-snug">
              {f.ok ? <CheckDot /> : <CrossDot />}
              <span className={f.ok ? "text-gray-800" : "text-gray-400"}>
                {f.t}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="w-full rounded-full py-3.5 font-semibold text-[15px] transition-opacity hover:opacity-90"
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
