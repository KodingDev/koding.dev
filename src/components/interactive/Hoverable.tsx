"use client";

import type React from "react";
import type { ReactNode } from "react";
import { useEffect } from "react";

type HoverableProps = {
  active?: boolean;
  hoverContent?: ReactNode;
} & React.PropsWithChildren;

export const Hoverable: React.FC<HoverableProps> = ({ active = false, children, hoverContent }) => (
  <div className="group relative h-full">
    {children}

    {hoverContent && active && (
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50 p-6 opacity-0 transition-all group-hover:opacity-100">
        <div className="flex translate-y-2 flex-col transition-all duration-500 group-hover:translate-y-0">
          {hoverContent}
        </div>
      </div>
    )}
  </div>
);

export const HoverListener: React.FC = () => {
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      document.querySelectorAll<HTMLElement>(".hoverable").forEach((element) => {
        const { left, top } = element.getBoundingClientRect();
        element.style.setProperty("--mouse-x", `${event.clientX - left}px`);
        element.style.setProperty("--mouse-y", `${event.clientY - top}px`);
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
};
