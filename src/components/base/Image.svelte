<script lang="ts">
  import type { Picture, Source } from 'imagetools-core';

  export let picture: Picture;

  /**
   * Generate a srcset string from a list of sources
   * @param sources
   */
  const srcSet = (sources: Source[]) => sources.map((source) => `${source.src} ${source.w}w`).join(', ');

  export let alt: string;
  export let width: number;
  export let height: number;
  export let maxWidth = '1280px';
  export let sizes = `(max-width: ${maxWidth}) 100vw, ${maxWidth}`;
  let className: string;

  // Custom non-image stuff
  export let caption: string;

  // noinspection ReservedWordAsName
  export { className as class };
</script>

<div class="flex flex-col items-center">
  <!-- We only care about the first source -->
  <img class={className} decoding="async" src={picture.fallback.src} srcset={srcSet(Object.values(picture.sources)[0])} {alt} {sizes} {width} {height} />

  {#if caption}
    <span class="mt-4 px-4 text-center text-sm italic opacity-50">{caption}</span>
  {/if}
</div>
