"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, NAV_SOCIALS } from "@/lib/data/layout";
import { cn } from "@/lib/utils";
import { SocialButton } from "./SocialButton";

export const DesktopNavBar: React.FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [navTween, setNavTween] = useState({
    left: "50%",
    top: "0px",
    right: "50%",
  });

  const indicatorRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateLink = (el: HTMLElement) => {
    setVisible(true);
    setNavTween({
      left: `${el.offsetLeft}px`,
      right: `${el.parentElement!.offsetWidth - el.offsetLeft - el.clientWidth}px`,
      top: `${el.offsetTop + el.offsetHeight}px`,
    });
  };

  const recompute = () => {
    const currentLink = NAV_LINKS.find((link) => link.match.test(pathname));
    if (!currentLink) {
      setVisible(false);
      return;
    }

    const index = NAV_LINKS.indexOf(currentLink);
    const indicator = indicatorRefs.current[index];
    if (!indicator) return;

    updateLink(indicator);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: Fix
  useEffect(() => {
    recompute();
  }, [pathname]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: Fix
  useEffect(() => {
    recompute();
  }, []);

  return (
    <>
      <div className="relative flex w-fit flex-row items-center justify-end gap-4 pl-12 md:flex md:gap-12 md:pl-24">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => {
              indicatorRefs.current[index] = el;
            }}
            className="group relative font-medium text-lg text-white opacity-75"
          >
            {link.name}
            <div
              className={cn(
                "-bottom-1 absolute left-0 h-1 w-full rounded-full bg-transparent transition-all",
                !link.match.test(pathname) && "group-hover:bg-primary-200/50"
              )}
            />
          </Link>
        ))}

        <div
          className={cn(
            `pointer-events-none absolute h-1 rounded-full bg-primary-200/50 transition-all duration-500`,
            !visible && "opacity-0"
          )}
          style={{
            left: navTween.left,
            right: navTween.right,
            top: navTween.top,
          }}
        />
      </div>

      <div className="hidden flex-grow flex-row items-center justify-end gap-4 md:flex">
        {NAV_SOCIALS.map((social) => (
          <SocialButton key={social.href} icon={social.icon} href={social.href as Route} className={social.className} />
        ))}
      </div>
    </>
  );
};
