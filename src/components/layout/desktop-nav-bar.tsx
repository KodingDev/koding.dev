"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { NAV_LINKS, NAV_SOCIALS } from "@/lib/data/layout";
import { cn } from "@/lib/utils";
import { SocialButton } from "./social-button";

export const DesktopNavBar: React.FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateLink = (el: HTMLElement) => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setVisible(true);
    setIndicator({
      x: elRect.left - containerRect.left,
      width: elRect.width,
      y: elRect.bottom - containerRect.top,
    });
  };

  const recompute = useEffectEvent(() => {
    const currentLink = NAV_LINKS.find((link) => link.match.test(pathname));
    if (!currentLink) {
      setVisible(false);
      return;
    }

    const index = NAV_LINKS.indexOf(currentLink);
    const el = indicatorRefs.current[index];
    if (!el) return;

    updateLink(el);
  });

  useEffect(() => recompute(), [pathname]);

  return (
    <div className="hidden grow flex-row items-center md:flex">
      <div ref={containerRef} className="relative flex w-fit flex-row items-center justify-end gap-12 pl-24">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => {
              indicatorRefs.current[index] = el;
            }}
            className="group relative py-2 font-medium text-foreground/75 text-lg"
          >
            {link.name}
            <div
              className={cn(
                "-bottom-1 absolute left-0 h-1 w-full rounded-full bg-transparent transition-colors",
                !link.match.test(pathname) && "group-hover:bg-primary-200/50"
              )}
            />
          </Link>
        ))}

        <div
          className={cn(
            "pointer-events-none absolute top-0 left-0 h-1 rounded-full bg-primary-200/50 transition-[transform,width,opacity] duration-300",
            !visible && "opacity-0"
          )}
          style={{
            transform: `translate(${indicator.x}px, ${indicator.y}px)`,
            width: `${indicator.width}px`,
          }}
        />
      </div>

      <div className="flex grow flex-row items-center justify-end gap-4">
        {NAV_SOCIALS.map((social) => (
          <SocialButton key={social.href} icon={social.icon} label={social.label} href={social.href as Route} className={social.className} />
        ))}
      </div>
    </div>
  );
};
