import { defineMDSveXConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineMDSveXConfig({
  extensions: ['.md', '.svx'],
  smartypants: {
    dashes: 'oldschool'
  },

  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ]
});

export default config;
