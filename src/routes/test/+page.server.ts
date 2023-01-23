/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllBlocks } from '$lib/notion';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const blocks = await getAllBlocks('5c4251ad73cc4e2bb816d9e1dbbc5cdd');
	return { blocks };
};
