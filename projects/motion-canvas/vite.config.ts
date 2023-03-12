import motionCanvas from '@motion-canvas/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: ['./src/project.ts'],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: '../../static/motion-canvas',
        entryFileNames: '[name].js',
      },
    },
    emptyOutDir: false,
  },
});
