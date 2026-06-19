import React, { useState, useRef, useEffect } from "react";
import { useElementRect } from "../hooks/useElementRect";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onActiveRectChange }) {
  const links = ["Services", "Pricing", "About", "Case Studies", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItemRef = useRef(null);
  const navigate = useNavigate();
  
  // Custom hook that measures bounding box on resize/mutations
  const activeRect = useElementRect(activeItemRef);

  // Bubble up to overlay
  useEffect(() => {
    if (onActiveRectChange) {
      onActiveRectChange(activeRect);
    }
  }, [activeRect, onActiveRectChange]);

  return (
    <header className="relative flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-[26px] font-semibold tracking-tight text-black">Antaha</span>
      </div>

      {/* Center nav */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-9">
        {links.map((l, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={l}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(i);
                if (l === "About") {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/about");
                  }
                }
              }}
              ref={isActive ? activeItemRef : null}
              className={`text-[15px] transition-colors ${
                isActive
                  ? "text-blue-500 font-medium" // Removed the internal underline/border!
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {l}
            </a>
          );
        })}
      </nav>

      {/* CTA */}
      <button className="px-6 py-2.5 rounded-full border border-neutral-300 bg-white text-[15px] font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">
        Get Started
      </button>
    </header>
  );
}