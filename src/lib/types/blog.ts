import type { SvelteComponent } from 'svelte';

/**
 * A post which has been imported from a file using import.meta.glob.
 */
export interface PostFile {
	default: SvelteComponent;
	metadata: {
		title: string;
		description?: string;
		date: string;
		tags?: string[];
	};
}

/**
 * GET /api/blog/posts
 */
export type BlogPostsGet = {
	slug: string;
	metadata: PostFile['metadata'];
}[];
