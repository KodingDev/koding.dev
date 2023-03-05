<script lang="ts">
  import type { Picture } from 'imagetools-core';
  import Image from '$components/base/Image.svelte';

  export let href: string | undefined;
  export let picture: Picture | undefined = undefined;
</script>

<a {href} class="flex flex-row items-center" target="_blank" rel="noopener noreferrer">
  {#if picture}
    <Image width="30px" height="30px" class="h-11 w-11 rounded-xl" {picture} alt="Company Logo" />
  {/if}

  <h1 class="pl-4 text-2xl font-bold"><slot /></h1>
  {#if href}
    <span class="icon-[material-symbols--arrow-outward] ml-4 h-6 w-6" />
  {/if}
</a>
