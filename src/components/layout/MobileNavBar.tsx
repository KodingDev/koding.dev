"use client";

import type React from "react";
import { useState } from "react";

export const MobileNavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex-grow md:hidden" />

      <button type="button" className="hover:cursor-pointer md:hidden" onMouseDown={() => setExpanded(!expanded)}>
        <span className="icon-[mdi--menu] text-2xl text-white" />
      </button>
    </>
  );
};
