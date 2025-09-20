import type React from "react";

type IconLinkProps = {
  href: string;
  icon?: string;
} & React.PropsWithChildren;

export const IconLink: React.FC<IconLinkProps> = ({ href, icon = "icon-[material-symbols--web]", children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-row items-center gap-2 rounded-full border-2 border-white/10 px-5 py-3 transition-all hover:border-white/25"
  >
    <span className={`${icon} h-4 w-4 fill-white`} />
    <span>{children}</span>
    <span className="icon-[material-symbols--arrow-outward] group-hover:-translate-y-1 h-4 w-4 transition-all" />
  </a>
);
