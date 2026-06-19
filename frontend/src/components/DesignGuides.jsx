import React from "react";

// Subtle blue vertical and horizontal layout guide lines + handle dots
export default function DesignGuides() {
  return (
    // z-10 puts it above dotted-bg (z-0) but below content (z-20)
    <div 
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        // Mask out the center so lines do not intersect the Hero content
        // The center column is roughly 66% wide. We fade out between 15% and 25%.
        maskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)'
      }}
    >
      {/* Vertical guides */}
      <div className="absolute top-0 bottom-0" style={{ left: "calc(50% - 460px)" }}>
        <div className="w-px h-full bg-blue-500/80" />
      </div>
      <div className="absolute top-0 bottom-0" style={{ left: "calc(50% + 460px)" }}>
        <div className="w-px h-full bg-blue-500/80" />
      </div>

      {/* Navbar design-board lane */}
      <div className="absolute left-0 right-0 top-[28px] h-px bg-blue-500/40" />
      <div className="absolute left-0 right-0 top-[90px] h-px bg-blue-500/40" />

      {/* Horizontal guides */}
      <div className="absolute left-0 right-0 top-[150px] h-px bg-blue-500/70" />
      <div className="absolute left-0 right-0 top-[640px] h-px bg-blue-500/60" />

      {/* Corner handle dots */}
      {[
        { top: 18, left: 18 },
        { top: 18, right: 18 },
        { bottom: 18, left: 18 },
        { bottom: 18, right: 18 },
      ].map((p, i) => (
        <span key={i} className="handle-dot" style={p} />
      ))}
    </div>
  );
}
