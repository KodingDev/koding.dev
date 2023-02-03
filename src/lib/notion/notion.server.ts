import { NOTION_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { NotionBlock, NotionPage as NotionPage } from './notion.types';
import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

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

/**
 * Query a database for pages.
 *
 * @param databaseId The database ID.
 * @param filter The filter.
 */
export const queryDatabase = async (
	databaseId: string,
	filter?: QueryDatabaseParameters['filter']
): Promise<NotionPage[]> => {
	const { results } = await notionClient.databases.query({
		database_id: databaseId,
		filter
	});

	return results as unknown as NotionPage[];
};
