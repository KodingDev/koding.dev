import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const config: UserConfig = {
  plugins: [
    sveltekit(),
    imagetools({
      removeMetadata: true,
      defaultDirectives: (id) => {
        // TODO: WEBP
        if (id.searchParams.has('avatar')) {
          return new URLSearchParams('w=50;100;200;300&picture&webp');
        } else if (id.searchParams.has('image')) {
          return new URLSearchParams('w=64;128;256;512;1280;1920&picture&webp');
        }
        return new URLSearchParams();
      },
    }),
  ],
};

export default config;
