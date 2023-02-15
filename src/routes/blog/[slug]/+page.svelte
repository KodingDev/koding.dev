<script lang="ts">
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title={data.metadata.title} slug={data.slug} description={data.metadata.description} />

<div class="layout-container pt-32 pb-36">
  <!-- TODO: Hover effect -->
  <a href="/blog" class="flex flex-row items-center gap-2 opacity-50"> <span class="icon-[material-symbols--arrow-back] h-6 w-6" />Back to all posts</a>

  {#if data.metadata.cover}
    <img src={data.metadata.cover} class="mt-8 h-[420px] w-full rounded-xl border border-white/25 object-cover" alt="Cover" />
  {/if}

  <div class="flex grow flex-col gap-3 border-b border-b-white/[15%] py-9">
    <!-- Date -->
    <span
      >{new Date(data.metadata.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}</span
    >

    <!-- Title -->
    <h2 class="text-2xl font-bold">{data.metadata.title}</h2>

    <!-- Excerpt -->
    <span class="opacity-50">{data.metadata.description ?? 'Take a read :)'}</span>
  </div>

  <div class="prose w-full max-w-full py-6 dark:prose-invert">
    <!-- TODO: Style prose -->
    <svelte:component this={data.component} />
  </div>
</div>
