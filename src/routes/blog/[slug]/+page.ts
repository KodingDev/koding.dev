import type { PostFile } from '$lib/types/blog';
import { getSlug } from '$lib/util/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// Find a list of all blog posts
	const posts = import.meta.glob<PostFile>('/src/lib/data/blog/*.md');

	// Find the post that matches the slug
	let post: PostFile | undefined;
	for (const [path, resolver] of Object.entries(posts)) {
		// Get the slug from the file name
		const slug = getSlug(path);

		// If the slug matches the requested slug, use this post
		if (slug === params.slug) {
			post = await resolver();
			break;
		}
	}

	// If no post was found, return an error
	if (!post) throw error(404, 'Post not found');

	// Load the post
	return { post: post.default, metadata: post.metadata };
};
