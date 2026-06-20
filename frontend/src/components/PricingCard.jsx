import React from "react";
import { Check, X } from "lucide-react";

function CheckDot() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center w-[14px] h-[14px] rounded-full bg-[#22C55E] mt-[2px]">
      <Check className="w-[10px] h-[10px] text-white" strokeWidth={3} />
    </span>
  );
}

function CrossDot({ dark }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center w-[14px] h-[14px] mt-[2px]`}>
      <X className={`w-[14px] h-[14px] ${dark ? "text-gray-300" : "text-gray-400"}`} strokeWidth={2.5} />
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
      <div className="relative w-full max-w-[280px] mx-auto -mt-1.5">
        <div className={`relative rounded-[20px] ${borderRing} p-5 pb-6 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.35)] text-white`} style={{ backgroundColor: darkBg, minHeight: 510 }}>
          {/* Most Popular badge */}
          <div
            className="absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[16px] px-3.5 py-1.5 text-[11px] font-semibold"
            style={{ backgroundColor: popularBg, color: popularText }}
          >
            Most Popular
          </div>

          <div className="text-[11px] font-medium opacity-90 mb-4">{plan.tier}</div>
          <h3 className="text-[26px] font-semibold leading-none mb-2">{plan.name}</h3>
          <p className="text-[11.5px] opacity-80 mb-5">{plan.desc}</p>

          <div className="flex items-baseline mb-2">
            <span className="text-[40px] font-bold tracking-tight leading-none" style={{ color: priceColor }}>
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="ml-1 text-[15px] font-medium" style={{ color: priceColor }}>
                {plan.priceSuffix}
              </span>
            )}
          </div>
          <p className="text-[11px] opacity-70 mb-4">{plan.meta}</p>

          <div className="border-t border-dashed border-white/20 mb-4" />

          <ul className="space-y-2 mb-6">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[11.5px]">
                {f.ok ? <CheckDot /> : <CrossDot dark />}
                <span className={f.ok ? "opacity-95" : "opacity-50"}>{f.t}</span>
              </li>
            ))}
          </ul>

          <button
            className="w-full rounded-full bg-white text-[#0F0F10] py-2.5 font-semibold text-[12.5px] hover:bg-gray-100 transition-colors"
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
    <div className="w-full max-w-[280px] mx-auto">
      <div
        className="relative rounded-[20px] p-5 pb-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]"
        style={{ backgroundColor: sideBg, minHeight: 480 }}
      >
        {/* Tier label + dot */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] font-medium text-gray-700">{plan.tier}</div>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        </div>

        <h3 className="text-[26px] font-semibold leading-none mb-2 text-[#0F0F10]">
          {plan.name}
        </h3>
        <p className="text-[11.5px] text-gray-600 mb-5">{plan.desc}</p>

        <div className="flex items-baseline mb-2">
          <span className="text-[40px] font-bold tracking-tight leading-none text-[#0F0F10]">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span className="ml-1 text-[15px] font-medium text-[#0F0F10]">
              {plan.priceSuffix}
            </span>
          )}
        </div>
        <p className="text-[11px] text-gray-500 mb-4">{plan.meta}</p>

        <div className="border-t border-dashed border-gray-300 mb-4" />

        <ul className="space-y-2 mb-6">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[11.5px]">
              {f.ok ? <CheckDot /> : <CrossDot />}
              <span className={f.ok ? "text-gray-800" : "text-gray-400"}>
                {f.t}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="w-full rounded-full py-2.5 font-semibold text-[12.5px] transition-opacity hover:opacity-90"
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
