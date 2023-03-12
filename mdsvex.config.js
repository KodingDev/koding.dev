import { defineMDSveXConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

const config = defineMDSveXConfig({
  extensions: ['.md', '.svx'],
  smartypants: {
    dashes: 'oldschool',
  },

  rehypePlugins: [rehypeSlug],
});

export default config;
