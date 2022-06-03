import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface IconButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

const IconButton = ({ children, href, ...props }: IconButtonProps) => {
  props.className = clsx("w-6 h-6", props.className, "fill-white hover:fill-purple-300 hover:cursor-pointer transition-all");
  const component = <button {...props}>{children}</button>;

  if (href && !href.startsWith("/")) {
    return (
      <a className={props.className} href={href} target="_blank" rel="noreferrer">
        {component}
      </a>
    );
  } else if (href) {
    return <Link href={href}>{component}</Link>;
  } else {
    return component;
  }
};

export default IconButton;
