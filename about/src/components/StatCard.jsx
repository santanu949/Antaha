import React from "react";
import { motion } from "framer-motion";
import ServiceFanCards from "./ServiceFanCards";

/**
 * StatCard component
 * Props:
 *  - value: e.g. "150+"
 *  - label: e.g. "BUSINESSES SERVED"
 *  - bg: tailwind bg class
 *  - textColor: tailwind text color class for value & label
 *  - width: tailwind width class
 *  - height: tailwind height class
 *  - withFan: legacy boolean flag
 *  - fanCards: array of objects {label, Icon} for the cards that fan out on hover
 *  - stripes: add diagonal stripe overlay (orange card)
 */
const StatCard = ({
  value,
  label,
  bg = "bg-white",
  textColor = "text-neutral-900",
  width = "w-[360px]",
  height = "h-[300px]",
  withFan = false,
  fanCards = [],
  stripes = false,
  glow = false,
  mainIcon: MainIcon,
}) => {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="hover"
      className={`relative z-10 hover:z-50 active:z-50 ${width} ${height}`}
    >
      {(withFan || fanCards.length > 0) && <ServiceFanCards cards={fanCards} />}

      <div
        className={`relative z-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[28px] ${bg} ${
          glow
            ? "shadow-[0_30px_60px_-15px_rgba(255,90,30,0.45)] max-md:shadow-[0_20px_40px_-10px_rgba(255,90,30,0.45)]"
            : "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18)]"
        }`}
      >
        {stripes && <div className="absolute inset-0 diag-stripes" />}

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 max-md:flex-row max-md:justify-start max-md:px-7 max-md:gap-5">
          {MainIcon && (
            <div className="hidden max-md:flex shrink-0 w-[52px] h-[52px] rounded-full items-center justify-center bg-white/20">
              <MainIcon className="w-[26px] h-[26px] text-white" strokeWidth={2} />
            </div>
          )}

          <div className="flex flex-col items-center max-md:items-start text-center max-md:text-left">
            <div
              className={`font-display text-[100px] max-md:text-[31px] max-md:tracking-[-0.02em] leading-none ${textColor}`}
            >
              {value}
            </div>

            <div
              className={`mt-3 max-md:mt-0 text-[14px] max-md:text-[7px] font-extrabold tracking-[0.06em] max-md:tracking-[0.04em] text-center max-md:text-left ${textColor}`}
            >
              {label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;