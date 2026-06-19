import React, { useState } from "react";
import { Search } from "lucide-react";

function SectionLabel({ children }) {
  // Label sits OUTSIDE the layout region, 12px above it
  return <div className="label-tag mb-3">{children}</div>;
}

function SEOInsights() {
  return (
    <div className="flex flex-col h-full">
      <SectionLabel>01_SEO_INSIGHTS</SectionLabel>
      {/* The layout region defines the physical boundary of the frame */}
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        {/* Content card is absolute to completely decouple it from layout region dimension */}
        <div className="absolute inset-0 section-card p-4 space-y-3">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-full border border-neutral-200 px-4 py-2.5 bg-white"
            >
              <input
                placeholder="Search here"
                className="bg-transparent outline-none text-[12px] text-neutral-500 placeholder:text-neutral-400 w-full"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentPlanning() {
  const months = [
    { label: "January 2025", highlight: 16 },
    { label: "February 2025", highlight: null },
  ];

  const buildGrid = () => {
    const days = [];
    for (let d = 1; d <= 31; d++) days.push(d);
    return days;
  };

  return (
    <div className="flex flex-col h-full">
      <SectionLabel>03_CONTENT_PLANNING</SectionLabel>
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        <div className="absolute inset-0 section-card p-3 space-y-4 overflow-hidden">
          {months.map((m) => (
            <div key={m.label}>
              <div className="text-center text-[11px] font-medium text-neutral-700 mb-2">
                {m.label}
              </div>
              <div className="grid grid-cols-7 gap-y-1 text-[9px] text-neutral-500">
                {buildGrid().map((d) => (
                  <div
                    key={d}
                    className={`h-4 flex items-center justify-center rounded ${
                      d === m.highlight
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : ""
                    }`}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrafficAnalytics() {
  const bars = [40, 22, 26, 90, 30, 28];
  return (
    <div className="flex flex-col h-full">
      <SectionLabel>05_TRAFFIC_ANALYTICS</SectionLabel>
      <div className="layout-region relative flex-1 min-h-0" data-figma-region="true">
        <div className="absolute inset-0 section-card p-4 flex flex-col justify-end">
          <div className="flex items-end justify-between h-[100px] gap-1.5 shrink-0">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end">
                <div
                  className={`w-full rounded-sm ${
                    i === 3 ? "bg-blue-500" : "bg-neutral-200"
                  }`}
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[9px] text-neutral-400 font-mono shrink-0">
            {["01", "02", "03", "04", "05", "06"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeftSidebar() {
  return (
    // Use CSS Grid to define the strict layout regions independently of content
    <div className="grid grid-rows-[0.8fr_1.4fr_1fr] h-[780px] gap-y-7">
      <SEOInsights />
      <ContentPlanning />
      <TrafficAnalytics />
    </div>
  );
}
