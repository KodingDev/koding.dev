"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { NAV_LINKS, NAV_SOCIALS } from "@/lib/data/layout";
import { cn } from "@/lib/utils";
import { SocialButton } from "./social-button";

export const MobileNavBar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    if (open) {
      main.setAttribute("inert", "");
    } else {
      main.removeAttribute("inert");
    }
    return () => main.removeAttribute("inert");
  }, [open]);

  return (
    <div className="flex grow items-center justify-end md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex size-11 items-center justify-center rounded-xl border border-foreground/15 transition-colors hover:border-foreground/25 hover:bg-foreground/5"
      >
        {open ? <MdClose className="size-5" /> : <MdMenu className="size-5" />}
      </button>

      {open && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss
        <div className="fixed inset-0 z-40 bg-foreground/5 animate-in fade-in duration-200" onClick={() => setOpen(false)} />
      )}

      {/* Menu panel — always in DOM for height animation */}
      <div
        className={cn(
          "absolute top-24 right-0 left-0 z-50 grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-b border-foreground/10 bg-background p-6">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 font-medium text-lg transition-colors",
                    link.match.test(pathname) ? "bg-primary/10 text-primary" : "text-foreground/75"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex flex-row gap-3 border-t border-foreground/10 pt-4">
              {NAV_SOCIALS.map((social) => (
                <SocialButton
                  key={social.href}
                  icon={social.icon}
                  label={social.label}
                  href={social.href as Route}
                  className={social.className}
                  tabIndex={open ? 0 : -1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
