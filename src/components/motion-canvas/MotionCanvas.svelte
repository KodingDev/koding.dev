<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  export let name: string;
  export let autoPlay = true;

  let className = '';
  // noinspection ReservedWordAsName
  export { className as class };

  // Import on browser only
  onMount(async () => {
    if (browser) {
      await import('./MotionCanvas');
    }
  });

  /**
   * BRIEF TLDR
   *
   * We need to copy the MotionCanvas.ts, scss and HTML to this project
   * instead of using their "@motion-canvas/player" package, since it
   * incorrectly bundles "@motion-canvas/core", and marks it as external.
   *
   * This breaks the build, since we can't package "@motion-canvas/core"
   * with our app.
   */
</script>

<div class="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-primary-900 {className}">
  <motion-canvas-player class="absolute aspect-video min-w-[150vw]" src="/motion-canvas/{name}.js" auto={autoPlay} />
</div>
