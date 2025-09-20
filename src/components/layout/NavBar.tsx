import Image from "next/image";
import type React from "react";
import { FEATURED_ARTIST, getArtRefImage } from "@/lib/content";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar: React.FC = async () => {
  const avatar = await getArtRefImage(FEATURED_ARTIST);

  return (
    <div className="flex h-24 border-b border-b-white/10">
      <div className="my-auto flex w-full flex-row items-center">
        <Image
          src={avatar}
          alt="Logo"
          width={44}
          height={44}
          className="aspect-square h-11 w-11 rounded-xl object-cover object-top"
        />
        <div className="flex-grow md:hidden" />

        <DesktopNavBar />
      </div>
    </div>
  );
};
