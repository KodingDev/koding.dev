<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import Link from '$components/interactive/Link.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import { formatDate } from '$lib/util/html';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title={data.metadata.title} description={data.metadata.description} />

<div class="layout-container pb-36 pt-32">
  <Link href="/blog" style="back" class="opacity-50">Back to all posts</Link>

  {#if data.metadata.cover}
    <Image maxWidth="20vw" picture={data.metadata.cover} class="mt-8 aspect-video max-h-96 w-full rounded-xl border border-white/25 object-cover" alt="Cover" />
  {/if}

  <div class="flex grow flex-col gap-3 border-b border-b-white/[15%] py-9">
    <!-- Date -->
    <span>{formatDate(new Date(data.metadata.date))}</span>

    <!-- Title -->
    <h2 class="text-2xl font-bold">{data.metadata.title}</h2>

    <!-- Excerpt -->
    <span class="opacity-50">{data.metadata.description ?? 'Take a read :)'}</span>
  </div>

  <div class="prose w-full max-w-full py-6 dark:prose-invert">
    <svelte:component this={data.component} />
  </div>
</div>
