import type { SvelteComponent } from 'svelte';
import type { BlockType, NotionColor } from './index';

import NotionCallout from './blocks/NotionCallout.svelte';
import NotionHeading from './blocks/NotionHeading.svelte';
import NotionParagraph from './blocks/NotionParagraph.svelte';
import NotionBulletedListItem from './blocks/NotionBulletedListItem.svelte';
import NotionImage from './blocks/NotionImage.svelte';
import NotionCode from './blocks/NotionCode.svelte';

/**
 * Associates block types with their appropriate components
 * for rendering.
 *
 * These are functions to allow for lazy loading of components.
 *
 * @see https://developers.notion.com/reference/block#block-type-object
 */
export const NOTION_BLOCK_RENDERERS: Partial<Record<BlockType, () => typeof SvelteComponent>> = {
  heading_1: () => NotionHeading,
  heading_2: () => NotionHeading,
  heading_3: () => NotionHeading,

  callout: () => NotionCallout,

  paragraph: () => NotionParagraph,

  bulleted_list_item: () => NotionBulletedListItem,

  image: () => NotionImage,

  code: () => NotionCode
};

/**
 * Color mapping for Notion's color palette.
 */
export const NOTION_COLOR_MAP: Record<NotionColor | 'default', string> = {
  default: 'text-gray-900 dark:text-gray-100',

  // Foreground colors
  blue: 'text-blue-500 dark:text-blue-400',
  gray: 'text-gray-500 dark:text-gray-400',
  brown: 'text-amber-600',
  orange: 'text-orange-500 dark:text-orange-400',
  yellow: 'text-yellow-500 dark:text-yellow-400',
  green: 'text-green-500 dark:text-green-400',
  purple: 'text-purple-500 dark:text-purple-400',
  pink: 'text-pink-500 dark:text-pink-400',
  red: 'text-red-500 dark:text-red-400',

  // Background colors
  blue_background: 'bg-blue-500 dark:bg-blue-400',
  gray_background: 'bg-gray-500 dark:bg-gray-400',
  brown_background: 'bg-amber-600',
  orange_background: 'bg-orange-500 dark:bg-orange-400',
  yellow_background: 'bg-yellow-500 dark:bg-yellow-400',
  green_background: 'bg-green-500 dark:bg-green-400',
  purple_background: 'bg-purple-500 dark:bg-purple-400',
  pink_background: 'bg-pink-500 dark:bg-pink-400',
  red_background: 'bg-red-500 dark:bg-red-400'
};
