import Image from "next/image";
import Link from "next/link";
import type React from "react";
import Avatar from "@/assets/brand/avatar.png";
import { DesktopNavBar } from "./desktop-nav-bar";
import { MobileNavBar } from "./mobile-nav-bar";

export const Navbar: React.FC = () => (
  <nav aria-label="Main navigation" className="flex h-24 border-b border-b-foreground/10">
    <div className="my-auto flex w-full flex-row items-center">
      <Link href="/" aria-label="Home">
        <Image src={Avatar} alt="Stella Inwood" className="aspect-square size-11 rounded-xl object-cover object-top" />
      </Link>

      <DesktopNavBar />
      <MobileNavBar />
    </div>
  </nav>
);
