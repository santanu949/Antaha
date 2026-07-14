import React, { useState, useRef, useEffect } from "react";
import { useElementRect } from "../hooks/useElementRect";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ onActiveRectChange }) {
  const links = ["Services", "Pricing", "About", "Case Studies", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleNavClick = (e, i, l) => {
    e.preventDefault();
    setActiveIndex(i);
    setIsMobileMenuOpen(false);
    if (l === "About") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/about");
      }
    } else if (l === "Services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (l === "Pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (l === "Contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="relative flex items-center justify-between">
      {/* Logo */}
      <a 
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-2 cursor-pointer z-50 relative max-md:z-50 max-md:relative"
      >
        <img src="/logo.png" alt="Antaha Logo" className="h-10 max-md:h-12 w-auto object-contain" />
      </a>

      {/* Center nav */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-9 max-md:hidden">
        {links.map((l, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={l}
              href="#"
              onClick={(e) => handleNavClick(e, i, l)}
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

      {/* CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-3 z-50 relative max-md:gap-1 max-md:-mr-1 max-md:z-50 max-md:relative">
        <button className="px-6 py-2.5 rounded-full border border-neutral-300 bg-white text-[15px] max-md:px-5 max-md:py-2 max-md:text-[13px] font-medium text-neutral-900 hover:bg-neutral-50 transition-colors max-md:shrink-0">
          <span className="max-md:hidden">Get Started</span>
          <span className="hidden max-md:inline">Elevate</span>
        </button>
        <button 
          className="md:hidden p-1.5 text-neutral-800 shrink-0 hidden max-md:block"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 max-md:w-5 max-md:h-5" /> : <Menu className="w-6 h-6 max-md:w-5 max-md:h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="hidden max-md:flex absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 flex-col gap-2 z-40">
          {links.map((l, i) => {
            const isActive = i === activeIndex;
            return (
              <a
                key={l}
                href="#"
                onClick={(e) => handleNavClick(e, i, l)}
                className={`px-4 py-3 rounded-xl text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}