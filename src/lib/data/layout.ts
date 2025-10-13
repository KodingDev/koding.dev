import type { Route } from "next";
import type React from "react";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

export type NavLink = {
  name: string;
  href: Route;
  match: RegExp;
};

export type SocialLink = {
  href: string;
  icon: React.FC<React.ComponentProps<"svg">>;
  className: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "/",
    match: /^\/$/,
  },
  {
    name: "Clients",
    href: "/clients",
    match: /^\/clients/,
  },
  {
    name: "Art",
    href: "/art",
    match: /^\/art/,
  },
];

export const NAV_SOCIALS: SocialLink[] = [
  {
    href: "https://twitter.com/KodingDev_",
    icon: FaTwitter,
    className: "bg-[#1E96E8]/5",
  },
  {
    href: "mailto:hello@koding.dev",
    icon: FaEnvelope,
    className: "bg-[#8439FF]/5",
  },
  {
    href: "https://github.com/KodingDev",
    icon: FaGithub,
    className: "bg-[#000000]/5",
  },
];
