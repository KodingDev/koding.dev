<script lang="ts">
  import GradientBackground from '$components/base/GradientBackground.svelte';
  import Image from '$components/base/Image.svelte';
  import { getLinkProps } from '$lib/util/html';
  import type { Picture } from 'imagetools-core';

  export let href: string;
  export let picture: Picture | undefined;

  export let picMaxWidth = '100%';
</script>

<a {href} {...getLinkProps(href)} class="relative flex overflow-clip rounded-xl border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl">
  <div class="absolute inset-0">
    <!-- Picture -->
    {#if picture}
      <Image {picture} class="h-full w-full object-cover object-top" alt="Cover" maxWidth={picMaxWidth} />
      <div class="absolute left-0 top-0 z-[1] h-full w-full bg-gradient-to-b from-transparent to-black/80" />
    {:else}
      <!-- Cool ass gradient instead -->
      <GradientBackground class="opacity-50" />
    {/if}
  </div>

  <!-- Headings -->
  <div class="relative z-[2]">
    <slot />
  </div>
</a>
