<script lang="ts">
  import type { Picture } from 'imagetools-core';
  import Image from '$components/base/Image.svelte';
  import { getLinkProps } from '$lib/util/html';

  export let href: string | undefined;
  export let picture: Picture | undefined = undefined;
  export let style: 'default' | 'back' = 'default';

  export let picAlt = 'Logo';
  export let picClass = 'h-11 w-11 rounded-xl';

  let className = '';
  // noinspection ReservedWordAsName
  export { className as class };
</script>

<a {href} {...getLinkProps(href)} class="group flex flex-row items-center gap-2 {className}">
  {#if style === 'back'}
    <span class="icon-[material-symbols--arrow-back] h-5 w-5 group-hover:animate-pulse" />
  {/if}

  {#if picture}
    <Image maxWidth="5vw" class={picClass} {picture} alt={picAlt} />
  {/if}

  <h1 class:group-hover:animate-pulse={style === 'back'}><slot /></h1>
  {#if href && style === 'default'}
    <span class="icon-[material-symbols--arrow-outward] h-5 w-5" />
  {/if}
</a>
