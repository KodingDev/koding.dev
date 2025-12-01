"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

export const TwinklingStar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState({ x: 0, y: 0, size: 0, opacity: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const offsetRef = useRef<number>(Math.random() * 5);
  const speedRef = useRef<number>(0);
  const directionsRef = useRef<number[]>([-1, 1]);

  useEffect(() => {
    const render = () => {
      if (speedRef.current === 0 || data.opacity < 0.001) {
        speedRef.current = Math.random() * 15 + 5;
        directionsRef.current = [Math.random() * 2 - 1, Math.random() * 2 - 1];
      }

      const now = Date.now() / 1000;
      const offset = offsetRef.current;

      setData({
        x: (directionsRef.current?.[0] ?? 0) * Math.sin(now + offset) * speedRef.current,
        y: (directionsRef.current?.[1] ?? 0) * Math.sin(now + offset) * speedRef.current,
        size: Math.sin(now + offset) * speedRef.current + 20,
        opacity: Math.sin(now + offset) * 0.5 + 0.5,
      });

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data.opacity]);

  return (
    <div className="relative">
      <div
        className="absolute"
        style={{
          left: `${data.x}px`,
          top: `${data.y}px`,
          width: `${data.size}px`,
          height: `${data.size}px`,
          opacity: data.opacity,
        }}
      >
        {children}
      </div>
    </div>
  );
};
