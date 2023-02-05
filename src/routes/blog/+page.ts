import type { BlogPostsGet } from '$lib/types/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const posts: BlogPostsGet = await fetch('/api/blog/posts').then((r) => r.json());
  return { posts };
};
