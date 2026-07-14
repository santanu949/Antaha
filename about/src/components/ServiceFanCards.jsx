import React from "react";
import { motion } from "framer-motion";

/**
 * Service mini-cards that fan out from behind a stat card on hover.
 * Expects 5 cards to be passed via the `cards` prop.
 */
const layout = [
  { rotate: -15, x: -160 },
  { rotate: -7, x: -80 },
  { rotate: 0, x: 0 },
  { rotate: 7, x: 80 },
  { rotate: 15, x: 160 },
];

const ServiceFanCards = ({ cards = [] }) => {
  if (!cards.length) return null;
  
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center">
      <div className="relative h-0 w-full max-md:scale-[0.6] max-md:origin-bottom">
        {cards.map((card, i) => {
          const { Icon, label } = card;
          // default to last layout if more than 5 cards
          const { rotate, x } = layout[i] || layout[layout.length - 1]; 
          
          return (
            <motion.div
              key={label + i}
              initial={{ y: 60, rotate: 0, opacity: 0 }}
              variants={{
                rest: { y: 60, rotate: 0, opacity: 0, x },
                hover: {
                  y: -110,
                  rotate,
                  opacity: 1,
                  x,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                    delay: i * 0.04,
                  },
                },
              }}
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{ zIndex: 5 - Math.abs(i - 2) }}
            >
              <div
                className="flex h-[110px] w-[78px] flex-col items-center justify-between rounded-[14px] bg-white px-2 pb-2 pt-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
              >
                <div className="flex h-9 w-9 items-center justify-center">
                  <Icon className="h-7 w-7 text-neutral-900" strokeWidth={2.2} />
                </div>
                <div className="text-center text-[8px] font-extrabold leading-[1.05] tracking-tight text-neutral-900">
                  {label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFanCards;