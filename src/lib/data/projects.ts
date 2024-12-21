/**
 * List of supported languages
 */
const SUPPORTED_LANGUAGES = ['typescript', 'kotlin', 'svelte'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Data for each language, including display name and icon
 */
export interface LanguageData {
  name: string;

  /**
   * The tailwindcss icon class
   */
  icon: string;
}

export const LANGUAGES: Record<Language, LanguageData> = {
  typescript: {
    name: 'TypeScript',
    icon: 'icon-[vscode-icons--file-type-typescript-official]',
  },
  kotlin: {
    name: 'Kotlin',
    icon: 'icon-[vscode-icons--file-type-kotlin]',
  },
  svelte: {
    name: 'Svelte',
    icon: 'icon-[vscode-icons--file-type-svelte]',
  },
};

/**
 * Definition of a project
 */
export interface Project {
  language: Language;
  name: string;
  description: string;
  url: string;
  year?: number;
}

/**
 * List of projects
 */
export const PROJECTS: Project[] = [
  {
    language: 'typescript',
    name: 'PSYLOCKE.GG',
    description: 'A helper website for Marvel Rivals, providing character information, achievements, and more.',
    url: 'https://psylocke.gg',
  },
  {
    language: 'svelte',
    name: 'koding.dev',
    description: 'This website, built with SvelteKit and TailwindCSS.',
    url: 'https://github.com/KodingDev/koding.dev',
  },
  {
    language: 'typescript',
    name: 'TikTxk',
    description: 'A Cloudflare Worker to provide better TikTok embeds for Discord, using their internal API.',
    url: 'https://github.com/Britmoji/tiktxk',
    year: 2022,
  },
  {
    language: 'typescript',
    name: 'Clockwatch',
    description: 'A Discord bot for summarizing work hours, built with slshx & the Clockify API.',
    url: 'https://github.com/KodingDev/Clockwatch',
    year: 2022,
  },
  {
    language: 'kotlin',
    name: 'Chimp Launcher',
    description: 'A bare-bones Minecraft launcher, with a powerful API for launching and managing Minecraft instances.',
    url: 'https://github.com/KodingDev/chimp-launcher',
    year: 2022,
  },
  {
    language: 'kotlin',
    name: 'CraftLib',
    description: 'A streamlined Minecraft library for Kotlin, with support for Minecraft 1.7.0 - 1.8.9, implementing the protocol, NBT, chat & schematics.',
    url: 'https://github.com/Zerite/CraftLib',
    year: 2020,
  },
];
