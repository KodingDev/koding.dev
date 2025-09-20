import Image from "next/image";
import type React from "react";
import { getLinkProps } from "@/lib/util/html";

type LinkProps = {
  href?: string;
  picture?: {
    src: string;
    alt?: string;
  };
  style?: "default" | "back";
  picAlt?: string;
  picClass?: string;
  className?: string;
} & React.PropsWithChildren;

export const Link: React.FC<LinkProps> = ({
  href,
  picture,
  style = "default",
  picAlt = "Logo",
  picClass = "h-11 w-11 rounded-xl",
  className = "",
  children,
}) => {
  const linkProps = href ? getLinkProps(href) : {};

  return (
    <a href={href} {...linkProps} className={`group flex flex-row items-center gap-2 ${className}`}>
      {style === "back" && <span className="icon-[material-symbols--arrow-back] h-5 w-5 group-hover:animate-pulse" />}

      {picture && <Image src={picture.src} alt={picture.alt || picAlt} width={44} height={44} className={picClass} />}

      <h1 className={style === "back" ? "group-hover:animate-pulse" : ""}>{children}</h1>

      {href && style === "default" && <span className="icon-[material-symbols--arrow-outward] h-5 w-5" />}
    </a>
  );
};
