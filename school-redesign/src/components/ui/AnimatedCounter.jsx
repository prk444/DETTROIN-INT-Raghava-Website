import React, { useState, useEffect, useRef } from 'react';

/**
 * A highly polished, performance-focused Counter component.
 * Uses requestAnimationFrame for 60fps animations and IntersectionObserver
 * to ensure numbers count upward only when they scroll into view.
 */
export default function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  // Count up animation utilizing requestAnimationFrame
  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    const endValue = parseInt(target.replace(/[^0-9]/g, ''), 10);
    
    if (isNaN(endValue)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease Out Quad interpolation: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, target, duration]);

  // Extract non-numeric suffix characters (e.g. "+", "%")
  const suffix = target.replace(/[0-9]/g, '');

  return (
    <span ref={elementRef} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}
