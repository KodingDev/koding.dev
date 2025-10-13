import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { FEATURED_ARTIST, getArtRefImage } from "@/lib/content";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar: React.FC = () => (
  <div className="flex h-24 border-b border-b-white/10">
    <div className="my-auto flex w-full flex-row items-center">
      <Link href="/">
        <Image
          src={getArtRefImage(FEATURED_ARTIST)}
          alt="Logo"
          width={44}
          height={44}
          className="aspect-square size-11 rounded-xl object-cover object-top"
        />
      </Link>

      <div className="flex-grow md:hidden" />

      <DesktopNavBar />
    </div>
  </div>
);
