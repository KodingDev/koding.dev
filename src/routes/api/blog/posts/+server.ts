import type { PostFile } from '$lib/types/blog';
import { getSlug } from '$lib/util/blog';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  // List all posts
  const posts = import.meta.glob<PostFile>('/src/lib/data/blog/*.md');

  // Map the posts
  const postList = Object.entries(posts).map(async ([path, resolver]) => {
    // Get the slug
    const slug = getSlug(path);

    // Load the post
    const post = await resolver();

    // Return the post
    return {
      slug,
      metadata: post.metadata
    };
  });

  // Return the list of posts
  return json(await Promise.all(postList));
};
