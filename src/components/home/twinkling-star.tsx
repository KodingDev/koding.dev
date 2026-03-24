"use client";

import type React from "react";
import { useEffect, useRef } from "react";

export const TwinklingStar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const offsetRef = useRef(Math.random() * 100);
  const speedRef = useRef(Math.random() * 15 + 5);
  const directionsRef = useRef([Math.random() * 2 - 1, Math.random() * 2 - 1]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.opacity = "0.7";
      return;
    }

    const render = () => {
      const now = Date.now() / 1000;
      const offset = offsetRef.current;
      const speed = speedRef.current;
      const sin = Math.sin(now + offset);
      const opacity = sin * 0.5 + 0.5;

      if (opacity < 0.001) {
        speedRef.current = Math.random() * 15 + 5;
        directionsRef.current = [Math.random() * 2 - 1, Math.random() * 2 - 1];
      }

      const tx = (directionsRef.current[0] ?? 0) * sin * speed;
      const ty = (directionsRef.current[1] ?? 0) * sin * speed;
      const scale = (sin * speed + 20) / 20;

      el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      el.style.opacity = String(opacity);

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={elRef} className="absolute will-change-[transform,opacity]">
        {children}
      </div>
    </div>
  );
};
