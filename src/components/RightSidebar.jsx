import React from "react";
import { Ticket, Coffee, Home, ShoppingCart, Dog, ArrowUpDown } from "lucide-react";

function SectionLabel({ children }) {
  // Label sits OUTSIDE the layout region, 12px above it
  return <div className="label-tag mb-3">{children}</div>;
}

function GrowthAnalytics() {
  return (
    <div className="flex flex-col h-full">
      <SectionLabel>02_GROWTH_ANALYTICS</SectionLabel>
      {/* The layout region defines the physical boundary of the frame */}
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        {/* Content card is absolute to completely decouple it from layout region dimension */}
        <div className="absolute inset-0 section-card p-4 flex flex-col justify-between">
          <svg viewBox="0 0 200 110" className="w-full h-full max-h-[110px]">
            {/* grey line */}
            <polyline
              points="10,55 55,30 100,65 145,40 190,55"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.6"
            />
            {/* blue line */}
            <polyline
              points="10,40 55,70 100,30 145,80 190,50"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.8"
            />
          </svg>
          <div className="flex justify-between mt-2 text-[10px] text-neutral-500 font-medium shrink-0">
            {["W1", "W2", "W3", "W4"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignPerformance() {
  const items = [
    { icon: Ticket, label: "Movie Tickets" },
    { icon: Coffee, label: "Coffee" },
    { icon: Home, label: "Pets Food" },
    { icon: ShoppingCart, label: "Grocery Store" },
    { icon: Dog, label: "Pets Food" },
  ];
  return (
    <div className="flex flex-col h-full">
      <SectionLabel>04_CAMPAIGN_PERFORMANCE</SectionLabel>
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        <div className="absolute inset-0 section-card p-3 space-y-2.5 overflow-hidden">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-neutral-800 truncate">
                    {it.label}
                  </div>
                  <div className="text-[9px] text-neutral-400">$2.5</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BusinessExpansion() {
  return (
    <div className="flex flex-col h-full">
      <SectionLabel>06_BUSINESS_EXPANSION</SectionLabel>
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        <div className="absolute inset-0 section-card p-4 relative flex flex-col justify-center gap-5">
          <div>
            <div className="text-[10px] text-neutral-400 mb-1">From</div>
            <div className="text-[15px] font-semibold text-neutral-900 tracking-wide">
              New&nbsp;&nbsp;York
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 mb-1">To</div>
            <div className="text-[15px] font-semibold text-neutral-900 tracking-wide">
              Abu&nbsp;&nbsp;Dhabi
            </div>
          </div>
          {/* Swap button */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
            <ArrowUpDown className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RightSidebar() {
  return (
    // Use CSS Grid to define the strict layout regions independently of content
    <div className="grid grid-rows-[0.8fr_1.4fr_1fr] h-[780px] gap-y-7">
      <GrowthAnalytics />
      <CampaignPerformance />
      <BusinessExpansion />
    </div>
  );
}
