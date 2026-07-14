import { useState, useEffect, useCallback } from 'react';

export function useElementRect(ref) {
  const [rect, setRect] = useState(null);

  const measure = useCallback(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setRect({
        top: r.top + window.scrollY,
        left: r.left + window.scrollX,
        width: r.width,
        height: r.height,
      });
    }
  }, [ref]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    
    // Use ResizeObserver if available to catch content shifts
    let observer;
    if (window.ResizeObserver && ref.current) {
      observer = new ResizeObserver(() => measure());
      observer.observe(ref.current);
    }
    
    return () => {
      window.removeEventListener('resize', measure);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [measure, ref]);

  return rect;
}
