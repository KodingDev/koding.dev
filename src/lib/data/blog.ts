import type { SvelteComponent } from 'svelte';

// TODO: Add lodash

/**
 * Path to the posts folder
 */
export const POST_PATH = '/src/lib/data/blog';

/**
 * Get a relative path based on the post path
 * @returns The relative path
 */
export const getRelativePath = (path: string): string => {
  const split = path.substring(POST_PATH.length + 1).split('/');
  split.pop();
  return split.join('/');
};

// Expressions to match the files and extract the slug
const POST_REGEX = new RegExp(`${POST_PATH}/(?<slug>[^/]+)/post.svx`);
const POST_METADATA_REGEX = new RegExp(`${POST_PATH}/(?<slug>[^/]+)/meta.ts`);

type GlobResult = [string, () => Promise<unknown>];

/**
 * Glob the files and return the sections
 */
const importPosts = async (): Promise<{ markdown: GlobResult[]; metadata: GlobResult[] }> => {
  // Use import.meta.glob to get a list of all files
  // The glob pattern doesn't support template literals, so we have to use a string
  // at compile time. This is why we need to filter the files later.
  const imported = import.meta.glob(`/src/lib/data/blog/*/{post.svx,meta.ts}`);

  // Filter the files
  const markdown = Object.entries(imported).filter(([path]) => POST_REGEX.test(path));
  const metadata = Object.entries(imported).filter(([path]) => POST_METADATA_REGEX.test(path));

  // Return the sections
  return { markdown, metadata };
};

/**
 * Resolve a list of posts & metadata
 */
export const getPosts = async (): Promise<Post[]> => {
  const { markdown, metadata } = await importPosts();

  // Map the posts
  return Promise.all(
    markdown.map(async ([path, resolver]): Promise<Post> => {
      // Get the post slug
      const slug = getRelativePath(path);

      // Load the post
      const post = (await resolver()) as PostFile;

      // Load the post metadata ex
      const metaResult = metadata.find(([path]) => POST_METADATA_REGEX.exec(path)?.groups?.slug === slug);
      const meta: Partial<PostMetadata> = metaResult ? ((await metaResult[1]()) as { default: object }).default : { default: {} };

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
  cover?: string;
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
