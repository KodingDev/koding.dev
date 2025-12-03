import Image from "next/image";
import Link from "next/link";
import type React from "react";
import Avatar from "@/assets/brand/avatar.png";
import { DesktopNavBar } from "./desktop-nav-bar";

export const Navbar: React.FC = () => (
  <div className="flex h-24 border-b border-b-white/10">
    <div className="my-auto flex w-full flex-row items-center">
      <Link href="/">
        <Image src={Avatar} alt="Logo" className="aspect-square size-11 rounded-xl object-cover object-top" />
      </Link>

      <div className="flex-grow md:hidden" />

      <DesktopNavBar />
    </div>
  </div>
);
