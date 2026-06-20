import React from "react";
import { ArrowRight } from "lucide-react";
import FloatingCards from "./FloatingCards";

export default function HeroCenter() {
  return (
    <div className="flex flex-col items-center text-center max-md:pt-[100px]">
      <h1 className="text-[56px] max-md:text-[20px] leading-[1.05] max-md:leading-[1.3] font-bold tracking-[-0.025em] text-neutral-900 whitespace-nowrap max-md:whitespace-normal max-md:w-full max-md:px-1">
        Transform Your Digital Presence
        <br className="max-md:hidden" />
        <span className="max-md:hidden"> </span>Into Sustainable Business Growth
      </h1>

      <p className="mt-7 max-md:mt-[30px] text-[17px] max-md:text-[13px] text-neutral-500 leading-relaxed max-w-[520px] max-md:px-2">
        Antaha helps businesses grow through digital marketing,
        <br className="max-md:hidden" />
        <span className="max-md:hidden"> </span>branding, websites, SEO, social media.
      </p>

      <div className="mt-9 max-md:mt-10 flex items-center gap-4 max-md:gap-3 max-md:flex-row max-md:justify-center max-md:w-full max-md:px-2">
        <button className="group inline-flex items-center justify-center gap-3 max-md:gap-1.5 pl-6 max-md:pl-3 pr-2 max-md:pr-1 py-2 max-md:py-1.5 rounded-full bg-blue-500 text-white text-[15px] max-md:text-[13px] font-medium shadow-[0_6px_18px_-4px_rgba(59,130,246,0.55)] hover:bg-blue-600 transition-colors max-md:shrink-0">
          <span className="pr-1 max-md:hidden">Schedule Free Consultation</span>
          <span className="pr-1 hidden max-md:inline whitespace-nowrap">Connect</span>
          <span className="w-9 h-9 max-md:w-6 max-md:h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
            <ArrowRight className="w-4 h-4 max-md:w-3 max-md:h-3 text-blue-500" />
          </span>
        </button>
        <button className="px-7 max-md:px-4 py-3 max-md:py-2 rounded-full bg-white border border-neutral-200 text-[15px] max-md:text-[13px] font-medium text-neutral-800 hover:bg-neutral-50 transition-colors max-md:shrink-0 max-md:whitespace-nowrap">
          <span className="max-md:hidden">View Services</span>
          <span className="hidden max-md:inline">Services</span>
        </button>
      </div>

      {/* Floating card composition */}
      <div className="relative mt-10 max-md:mt-11 w-full max-w-[760px] h-[600px] max-md:h-[200px]">
        <div className="w-full h-full max-md:w-[760px] max-md:h-[600px] max-md:absolute max-md:top-0 max-md:left-1/2 max-md:-translate-x-[52%] max-md:transform max-md:scale-[0.30] sm:max-md:scale-[0.38] max-md:origin-top">
          <FloatingCards />
        </div>
      </div>
    </div>
  );
}
