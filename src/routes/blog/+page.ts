import type { Post } from '$lib/data/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const posts: Post[] = await fetch('/api/blog/posts').then((r) => r.json());
  return { posts };
};
