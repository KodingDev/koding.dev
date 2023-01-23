import { NOTION_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { NotionBlock } from './notion.types';

/**
 * Notion client
 */
export const notionClient = new Client({
	auth: NOTION_KEY
});

/**
 * Fetch the children for a block.
 *
 * @param blockId The block ID.
 * @return The children.
 */
export const getBlocks = async (blockId: string): Promise<NotionBlock[]> => {
	const { results } = await notionClient.blocks.children.list({
		block_id: blockId,
		page_size: 50
	});
	return results as NotionBlock[];
};

/**
 * Recursively fetch all children for a block.
 *
 * @param blockId The block ID.
 * @return The children.
 */
export const getAllBlocks = async (blockId: string) => {
	const blocks = await getBlocks(blockId);

	const children: NotionBlock[] = await Promise.all(
		blocks.map(async (block) => {
			if (block.has_children) {
				return {
					...block,
					children: await getAllBlocks(block.id)
				};
			}

			return block;
		})
	);

	return children.flat();
};
