"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const GradientBackground: React.FC<React.ComponentProps<"div">> = ({ className, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let t = Math.random() * 1000;

    const setColor = (x: number, y: number, r: number, g: number, b: number) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const calcR = (x: number, y: number, t: number) => Math.floor(200 + 64 * Math.cos((x * x - y * y) / 300 + t));

    const calcB = (x: number, y: number, t: number) =>
      Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    const draw = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          const r = calcR(x, y, t);
          const b = calcB(x, y, t);
          setColor(x, y, r, 1, b);
        }
      }
      t += 0.02;
      requestAnimationFrame(draw);
    };

    draw();
    canvas.classList.remove("opacity-0");
  }, []);

  return (
    <div className={cn(`absolute inset-0`, className)} {...props}>
      <canvas ref={canvasRef} width="32" height="32" className="size-full opacity-0 transition-all duration-500" />
    </div>
  );
};
