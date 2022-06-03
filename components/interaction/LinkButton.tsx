import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface LinkButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

const LinkButton = ({ children, href, ...props }: LinkButtonProps) => {
  const component = (
    <button {...props} className={clsx(props.className, "font-light text-white hover:text-purple-300 hover:cursor-pointer transition-all")}>
      {children}
    </button>
  );

  if (href && !href.startsWith("/")) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {component}
      </a>
    );
  } else if (href) {
    return <Link href={href}>{component}</Link>;
  } else {
    return component;
  }
};

export default LinkButton;
