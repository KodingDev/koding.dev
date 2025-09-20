export type NavLink = {
  name: string
  href: string
  match: RegExp
}

export type SocialLink = {
  href: string
  icon: string
  color: string
}

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Home',
    href: '/',
    match: /^\/$/,
  },
  {
    name: 'Clients',
    href: '/clients',
    match: /^\/clients/,
  },
  {
    name: 'Art',
    href: '/art',
    match: /^\/art/,
  },
]

export const NAV_SOCIALS: SocialLink[] = [
  {
    href: 'https://twitter.com/KodingDev_',
    icon: 'icon-[mdi--twitter]',
    color: 'bg-[#1E96E8]/5',
  },
  {
    href: 'mailto:hello@koding.dev',
    icon: 'icon-[material-symbols--mail-rounded]',
    color: 'bg-[#8439FF]/5',
  },
  {
    href: 'https://github.com/KodingDev',
    icon: 'icon-[mdi--github]',
    color: 'bg-[#000000]/5',
  },
]