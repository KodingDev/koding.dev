"use client";

import type React from "react";
import { HoverListener } from "@/components/interactive/Hoverable";
import { NavBar } from "@/components/layout/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HoverListener />

      <div className="layout-container">
        <NavBar />
      </div>

      <div>{children}</div>

      {/* Footer */}
      <div className="layout-container flex flex-row pb-24">
        <span className="flex-1 font-medium opacity-50">Copyright © Koding Development 2025</span>
        <span className="flex-1 text-right font-medium opacity-50">Stella, Software Engineer</span>
      </div>
    </>
  );
}
