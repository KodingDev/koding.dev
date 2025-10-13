import type { Route } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";

type SiteLinkProps = {
  href?: Route;
  picture?: {
    src: StaticImageData;
    alt?: string;
  };
  type?: "default" | "back";
  picClass?: string;
} & React.PropsWithChildren &
  Omit<React.ComponentProps<typeof Link>, "href">;

export const SiteLink: React.FC<SiteLinkProps> = ({
  href,
  picture,
  type = "default",
  picClass = "size-11 rounded-xl",
  className,
  children,
  ...props
}) => {
  const Comp = href ? Link : "span";
  return (
    <Comp {...props} href={href ?? "#"} className={cn(`group flex flex-row items-center gap-2`, className)}>
      {type === "back" && <MdArrowBack className="size-5 group-hover:animate-pulse" />}
      {picture && <Image src={picture.src} alt={picture.alt ?? "Logo"} width={44} height={44} className={picClass} />}
      <h1 className={type === "back" ? "group-hover:animate-pulse" : ""}>{children}</h1>
      {type === "default" && <MdArrowOutward className="size-5" />}
    </Comp>
  );
};
