import React, { useState, useEffect } from 'react';

// Exact Figma selection blue
const FIGMA_BLUE = "#0D99FF";

const Handle = ({ style }) => (
  <div
    className="absolute bg-white"
    style={{
      width: 6,
      height: 6,
      border: `1px solid ${FIGMA_BLUE}`,
      ...style
    }}
  />
);

export function SelectionFrame({ rect, isNav, isLayout }) {
  if (!rect) return null;

  // Nav gets larger padding to feel like a proper selection region
  // Layout frames get no padding, they exactly match the CSS grid layout slots
  const paddingX = isNav ? 20 : 0;
  const paddingY = isNav ? 16 : 0;
  
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        border: `1px solid ${FIGMA_BLUE}`,
        width: rect.width + paddingX * 2,
        height: rect.height + paddingY * 2,
        // zIndex must be on the specific DesignBoardOverlay, so this inherits it
        // Use transform for smooth 60fps positioning without layout shifts
        transform: `translate(${rect.left - paddingX}px, ${rect.top - paddingY}px)`,
        transition: isNav 
          ? 'transform 250ms cubic-bezier(0.2, 0.7, 0.2, 1), width 250ms cubic-bezier(0.2, 0.7, 0.2, 1), height 250ms cubic-bezier(0.2, 0.7, 0.2, 1)' 
          : 'none',
        top: 0,
        left: 0,
      }}
    >
      <Handle style={{ top: -3, left: -3 }} />
      <Handle style={{ top: -3, right: -3 }} />
      <Handle style={{ bottom: -3, left: -3 }} />
      <Handle style={{ bottom: -3, right: -3 }} />
      
      {isLayout && (
        <>
          <Handle style={{ top: '50%', transform: 'translateY(-50%)', left: -3 }} />
          <Handle style={{ top: '50%', transform: 'translateY(-50%)', right: -3 }} />
          <Handle style={{ left: '50%', transform: 'translateX(-50%)', top: -3 }} />
          <Handle style={{ left: '50%', transform: 'translateX(-50%)', bottom: -3 }} />
        </>
      )}
    </div>
  );
}

export default function DesignBoardOverlay({ navRect }) {
  const [layoutRects, setLayoutRects] = useState([]);

  useEffect(() => {
    const measure = () => {
      const elements = document.querySelectorAll('[data-figma-region="true"]');
      const rects = Array.from(elements).map((el) => {
        const r = el.getBoundingClientRect();
        return {
          top: r.top + window.scrollY,
          left: r.left + window.scrollX,
          width: r.width,
          height: r.height,
        };
      });
      setLayoutRects(rects);
    };

    measure();
    window.addEventListener('resize', measure);

    let resizeObserver;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => measure());
      const elements = document.querySelectorAll('[data-figma-region="true"]');
      elements.forEach(el => resizeObserver.observe(el));
    }

    const mutationObserver = new MutationObserver(() => {
      measure();
      if (resizeObserver) {
        resizeObserver.disconnect();
        document.querySelectorAll('[data-figma-region="true"]').forEach(el => resizeObserver.observe(el));
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', measure);
      if (resizeObserver) resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    // Put it high enough to overlay content but below modals.
    <div className="absolute inset-0 z-[50] pointer-events-none">
      {layoutRects.map((rect, i) => (
        <SelectionFrame key={i} rect={rect} isLayout />
      ))}
      <SelectionFrame rect={navRect} isNav />
    </div>
  );
}
