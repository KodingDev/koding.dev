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

  // noinspection ReservedWordAsName
  export { className as class };
</script>

<!-- We only care about the first source -->
<img class={className} decoding="async" src={picture.fallback.src} srcset={srcSet(Object.values(picture.sources)[0])} {alt} {sizes} {width} {height} />
