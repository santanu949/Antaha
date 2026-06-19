import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import HeroCenter from "../components/HeroCenter";
import DesignGuides from "../components/DesignGuides";
import DesignBoardOverlay from "../components/FigmaSelectionSystem";

export default function Landing() {
  const [navRect, setNavRect] = useState(null);

  return (
    <div className="relative min-h-screen w-full dotted-bg overflow-hidden">
      {/* Design board guide lines and handle dots overlay */}
      <DesignGuides />
      
      {/* Figma selection overlay */}
      <DesignBoardOverlay navRect={navRect} />

      <div className="relative z-20 mx-auto max-w-[1480px] px-6 pt-7 pb-16">
        {/* Top bar */}
        <Navbar onActiveRectChange={setNavRect} />

        {/* Three-column grid */}
        <div className="mt-6 grid grid-cols-12 gap-6 relative">
          <div className="col-span-12 md:col-span-2 relative">
            <LeftSidebar />
          </div>

          <div className="col-span-12 md:col-span-8">
            <HeroCenter />
          </div>

          <div className="col-span-12 md:col-span-2 relative">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
