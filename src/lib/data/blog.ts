import type { SvelteComponent } from 'svelte';
import { importData } from '$lib/util/data';
import _ from 'lodash';
import type { Picture } from 'imagetools-core';

// Expressions to match the files and extract the slug
const POST_REGEX = new RegExp(`./blog/(?<slug>[^/]+)/post.svx`);
const POST_METADATA_REGEX = new RegExp(`./blog/(?<slug>[^/]+)/meta.ts`);

/**
 * Resolve a list of posts & metadata
 */
export const getPosts = async (): Promise<Post[]> => {
  // Get the markdown files
  const markdown = await importData<PostFile>(() => import.meta.glob('./blog/*/post.svx', { eager: true }), {
    regex: POST_REGEX,
    group: 'slug',
  });

  // Get the metadata files
  const metadata = await importData<{
    default: Partial<PostMetadata>;
  }>(() => import.meta.glob('./blog/*/meta.ts', { eager: true }), {
    regex: POST_METADATA_REGEX,
    group: 'slug',
  });

  // Map the posts
  return Promise.all(
    _.chain(markdown)
      .values()
      .map(async ([slug, post]): Promise<Post> => {
        // Find the metadata
        const meta: Partial<PostMetadata> = metadata[slug]?.[1]?.default ?? {};

        // Return the post
        return {
          slug,
          component: post.default,
          metadata: {
            ...post.metadata,
            ...meta,
          },
        };
      })
      .value()
  );
};

/**
 * Get a post by its slug
 *
 * @param slug The post's slug
 * @returns The post, or undefined if it doesn't exist
 */
export const getPost = async (slug: string): Promise<Post | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};

/**
 * Post metadata
 */
export interface PostMetadata {
  /* Properties designed for the frontmatter */
  title: string;
  description?: string;
  date: string;
  tags?: string[];

  /* Properties designed for the "meta.ts" */
  cover?: Picture;
}

/**
 * A post file, which is a svelte component with metadata.
 * This is the unwrapped type before it is resolved.
 *
 * @see Post
 */
export interface PostFile {
  default: SvelteComponent;
  metadata: PostMetadata;
}

/**
 * A post which has been imported from a file and resolved.
 */
export interface Post {
  /**
   * The post's slug
   */
  slug: string;

  /**
   * The svelte component to render the post
   */
  component: SvelteComponent;

  /**
   * Post metadata defined in the frontmatter
   */
  metadata: PostMetadata;
}
