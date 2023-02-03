/*
 * The Notion API wrapper has awful typings, so we have to do some
 * manual work to make it usable.
 */

/**
 * Supported Notion block types.
 * @see https://developers.notion.com/reference/block#block-type-object
 */
export const NOTION_BLOCK_TYPES = [
	'paragraph',
	'heading_1',
	'heading_2',
	'heading_3',
	'bulleted_list_item',
	'numbered_list_item',
	'to_do',
	'toggle',
	'child_page',
	'child_database',
	'embed',
	'image',
	'video',
	'file',
	'pdf',
	'bookmark',
	'callout',
	'quote',
	'equation',
	'divider',
	'table_of_contents',
	'column',
	'column_list',
	'link_preview',
	'synced_block',
	'template',
	'link_to_page',
	'table',
	'table_row',
	'code',
	'unsupported'
] as const;

export type BlockType = typeof NOTION_BLOCK_TYPES[number];

/**
 * Notion colors (excl. default)
 * @see https://developers.notion.com/reference/rich-text
 */
export const NOTION_COLORS = [
	'blue',
	'brown',
	'gray',
	'green',
	'orange',
	'pink',
	'purple',
	'red',
	'yellow'
] as const;

export type NotionColorForeground = typeof NOTION_COLORS[number];
export type NotionColorBackground = `${NotionColorForeground}_background`;
export type NotionColor = NotionColorForeground | NotionColorBackground;

/**
 * Rich text formatting
 * @see https://developers.notion.com/reference/rich-text
 */
export const RICH_TEXT_TYPES = ['text', 'mention', 'equation'] as const;
export type RichTextType = typeof RICH_TEXT_TYPES[number];

// Rich text type - text
export type RichTextDataText = {
	content: string;
	plain_text: string;
	link?: {
		url: string;
	};
};

// Annotations
export type RichTextAnnotations = {
	bold?: boolean;
	italic?: boolean;
	strikethrough?: boolean;
	underline?: boolean;
	code?: boolean;
	color?: NotionColor;
};

export type NotionRichTextData = {
	type: RichTextType;
	annotations: RichTextAnnotations;
	plain_text: string;
	href?: string;
} & {
	type: 'text';
	text: RichTextDataText;
};

/**
 * Block typings
 * @see https://developers.notion.com/reference/block
 */
export type NotionBlock = {
	id: string;
	type: BlockType;

	has_children: boolean;
	children?: NotionBlock[];
};

/**
 * Notion Emoji
 * @see https://developers.notion.com/reference/emoji-object
 */
export type NotionEmoji = {
	type: 'emoji';
	emoji: string;
};

export type NotionFile = {
	type: 'file';
	file: {
		url: string;
		expiry_time: string;
	};
};

export type NotionExternal = {
	type: 'external';
	external: {
		url: string;
	};
};

/**
 * Notion Database
 * @see https://developers.notion.com/reference/database
 * @see https://developers.notion.com/reference/property-object
 */
export type NotionPage = {
	object: 'database';
	id: string;

	created_time: string; // ISO 8601
	last_edited_time: string; // ISO 8601

	cover?: NotionFile | NotionExternal;
	icon?: NotionEmoji | NotionFile | NotionExternal;

	properties: {
		[key: string]: NotionProperty;
	};
};

export type NotionProperty = GenericProperty &
	TitleProperty &
	RichTextProperty &
	CheckboxProperty &
	UrlProperty &
	DateProperty;

export type GenericProperty = {
	id: string;
	type:
		| 'title'
		| 'rich_text'
		| 'number'
		| 'select'
		| 'multi_select'
		| 'date'
		| 'people'
		| 'file'
		| 'checkbox'
		| 'url'
		| 'email'
		| 'phone_number'
		| 'formula'
		| 'relation'
		| 'rollup'
		| 'created_time'
		| 'created_by'
		| 'last_edited_time'
		| 'last_edited_by';
};

export type TitleProperty = {
	type: 'title';
	title: NotionRichTextData[];
};

export type RichTextProperty = {
	type: 'rich_text';
	rich_text: NotionRichTextData[];
};

export type CheckboxProperty = {
	type: 'checkbox';
	checkbox: boolean;
};

export type UrlProperty = {
	type: 'url';
	url: string;
};

export type DateProperty = {
	type: 'date';
	date: {
		start: string; // ISO 8601
		end?: string; // ISO 8601
	};
};
