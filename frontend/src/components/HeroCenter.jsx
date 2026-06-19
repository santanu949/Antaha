import React from "react";
import { ArrowRight } from "lucide-react";
import FloatingCards from "./FloatingCards";

export default function HeroCenter() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-[56px] leading-[1.05] font-bold tracking-[-0.025em] text-neutral-900 whitespace-nowrap">
        Transform Your Digital Presence
        <br />
        Into Sustainable Business Growth
      </h1>

      <p className="mt-7 text-[17px] text-neutral-500 leading-relaxed max-w-[520px]">
        Antaha helps businesses grow through digital marketing,
        <br />
        branding, websites, SEO, social media.
      </p>

      <div className="mt-9 flex items-center gap-4">
        <button className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-blue-500 text-white text-[15px] font-medium shadow-[0_6px_18px_-4px_rgba(59,130,246,0.55)] hover:bg-blue-600 transition-colors">
          <span className="pr-1">Schedule Free Consultation</span>
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </span>
        </button>
        <button className="px-7 py-3 rounded-full bg-white border border-neutral-200 text-[15px] font-medium text-neutral-800 hover:bg-neutral-50 transition-colors">
          View Services
        </button>
      </div>

      {/* Floating card composition */}
      <div className="relative mt-10 w-full max-w-[760px] h-[600px]">
        <FloatingCards />
      </div>
    </div>
  );
}
